import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import cls from "./region.module.scss";

interface RegionProps {
  data: string[];
  name: string;
}

const Region: FC<RegionProps> = ({ data, name }) => {
  const [nav, setNav] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (nav.length !== 0) {
      const handler = () => navigate(nav[0] === "/" ? "/" : `filter/${nav}`);

      handler();
    }
  }, [nav]);

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>{name}</h1>
      <div className={cls.container}>
        <div className={cls.btns}>
          {data.map((reg) => (
            <button
              type='button'
              key={reg}
              onClick={() => setNav(`${name}$${reg}`)}
              className={cx(cls.btn, reg === nav && cls.active)}>
              <p>{reg}</p>
            </button>
          ))}
          <button
            type='button'
            onClick={() => setNav("/")}
            className={cx(cls.btn, (nav === "/" || nav === "") && cls.active)}>
            <p>All Countries</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Region;
