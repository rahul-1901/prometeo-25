import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Water = (props) => {
    const group = React.useRef()
    const { nodes, materials, animations } = useGLTF('./models/iceberg/low_poly_iceberg_scene.glb')
    const { actions } = useAnimations(animations, group)  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="e630e7fd7a8040388f27e4b33bfb0044fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                {/* <group name="Iceberg" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Iceberg_Iceberg_0" geometry={nodes.Iceberg_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Small_Platform" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Small_Platform_Iceberg_0" geometry={nodes.Small_Platform_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere" position={[330.588, -513.18, -354.134]} rotation={[-Math.PI / 2, 0, 0]} scale={[122.554, 122.554, 73.57]}>
                  <mesh name="Icosphere_Iceberg_0" geometry={nodes.Icosphere_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere001" position={[350.444, -487.539, -194.209]} rotation={[-2.213, 1.087, -0.198]} scale={-16.563}>
                  <mesh name="Icosphere001_Iceberg_0" geometry={nodes.Icosphere001_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere002" position={[369.924, -487.539, -210.147]} rotation={[-2.213, 1.087, -0.198]} scale={-8.717}>
                  <mesh name="Icosphere002_Iceberg_0" geometry={nodes.Icosphere002_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere003" position={[395.544, -509.706, 397.293]} rotation={[1.055, 0.568, 0.882]} scale={[85.065, 85.065, 51.065]}>
                  <mesh name="Icosphere003_Iceberg_0" geometry={nodes.Icosphere003_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere004" position={[-156.807, -522.941, 88.79]} rotation={[-Math.PI / 2, 0, 0]} scale={[39.474, 39.474, 58.634]}>
                  <mesh name="Icosphere004_Iceberg_0" geometry={nodes.Icosphere004_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere005" position={[-144.121, -523.984, 59.159]} rotation={[-Math.PI / 2, 0, 0]} scale={[29.039, 29.039, 43.885]}>
                  <mesh name="Icosphere005_Iceberg_0" geometry={nodes.Icosphere005_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere006" position={[-172.852, -493.634, 49.312]} rotation={[-Math.PI / 2, 0, 0]} scale={[22.204, 22.204, 13.828]}>
                  <mesh name="Icosphere006_Iceberg_0" geometry={nodes.Icosphere006_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere007" position={[341.026, -486.411, 367.591]} rotation={[-2.213, 1.087, -0.198]} scale={-9.494}>
                  <mesh name="Icosphere007_Iceberg_0" geometry={nodes.Icosphere007_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere008" position={[352.193, -484.157, 358.455]} rotation={[-2.213, 1.087, -0.198]} scale={-4.997}>
                  <mesh name="Icosphere008_Iceberg_0" geometry={nodes.Icosphere008_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere009" position={[328.804, -482.354, 385.303]} rotation={[-1.038, 1.123, -1.472]} scale={-11.777}>
                  <mesh name="Icosphere009_Iceberg_0" geometry={nodes.Icosphere009_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere010" position={[346.516, -482.887, 382.731]} rotation={[-1.038, 1.123, -1.472]} scale={-6.199}>
                  <mesh name="Icosphere010_Iceberg_0" geometry={nodes.Icosphere010_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere011" position={[-417.455, -488.61, 496.304]} rotation={[-2.213, 1.087, -0.198]} scale={-9.494}>
                  <mesh name="Icosphere011_Iceberg_0" geometry={nodes.Icosphere011_Iceberg_0.geometry} material={materials.Iceberg} />
                </group>
                <group name="Icosphere012" position={[-411.966, -485.087, 511.443]} rotation={[-1.038, 1.123, -1.472]} scale={-6.199}>
                  <mesh name="Icosphere012_Iceberg_0" geometry={nodes.Icosphere012_Iceberg_0.geometry} material={materials.Iceberg} />
                </group> */}
                {/* <group name="Floor" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh name="Floor_Ground_0" geometry={nodes.Floor_Ground_0.geometry} material={materials.Ground} />
                  <mesh name="Floor_Ground_0_1" geometry={nodes.Floor_Ground_0_1.geometry} material={materials.Ground} />
                </group> */}
                <group name="Water" rotation={[-Math.PI / 2, 0, 0]} scale={2000}>
                  <mesh name="Water_Water_0" geometry={nodes.Water_Water_0.geometry} material={materials.Water} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Water