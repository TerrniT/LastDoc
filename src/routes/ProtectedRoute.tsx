import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: any
}

const ProtectedRoute = ({ children }: Props) => {
	const { user } = useAuth();
	if (!user) {
		return <Navigate to='/' />;
	}
	return children;
};

export default ProtectedRoute;
