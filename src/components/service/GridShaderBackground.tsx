"use client";

import { useEffect, useRef } from "react";

/**
 * Animated "collapsing grid" background — a WebGL fill of rounded cells whose
 * size ripples across the surface, in the A1 brand palette. Inspired by the
 * shaders.com "Pattern grid" fill (via the shaders MCP), authored as a compact
 * standalone shader so it needs no external runtime. Honours reduced-motion and
 * pauses when the tab/section is hidden. Falls back to the parent's CSS red
 * background if WebGL is unavailable.
 */
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;

float roundRect(vec2 p, vec2 b, float r){
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float aspect = u_res.x / max(u_res.y, 1.0);

  float cols = 18.0;
  float rows = max(4.0, floor(cols / aspect));
  vec2 grid = vec2(cols, rows);
  vec2 id = floor(uv * grid);
  vec2 cell = fract(uv * grid) - 0.5;

  float t = u_time * 0.5;
  // Rippling field that drives each cell's size — the "collapse".
  float w = 0.5 + 0.5 * sin(id.x * 0.5 + id.y * 0.38 - t)
                  * cos(id.x * 0.22 - id.y * 0.33 + t * 0.7);
  // Diagonal gradient: cells collapse toward the top-left, open at bottom-right.
  float grad = clamp((uv.x * 0.75 + uv.y * 0.35), 0.0, 1.0);
  float amt = clamp(w * 0.55 + grad * 0.6, 0.0, 1.0);
  float size = mix(0.06, 0.46, amt);

  float d = roundRect(cell, vec2(size), size * 0.55);
  float shape = smoothstep(0.03, -0.03, d);

  // Brand palette (vibrant red → pink so the grid reads clearly).
  vec3 deep  = vec3(0.58, 0.05, 0.11);
  vec3 brand = vec3(0.90, 0.06, 0.22); // ~#db0330
  vec3 light = vec3(1.0, 0.74, 0.82);

  vec3 bg = mix(deep, brand, clamp(uv.y * 0.5 + uv.x * 0.35, 0.0, 1.0));
  vec3 cellCol = mix(brand, light, clamp(amt * 0.75 + uv.x * 0.4, 0.0, 1.0));

  vec3 col = mix(bg, cellCol, shape * 0.9);
  gl_FragColor = vec4(col, 1.0);
}
`;

const VERT = `
attribute vec2 a_pos;
void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

export function GridShaderBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: true, alpha: false });
    if (!gl) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram();
    if (!vs || !fs || !prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const resize = () => {
      const w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const draw = (time: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    // Always paint at least one frame; rAF naturally pauses in background tabs.
    if (reduce) {
      draw(6.0);
    } else {
      const render = (ms: number) => {
        draw(ms * 0.001);
        raf = requestAnimationFrame(render);
      };
      draw(0);
      raf = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden style={{ display: "block", width: "100%", height: "100%" }} />;
}
