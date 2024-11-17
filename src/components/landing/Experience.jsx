import { Float, Line, OrbitControls, PerspectiveCamera, Text, useScroll } from "@react-three/drei";
import Background from "./Background";
import { Iceberg } from "./Low_poly_iceberg_scene";
import Water from "./Water";
import * as THREE from 'three'
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { TextPath } from "./TextPath";
import gsap from "gsap";
import { usePlay } from "./Play";
import {Speed} from "./Speed";
import { Ship_Updated } from "./Ship";
import { Glacier } from "./Glaciers";
import { Glacier1 } from "./Glaciers1";
import { Glacier2 } from "./Glaciers2";

const LINE_NB_POINTS = 1000;
const CURVE_DIST = 26
const CURVE_AHEAD_CAMERA = 0.008;
const CURVE_AHEAD_SHIP = 0.02;
const SHIP_MAX_ANGLE = 20;
const FRICTION_DISTANCE = 8;

export const Experience = () => {
  const curvePoints = useMemo(
    () => [
      new THREE.Vector3(0,0,0),
      new THREE.Vector3(0,0,-CURVE_DIST),
      new THREE.Vector3(23,0,-2*CURVE_DIST),
      new THREE.Vector3(-25,0,-3*CURVE_DIST),
      new THREE.Vector3(-18,0,-4*CURVE_DIST),
      new THREE.Vector3(0,0,-5*CURVE_DIST),
      
    ],
    []
  );
  
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(curvePoints, false, "catmullrom", 0.5);
  }, []);

  const sceneOpacity = useRef(0)

  const textSections = useMemo(() => {
    return [
      {
        cameraRailDist: 3,
        position: new THREE.Vector3(
          curvePoints[0].x + 2,
          curvePoints[0].y + 0.4,
          curvePoints[0].z - 8
        ),
        subtitle: `Welcome to Prometeo '25,
Have a seat and enjoy the ride!`,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[2].x + 2,
          curvePoints[2].y,
          curvePoints[2].z
        ),
        title: "Services",
        subtitle: `Do you want a drink?
We have a wide range of beverages!`,
      },
      {
        cameraRailDist: -1,
        position: new THREE.Vector3(
          curvePoints[3].x - 4,
          curvePoints[3].y,
          curvePoints[3].z
        ),  
        title: "Fear of flying?",
        subtitle: `Our flight attendants will help you have a great journey`,
      },
      {
        cameraRailDist: 1.5,
        position: new THREE.Vector3(
          curvePoints[5].x - 3.5,
          curvePoints[5].y,
          curvePoints[5].z
        ),
        title: "Movies",
        subtitle: `We provide a large selection of medias, we highly recommend you Porco Rosso during the flight`,
      },
    ];
  }, []);

  const linePoints = useMemo(() => {
    return curve.getPoints(LINE_NB_POINTS)
  }, [curve])
  const ship = useRef()
  const cameraGroup = useRef()
  const cameraRail = useRef()
  const camera = useRef()
  const scroll = useScroll()
  const lastScrollPosition = useRef(0)
  const { play, setHasScroll, end, setEnd} = usePlay()
  const [shipScale, setShipScale] = useState(0)
  useFrame((_state, delta) => {
    if (window.innerWidth > window.innerHeight) {
      // LANDSCAPE
      camera.current.fov = 70;
      camera.current.position.z = 5;
      setShipScale(0.08)
    } 
    else {
      // PORTRAIT
      // camera.current.fov = 80;
      // camera.current.position.z = 6;
      setShipScale(0.06)
    }

    if (lastScrollPosition.current <= 0 && scroll.offset > 0) {
      setHasScroll(true);
    }

    if (play && !end && sceneOpacity.current < 1) {
      sceneOpacity.current = THREE.MathUtils.lerp(
        sceneOpacity.current,
        1,
        delta * 0.1
      );
    }

    // if (end && sceneOpacity.current > 0) {
    //   sceneOpacity.current = THREE.MathUtils.lerp(
    //     sceneOpacity.current,
    //     0,
    //     delta
    //   );
    // }

    // if (end){
    //   return
    // }

    const scrollOffset = Math.max(0, scroll.offset)

    //close on text sections
    let frictionFactor = 1
    let resetCameraRail = true
    textSections.forEach((text)=> {
      const distance = text.position.distanceTo(
        cameraGroup.current.position
      )
      if (distance<FRICTION_DISTANCE){
        frictionFactor = Math.max(distance/FRICTION_DISTANCE, 0.1)
        const targetCameraRailPosition = new THREE.Vector3((1 - distance/FRICTION_DISTANCE) * text.cameraRailDist, 0, 0)
        cameraRail.current.position.lerp(targetCameraRailPosition, delta)
        resetCameraRail = false
      } 
    })
    if (resetCameraRail) {
      const targetCameraRailPosition = new THREE.Vector3(0,0,0)
      cameraRail.current.position.lerp(targetCameraRailPosition, delta)
    }
    //text slowed scroll 
    let lerpedScrollOffset = THREE.MathUtils.lerp(
      lastScrollPosition.current,
      scrollOffset,
      delta * frictionFactor
    )
    lerpedScrollOffset = Math.min(lerpedScrollOffset, 1)
    lerpedScrollOffset = Math.max(lerpedScrollOffset, 0)
    lastScrollPosition.current = lerpedScrollOffset

    timeLine.current.seek(lerpedScrollOffset * timeLine.current.duration())

    const curPoint = curve.getPoint(lerpedScrollOffset)
    cameraGroup.current.position.lerp(curPoint, delta*24)

    const lookAtPoint = curve.getPoint(Math.min(lerpedScrollOffset + CURVE_AHEAD_CAMERA, 1))

    const currentLookAt = cameraGroup.current.getWorldDirection(
      new THREE.Vector3()
    );
    const targetLookAt = new THREE.Vector3()
      .subVectors(curPoint, lookAtPoint)
      .normalize();

    const lookAt = currentLookAt.lerp(targetLookAt, delta * 24);
    cameraGroup.current.lookAt(
      cameraGroup.current.position.clone().add(lookAt)
    );

    //rotation
    const tangent = curve.getTangent(lerpedScrollOffset + CURVE_AHEAD_SHIP);

    const nonLerpLookAt = new THREE.Group();
    nonLerpLookAt.position.copy(curPoint);
    nonLerpLookAt.lookAt(nonLerpLookAt.position.clone().add(targetLookAt));

    tangent.applyAxisAngle(
      new THREE.Vector3(0, 1, 0),
      -nonLerpLookAt.rotation.y
    );

    let angle = Math.atan2(-tangent.z, tangent.x);
    angle = -Math.PI / 2 + angle;

    let angleDegrees = (angle * 180) / Math.PI;
    angleDegrees *= 2.4; // stronger angle
    
    if (angleDegrees < 0) {
      angleDegrees = Math.max(angleDegrees, -SHIP_MAX_ANGLE);
    }
    if (angleDegrees > 0) {
      angleDegrees = Math.min(angleDegrees, SHIP_MAX_ANGLE);
    }
    angle = (angleDegrees * Math.PI) / 180;

    const targetShipQuaternion = new THREE.Quaternion().setFromEuler(
      new THREE.Euler(
        ship.current.rotation.x,
        ship.current.rotation.y,
        angle
      )
    );
    ship.current.quaternion.slerp(targetShipQuaternion, delta * 2);

    if (cameraGroup.current.position.z < curvePoints[curvePoints.length - 1].z + 100){
      // setEnd(true)
      // shipOutTimeline.current.play()
    }
  })
  
  const timeLine = useRef()
  const backgroundColors = useRef({
    colorA: '#3535cc',
    colorB: '#abaadd'
  })

  const shipInTimeline = useRef()
  const shipOutTimeline = useRef()

  useLayoutEffect(() => {
    timeLine.current = gsap.timeline()
    timeLine.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#6f35cc",
      colorB: "#ffad30",
    });
    timeLine.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#424242",
      colorB: "#ffcc00",
    });
    timeLine.current.to(backgroundColors.current, {
      duration: 1,
      colorA: "#81318b",
      colorB: "#55ab8f",
    });

    timeLine.current.pause()

    shipInTimeline.current = gsap.timeline()
    shipInTimeline.current.pause()
    shipInTimeline.current.from(ship.current.position, {
      duration: 3,
      z: 7,
      y: -2
    })

    shipOutTimeline.current = gsap.timeline()
    shipOutTimeline.current.pause()
    shipOutTimeline.current.to(
      ship.current.position,
      {duration: 10, z: -250, y: 10}, 0
    )
    shipOutTimeline.current.to(
      cameraRail.current.position,
      {
        duration: 8,
        y: 12,
      },
      0
    );
    shipOutTimeline.current.to(ship.current.position, {
      duration: 1,
      z: -1000,
    });

  }, [])

  useEffect(() => {
    if (play) {
      shipInTimeline.current.play()
    }
  })

  

  return (
    <>
      
      {/* <OrbitControls enableZoom={true} /> */}
      <group ref={cameraGroup}>
        <Speed/>
        <Background backgroundColors={backgroundColors} />
        <group ref={cameraRail}>
          <PerspectiveCamera ref={camera} position={[0,1,5]} fov={70} makeDefault />
        </group>
        <Float floatIntensity={0.3} speed={0.4} rotationIntensity={0.001}>
          <Water/>
        </Float>
        
        <group ref={ship}>
          <Float floatIntensity={0.8} speed={1} ref={ship} rotationIntensity={0.01}>
            <Ship_Updated scale={[shipScale, shipScale, shipScale]} position={[0,-1.1,0]} rotation-y={Math.PI} />
          </Float>
        </group>
      </group>

      {textSections.map((textSection, index) => (
          <TextPath {...textSection} key={index} />
        ))}
      
      {/* <Iceberg opacity={sceneOpacity} scale={[0.3,0.3,0.3]} position={[-10, 0.3, -30]} />
      <Iceberg opacity={sceneOpacity} scale={[0.3,0.3,0.4]} position={[-8, 0.5, -20]} />
      <Iceberg opacity={sceneOpacity} scale={[0.2,0.1,0.3]} position={[9, -0.2, -15]} />
      <Iceberg opacity={sceneOpacity} scale={[0.4,0.4,0.4]} position={[10, 0.2, -40]} /> */}
      <Glacier scale={[15,15,15]} position={[23.5, 0, -70]} />
      <Glacier scale={[13,13,13]} position={[24, 0, -130]} />
    </>
  );
};