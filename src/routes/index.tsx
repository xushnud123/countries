import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "layout/mainLayout";

import useCountries from "modules/countries/hooks/useCountries";

import { Sidebar } from "pages";

interface RoutesComponentProps {}

const RoutesComponent: FC<RoutesComponentProps> = () => {
  const { data, isLoading } = useCountries();

  return <MainLayout cardLeft={<Sidebar />} cardRight={<Outlet />} />;
};

export default RoutesComponent;
