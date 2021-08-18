import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, OrbitControls, Sphere, useTexture, PerspectiveCamera } from '@react-three/drei'


const App = () => {
  const sunTexture = useTexture('sunTexture.png')
  return <>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Stars
      depth={100}
      radius={100}
      count={500} />

    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
  </>
}

export default App
