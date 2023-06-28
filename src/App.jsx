import * as THREE from 'three'
import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment } from '@react-three/drei'

function Box({ z }) {
  const ref = useRef()
  const { viewport, camera } = useThree()
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z])
  
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
  })

  useFrame((state) => {
    ref.current.position.set(data.x * width, (data.y += 0.5), z)
    if (data.y > height / 1.5) {
      data.y = -height / 1.5
    }
  })

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color="orange" />
    </mesh>
  )
}

function Banana(props) {
  const { scene } = useGLTF('/banana-v1.glb')
  return <primitive object={scene} {...props} />
}

export default function App({ count = 100}) {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} intensity={2} />
      <Suspense fallback={null}>
        <Banana scale={0.5} />
        <Environment preset="sunset" />
      </Suspense>
      {/*Array.from({ length: count }, (_, i) => (<Box key={i} z={-i} />))*/}
    </Canvas>
  )
}
