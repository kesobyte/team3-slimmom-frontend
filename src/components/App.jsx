import { Header } from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { VerificationPage } from 'pages/VerificationPage';
import { DiaryPage } from 'pages/DiaryPage';
import { CalculatorPage } from 'pages/CalculatorPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { useAuth } from 'hooks/useAuth';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { logout, refreshUser } from '../redux/auth/authOperations';
import { fetchProfile } from '../redux/profile/profileOperations';
import { fetchDiaryEntries } from '../redux/diary/diaryOperations';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const { isLoggedIn, token, isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const refreshInterval = useRef(null);
  const selectedDate = useSelector(state => state.diary.selectedDate);

  // Effect to check and decode token
  useEffect(() => {
    if (token) {
      try {
        const { exp } = jwtDecode(token); // Decode token to get expiry
        const currentTime = Date.now() / 1000;

        if (exp < currentTime) {
          dispatch(logout()); // Force logout if the token is expired
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        dispatch(logout());
      }
    }
  }, [token, dispatch]);

  // Effect to refresh user profile and diary entries
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchProfile());
      dispatch(fetchDiaryEntries(selectedDate));

      refreshInterval.current = setInterval(() => {
        dispatch(refreshUser());
      }, 30 * 60 * 1000); // Refresh every 30 minutes

      return () => {
        if (refreshInterval.current) {
          clearInterval(refreshInterval.current);
        }
      };
    } else {
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
    }
  }, [dispatch, isLoggedIn, selectedDate]);

  // Render Loader if refreshing token
  if (isRefreshing) {
    return (
      <div className="h-[100vh] w-[100vw] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative">
      <ToastContainer />
      <div className="fixed -z-[1]">
        <SharedLayout />
      </div>
      <div>
        <Header />
        <Routes>
          {/* Public */}
          <Route
            path="/"
            element={isLoggedIn ? <CalculatorPage /> : <MainPage />}
          />

          {/* Restricted Routes */}
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/calculator" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo="/calculator"
              />
            }
          />
          <Route
            path="/verify"
            element={
              <RestrictedRoute
                component={VerificationPage}
                redirectTo="/calculator"
              />
            }
          />

          {/* Protected Routes */}
          <Route
            path="/diary"
            element={
              <ProtectedRoute component={DiaryPage} redirectTo="/login" />
            }
          />
          <Route
            path="/calculator"
            element={
              <ProtectedRoute component={CalculatorPage} redirectTo="/login" />
            }
          />

          {/* Catch-all for non-existent routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute component={DiaryPage} redirectTo="/diary" />
            }
          />
        </Routes>
      </div>
    </div>
  );
};
