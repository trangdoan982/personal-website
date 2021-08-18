import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls } from '@react-three/drei'

const App = () => {
  // const sunTexture = useTexture('sunTexture.png')
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars />
      <OrbitControls enablePan={true} enableRotate={true} enableZoom={true} />
    </Canvas>
  )
}

export default App
