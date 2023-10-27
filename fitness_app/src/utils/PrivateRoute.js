import { Outlet, Navigate } from "react-router-dom";
import CheckAuthroization from "./CheckAuthorized";

const PrivateRoute = ({ supabase }) => {
  const { error, isAuthenticated } = CheckAuthroization(supabase);

  if (!isAuthenticated) {
    return null;
  }
  if (error) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
