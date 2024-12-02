import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { AmbientLight, DirectionalLight, SpotLight, SpotLightHelper } from "three";

const Light = (props) => {
  const lightRef = useRef();


  return (
    <directionalLight
      {...props}
      ref={lightRef}
      position={[0, 4, 4]}
      intensity={1}
    />
  );
};

function Scene({ children }) {
 
  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      dpr={[1, 2]}
      camera={{ position: [0, 2, 5], fov: 65 }}
    >
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 10, 20]} />
      {/* <axesHelper args={[5]} /> Optional: Add axes for debugging */}
      <Light />
      <OrbitControls /> {/* Optional: Allow camera movement */}
      {children}
    </Canvas>
  );
}

export default Scene;
