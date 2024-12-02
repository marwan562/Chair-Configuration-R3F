import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function Chair(props) {
  const { nodes, materials } = useGLTF('/model/chair.gltf')
  const leatherTexture = useTexture({
    map
  })
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair} />
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.064, 0.045]} />
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs}  />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false}  />
    </group>
  )
}

useGLTF.preload('/model/chair.gltf')
