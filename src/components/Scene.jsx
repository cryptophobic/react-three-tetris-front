import { useFrame, extend, useThree } from '@react-three/fiber'
import { useRef } from "react";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import Custom from "./Custom.jsx";
// import { OrbitControls } from "@react-three/drei"

extend({ OrbitControls: OrbitControls })

export const Scene = () => {
    const cubeRef = useRef();
    const planeRef = useRef();
    const { gl, camera } = useThree();


    useFrame((state, delta) => {
        //state.camera.position.x = Math.sin(state.clock.elapsedTime);
        //console.log(state.clock.elapsedTime);
        // planeRef.current.rotation.y += delta;
        // cubeRef.current.rotation.y -= delta
    })

    return (
        <>
            <orbitControls args={[camera, gl.domElement]}/>
            <axesHelper args={[3]}/>
            <gridHelper args={[20, 20]}/>

            <Custom />

            {/*<OrbitControls />*/}
            <mesh ref={planeRef} position-x={-2} rotation-x={Math.PI / 2}>
                <planeGeometry args={[2, 2]}/>
                <meshBasicMaterial color={"orange"} side={THREE.DoubleSide}/>
            </mesh>
            <mesh ref={cubeRef} position-x={2}>
                <boxGeometry/>
                <meshBasicMaterial color="#7a00ca"/>
            </mesh>
        </>
    )
}