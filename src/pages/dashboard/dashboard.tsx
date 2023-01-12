import { FC } from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "layout/mainLayout";
import { Sidebar } from "pages";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return <MainLayout cardLeft={<Sidebar />} cardRight={<Outlet />} />;
};

export default Dashboard;
