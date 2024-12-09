/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/environment/ocean_2.glb 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Ocean2(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('./models/environment/ocean_2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh name="large001" geometry={nodes.large001.geometry} material={materials.Material} morphTargetDictionary={nodes.large001.morphTargetDictionary} morphTargetInfluences={nodes.large001.morphTargetInfluences} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/environment/ocean_2.glb')
