import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: any
}

const ProtectedRoute = ({ children }: Props) => {
	const { user } = useAuth();
	console.log(user);
	if (!user) {
		return <Navigate to='/' />;
	}
	return children;
};

export default ProtectedRoute;
