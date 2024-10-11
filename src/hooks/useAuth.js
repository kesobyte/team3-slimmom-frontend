import { useSelector } from 'react-redux';
import { getIsLoggedIn, getToken, getUser } from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const user = useSelector(getUser);
  const token = useSelector(getToken);

  return { isLoggedIn, user, token };
};
