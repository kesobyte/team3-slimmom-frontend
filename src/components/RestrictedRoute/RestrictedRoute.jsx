import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const RestrictedRoute = ({
  component: Component,
  redirectTo,
  ...rest
}) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component {...rest} />;
};

// This component will render a page only if the user is not logged in. If the user is logged in, it will redirect them to another page (like the main transactions page).
