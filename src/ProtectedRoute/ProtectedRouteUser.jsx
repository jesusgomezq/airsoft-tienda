import { Navigate } from "react-router";

export const ProtectedRouteUser = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));

  if (user?.rol === "users") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
