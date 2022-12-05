import { ReactNode, FC } from "react";

import cls from "./main.module.scss";

interface MainProps {
  cardLeft: ReactNode;
  cardRight: ReactNode;
}

const Main: FC<MainProps> = ({ cardLeft, cardRight }) => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.cardLeft}>{cardLeft}</div>
        <div className={cls.cardRight}>{cardRight}</div>
      </div>
    </div>
  );
};

export default Main;
