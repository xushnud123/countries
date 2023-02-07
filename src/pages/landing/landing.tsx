import { FC, useState } from "react";
import cx from "classnames";

import { Hero, InfoCards, Navbar } from "./components";

import cls from "./landing.module.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const [state, setState] = useState(false);

  return (
    <div className={cx(cls.wrapper, state && cls.active)}>
      <div className={cls.grad1} />
      <div className={cls.grad2} />
      <div className={cls.grad3} />
      <Navbar state={state} onState={setState} />
      <div className={cls.container}>
        <Hero />
        <InfoCards/>
      </div>
          {/* <Cards /> */}
    </div>
  );
};

export default Landing;
