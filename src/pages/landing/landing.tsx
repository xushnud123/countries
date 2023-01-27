import { FC, useState } from "react";
import cx from "classnames";
import { useInView } from "react-intersection-observer";

import { Cards, Hero, Navbar } from "./components";

import cls from "./landing.module.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const [state, setState] = useState(false);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  return (
    <div className={cx(cls.wrapper, state && cls.active)}>
      <div className={cls.grad1} />
      <div className={cls.grad2} />
      <div className={cls.grad3} />
      <Navbar state={state} onState={setState} inView={inView} />
      <div className={cls.container}>
        <Hero />
        <div ref={ref}>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Landing;
