import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useCustomization } from "../context/Customization";

export function Chair(props) {
  const { nodes, materials } = useGLTF("/model/chair.gltf");
  const { material, legs, chairColor, cushionColor } = useCustomization();
  const leatherTexture = useTexture({
    // map: "/textures/leather/Leather_008_Base Color.jpg",
    normalMap: "/textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "/textures/leather/Leather_008_Roughness.jpg",
    aoMap: "/textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  const fabricTexture = useTexture({
    // map: "/textures/fabric/Leather_Padded_001_basecolor.jpg",
    normalMap: "/textures/fabric/Leather_Padded_001_normal.jpg",
    roughnessMap: "/textures/fabric/Leather_Padded_001_roughness.jpg",
    aoMap: "/textures/fabric/Leather_Padded_001_ambientOcclusion.jpg",
  });

  // leatherTexture.map.repeat.set(3, 3);
  leatherTexture.normalMap.repeat.set(3, 3);
  //  leatherTexture.roughnessMap.repeat.set(3, 3);
  leatherTexture.aoMap.repeat.set(3, 3);
  // leatherTexture.map.wrapS = leatherTexture.map.wrapT =
  //   THREE.MirroredRepeatWrapping;
  leatherTexture.normalMap.wrapS = leatherTexture.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTexture.roughnessMap.wrapS = leatherTexture.roughnessMap.wrapT =
    THREE.MirroredRepeatWrapping;
  leatherTexture.aoMap.wrapS = leatherTexture.aoMap.wrapT =
    THREE.RepeatWrapping;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry}>
        <meshStandardMaterial
          color={chairColor}
          {...(material === "leather" ? leatherTexture : fabricTexture)}
        />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} position={[0, 0.064, 0.045]}>
        <meshStandardMaterial
          color={cushionColor}
          {...(material === "fabric" ? fabricTexture : leatherTexture)}
        />
      </mesh>
      <mesh
        geometry={nodes.Legs1.geometry}
        material={materials.Legs}
        visible={legs === 2}
      />
      <mesh
        geometry={nodes.Legs2.geometry}
        material={materials.Legs}
        visible={legs === 1}
      />
    </group>
  );
}

useGLTF.preload("/model/chair.gltf");
