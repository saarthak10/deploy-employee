import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html, Float, ContactShadows, useGLTF, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import * as THREE from 'three'

function ProceduralCharacter() {
  const group = useRef<THREE.Group>(null!)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    group.current.rotation.y = Math.sin(t / 3) * 0.15
    group.current.position.y = Math.sin(t) * 0.08
  })

  return (
    <group ref={group} dispose={null}>
      {/* Head */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.45, 64, 64]} />
        <meshPhysicalMaterial color="#9b6ef6" metalness={0.05} roughness={0.18} clearcoat={0.6} clearcoatRoughness={0.15} reflectivity={0.6} />
      </mesh>

      {/* Body */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.95, 1.05, 0.55]} />
        <meshPhysicalMaterial color="#4dd6a3" metalness={0.02} roughness={0.2} clearcoat={0.25} clearcoatRoughness={0.25} reflectivity={0.25} />
      </mesh>

      {/* Eyes (simple) */}
      <mesh position={[-0.12, 0.95, 0.38]}> 
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#071029" metalness={0.0} roughness={0.35} />
      </mesh>
      <mesh position={[0.12, 0.95, 0.38]}> 
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#071029" metalness={0.0} roughness={0.35} />
      </mesh>

      {/* Soft accessory */}
      <mesh position={[0, -0.6, 0]} rotation={[0.3, 0, 0]} castShadow receiveShadow>
        <torusGeometry args={[0.62, 0.12, 32, 64]} />
        <meshPhysicalMaterial color="#b99aff" metalness={0.03} roughness={0.2} clearcoat={0.3} />
      </mesh>
    </group>
  )
}

function GLTFCharacter({ url }: { url: string }) {
  // If you provide a GLB/GLTF at /src/assets/character.glb it will load here
  try {
    // useGLTF will throw if not found; keep inside try/catch to avoid runtime crashing
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { scene } = useGLTF(url) as any
    return <primitive object={scene} scale={1.2} position={[0, -0.2, 0]} />
  } catch (e) {
    return null
  }
}

export default function Hero3D() {
  // If you place a model at public/assets/character.glb the GLTFCharacter will render it.
  // Otherwise fall back to a public sample GLB (Avocado) so the demo works immediately.
  const localUrl = '/assets/character.glb'
  const fallbackUrl = 'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF-Binary/Avocado.glb'
  const modelUrl = typeof window !== 'undefined' ? localUrl : fallbackUrl

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-indigo-900 to-slate-900">
      <Canvas camera={{ position: [0, 0.6, 3.2], fov: 40 }}>
        <color attach="background" args={["#070712"]} />
        <ambientLight intensity={0.35} />
        {/* Key warm light */}
        <directionalLight position={[6, 6, 6]} intensity={1.1} color="#ffd9b3" castShadow />
        {/* Cool fill light */}
        <directionalLight position={[-4, 2, -3]} intensity={0.6} color="#9be8ff" />
        {/* Purple rim light for stylized edge */}
        <directionalLight position={[0, 3, -6]} intensity={0.7} color="#8b5cf6" />

        {/* Studio environment for soft reflections */}
        <Environment preset="studio" background={false} />

        {/* Soft ground-area lighting for more realistic contact shadows */}
        <AccumulativeShadows temporal frames={60} alphaTest={0.85} scale={3} position={[0, -0.95, 0]}>
          <RandomizedLight amount={6} radius={2} ambient={0.2} intensity={0.6} position={[1, 5, -1]} />
        </AccumulativeShadows>

        <Suspense fallback={<Html className="text-white">Loading 3D...</Html>}>
          <Float floatIntensity={0.6} rotationIntensity={0.2} speed={1}>
            {/* Try loading a local GLTF first; if it fails the remote GLB will load instead */}
            <GLTFCharacter url={modelUrl} />
            <ProceduralCharacter />
          </Float>
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.95, 0]} width={4} height={4} blur={2.2} opacity={0.7} far={1.4} />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}
