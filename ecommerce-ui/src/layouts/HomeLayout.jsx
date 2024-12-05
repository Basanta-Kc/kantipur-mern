import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
export const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
