"use client"

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <Sphere
      args={[1, 64, 64]}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <MeshDistortMaterial
        color={hovered ? "#9D00FF" : "#39FF14"}
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  )
}

export default function Hero3D() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  )
}

