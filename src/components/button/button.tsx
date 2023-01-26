import { FC, ReactNode, useRef } from "react";
import cx from "classnames";

import cls from "./button.module.scss";

interface ButtonProps
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "children" | "onClick" | "disabled"
  > {
  prefix?: ReactNode;
  suffix?: ReactNode;
  variants?: "info" | "primary" | "danger";
  className?: string;
}

const Button: FC<ButtonProps> = ({
  prefix,
  suffix,
  children,
  className,
  onClick,
  disabled,
  type = "button",
  variants = "info",
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const btnHandler = (e: any) => {
    const pos = ref.current?.getBoundingClientRect();
    // @ts-ignore-start
    const x = e.clientX - pos?.left;
    // @ts-ignore-start
    const y = e.clientY - pos?.top;
    // @ts-ignore-end

    const span = document.createElement("span") as HTMLSpanElement;

    span.className = cls.ripples;
    span.style.left = `${x}px`;
    span.style.top = `${y}px`;
    ref.current?.appendChild(span);

    setTimeout(() => span.remove(), 1000);
  };

  return (
    <button
      ref={ref}
      type={type}
      className={cx(cls.wrapper, className && className, cls[`${variants}`])}
      onClick={(e) => {
        btnHandler(e);
        if (onClick) onClick!(e);
      }}
      disabled={disabled}>
      {prefix && <span className={cls[`${prefix}`]}>{prefix}</span>}
      {children}
      {suffix && <span className={cls[`${suffix}`]}>{suffix}</span>}
    </button>
  );
};

export default Button;
