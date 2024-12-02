import { OrbitControls, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";

const Light = (props) => {
  const lightRef = useRef();

  return (
    <ambientLight
      {...props}
      // ref={lightRef}
      // position={[0, 4, 4]}
      intensity={1}
    />
  );
};

function Scene({ children }) {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 2]} camera={{position:[0,0,8]}}>
      <color attach="background" args={["#101010"]} />
      <fog attach="fog" args={["#101010", 10, 20]} />
      {/* <OrbitControls  />  */}
      {children}
    </Canvas>
  );
}

export default Scene;
