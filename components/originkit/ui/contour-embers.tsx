"use client"

import { useEffect, useRef } from "react"
import type { CSSProperties } from "react"

interface Props {
    background?: string
    baseColor?: string
    accentColor?: string
    density?: number
    scale?: number
    warp?: number
    angle?: number
    lineWidth?: number
    sparks?: number
    speed?: number
    rings?: number
    reach?: number
    style?: CSSProperties
}

const MAX_DPR = 2

const HOVER_RATE = 6

const EMBER_RATE = 0.42

const DRIFT_RATE = 0.012

const MEAN_GRADIENT = 0.43

type Vec3 = [number, number, number]

function parseColor(input: string | undefined, fallback: Vec3): Vec3 {
    if (!input) return fallback
    const str = String(input).trim()

    if (str.charAt(0) === "#") {
        let hex = str.slice(1)
        if (hex.length === 3 || hex.length === 4) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
        }
        if (hex.length >= 6) {
            const r = parseInt(hex.slice(0, 2), 16)
            const g = parseInt(hex.slice(2, 4), 16)
            const b = parseInt(hex.slice(4, 6), 16)
            if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return [r / 255, g / 255, b / 255]
        }
        return fallback
    }

    const parts = str.match(/[\d.]+/g)
    if (parts && parts.length >= 3) {
        return [
            Math.min(255, parseFloat(parts[0])) / 255,
            Math.min(255, parseFloat(parts[1])) / 255,
            Math.min(255, parseFloat(parts[2])) / 255,
        ]
    }
    return fallback
}

function clamp(v: number, lo: number, hi: number): number {
    return v < lo ? lo : v > hi ? hi : v
}

function num(v: unknown, fallback: number): number {
    return typeof v === "number" && isFinite(v) ? v : fallback
}

const VERT_SRC = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAG_SRC = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform float uTime;
uniform float uDpr;

uniform vec3  uBg;
uniform vec3  uBase;
uniform vec3  uAccent;
uniform vec2  uFocus;
uniform float uLevels;
uniform float uScale;
uniform vec2  uDir;
uniform float uWarpAmt;
uniform float uHalfWidth;
uniform float uSparkLevels;
uniform float uPhase;
uniform float uDrift;
uniform float uAmp;
uniform float uReach;
uniform float uHover;

const float GLOW = 0.25;

