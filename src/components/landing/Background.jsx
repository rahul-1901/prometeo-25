import {Environment, Sphere} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import {LayerMaterial, Gradient} from 'lamina'
import { useRef } from 'react'
import * as THREE from 'three'
const Background = ({backgroundColors}) => {
  
  const gradientRef = useRef()
  const gradientEnvRef = useRef()

  useFrame(()=>{
    gradientRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
    gradientEnvRef.current.colorA = new THREE.Color(
      backgroundColors.current.colorA
    );
    gradientEnvRef.current.colorB = new THREE.Color(
      backgroundColors.current.colorB
    );
  })

  return (
    <>
        <Sphere scale={[200,200,200]} rotation-y={Math.PI / 2} rotation-x={Math.PI} >
              <LayerMaterial color={'#ffffff'} side={THREE.BackSide}>
                  <Gradient ref={gradientRef} axes='y' start={0.3} end={-0.8}></Gradient>
              </LayerMaterial>
        </Sphere>
        <Environment resolution={256} frames={Infinity}>
          <Sphere scale={[100,100,100]} rotation-y={Math.PI / 2} rotation-x={Math.PI}>
              <LayerMaterial color={'#ffffff'} side={THREE.BackSide}>
                  <Gradient ref={gradientEnvRef} axes='y' start={0.3} end={-0.5}></Gradient>
              </LayerMaterial>
          </Sphere>
        </Environment>
    </>
  )
}

export default Background