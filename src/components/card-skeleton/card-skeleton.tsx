import Skeleton from "react-loading-skeleton";

import cls from "./card-skeleton.module.scss";

const Card = () => {
  return (
    <div className={cls.cards} >
      <Skeleton className={cls.card} width='100%' height='100%' />
      <Skeleton className={cls.title} />
    </div>
  );
};

export default Card;
