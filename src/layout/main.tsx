import { ReactNode, FC, useState } from "react";
import cx from "classnames";

import cls from "./main.module.scss";

interface MainProps {
  cardLeft: ReactNode;
  cardRight: ReactNode;
}

const Main: FC<MainProps> = ({ cardLeft, cardRight }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cx(cls.cardLeft, open && cls.active)}>
          <div className={cls.row}>
            {cardLeft}
            <div
              className={cx(cls.open, open && cls.activeOpen)}
              onClick={() => setOpen(!open)}>
              Open
            </div>
          </div>
        </div>
        <div className={cls.cardRight}>{cardRight}</div>
      </div>
    </div>
  );
};

export default Main;
