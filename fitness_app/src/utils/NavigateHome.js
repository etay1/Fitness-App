import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateHome = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    const path = "/";
    navigate(path);
  };

  return navigateToHome;
};

export default NavigateHome;
