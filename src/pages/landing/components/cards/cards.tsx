import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import cls from "./cards.module.scss";
import { Earth } from "./components/earth";

interface CardsProps {}

const Cards: FC<CardsProps> = () => (
  <div className={cls.wrapper}>
    <Canvas>
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
    </Canvas>
  </div>
);

export default Cards;
