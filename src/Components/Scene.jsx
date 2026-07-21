import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function PurpleOrb() {
  const orb = useRef();

  useFrame((state) => {
    orb.current.rotation.y += 0.002;

    orb.current.scale.setScalar(
      1 + Math.sin(state.clock.elapsedTime * 2) * 0.08
    );
  });

  return (
    <mesh ref={orb} position={[0, 0, 0]}>
      <sphereGeometry args={[0.65, 64, 64]} />

      <meshStandardMaterial
        color="#8b3dff"
        emissive="#8b3dff"
        emissiveIntensity={4}
        metalness={0.3}
        roughness={0.1}
      />
    </mesh>
  );
}

function Cylinder() {
  const cylinder = useRef();

  useFrame(() => {
    cylinder.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={cylinder}>
      <cylinderGeometry
        args={[
          4.5, // top radius
          4.5, // bottom radius
          6,   // height
          128, // segments
          1,
          true // open ended
        ]}
      />

      <meshStandardMaterial
        color="#444"
        transparent
        opacity={0.12}
        wireframe
        side={2}
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <>
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[0, 0, 0]}
        color="#8b3dff"
        intensity={50}
      />

      <PurpleOrb />

      <Cylinder />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </>
  );
}