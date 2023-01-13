import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import useCountries from "modules/countries/hooks/useCountries";

import { Dashboard, Landing } from "pages";
import { Countries, Country, Empty, Filter } from "pages/dashboard/components";

interface RoutesComponentProps {}

const RoutesConfig: FC<RoutesComponentProps> = () => {
  const { data, isLoading } = useCountries();

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route
        path='all'
        element={
          <Countries
            // @ts-ignore
            data={data}
            isLoading={isLoading}
          />
        }
      />
      <Route path='dashboard' element={<Dashboard />}>
        <Route index element={<Empty />} />
        <Route path='empty' element={<Empty />} />
        <Route path='filter' element={<Filter />}>
          <Route path=':regionName' element={<Country />} />
          <Route path=':name' element={<Country />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesConfig;
