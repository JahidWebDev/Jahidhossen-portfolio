import { Text3D, Center } from "@react-three/drei";

const words = [
  "BUILDING",
  "BRANDS,",
  "DIGITAL",
  "EXPERIENCES",
  "BUILDING",
  "BRANDS,",
  "DIGITAL",
  "EXPERIENCES",
];

export default function CylinderText() {
  const radius = 4.5;

  return (
    <group>
      {words.map((word, index) => {
        const angle = (index / words.length) * Math.PI * 2;

        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <group
            key={index}
            position={[x, 0, z]}
            rotation={[0, angle + Math.PI, 0]}
          >
            <Center>
              <Text3D
                font="/fonts/helvetiker_bold.typeface.json"
                size={0.7}
                height={0.22}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.015}
                bevelSegments={5}
              >
                {word}

                <meshStandardMaterial
                  color="#666"
                  metalness={0.8}
                  roughness={0.2}
                />
              </Text3D>
            </Center>
          </group>
        );
      })}
    </group>
  );
}