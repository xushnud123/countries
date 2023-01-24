import { FC } from "react";
import cx from "classnames";

import logo from "assets/images/logo/logo_2.svg";

import cls from "./navbar.module.scss";

interface NavbarProps {
  inView?: boolean;
}

const Navbar: FC<NavbarProps> = ({ inView }) => (
  <div className={cx(cls.wrapper, inView && cls.act)}>
    <div className={cls.nav}>
      <div className={cls.logo}>
        <img src={logo} alt='logo not found' />
      </div>
      <div className={cls.logo}>
        <div className={cls.ul}>
          <div className={cls.li}>search bar</div>
        </div>
      </div>
      <div className={cls.btns}>button</div>
    </div>
  </div>
);

export default Navbar;
