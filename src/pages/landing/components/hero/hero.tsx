import { FC, useEffect, useRef } from "react";

import cls from "./hero.module.scss";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const ref = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);

  useEffect(() => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const refs = ref.current;
    const viewportHeight = (1170 - window.innerWidth) / 2;

    // @ts-ignore
    refs.scroll({ left: viewportHeight, behavior: "smooth" });
  }, []);

  const onScroll = () => {
    console.log(window.innerWidth);
    // @ts-ignore
    console.log(ref.current?.scrollLeft);
    const refs = card1.current;
    const refs2 = card5.current;
    // @ts-ignore
    const value = 1 - ref.current?.scrollLeft * 0.01;
    // @ts-ignore
    const value2 = -value * (window.innerWidth > 700 ? 1 : 0.3);
    // @ts-ignore
    refs.style.transform = `scale(${value > 0.5 ? value : 0.5})`;
    // @ts-ignore
    refs2.style.transform = `scale(${value2 > 1 ? 1 : 0.5})`;
  };

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>
        Search for information about <span>Countries</span> with us{" "}
        <span>fast</span>,
        <span>convenient</span>, <span>reliable</span>.
      </h1>
      <div ref={ref} onScroll={onScroll} className={cls.container}>
        <div className={cls.row}>
          <div ref={card1} className={cls["left-cart-1"]}>
            <div className={cls["card-1"]}>
              <img
                src='https://source.unsplash.com/collection/190727/500x500'
                alt='img not found'
              />
            </div>
          </div>
          <div ref={card2} className={cls["left-cart-2"]}>
            <div className={cls["card-1"]}>
              <img
                src='https://source.unsplash.com/collection/190727/500x500'
                alt='img not found'
              />
            </div>
            <div className={cls["card-2"]}>
              <img
                src='https://source.unsplash.com/collection/190727/500x500'
                alt='img not found'
              />
            </div>
          </div>
          <div ref={card3} className={cls["center"]}>
            <div className={cls["card-1"]}>
              <img
                src='https://source.unsplash.com/1000x1000/?girls'
                alt='img not found'
              />
            </div>
          </div>
          <div ref={card4} className={cls["right-cart-2"]}>
            <div className={cls["card-2"]}>
              <img
                src='https://source.unsplash.com/collection/190727/500x500'
                alt='img not found'
              />
            </div>
            <div className={cls["card-1"]}>
              <img
                src='https://source.unsplash.com/collection/190727/500x500'
                alt='img not found'
              />
            </div>
          </div>
          <div ref={card5} className={cls["left-cart-1"]}>
            <div className={cls["card-1"]}>
              <img
                src='https://source.unsplash.com/collection/190727/500x500'
                alt='img not found'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
