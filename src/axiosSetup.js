import axios from 'axios';
import { store } from './redux/store';
import { logout } from './redux/auth/authOperations';

axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Dispatch logout action if a 401 Unauthorized error occurs
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
);
