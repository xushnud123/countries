import Main from "layout/main";
import useCountries from "modules/countries/hooks/useCountries";
import { useRegion } from "modules/region/hooks/useRegion";
import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Countries, Sidebar, Country } from "../components";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  const [state, setState] = useState("");
  const { data, isLoading } = useCountries();
  const { data: region, isLoading: loading } = useRegion(state);


  return (
    <Main
      cardLeft={<Sidebar setState={setState} />}
      cardRight={
        <Routes>
          <Route
            path='/'
            element={
              <Countries
                //@ts-ignore
                data={state ? region : data}
                isLoading={state ? loading : isLoading}
              />
            }
          />
          <Route path='/:name' element={<Country />} />
        </Routes>
      }
    />
  );
};

export default Landing;
