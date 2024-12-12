
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GlacierFinal(props) {
  const { nodes, materials } = useGLTF('./models/environment/glacier_op.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={materials['Material.001']}
        position={[-2.694, 0, 3.474]}
        scale={0}
      />
    </group>
  )
}

useGLTF.preload('./models/environment/glacier_op.glb')