import Main from "layout/main";
import { FC } from "react";
import Countries from "../countries/countries";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return <Main cardLeft={<h1>Hello World</h1>} cardRight={<Countries />} />;
};

export default Landing;
