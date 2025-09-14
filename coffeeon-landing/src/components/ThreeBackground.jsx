import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Animated coffee bean particles
function CoffeeParticles() {
  const meshRef = useRef()
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  // Create coffee bean shaped particles
  const particles = Array.from({ length: 50 }, (_, i) => (
    <mesh
      key={i}
      position={[
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ]}
      scale={Math.random() * 0.3 + 0.1}
    >
      <sphereGeometry args={[0.3, 8, 6]} />
      <meshStandardMaterial
        color="#6B4226"
        transparent
        opacity={0.6}
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  ))

  return (
    <group ref={particlesRef}>
      {particles}
    </group>
  )
}

// Floating coffee cup
function CoffeeCup() {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={meshRef} position={[3, 0, -5]}>
      {/* Cup body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 0.8, 1.5, 16]} />
        <meshStandardMaterial color="#F5F1EB" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Coffee inside */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.9, 0.75, 0.1, 16]} />
        <meshStandardMaterial color="#4A2C17" roughness={0.9} />
      </mesh>
      
      {/* Handle */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.05, 8, 16]} />
        <meshStandardMaterial color="#F5F1EB" roughness={0.1} metalness={0.1} />
      </mesh>
      
      {/* Steam particles */}
      <mesh position={[0, 1, 0]}>
        <Sphere args={[0.1]}>
          <MeshDistortMaterial
            color="#FFFFFF"
            transparent
            opacity={0.3}
            distort={0.3}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </group>
  )
}

// Main Three.js background component
export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#F5F1EB" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#6B4226" />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.6}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        {/* Coffee particles */}
        <CoffeeParticles />
        
        {/* Floating coffee cup */}
        <CoffeeCup />
        
        {/* Background gradient sphere */}
        <Sphere args={[50]} position={[0, 0, -30]}>
          <MeshDistortMaterial
            color="#D4A574"
            transparent
            opacity={0.1}
            distort={0.1}
            speed={1}
            roughness={1}
          />
        </Sphere>
      </Canvas>
    </div>
  )
}