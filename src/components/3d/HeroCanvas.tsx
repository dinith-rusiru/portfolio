"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Mouse tracking subtle parallax
    const targetX = (state.pointer.x * Math.PI) / 8;
    const targetY = (state.pointer.y * Math.PI) / 8;
    meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.9 : 1.7}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <MeshDistortMaterial
          color={hovered ? "#38bdf8" : "#818cf8"}
          emissive={hovered ? "#0284c7" : "#4f46e5"}
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.8}
          distort={0.35}
          speed={3}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function InnerTechSphere() {
  const sphereRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = -state.clock.getElapsedTime() * 0.4;
      sphereRef.current.rotation.z = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={sphereRef} scale={1.2}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshStandardMaterial
        color="#a855f7"
        wireframe={true}
        transparent={true}
        opacity={0.35}
      />
    </mesh>
  );
}

export default function HeroCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#c084fc" />
        <spotLight position={[0, 15, 0]} intensity={2} color="#06b6d4" />
        
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade speed={1.5} />
        
        <FloatingOrb />
        <InnerTechSphere />
      </Canvas>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-slate-950/80" />
    </div>
  );
}
