import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import cls from "./earth.module.scss";
import { EarthMesh } from "./components/earth";

interface EarthProps {}

const Earth: FC<EarthProps> = () => (
  <div className={cls.wrapper}>
    <Canvas>
      <Suspense fallback={null}>
        <EarthMesh />
      </Suspense>
    </Canvas>
  </div>
);

export default Earth;
