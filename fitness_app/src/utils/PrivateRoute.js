import { Outlet, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckAuthroization from "./CheckAuthorized";

const PrivateRoute = ({ supabase }) => {
  const { error, isAuthenticated } = CheckAuthroization(supabase);
  // console.log(error, isAuthenticated);

  if (!isAuthenticated) {
    return null;
  }
  if (error) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
