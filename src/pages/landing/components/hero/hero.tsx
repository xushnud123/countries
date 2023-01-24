import { FC } from "react";

import cls from './hero.module.scss'

interface HeroProps {}

const Hero: FC<HeroProps> = () => <div className={cls.wrapper}> Hero </div>;

export default Hero;
