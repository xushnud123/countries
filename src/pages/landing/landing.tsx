import { FC, useCallback, useMemo, useState } from "react";
import cx from "classnames";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";

import { Hero, InfoCards, Navbar } from "./components";

import cls from "./landing.module.scss";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const [state, setState] = useState(false);
  const options = useMemo(() => {
    return {
      background: {
        color: "#02021e",
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
          speed: { min: 1, max: 3 },
        },
        size: {
          value: { min: 10, max: 30 },
        },
        opacity: {
          value: { min: 0.3, max: 0.7 },
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 30,
        },
        shape: {
          type: "image",
          random: {
            enable: true,
          },
          image: [
            {
              src: "https://source.unsplash.com/500x500/?girls",
              width: 100,
              height: 100,
              replaceColor: false,
              borderRadius: "50%",
            },
            {
              src: "https://particles.js.org/images/fruits//apple.png",
              width: 100,
              height: 100,
              replaceColor: false,
              borderRadius: "50%",
            },
            {
              src: "https://particles.js.org/images/fruits//avocado.png",
              width: 100,
              height: 100,
              replaceColor: false,
              borderRadius: "50%",
            },
          ],
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine: any) => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);

  return (
    <>
      <div className={cx(cls.wrapper, state && cls.active)}>
        <div className={cls.grad1} />
        <div className={cls.grad2} />
        <div className={cls.grad3} />
        <Navbar state={state} onState={setState} />
        <div className={cls.container}>
          <Hero />
          <InfoCards />
        </div>
      </div>
      {
        // @ts-ignore
        <Particles init={particlesInit} options={options} />
      }
    </>
  );
};

export default Landing;
