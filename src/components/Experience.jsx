import {
  Float,
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import * as THREE from "three"; // Optional if not explicitly needed
import React, { Suspense } from "react";
import { Chair } from "./Chair";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Experience = () => {
    // const {scene} = useLoader(GLTFLoader ,"/model/chair.gltf" )
  return (
    <>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        // rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage
          contactShadow={true}
          intensity={0.5}
          environment="city"
          adjustCamera={false}
        >
          {/* <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]

        > */}
        <Suspense fallback={null}>
            <Chair/>
        </Suspense>
          {/* </Float> */}
        </Stage>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, 0]}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
