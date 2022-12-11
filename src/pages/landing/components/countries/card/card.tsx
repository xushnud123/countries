import { FC } from "react";
import { Link } from "react-router-dom";

import cls from "./card.module.scss";

interface CardProps {
  official: string;
  svg: string;
  name: string[];
}

const Card: FC<CardProps> = ({ official, svg, name }) => {
  return (
    <Link to={`/${official}`} className={cls.cards}>
      <div className={cls.card}>
        <div className={cls["card-header"]}>
          <img className={cls.img} src={svg} alt='img not found' />
        </div>
        <div className={cls["card-body"]}>
          <h5 className={cls.title}>{name[1] || name[0]}</h5>
        </div>
      </div>
    </Link>
  );
};

export default Card;
