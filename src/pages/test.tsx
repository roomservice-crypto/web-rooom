import { Canvas } from "@react-three/fiber";

export default function Test() {
  return (
    <div className="h-[100vh] w-full bg-slate-50">
      <Canvas>
        <ambientLight />
        <directionalLight position={[0, 0, 5]} />
        <mesh>
          <boxGeometry intensity={0.1} />
          <meshStandardMaterial color="#aac" />
        </mesh>
      </Canvas>
    </div>
  );
}
