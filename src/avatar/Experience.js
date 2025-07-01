import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar } from './Avatar';
import { Platform } from "./Platform";

export const Experience = () => {
    return (
        <>
            <OrbitControls 
                enabled={false}
                minDistance={2}
                maxDistance={10}
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
            <Platform position={[0, -0.5, 4]} size={[3, 3]} />
            <Avatar position={[0, -0.6, 4]} scale={2} />
            <Environment preset="sunset" />
        </>
    )
}