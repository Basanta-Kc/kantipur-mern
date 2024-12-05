import { useAuthUser } from "../providers/AuthProvider";
import { Navigate, Outlet } from "react-router";
export const ProtectedRoutes = () => {
  const { authUser } = useAuthUser();
  if (authUser) return <Outlet />;
  return <Navigate to="/sign-in" />;
};
