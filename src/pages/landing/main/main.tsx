import Main from "layout/main";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Countries from "../countries/countries";
import Country from "../country/country";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <Main
      cardLeft={<h1>Hello World</h1>}
      cardRight={
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
      }
    />
  );
};

export default Landing;
