import Main from "layout/main";
import useCountries from "modules/countries/hooks/useCountries";
import { useRegion } from "modules/region/hooks/useRegion";
import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Countries, Sidebar, Country } from "../components";
import Filter from "../components/filter/filter";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const { data, isLoading } = useCountries();

  return (
    <Main
      cardLeft={<Sidebar />}
      cardRight={
        <Routes>
          <Route
            path='/'
            element={
              <Countries
                //@ts-ignore
                data={data}
                isLoading={isLoading}
              />
            }
          />
          <Route path='/filter/:regionName' element={<Filter />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
      }
    />
  );
};

export default Landing;
