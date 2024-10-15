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
import { refreshUser } from '../redux/auth/authOperations';
import { logout } from '../redux/auth/authOperations';
import { useIdleTimer } from 'react-idle-timer';
import { fetchProfile } from '../redux/profile/profileOperations';
// import { getProfileUser } from '../redux/profile/selectors';
import { fetchDiaryEntries } from '../redux/diary/diaryOperations';

export const App = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const refreshInterval = useRef(null);
  // const diaryEntries = useSelector(state => state.diary.diaryEntries);
  const selectedDate = useSelector(state => state.diary.selectedDate);
  // const profileData = useSelector(getProfileUser);

  // useEffect(() => {
  //   console.log('Profile Data:', profileData);
  // }, [profileData]);

  useEffect(() => {
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

  useIdleTimer({
    timeout: 60 * 60 * 1000, // 1 Hour
    onIdle: () => {
      dispatch(logout());
      if (refreshInterval.current) {
        clearInterval(refreshInterval.current);
      }
    },
    debounce: 500,
  });

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
