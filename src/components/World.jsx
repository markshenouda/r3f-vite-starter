import { OrbitControls } from "@react-three/drei";
import Cube from "@/components/Cube";

function World() {
  return (
    <>
      {/* Controls */}
      <OrbitControls />

      {/* Lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Objects */}
      <Cube />
    </>
  );
}

export default World;
