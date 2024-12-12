import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Ocean(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/environment/ocean_4_op.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="large002" scale={[1, 1.058, 1]}>
          <mesh
            name="mesh_0"
            castShadow
            receiveShadow
            geometry={nodes.mesh_0.geometry}
            material={materials['Material.006']}
            morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
            morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
            position={[-11.012, -0.336, -117.047]}
            scale={0.008}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/environment/ocean_4_op.glb')