float h21(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

vec3 vnoiseD(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    vec2 du = 6.0 * f * (1.0 - f);

    float a = h21(i);
    float b = h21(i + vec2(1.0, 0.0));
    float c = h21(i + vec2(0.0, 1.0));
    float d = h21(i + vec2(1.0, 1.0));

    float k1 = b - a;
    float k2 = c - a;
    float k3 = a - b - c + d;

    float v = a + k1 * u.x + k2 * u.y + k3 * u.x * u.y;
    vec2 g = vec2(k1 + k3 * u.y, k2 + k3 * u.x) * du;
    return vec3(v, g);
}

vec3 fbmD(vec2 p) {
    vec3 sum = vec3(0.0);
    float amp = 0.5;
    float freq = 1.0;
    for (int i = 0; i < 3; i++) {
        vec3 n = vnoiseD(p * freq + float(i) * 17.3);
        sum.x += amp * n.x;
        sum.yz += amp * freq * n.yz;
        freq *= 2.07;
        amp *= 0.5;
    }
    return sum;
}

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;

    vec2 p = vec2(uv.x * aspect, uv.y);
    float px = 1.0 / uRes.y;

    vec3 nf = fbmD(p * uScale + vec2(uDrift, uDrift * 0.6));
    float f = dot(p, uDir) + (nf.x - 0.5) * uWarpAmt;
    vec2 gradF = uDir + nf.yz * uScale * uWarpAmt;

    float R = max(uReach, 1e-4);
    vec2 rv = p - uFocus;
    float d = length(rv);
    vec2 u = d > 1e-6 ? rv / d : vec2(0.0);
    float x = d / R;

    float base = dot(uFocus, uDir);
    float dome = base + uAmp * max(0.0, 1.0 - x);
    float dDome = x < 1.0 ? -uAmp / R : 0.0;

    float st = clamp(x - 1.0, 0.0, 1.0);
    float k = (1.0 - st * st * (3.0 - 2.0 * st)) * uHover;
    float dK = (-(6.0 * st * (1.0 - st)) / R) * uHover;

    float terrain = f;
    f = terrain * (1.0 - k) + dome * k;
    gradF = gradF * (1.0 - k) + (dome - terrain) * dK * u + k * dDome * u;

    float gfLen = max(length(gradF), 1e-5);

    float ff = f * uLevels;

    float sf = (fract(ff) - 0.5) / (uLevels * gfLen);
    float df = abs(sf);

    float line = 1.0 - smoothstep(uHalfWidth - px * 0.7, uHalfWidth + px * 0.7, df);
    float bleed = exp(-df / max(uHalfWidth * 5.0, px));

    float spacing = 1.0 / (uLevels * gfLen);
    line *= smoothstep(0.9, 1.8, spacing / max(2.0 * uHalfWidth, px));

    float tone = clamp(f * 1.6 + 0.5, 0.0, 1.0);
    vec3 ink = mix(uBase, uAccent, tone);

    vec3 col = uBg;
    col += ink * bleed * GLOW;
    col = mix(col, ink, line);

    if (uSparkLevels > 0.0) {
        vec3 ng = fbmD(p * uScale * 0.71 + vec2(43.7, 11.9));
        vec2 gradG = ng.yz * uScale * 0.71;
        float ggLen = max(length(gradG), 1e-5);

        float gg = ng.x * uSparkLevels - uPhase;
        float sg = (fract(gg + 0.5) - 0.5) / (uSparkLevels * ggLen);

        vec2 nfDir = gradF / gfLen;
        vec2 ngDir = gradG / ggLen;
        vec2 off = sf * nfDir + sg * ngDir;

        vec2 id = vec2(floor(ff), floor(gg + 0.5));
        float r1 = h21(id);
        float r2 = h21(id + 7.31);
        float r3 = h21(id + 19.7);

        float cross = abs(nfDir.x * ngDir.y - nfDir.y * ngDir.x);
        float cond = smoothstep(0.26, 0.62, cross);

        float twinkle = 0.55 + 0.45 * sin(uTime * (1.7 + 2.6 * r2) + r3 * 6.283);

        float size = px * (0.75 + 2.2 * r1 * r1 * r1) * (0.7 + 0.6 * twinkle);

        float rr = dot(off, off) / max(size * size, 1e-12);
        float core = exp(-rr);

        float flare = exp(-abs(off.x) / (size * 7.0) - (off.y * off.y) / (size * size * 0.06))
                    + exp(-abs(off.y) / (size * 7.0) - (off.x * off.x) / (size * size * 0.06));

        vec3 emberCol = mix(uAccent, vec3(1.0), r2 * 0.85);
        float flareGate = smoothstep(0.72, 0.95, r1);
        col += emberCol * (core + flare * 0.45 * flareGate) * cond * (0.30 + 0.75 * twinkle);
    }

    col += (h21(gl_FragCoord.xy) - 0.5) * (1.5 / 255.0);

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

function compileShader(
    gl: WebGLRenderingContext,
    type: number,
    src: string
): WebGLShader | null {
    const shader = gl.createShader(type)
    if (!shader) return null
    gl.shaderSource(shader, src)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("ContourEmbers shader:", gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
    }
    return shader
}

export default function ContourEmbers(props: Props) {
    const {
        background = "#140603",
        baseColor = "#CD5A21",
        accentColor = "#FFD86B",
        density = 30,
        scale = 3,
        warp = 45,
        angle = 35,
        lineWidth = 2,
        sparks = 100,
        speed = 100,
        rings = 6,
        reach = 15,
        style,
    } = props

    const rootRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const propsRef = useRef(props)
    propsRef.current = props

    const pointerRef = useRef({ rawX: 0.5, rawY: 0.5, on: 0, onTarget: 0 })

    useEffect(() => {
        const root = rootRef.current
        const canvas = canvasRef.current
        if (!root || !canvas) return

        const gl = canvas.getContext("webgl", {
            antialias: false,
            alpha: false,
            depth: false,
            preserveDrawingBuffer: false,
        })
        if (!gl) {
            console.error("ContourEmbers: WebGL unavailable")
            return
        }

        const vs = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC)
        const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC)
        if (!vs || !fs) return

        const program = gl.createProgram()
        if (!program) return
        gl.attachShader(program, vs)
        gl.attachShader(program, fs)
        gl.linkProgram(program)
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("ContourEmbers link:", gl.getProgramInfoLog(program))
            return
        }
        gl.useProgram(program)

        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
        const posLoc = gl.getAttribLocation(program, "aPos")
        gl.enableVertexAttribArray(posLoc)
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

        const loc = (name: string) => gl.getUniformLocation(program, name)
        const uRes = loc("uRes")
        const uTime = loc("uTime")
        const uDpr = loc("uDpr")
        const uBg = loc("uBg")
        const uBase = loc("uBase")
        const uAccent = loc("uAccent")
        const uFocus = loc("uFocus")
        const uLevels = loc("uLevels")
        const uScale = loc("uScale")
        const uDir = loc("uDir")
        const uWarpAmt = loc("uWarpAmt")
        const uHalfWidth = loc("uHalfWidth")
        const uSparkLevels = loc("uSparkLevels")
        const uPhase = loc("uPhase")
        const uDrift = loc("uDrift")
        const uAmp = loc("uAmp")
        const uReach = loc("uReach")
        const uHover = loc("uHover")

        let cssWidth = root.offsetWidth || 1
        let cssHeight = root.offsetHeight || 1
        const resizeObserver = new ResizeObserver(() => {
            cssWidth = root.offsetWidth || 1
            cssHeight = root.offsetHeight || 1
        })
        resizeObserver.observe(root)

        const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches

        let raf = 0
        let last = performance.now()
        let clock = 0

        const render = (now: number) => {
            raf = requestAnimationFrame(render)

            const dt = Math.min(0.05, (now - last) / 1000)
            last = now

            const p = propsRef.current
            const rate = reduceMotion ? 0 : clamp(num(p.speed, 100), 0, 100) / 50

            clock = (clock + dt * rate) % 3600

            const pointer = pointerRef.current
            pointer.on += (pointer.onTarget - pointer.on) * (1 - Math.exp(-HOVER_RATE * dt))

            const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
            const bufferWidth = Math.max(1, Math.round(cssWidth * dpr))
            const bufferHeight = Math.max(1, Math.round(cssHeight * dpr))
            if (canvas.width !== bufferWidth || canvas.height !== bufferHeight) {
                canvas.width = bufferWidth
                canvas.height = bufferHeight
                gl.viewport(0, 0, bufferWidth, bufferHeight)
            }
            const aspect = bufferWidth / bufferHeight

            const lines = Math.round(clamp(num(p.density, 30), 4, 60))
            const scale = clamp(num(p.scale, 3), 1, 20)

            const warpRatio = (clamp(num(p.warp, 45), 0, 100) / 100) * 1.5
            const warpAmt = warpRatio / (MEAN_GRADIENT * scale)

            const meanGrad = Math.sqrt(1 + warpRatio * warpRatio)
            const levels = lines / meanGrad
            const angle = (clamp(num(p.angle, 35), 0, 360) * Math.PI) / 180
            const rings = Math.round(clamp(num(p.rings, 6), 0, 12))

            gl.uniform2f(uRes, bufferWidth, bufferHeight)
            gl.uniform1f(uTime, clock)
            gl.uniform1f(uDpr, dpr)

            const bg = parseColor(p.background, [0.078, 0.024, 0.012])
            const base = parseColor(p.baseColor, [0.804, 0.353, 0.129])
            const accent = parseColor(p.accentColor, [1.0, 0.847, 0.42])
            gl.uniform3f(uBg, bg[0], bg[1], bg[2])
            gl.uniform3f(uBase, base[0], base[1], base[2])
            gl.uniform3f(uAccent, accent[0], accent[1], accent[2])

            gl.uniform2f(uFocus, pointer.rawX * aspect, 1 - pointer.rawY)
            gl.uniform1f(uLevels, levels)
            gl.uniform1f(uScale, scale)
            gl.uniform2f(uDir, Math.cos(angle), Math.sin(angle))
            gl.uniform1f(uWarpAmt, warpAmt)
            gl.uniform1f(uHalfWidth, (clamp(num(p.lineWidth, 2), 1, 8) * 0.5 * dpr) / bufferHeight)

            const sparks = clamp(num(p.sparks, 100), 0, 100)
            gl.uniform1f(uSparkLevels, sparks === 0 ? 0 : 8 + (sparks / 100) * 52)
            gl.uniform1f(uPhase, clock * EMBER_RATE)
            gl.uniform1f(uDrift, clock * DRIFT_RATE)

            gl.uniform1f(uAmp, rings / levels)
            gl.uniform1f(uReach, clamp(num(p.reach, 15), 5, 100) / 100)
            gl.uniform1f(uHover, Math.min(1, Math.max(0, pointer.on)))

            gl.drawArrays(gl.TRIANGLES, 0, 3)
        }

        const readPointer = (event: PointerEvent) => {
            const rect = root.getBoundingClientRect()
            if (rect.width <= 0 || rect.height <= 0) return
            const pointer = pointerRef.current
            pointer.rawX = clamp((event.clientX - rect.left) / rect.width, 0, 1)
            pointer.rawY = clamp((event.clientY - rect.top) / rect.height, 0, 1)
        }

        const onMove = (event: PointerEvent) => {
            readPointer(event)
            pointerRef.current.onTarget = 1
        }
        const onLeave = () => {
            pointerRef.current.onTarget = 0
        }

        root.addEventListener("pointermove", onMove)
        root.addEventListener("pointerenter", onMove)
        root.addEventListener("pointerleave", onLeave)
        root.addEventListener("pointercancel", onLeave)

        window.addEventListener("blur", onLeave)

        raf = requestAnimationFrame(render)

        return () => {
            cancelAnimationFrame(raf)
            resizeObserver.disconnect()
            root.removeEventListener("pointermove", onMove)
            root.removeEventListener("pointerenter", onMove)
            root.removeEventListener("pointerleave", onLeave)
            root.removeEventListener("pointercancel", onLeave)
            window.removeEventListener("blur", onLeave)
            gl.deleteBuffer(buffer)
            gl.deleteProgram(program)
            gl.deleteShader(vs)
            gl.deleteShader(fs)

        }
    }, [])

    return (
        <div
            ref={rootRef}
            style={{
                minWidth: 1200,
                minHeight: 800,
                width: "100%",
                height: "100%",
                position: "relative",
                overflow: "hidden",
                isolation: "isolate",
                background,
                touchAction: "none",
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    display: "block",
                }}
            />
        </div>
    )
}
