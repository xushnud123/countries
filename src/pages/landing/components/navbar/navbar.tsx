import { FC, useState } from "react";
import cx from "classnames";

import { Button } from "components";

import logo from "assets/images/logo/logo_2.svg";
import hamburger from "assets/images/navbar/Frame 7.svg";

import cls from "./navbar.module.scss";

interface NavbarProps {
  state: boolean;
  onState: (e: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({ state, onState }) => {
  return (
    <div className={cx(cls.wrapper)}>
      <div className={cls.navbar}>
        <div className={cls.wrap}>
          <div className={cls.logo}>
            <img src={logo} alt='logo not found' />
          </div>
          <div
            className={cx(cls.btn, state && cls.active)}
            onClick={() => onState(!state)}>
            <img src={hamburger} alt='img not found' />
          </div>
        </div>
        <div className={cx(cls.nav, state && cls["active-nav"])}>
          <ul className={cls.ul}>
            <li className={cls.li}>simple search</li>
            <li className={cls.li}>search bar</li>
            <li className={cls.li}>About</li>
          </ul>
          <Button variants='info' className='btn' type='button'>
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
