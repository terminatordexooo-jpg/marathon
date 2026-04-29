import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'

function Crystal({ position, color, scale = 1, speed = 1 }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.18 * speed
    ref.current.rotation.y += delta * 0.24 * speed
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.25}
        roughness={0.25}
        metalness={0.85}
        flatShading
      />
    </mesh>
  )
}

function CenterOrb() {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.x -= delta * 0.1
  })
  return (
    <mesh ref={ref} scale={1.25}>
      <sphereGeometry args={[1, 96, 96]} />
      <MeshDistortMaterial
        color="#C26F4A"
        emissive="#E8B4A0"
        emissiveIntensity={0.18}
        roughness={0.3}
        metalness={0.65}
        distort={0.5}
        speed={1.1}
      />
    </mesh>
  )
}

function Ring() {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.z += delta * 0.05
    ref.current.rotation.x += delta * 0.08
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2.4, 0, 0]}>
      <torusGeometry args={[2.4, 0.012, 8, 220]} />
      <meshBasicMaterial color="#8E4A2E" toneMapped={false} />
    </mesh>
  )
}

export default function ScrollScene3D() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-cream via-transparent to-cream" />
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 6], fov: 36 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.55} color="#F4EEE4" />
        <pointLight position={[4, 3, 5]} intensity={1.6} color="#FFFFFF" />
        <pointLight position={[-4, -3, -2]} intensity={1} color="#E8B4A0" />
        <Suspense fallback={null}>
          <Float speed={1.0} rotationIntensity={0.6} floatIntensity={0.8}>
            <CenterOrb />
          </Float>
          <Float speed={1.6} rotationIntensity={1.2} floatIntensity={1.6}>
            <Crystal position={[2.6, 1.2, 0]} color="#C26F4A" scale={0.5} speed={1.4} />
          </Float>
          <Float speed={1.4} rotationIntensity={1} floatIntensity={1.2}>
            <Crystal position={[-2.4, -1, -0.5]} color="#E8B4A0" scale={0.42} speed={1.1} />
          </Float>
          <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
            <Crystal position={[2, -1.6, 0.6]} color="#8E4A2E" scale={0.36} speed={0.9} />
          </Float>
          <Float speed={1.5} rotationIntensity={1.1} floatIntensity={1.4}>
            <Crystal position={[-2.7, 1.5, 0.3]} color="#D6A89A" scale={0.3} speed={1.6} />
          </Float>
          <Ring />
          <Environment preset="apartment" />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-20 text-center">
        <p className="font-display text-sm italic text-ink/45">scroll · обертається сама</p>
      </div>
    </div>
  )
}
