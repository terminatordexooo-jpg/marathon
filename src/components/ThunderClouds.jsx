import * as THREE from 'three'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Clouds, Cloud, PerspectiveCamera } from '@react-three/drei'
import { random } from 'maath'

export default function ThunderClouds() {
  const scroll = useRef(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scroll.current = max > 0 ? Math.min(1, window.scrollY / max) : 0
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Canvas dpr={[0.8, 1.4]} gl={{ antialias: true, powerPreference: 'high-performance' }}>
      <CameraRig scrollRef={scroll} />
      <ambientLight intensity={Math.PI / 2.5} />
      <Suspense fallback={null}>
        <Clouds limit={300} material={THREE.MeshLambertMaterial}>
          <FloatingCloud seed={10} basePosition={[18, 10, -2]} drift={[1.8, 1.0, 1.2]} speedMul={1} />
          <FloatingCloud seed={20} basePosition={[-16, -8, -6]} drift={[1.6, 1.1, 0.9]} speedMul={0.8} />
          <FloatingCloud seed={30} basePosition={[4, 16, -18]} drift={[1.4, 1.4, 1.5]} speedMul={1.2} />
          <FloatingCloud seed={40} basePosition={[-22, 2, 8]} drift={[1.2, 0.8, 1.3]} speedMul={0.7} />
          <FloatingCloud seed={50} basePosition={[14, -10, 14]} drift={[1.7, 0.9, 0.8]} speedMul={1.1} />
          <FloatingCloud seed={60} basePosition={[-6, 12, 20]} drift={[1.3, 1.0, 1.0]} speedMul={0.9} />
        </Clouds>
        <mesh scale={200}>
          <sphereGeometry />
          <meshStandardMaterial color="#070612" roughness={0.9} side={THREE.BackSide} />
        </mesh>
      </Suspense>
    </Canvas>
  )
}

function CameraRig({ scrollRef }) {
  const cam = useRef()
  const smoothScroll = useRef(0)
  const lookTarget = useRef(new THREE.Vector3())
  const smoothLook = useRef(new THREE.Vector3())
  useFrame((state, delta) => {
    if (!cam.current) return
    const t = state.clock.elapsedTime
    const intro = Math.min(1, t / 3.5)
    const introEase = 1 - Math.pow(1 - intro, 4)

    smoothScroll.current = THREE.MathUtils.damp(smoothScroll.current, scrollRef.current, 3, delta)
    const s = smoothScroll.current

    const radius = 64 - introEase * 38 + s * 14
    const angle = t * 0.055 + s * Math.PI * 0.55
    const yOffset = -2 - s * 9 + (1 - introEase) * 6

    cam.current.position.set(Math.sin(angle) * radius, yOffset, Math.cos(angle) * radius)

    const px = state.pointer.x * 1.6
    const py = state.pointer.y * 0.9
    lookTarget.current.set(px, py + s * -2, 0)
    smoothLook.current.lerp(lookTarget.current, 1 - Math.pow(0.001, delta))
    cam.current.lookAt(smoothLook.current)
  })
  return (
    <PerspectiveCamera ref={cam} makeDefault fov={70} position={[0, 4, 64]}>
      <spotLight position={[0, 40, 2]} angle={0.5} decay={1} distance={45} penumbra={1} intensity={900} />
      <spotLight position={[-19, 0, -8]} color="#9a8cff" angle={0.25} decay={0.75} distance={185} penumbra={-1} intensity={210} />
    </PerspectiveCamera>
  )
}

function FloatingCloud({ seed, basePosition, drift, speedMul = 1 }) {
  const group = useRef(null)
  const light = useRef(null)
  const [flash] = useState(() => new random.FlashGen({ count: 4, minDuration: 90, maxDuration: 260 }))
  const phase = useRef(seed * 0.137)

  useFrame((state, delta) => {
    if (!group.current) return
    const t = state.clock.elapsedTime * speedMul + phase.current
    group.current.position.x = basePosition[0] + Math.sin(t * 0.18) * drift[0]
    group.current.position.y = basePosition[1] + Math.cos(t * 0.22) * drift[1]
    group.current.position.z = basePosition[2] + Math.sin(t * 0.15 + 1.4) * drift[2]
    group.current.rotation.y += delta * 0.04 * speedMul

    if (Math.random() < 0.0014 * speedMul) flash.burst()
    const impulse = flash.update(state.clock.elapsedTime, delta)
    if (light.current) light.current.intensity = impulse * 4000
  })

  return (
    <group ref={group} position={basePosition}>
      <Cloud seed={seed} fade={28} speed={0.06} growth={4} segments={32} volume={6} opacity={0.5} bounds={[4.5, 3.2, 1.2]} />
      <Cloud seed={seed + 1} fade={28} position={[0, 1, 0]} speed={0.25} growth={4} volume={9} opacity={0.78} bounds={[6.5, 2.4, 1.2]} />
      <pointLight ref={light} position={[0, 0, 0.5]} color="#a9c4ff" intensity={0} />
    </group>
  )
}
