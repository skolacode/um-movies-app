import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = () => {
  const token = Cookies.get('token');

  if (token) {
    return <Outlet />
  }

  return <Navigate to="/login" replace />
}

export default AuthMiddleware;
