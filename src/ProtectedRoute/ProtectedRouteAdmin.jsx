import { Navigate } from "react-router-dom";

export const ProtectedRouteAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));

  if (user?.rol === "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
