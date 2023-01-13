import { FC, ReactNode, useState } from "react";
import cx from "classnames";

import arrow from "assets/images/icons/arrow.svg";

import cls from "./main-layout.module.scss";

interface MainLayoutProps {
  cardLeft: ReactNode;
  cardRight: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ cardLeft, cardRight }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cx(cls.cardLeft, open && cls.active)}>
          <div className={cls.row}>
            {cardLeft}
            <div
              className={cx(cls.open, open && cls.activeOpen)}
              onClick={() => setOpen(!open)}>
              <img className={cls.arrow} src={arrow} alt='img not founds' />
            </div>
          </div>
        </div>
        <div className={cls.cardRight}>{cardRight}</div>
      </div>
    </div>
  );
};

export default MainLayout;
