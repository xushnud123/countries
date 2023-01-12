import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import useCountries from "modules/countries/hooks/useCountries";
import MainLayout from "layout/mainLayout";
import { Countries, Country, Filter } from "pages/landing/components";
import { Sidebar } from "pages";

interface RoutesComponentProps {}

const RoutesComponent: FC<RoutesComponentProps> = () => {
  const { data, isLoading } = useCountries();

  return (
    <MainLayout
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

export default RoutesComponent;
