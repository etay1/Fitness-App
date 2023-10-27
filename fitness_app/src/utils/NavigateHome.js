import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * A utility function that returns a function to navigate to the home page.
 * @returns {function} - A function that navigates to the home page.
    * @example
 * import NavigateHome from "./utils/NavigateHome";
 * const navigateToHome = NavigateHome();
 * call navigateToHome for your onclick.
 */
const NavigateHome = () => {
    const navigate = useNavigate();

    /**
     * Navigates to the home page.
     */
    const navigateToHome = () => {
        const path = "/";
        navigate(path);
    };

    return navigateToHome;
};

export default NavigateHome;
