import * as THREE from "three";
import React, { useMemo } from "react";

const HeroLights = () => {
  const rectLight = useMemo(() => {
    const light = new THREE.RectAreaLight(0xa259ff, 15, 3, 2);
    light.position.set(1, 3, 4);
    light.rotation.set(-Math.PI / 4, Math.PI / 4, 0);
    return light;
  }, []);

  return (
    <>
      {/* Key Spotlight */}
      <spotLight
        position={[2, 5, 6]}
        angle={0.2}
        penumbra={0.3}
        intensity={80}
        color="#ff9e00"
        castShadow
      />

      {/* Cool Overhead Accent */}
      <spotLight
        position={[4, 6, 4]}
        angle={0.35}
        penumbra={0.6}
        intensity={35}
        color="#ff6f61"
      />

      {/* Warm Side Fill */}
      <spotLight
        position={[-3, 4.5, 5]}
        angle={0.45}
        penumbra={0.8}
        intensity={50}
        color="#ffadad"
      />

      {/* Rect Area Light for mood */}
      <primitive object={rectLight} />

      {/* Atmospheric Point Lights */}
      <pointLight position={[0, 1, 0]} intensity={8} color="#8209b7" />
      <pointLight position={[1, 2, -2]} intensity={6} color="#9d00a4" />
    </>
  );
};

export default HeroLights;
