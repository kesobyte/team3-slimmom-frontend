import { useSelector } from 'react-redux';
import { getToken, getUser } from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const isLoggedIn = Boolean(token);

  return { isLoggedIn, user, token };
};
