import { useAuthUser } from "../providers/AuthProvider";
import { Navigate, Outlet } from "react-router";

export const GuestRoutes = () => {
  const { authUser } = useAuthUser();

  if (authUser) return <Navigate to="/" />;

  return <Outlet />;
};

