import Lottie from "lottie-react-component";

import loader from "./lf20_YN73eT.json";

import cls from "./loader.module.scss";

const Loader = () => (
    <div className={cls.wrapper}>
      <div className={cls.loader}>
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );

export default Loader;
