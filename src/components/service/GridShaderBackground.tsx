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
/* Brand-red replica of the shaders.com "Collapsing Grid 4" preset:
   a Pixelated (scale 18, gap 0.03) Swirl gradient whose per-cell roundness is
   driven by a diagonal SineWave (angle 84°) — cells ripple square↔circle, the
   "collapse". Colours mapped to the A1 brand (deep red → pink swirl on a deep
   red base) instead of the preset's tan/purple/yellow. */
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
  float t = u_time;

  // --- Pixelate: a scale-18 grid of cells (aspect-corrected to stay square) ---
  float scale = 18.0;
  vec2 auv = vec2(uv.x * aspect, uv.y);
  vec2 cell = fract(auv * scale) - 0.5;

  // --- SineWave roundness field (angle 84°, freq 0.6, animated speed 2) ---
  float ang = radians(84.0);
  vec2 dir = vec2(cos(ang), sin(ang));
  float coord = dot(uv - vec2(0.84, 0.52), dir);
  float wave = 0.5 + 0.5 * sin(coord * 20.0 + t * 2.0);
  float roundness = mix(0.13, 1.0, wave);              // 0.13 (square) → 1 (circle)

  // --- Cell shape: rounded rect with a 0.03 gap ---
  float halfSize = 0.5 - 0.06;
  float d = roundRect(cell, vec2(halfSize), roundness * halfSize);
  float shapeMask = smoothstep(0.035, -0.035, d);

  // --- Discreet brand fill: the card stays solid #db0330; the collapsing grid
  //     plays only a touch darker so the motion is barely-there, not loud. ---
  vec3 base = vec3(0.859, 0.012, 0.188);   // #db0330 — the card's base colour
  vec3 dark = vec3(0.64, 0.02, 0.135);     // slightly darker red for the moving cells
  float depth = 0.5 + 0.5 * sin((uv.x * 1.2 + uv.y * 0.8) * 3.0 + t * 0.35);
  vec3 cellCol = mix(base, dark, 0.55 + 0.45 * depth);
  vec3 col = mix(base, cellCol, shapeMask * 0.42);   // 0.42 → subtle, épphogy látszik
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
