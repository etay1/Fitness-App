import { Outlet, Navigate } from "react-router-dom";
import CheckAuthroization from "./CheckAuthorized";

const PrivateRoute = () => {
	const { error, isAuthenticated } = CheckAuthroization();

	if (!isAuthenticated) {
		return null;
	}
	if (error) {
		return <Navigate to='/' />;
	}
	return <Outlet />;
};

export default PrivateRoute;
