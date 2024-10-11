import { Header } from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { DiaryPage } from 'pages/DiaryPage';
import { CalculatorPage } from 'pages/CalculatorPage';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute';
import { useAuth } from 'hooks/useAuth';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/authOperations';

export const App = () => {
  const { isLoggedIn, token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, token]);

  return (
    <div className="relative">
      <div className="fixed -z-[1]">
        <SharedLayout />
      </div>
      <div>
        <Header />
        <Routes>
          {/* Public */}
          <Route path="/" element={isLoggedIn ? <DiaryPage /> : <MainPage />} />

          {/* Restricted Routes */}
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/diary" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegistrationPage}
                redirectTo="/diary"
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
