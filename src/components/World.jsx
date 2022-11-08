import Cube from "@/components/Cube";

function World() {
  return (
    <>
      {/* Lights */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      {/* Objects */}
      <Cube />
    </>
  );
}

export default World;
