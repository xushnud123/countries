import React, { useRef } from "react";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import EarthClouds from "assets/textures/8k_earth_clouds.jpg";
import EarthDayMap from "assets/textures/8k_earth_daymap.jpeg";
import EarthNightMap from "assets/textures/8k_earth_nightmap.jpeg";
import EarthNormal from "assets/textures/8k_earth_normal_map.jpeg";
import EarthSpecular from "assets/textures/8k_earth_specular_map.jpeg";

export function Earth(params: any) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormal, EarthSpecular, EarthClouds]
  );

  const earthRef = useRef(null);
  const cloudRef = useRef(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    // @ts-ignore
    earthRef.current.rotation.y = elapsedTime / 6;
    // @ts-ignore
    cloudRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color='#fff' position={[2, 0, 5]} intensity={2} />
      <Stars
        radius={300}
        depth={20}
        count={20000}
        factor={10}
        saturation={1}
        fade={true}
      />
      <mesh ref={cloudRef} position={[0, 0, 1]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 1]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
