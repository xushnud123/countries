import { FC, useState } from "react";
import cx from "classnames";

import { Button } from "components";

import logo from "assets/images/logo/logo_2.svg";

import cls from "./navbar.module.scss";

interface NavbarProps {
  inView?: boolean;
}

const Navbar: FC<NavbarProps> = ({ inView }) => {
  const [state, setState] = useState("");

  return (
    <div className={cx(cls.wrapper, inView && cls.act)}>
      <div className={cls.nav}>
        <div className={cls.logo}>
          <img src={logo} alt='logo not found' />
        </div>
        <div className={cls.logo}>
          <div className={cls.ul}>
            <div className={cls.li}>
              <input
                type='text'
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </div>
        </div>
        <Button variants='info' className='btn' type='button'>
          Button
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
