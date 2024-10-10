import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);

  return { isLoggedIn, user };
};
