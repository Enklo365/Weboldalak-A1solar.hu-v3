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
/* Premium "aurora" flow — soft brand-red light blobs drifting slowly over the
   #db0330 base (Stripe/Linear-style living gradient). No grid, no hard edges;
   a subtle grain kills banding. Calm, on-brand, doesn't break the clean design. */
const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void main(){
  vec2 uv = gl_FragCoord.xy / u_res.xy;
  float aspect = u_res.x / max(u_res.y, 1.0);
  vec2 p = vec2(uv.x * aspect, uv.y);
  float t = u_time * 0.12;

  // Slowly drifting soft light centres.
  vec2 c1 = vec2(0.24 * aspect + 0.16 * sin(t * 1.0),       0.30 + 0.10 * cos(t * 0.8));
  vec2 c2 = vec2(0.82 * aspect + 0.14 * cos(t * 0.7 + 1.0), 0.72 + 0.12 * sin(t * 1.1));
  vec2 c3 = vec2(0.55 * aspect + 0.20 * sin(t * 0.5 + 2.5), 0.46 + 0.14 * cos(t * 0.9 + 0.5));

  float g1 = smoothstep(1.05, 0.0, length(p - c1));
  float g2 = smoothstep(1.10, 0.0, length(p - c2));
  float g3 = smoothstep(0.95, 0.0, length(p - c3));

  // Brand-red palette: base #db0330 shading to a touch darker down the panel.
  vec3 base = mix(vec3(0.859, 0.012, 0.188), vec3(0.70, 0.02, 0.14), uv.y);
  vec3 glow = vec3(0.96, 0.20, 0.34);   // warm lighter red
  vec3 deep = vec3(0.55, 0.02, 0.11);   // deep red

  vec3 col = base;
  col = mix(col, glow, g1 * 0.42);
  col = mix(col, deep, g2 * 0.40);
  col = mix(col, glow, g3 * 0.28);

  // Fine grain to prevent gradient banding.
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.02;

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
