import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function Box() {
  const ref = useRef()
  const { viewport } = useThree()
  
  useFrame((state) => {
    ref.current.position.y += 0.1
    if (ref.current.position.y > viewport.height / 1.5) {
      ref.current.position.y = -viewport.height / 1.5
    }

  })

  return (
    <mesh ref={ref} onClick={() => setClicked(!clicked)}>
      <boxGeometry />
      <meshBasicMaterial color="orange" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <Box />
    </Canvas>
  )
}
