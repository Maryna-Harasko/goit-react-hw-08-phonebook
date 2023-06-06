import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'store/auth/authSelect';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};