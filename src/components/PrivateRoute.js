import { useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";
import { authSelector } from "store/auth/authSelect";

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const isRefreshing = useSelector(authSelector.isRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};