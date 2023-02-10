import { FC, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import cls from "./text.module.scss";

interface TextProps {
  text: string;
}

const Text: FC<TextProps> = ({ text }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const styles = () => {
    controls.start({
      transform: [
        "scale3d(1,1,1)",
        "scale3d(1.4,.55,1)",
        "scale3d(.75,1.25,1)",
        "scale3d(1.25,.85,1)",
        "scale3d(.9,1.05,1)",
        "scale3d(1,1,1)",
      ],
      transition: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
    });
    setIsPlaying(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseMove={() => {
        if (!isPlaying) styles();
      }}
      onAnimationComplete={() => setIsPlaying(false)}
      className={cls.wrapper}>
      {text}
    </motion.span>
  );
};
export default Text;
