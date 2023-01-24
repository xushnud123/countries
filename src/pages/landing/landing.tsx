import { FC } from "react";
import { useInView } from "react-intersection-observer";

import { Cards, Hero, Navbar } from "./components";

import cls from "./landing.module.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.6,
  });

  return (
    <div className={cls.wrapper}>
      <div className={cls.grad1} />
      <div className={cls.grad2} />
      <div className={cls.grad3} />
      <Navbar inView={inView} />
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
