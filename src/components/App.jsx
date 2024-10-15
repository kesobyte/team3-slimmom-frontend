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
import { refreshUser, logout } from '../redux/auth/authOperations';
import { fetchProfile } from '../redux/profile/profileOperations';
import { fetchDiaryEntries } from '../redux/diary/diaryOperations';
import { Loader } from './Loader/Loader';
import { jwtDecode } from 'jwt-decode';

export const App = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const refreshInterval = useRef(null);
  const selectedDate = useSelector(state => state.diary.selectedDate);

  useEffect(() => {
    // Check for a valid token on app load
    const checkTokenValidity = () => {
      const token = localStorage.getItem('persist:auth');
      if (token) {
        try {
          const decodedToken = jwtDecode(JSON.parse(token).token);
          const currentTime = Date.now() / 1000; // Convert to seconds

          // Check if token has expired
          if (decodedToken.exp < currentTime) {
            // Token is expired, force logout
            dispatch(logout());
            localStorage.removeItem('persist:auth'); // Clear local storage
          }
        } catch (error) {
          // Invalid token, force logout
          console.error('Invalid token:', error);
          dispatch(logout());
          localStorage.removeItem('persist:auth');
        }
      }
    };

    checkTokenValidity();

    if (isLoggedIn) {
      dispatch(fetchProfile());
      dispatch(fetchDiaryEntries(selectedDate));

      // Set interval to refresh user every 30 minutes if user is active
      refreshInterval.current = setInterval(() => {
        dispatch(refreshUser());
      }, 30 * 60 * 1000); // 30 minutes

      return () => {
        // Clear interval when component unmounts or user logs out
        if (refreshInterval.current) {
          clearInterval(refreshInterval.current);
        }
      };
    } else {
      // Clear interval if the user is not logged in
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
    }
  }, [dispatch, isLoggedIn, selectedDate]);

  // Loader for refreshing the token
  if (isRefreshing) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative">
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

          {/* Routing for non-existent pages */}
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
