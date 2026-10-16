'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Float } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function TattooMachine() {
  const group = useRef<THREE.Group>(null)
  const { pointer } = useThree()
  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    if (!group.current) return
    target.current.x = THREE.MathUtils.lerp(target.current.x, pointer.y * 0.18, 0.035)
    target.current.y = THREE.MathUtils.lerp(target.current.y, pointer.x * 0.32, 0.035)
    const scrollAngle = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1) * 0.2
    group.current.rotation.x = target.current.x + scrollAngle
    group.current.rotation.y += delta * 0.12
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, target.current.y + 0.45, 0.025)
  })

  return (
    <group ref={group} rotation={[0.1, 0.45, -0.08]} scale={1.05}>
      <mesh castShadow position={[0, 0.38, 0]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[1.2, 1.05, 0.58]} />
        <meshStandardMaterial color="#202124" metalness={0.92} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0, -0.24, 0.01]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.34, 0.28, 1.35, 48]} />
        <meshStandardMaterial color="#0c0d0f" metalness={0.88} roughness={0.18} />
      </mesh>
      <mesh castShadow position={[0, -0.92, 0.01]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.14, 0.9, 32]} />
        <meshStandardMaterial color="#b6b9bd" metalness={1} roughness={0.16} />
      </mesh>
      <mesh position={[0, -1.47, 0.01]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.07, 0.24, 24]} />
        <meshStandardMaterial color="#b78a35" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.42, 0.58, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.16, 0.025, 12, 32]} />
        <meshStandardMaterial color="#bc8b36" metalness={0.9} roughness={0.2} emissive="#4d270c" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.38, 0.62, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.13, 0.018, 12, 32]} />
        <meshStandardMaterial color="#d7d9dc" metalness={1} roughness={0.15} />
      </mesh>
      <mesh position={[0, 0.38, 0.31]}>
        <boxGeometry args={[0.56, 0.06, 0.02]} />
        <meshStandardMaterial color="#e6c36d" metalness={0.8} roughness={0.22} emissive="#7d4a11" emissiveIntensity={0.18} />
      </mesh>
    </group>
  )
}

function Scene() {
  const { camera } = useThree()
  useEffect(() => {
    camera.position.set(0, 0, 5.2)
  }, [camera])

  return (
    <>
      <color attach="background" args={["#0a0a0a"]} />
      <ambientLight intensity={0.35} />
      <spotLight position={[4, 4, 5]} intensity={18} angle={0.32} penumbra={0.9} color="#f6d487" castShadow />
      <spotLight position={[-4, 1, 3]} intensity={12} angle={0.45} penumbra={1} color="#9d2630" />
      <pointLight position={[0, -2, 3]} intensity={3} color="#d4a84b" />
      <Environment preset="studio" environmentIntensity={0.45} />
      <Float speed={1.2} rotationIntensity={0.16} floatIntensity={0.3}>
        <TattooMachine />
      </Float>
      <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={5} blur={2.8} far={4} />
    </>
  )
}

export function TattooMachineScene() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-[-8%] z-[1] hidden w-[58%] opacity-90 lg:block">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.2], fov: 38 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,transparent_0%,rgba(10,10,10,0.12)_45%,#0a0a0a_82%)]" />
    </div>
  )
}

export function TattooMachineFallback() {
  return <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_50%_45%,rgba(184,140,61,0.18),transparent_35%),linear-gradient(120deg,transparent,rgba(255,255,255,0.04))] lg:block" />
}

