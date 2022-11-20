import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import World from "@/components/World";

function App() {
  return (
    <Canvas style={{ position: "absolute" }}>
      <Suspense fallback={null}>
        <World />
      </Suspense>
    </Canvas>
  );
}

export default App;
