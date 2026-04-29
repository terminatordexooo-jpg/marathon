import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

function Sculpture() {
  const mesh = useRef(null)
  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!mesh.current) return
    const { x, y } = state.pointer
    target.current.x = THREE.MathUtils.damp(target.current.x, y * 0.4, 4, delta)
    target.current.y = THREE.MathUtils.damp(target.current.y, x * 0.6, 4, delta)
    mesh.current.rotation.x = target.current.x
    mesh.current.rotation.y += delta * 0.22 + target.current.y * delta
  })

  return (
    <mesh ref={mesh} scale={1.7}>
      <icosahedronGeometry args={[1, 32]} />
      <MeshDistortMaterial
        color="#D67A50"
        emissive="#B8542A"
        emissiveIntensity={0.18}
        roughness={0.2}
        metalness={0.7}
        distort={0.42}
        speed={1.4}
      />
    </mesh>
  )
}

function Accent({ position, color, scale = 0.3 }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.3
    ref.current.rotation.y += delta * 0.4
  })
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color={color}
        roughness={0.25}
        metalness={0.85}
        flatShading
      />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 5.6], fov: 36 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.55} color="#EDE6D6" />
      <directionalLight position={[3, 5, 4]} intensity={1.4} color="#FFFFFF" />
      <directionalLight position={[-4, -2, -3]} intensity={0.45} color="#D67A50" />
      <pointLight position={[0, 0, 3]} intensity={0.6} color="#B8542A" />

      <Suspense fallback={null}>
        <Float speed={1.0} rotationIntensity={0.3} floatIntensity={0.5}>
          <Sculpture />
        </Float>

        <Float speed={1.4} rotationIntensity={1} floatIntensity={1.2}>
          <Accent position={[2.6, 1.1, 0]} color="#B8542A" scale={0.34} />
        </Float>
        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
          <Accent position={[-2.5, -1, 0.2]} color="#7A361B" scale={0.28} />
        </Float>

        <Environment preset="apartment" />
      </Suspense>
    </Canvas>
  )
}
