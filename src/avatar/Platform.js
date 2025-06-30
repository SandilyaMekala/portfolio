import { useTexture } from '@react-three/drei';

export const Platform = ({ position = [0, -1, 4], size = [3, 3] }) => {
  const texture = useTexture('/textures/platform.png'); // replace with your actual path

  return (
    <mesh position={position} rotation={[-0.3, 0, 0]}>
      <planeGeometry args={size} />
      <meshStandardMaterial map={texture} color='#9FBDC2' transparent={true} alphaTest={0.5} />
    </mesh>
  );
};
