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
      <div className={cls.navbar}>
        <div className={cls.logo}>
          <img src={logo} alt='logo not found' />
        </div>
        <div className={cls.nav}>
          <ul className={cls.ul}>
            <li className={cls.li}>simple search</li>
            <li className={cls.li}>search bar</li>
            <li className={cls.li}>About</li>
          </ul>
        </div>
        <Button variants='info' className='btn' type='button'>
          Button
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
