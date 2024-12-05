import { useAuthUser } from "../providers/AuthProvider";
import { Navigate, Outlet } from "react-router";

export const AdminRoutes = () => {
  const { authUser } = useAuthUser();
  if (authUser.roles.includes("admin")) return <Outlet />;
  return <Navigate to="/" />;
};
