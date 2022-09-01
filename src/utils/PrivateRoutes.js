import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ user }) => {
	console.log(user);
	return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
