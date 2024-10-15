import { useSelector } from 'react-redux';
import { getToken, getUser, getIsRefreshing } from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(getUser);
  const token = useSelector(getToken);
  const isLoggedIn = Boolean(token);
  const isRefreshing = useSelector(getIsRefreshing);

  return { isLoggedIn, user, token, isRefreshing };
};
