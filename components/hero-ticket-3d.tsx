"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float, PresentationControls, ContactShadows, Text } from "@react-three/drei"
import type { Mesh, Group } from "three"

function TicketModel(props: any) {
  const group = useRef<Group>(null)
  const { nodes, materials } = useGLTF("/ticket-model.glb") as any
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.1
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ticket.geometry}
        material={materials.TicketMaterial}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? [1.05, 1.05, 1.05] : [1, 1, 1]}
      >
        <meshStandardMaterial
          color="#9333ea"
          metalness={0.8}
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>

      <Text
        position={[0, 0.02, 0.11]}
        rotation={[0, 0, 0]}
        fontSize={0.05}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        BLOCKTIX
      </Text>

      <Text
        position={[0, -0.05, 0.11]}
        rotation={[0, 0, 0]}
        fontSize={0.025}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        SOLANA SUMMER FESTIVAL
      </Text>

      <Text
        position={[0, -0.1, 0.11]}
        rotation={[0, 0, 0]}
        fontSize={0.02}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        JUNE 15, 2023 • MIAMI, FL
      </Text>
    </group>
  )
}

// Fallback ticket when 3D model is not available
function FallbackTicket() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[3, 1.5, 0.1]} />
      <meshStandardMaterial color="#9333ea" metalness={0.8} roughness={0.2} />
      <Text position={[0, 0.2, 0.06]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
        BLOCKTIX
      </Text>
      <Text position={[0, -0.1, 0.06]} fontSize={0.1} color="#ffffff" anchorX="center" anchorY="middle">
        SOLANA SUMMER FESTIVAL
      </Text>
      <Text position={[0, -0.3, 0.06]} fontSize={0.08} color="#ffffff" anchorX="center" anchorY="middle">
        JUNE 15, 2023
      </Text>
    </mesh>
  )
}

export function HeroTicket3D() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.2} floatIntensity={0.5}>
          <FallbackTicket />
        </Float>
      </PresentationControls>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.4} scale={5} blur={2.5} far={4} />
      <Environment preset="city" />
    </Canvas>
  )
}
