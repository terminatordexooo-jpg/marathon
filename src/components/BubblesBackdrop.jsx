import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

// pmndrs hi-key-bubbles palette: white-heavy with pastel pink accents
const PALETTE = [
  '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FBEFEF',
  '#F5D2D6', '#F0BAC2', '#E89BA8', '#D88B96',
]

function makeBubbles(count) {
  const arr = []
  for (let i = 0; i < count; i++) {
    // Power curve so most bubbles are small but a handful are huge,
    // matching the reference's scale variance.
    const r = Math.random()
    const scale = 0.45 + Math.pow(r, 2.4) * 4.2
    arr.push({
      position: [
        (Math.random() - 0.5) * 26,
        (Math.random() - 0.5) * 18,
        -Math.random() * 14,
      ],
      scale,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      // bigger bubbles drift slower (mass feel)
      speed: 0.4 + (1 - r) * 0.9,
      rotation: 0.15 + Math.random() * 0.6,
      float: 0.4 + Math.random() * 1.2,
      // closer (bigger) bubbles parallax stronger
      parallax: 0.6 + scale * 0.8,
      seed: Math.random() * Math.PI * 2,
    })
  }
  return arr
}

function Bubble({ data, scrollRef }) {
  const ref = useRef(null)
  const baseY = data.position[1]
  const baseZ = data.position[2]

  useFrame((state, delta) => {
    if (!ref.current) return
    const t = state.clock.getElapsedTime()
    const s = scrollRef.current
    ref.current.position.y =
      baseY + Math.sin(t * 0.35 + data.seed) * 0.25 - s * data.parallax
    ref.current.position.x =
      data.position[0] + Math.cos(t * 0.28 + data.seed) * 0.2
    ref.current.position.z = baseZ + s * data.parallax * 0.5
    ref.current.rotation.x += delta * 0.12 * data.speed
    ref.current.rotation.y += delta * 0.18 * data.speed
  })

  return (
    <Float speed={data.speed} rotationIntensity={data.rotation} floatIntensity={data.float}>
      <mesh ref={ref} position={data.position} scale={data.scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color={data.color}
          roughness={0.45}
          metalness={0}
        />
      </mesh>
    </Float>
  )
}

function Scene({ scrollRef }) {
  // 60 bubbles → fills the screen densely like the reference
  const bubbles = useMemo(() => makeBubbles(60), [])
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const { x, y } = state.pointer
    const s = scrollRef.current
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x * 0.08 + s * 0.06,
      0.04
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.06 + s * 0.03,
      0.04
    )
  })

  return (
    <group ref={group}>
      {bubbles.map((b, i) => (
        <Bubble key={i} data={b} scrollRef={scrollRef} />
      ))}
    </group>
  )
}

export default function BubblesBackdrop() {
  const scrollRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      scrollRef.current = (window.scrollY / window.innerHeight) * 1.4
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 14], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* hi-key lighting: strong top key + soft pink fill, no harsh shadows */}
        <ambientLight intensity={0.7} color="#FFFFFF" />
        <directionalLight position={[3, 10, 5]} intensity={2.4} color="#FFFFFF" />
        <directionalLight position={[-6, 4, 4]} intensity={0.9} color="#FBEFEF" />
        <pointLight position={[0, -6, 6]} intensity={0.4} color="#F5D2D6" />

        <Suspense fallback={null}>
          <Scene scrollRef={scrollRef} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}
