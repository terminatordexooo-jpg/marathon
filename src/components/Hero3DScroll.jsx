import { Suspense, useRef, useEffect, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Sparkles,
} from '@react-three/drei'
import * as THREE from 'three'

function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1
      setP(Math.min(1, window.scrollY / max))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return p
}

function Blob({ scrollRef }) {
  const mesh = useRef(null)
  const mat = useRef(null)
  useFrame((state, delta) => {
    if (!mesh.current) return
    const p = scrollRef.current
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y += delta * 0.18 + p * delta * 0.6
    mesh.current.rotation.x = Math.sin(t * 0.4) * 0.18 + p * 0.7
    const s = 1.65 + Math.sin(t * 0.6) * 0.04 + p * 0.35
    mesh.current.scale.setScalar(s)
    mesh.current.position.y = -p * 1.6
    mesh.current.position.x = Math.sin(p * Math.PI) * 0.6
    if (mat.current) {
      mat.current.distort = 0.34 + Math.sin(t * 0.7) * 0.08 + p * 0.22
      mat.current.speed = 1.1 + p * 1.6
    }
  })
  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1, 64]} />
      <MeshDistortMaterial
        ref={mat}
        color="#E8A7B5"
        emissive="#C26F8A"
        emissiveIntensity={0.4}
        roughness={0.18}
        metalness={0.55}
        distort={0.4}
        speed={1.4}
      />
    </mesh>
  )
}

function GlassShard({ seed, scrollRef }) {
  const ref = useRef(null)
  const data = useMemo(() => {
    const rand = (n) => {
      const x = Math.sin(seed * 999.13 + n * 17.7) * 1e4
      return x - Math.floor(x)
    }
    return {
      base: [
        (rand(1) - 0.5) * 9,
        (rand(2) - 0.5) * 6,
        -1.5 - rand(3) * 4,
      ],
      drift: rand(4) * 1.6 + 0.4,
      rot: [rand(5) * Math.PI, rand(6) * Math.PI, rand(7) * Math.PI],
      spin: (rand(8) - 0.5) * 0.4,
      size: 0.55 + rand(9) * 0.5,
      hue: rand(10),
    }
  }, [seed])

  useFrame((state, delta) => {
    if (!ref.current) return
    const p = scrollRef.current
    const t = state.clock.getElapsedTime()
    ref.current.position.x = data.base[0] + Math.sin(t * 0.3 + seed) * 0.4
    ref.current.position.y =
      data.base[1] + Math.cos(t * 0.25 + seed) * 0.3 - p * data.drift * 4
    ref.current.position.z = data.base[2]
    ref.current.rotation.x = data.rot[0] + t * data.spin
    ref.current.rotation.y = data.rot[1] + t * data.spin * 0.8 + p * 1.5
  })

  const color = data.hue < 0.5 ? '#E8A7B5' : '#9B6BFF'
  return (
    <mesh ref={ref} scale={data.size}>
      <planeGeometry args={[1, 1.5, 1, 1]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.15}
        roughness={0.1}
        metalness={0.1}
        transmission={0.85}
        thickness={0.3}
        ior={1.4}
        transparent
        opacity={0.45}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function OrbitCrystal({ radius, phase, speed, color, size = 0.22, scrollRef }) {
  const ref = useRef(null)
  useFrame((state) => {
    if (!ref.current) return
    const p = scrollRef.current
    const t = state.clock.getElapsedTime() * speed + phase + p * 2
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.4) * radius * 0.35 - p * 1.2,
      Math.sin(t) * radius
    )
    ref.current.rotation.x += 0.02
    ref.current.rotation.y += 0.03
  })
  return (
    <mesh ref={ref} scale={size}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        metalness={0.9}
        roughness={0.15}
        flatShading
      />
    </mesh>
  )
}

function Halo({ scrollRef }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    const p = scrollRef.current
    ref.current.rotation.z += delta * 0.05
    ref.current.rotation.x = Math.PI / 2.6 + p * 0.5
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.6, 0, 0]}>
      <torusGeometry args={[2.65, 0.008, 8, 240]} />
      <meshBasicMaterial color="#C7A9FF" toneMapped={false} transparent opacity={0.55} />
    </mesh>
  )
}

export default function Hero3DScroll() {
  const scroll = useScrollProgress()
  const scrollRef = useRef(0)
  scrollRef.current = scroll

  const shards = useMemo(() => Array.from({ length: 14 }, (_, i) => i + 1), [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 6], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.35} color="#F4EEE4" />
        <directionalLight position={[3, 5, 4]} intensity={1.0} color="#FFFFFF" />
        <pointLight position={[-4, -2, -3]} intensity={1.2} color="#9B6BFF" />
        <pointLight position={[4, 2, 3]} intensity={0.9} color="#E8A7B5" />

        <Suspense fallback={null}>
          <Float speed={1.0} rotationIntensity={0.25} floatIntensity={0.6}>
            <Blob scrollRef={scrollRef} />
          </Float>

          <Halo scrollRef={scrollRef} />

          <Float speed={1.4} rotationIntensity={1} floatIntensity={1}>
            <OrbitCrystal radius={2.8} phase={0} speed={0.4} color="#C7A9FF" size={0.28} scrollRef={scrollRef} />
          </Float>
          <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
            <OrbitCrystal radius={3.1} phase={2.1} speed={0.32} color="#E8A7B5" size={0.22} scrollRef={scrollRef} />
          </Float>
          <Float speed={1.3} rotationIntensity={1} floatIntensity={1.2}>
            <OrbitCrystal radius={3.4} phase={4.3} speed={0.28} color="#9B6BFF" size={0.18} scrollRef={scrollRef} />
          </Float>

          {shards.map((s) => (
            <GlassShard key={s} seed={s} scrollRef={scrollRef} />
          ))}

          <Sparkles count={90} scale={[12, 8, 6]} size={2.2} speed={0.3} color="#F2C9D2" />

          <Environment preset="night" />
        </Suspense>
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night-900/0 via-night-900/40 to-night-900/85" />
    </div>
  )
}
