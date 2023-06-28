import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box() {
  const ref = useRef()
  const [clicked, setClicked] = useState(false)

  useFrame((state) => {
    ref.current.position.z = clicked ? 1 : 0

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
