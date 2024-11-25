import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "./Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]); // Load texture

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1, 10]} /> {/* Geometry for the ball */}
        <meshStandardMaterial
          color="#ffffff"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Main Decal */}
        {decal && (
          <Decal
            position={[0, 0, 1]} // Centered on the front
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal} // Decal (texture) applied here
            flatShading
          />
        )}
        {/* Background Decal */}
        {decal && (
          <Decal
            position={[0, 0, -1]} // On the back of the ball
            rotation={[-Math.PI / 2, 0, 0]} // Adjust rotation for proper alignment
            scale={1} // Slightly larger for the background effect
            map={decal} // Reuse the same decal texture
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
