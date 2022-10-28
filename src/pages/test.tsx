import ExampleScene from "@/components/test/ExampleScene";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

export default function Test() {
  return (
    <div
      className="h-[100vh] w-full bg-slate-50"
      style={{
        background:
          "linear-gradient(204.64deg, #4F46E5 15.72%, #A855F7 84.28%)",
      }}
    >
      <Canvas frameloop="demand" shadows={true}>
        <ExampleScene />
      </Canvas>
    </div>
  );
}
