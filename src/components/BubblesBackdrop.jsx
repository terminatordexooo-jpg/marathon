import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

// matte clay palette — soft pinks + whites (per reference)
const PALETTE = ['#FFFFFF', '#FBE9E9', '#F6D2D2', '#EFB8C0', '#E89BA8', '#D88B96']

function makeBubbles(count) {
  const arr = []
  for (let i = 0; i < count; i++) {
    // ~40% are big foreground bubbles, rest are smaller depth
    const big = Math.random() < 0.4
    const scale = big ? 1.1 + Math.random() * 1.6 : 0.3 + Math.random() * 0.7
    // big bubbles biased to the sides — leave the headline column readable
    const sign = Math.random() < 0.5 ? -1 : 1
    const x = big
      ? sign * (4.5 + Math.random() * 5.5)
      : (Math.random() - 0.5) * 18
    // big ones live closer to camera, small ones in deep background
    const z = big ? -1 - Math.random() * 3 : -5 - Math.random() * 6
    arr.push({
      position: [x, (Math.random() - 0.5) * 14, z],
      scale,
      color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
      speed: 0.3 + Math.random() * 0.7,
      rotation: 0.1 + Math.random() * 0.7,
      float: 0.4 + Math.random() * 1.0,
      // strong scroll parallax — closer bubbles fly past faster
      parallax: big ? 2.5 + Math.random() * 2.5 : 0.8 + Math.random() * 1.5,
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
    // strong vertical drift on scroll + slight forward push so bubbles fly past camera
    ref.current.position.y =
      baseY + Math.sin(t * 0.4 + data.seed) * 0.2 - s * data.parallax
    ref.current.position.x =
      data.position[0] + Math.cos(t * 0.3 + data.seed) * 0.18
    ref.current.position.z = baseZ + s * data.parallax * 0.6
    ref.current.rotation.x += delta * 0.15 * data.speed + s * 0.0002
    ref.current.rotation.y += delta * 0.22 * data.speed
  })

  return (
    <Float speed={data.speed} rotationIntensity={data.rotation} floatIntensity={data.float}>
      <mesh ref={ref} position={data.position} scale={data.scale} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhysicalMaterial
          color={data.color}
          roughness={0.45}
          metalness={0}
          clearcoat={0.4}
          clearcoatRoughness={0.55}
          sheen={0.5}
          sheenColor="#FFFFFF"
        />
      </mesh>
    </Float>
  )
}

function Scene({ scrollRef }) {
  const bubbles = useMemo(() => makeBubbles(34), [])
  const group = useRef(null)

  useFrame((state) => {
    if (!group.current) return
    const { x, y } = state.pointer
    const s = scrollRef.current
    // mouse parallax + scroll-driven group rotation
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x * 0.15 + s * 0.1,
      0.05
    )
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y * 0.1 + s * 0.05,
      0.05
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
      // amplify so even small scrolls visibly move the scene
      scrollRef.current = (window.scrollY / window.innerHeight) * 1.6
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[1]">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 12], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.45} color="#FFFFFF" />
        {/* strong top-key light → crisp highlights, soft pink gradient on the dark side */}
        <directionalLight position={[3, 9, 5]} intensity={2.6} color="#FFFFFF" />
        <directionalLight position={[-4, -2, 4]} intensity={0.55} color="#F6D2D2" />
        <pointLight position={[6, -3, 3]} intensity={0.8} color="#FBE9E9" />

        <Suspense fallback={null}>
          <Scene scrollRef={scrollRef} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  )
}
