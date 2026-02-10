import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 3000 }) {
  const mesh = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [count])

  useFrame(({ clock, pointer }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.elapsedTime * 0.1 + pointer.x * 0.2
      mesh.current.rotation.x = -pointer.y * 0.2
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#ffffff" transparent opacity={0.7} />
    </points>
  )
}

export default function ParticleHero({ children, className = 'min-h-[90vh]' }) {
  return (
    <header className={`${className} flex items-center justify-center text-center p-4 relative overflow-hidden`}>
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(135deg, #4c1d95, #1a202c)' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ width: '100%', height: '100%' }}>
          <Particles />
        </Canvas>
      </div>
      <div className="container mx-auto max-w-4xl z-10 px-4 relative">
        {children}
      </div>
    </header>
  )
}
