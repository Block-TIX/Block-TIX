"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PresentationControls, ContactShadows, Text3D } from "@react-three/drei"
import type { Group, Mesh } from "three"

function BlockchainModel() {
  const group = useRef<Group>(null)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <group ref={group}>
      {/* Create a chain of blocks */}
      {Array.from({ length: 5 }).map((_, i) => (
        <Block
          key={i}
          position={[Math.sin(i * 1.5) * 1.2, Math.cos(i * 1.5) * 0.5, Math.sin(i * 0.5) * 0.8]}
          index={i}
        />
      ))}

      {/* Solana Logo */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={[0, 0, 0]}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.4}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-1.5, -1.5, 0]}
        >
          SOLANA
          <meshStandardMaterial color="#9945FF" metalness={0.8} roughness={0.2} />
        </Text3D>
      </Float>
    </group>
  )
}

function Block({ position, index }: { position: [number, number, number]; index: number }) {
  const meshRef = useRef<Mesh>(null)
  const colors = ["#9945FF", "#14F195", "#03E1FF", "#9945FF", "#14F195"]

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.2
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5 + index) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={colors[index % colors.length]}
          metalness={0.8}
          roughness={0.2}
          emissive={colors[index % colors.length]}
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Connection lines between blocks */}
      {index < 4 && (
        <Line
          start={position}
          end={[
            Math.sin((index + 1) * 1.5) * 1.2,
            Math.cos((index + 1) * 1.5) * 0.5,
            Math.sin((index + 1) * 0.5) * 0.8,
          ]}
          color={colors[index % colors.length]}
        />
      )}
    </Float>
  )
}

function Line({
  start,
  end,
  color,
}: { start: [number, number, number]; end: [number, number, number]; color: string }) {
  const lineRef = useRef<Mesh>(null)

  // Calculate the midpoint between start and end
  const midX = (start[0] + end[0]) / 2
  const midY = (start[1] + end[1]) / 2
  const midZ = (start[2] + end[2]) / 2

  // Calculate the distance between start and end
  const distance = Math.sqrt(
    Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2) + Math.pow(end[2] - start[2], 2),
  )

  // Calculate the rotation to point from start to end
  const rotationY = Math.atan2(end[0] - start[0], end[2] - start[2])
  const rotationZ = Math.atan2(
    end[1] - start[1],
    Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[2] - start[2], 2)),
  )

  return (
    <mesh position={[midX, midY, midZ]} rotation={[0, rotationY, rotationZ]} ref={lineRef}>
      <cylinderGeometry args={[0.03, 0.03, distance, 8]} />
      <meshStandardMaterial color={color} transparent opacity={0.6} />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 10], fov: 45 }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-0.4, 0.4]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <BlockchainModel />
      </PresentationControls>
      <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
      <Environment preset="city" />
    </Canvas>
  )
}
