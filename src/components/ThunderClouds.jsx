import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Clouds, Cloud, Environment, PerspectiveCamera } from '@react-three/drei'
import { CuboidCollider, BallCollider, Physics, RigidBody } from '@react-three/rapier'
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
    <Canvas dpr={[1, 1.5]} gl={{ antialias: true }}>
      <CameraRig scrollRef={scroll} />
      <ambientLight intensity={Math.PI / 2.7} />
      <Clouds limit={300} material={THREE.MeshLambertMaterial}>
        <Physics gravity={[0, 0, 0]}>
          <Puffycloud seed={10} position={[40, 0, 0]} />
          <Puffycloud seed={20} position={[0, 40, 0]} />
          <Puffycloud seed={30} position={[0, 0, -40]} />
          <CuboidCollider position={[0, -15, 0]} args={[400, 10, 400]} />
        </Physics>
      </Clouds>
      <mesh scale={200}>
        <sphereGeometry />
        <meshStandardMaterial color="#070612" roughness={0.9} side={THREE.BackSide} />
      </mesh>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_lagoon_night_1k.hdr" />
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
      <spotLight position={[0, 40, 2]} angle={0.5} decay={1} distance={45} penumbra={1} intensity={1200} />
      <spotLight position={[-19, 0, -8]} color="#7aa2ff" angle={0.25} decay={0.75} distance={185} penumbra={-1} intensity={260} />
    </PerspectiveCamera>
  )
}

function Puffycloud({ seed, vec = new THREE.Vector3(), ...props }) {
  const api = useRef()
  const light = useRef()
  const [flash] = useState(() => new random.FlashGen({ count: 5, minDuration: 80, maxDuration: 240 }))
  const contact = (payload) =>
    payload.other.rigidBodyObject?.userData?.cloud &&
    payload.totalForceMagnitude / 1000 > 140 &&
    flash.burst()
  useFrame((state, delta) => {
    const impulse = flash.update(state.clock.elapsedTime, delta)
    if (light.current) light.current.intensity = impulse * 4000
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(6))
  })
  return (
    <RigidBody
      ref={api}
      userData={{ cloud: true }}
      onContactForce={contact}
      linearDamping={4}
      angularDamping={1}
      friction={0.1}
      {...props}
      colliders={false}
    >
      <BallCollider args={[4]} />
      <Cloud seed={seed} fade={30} speed={0.05} growth={4} segments={32} volume={6} opacity={0.55} bounds={[4, 3, 1]} />
      <Cloud seed={seed + 1} fade={30} position={[0, 1, 0]} speed={0.25} growth={4} volume={9} opacity={0.85} bounds={[6, 2, 1]} />
      <pointLight position={[0, 0, 0.5]} ref={light} color="#a9c4ff" intensity={0} />
    </RigidBody>
  )
}
