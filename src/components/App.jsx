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

export const App = () => {
  const isLoggedIn = useAuth();

  return (
    <div className="relative">
      <div className="fixed -z-[1]">
        <SharedLayout />
      </div>
      <div className="max-w-[1400px] mx-auto">
        <Header />
        <Routes>
          {/* Public */}
          {!isLoggedIn ? (
            <Route path="/" element={<MainPage />} />
          ) : (
            <Route path="/" element={<DiaryPage />} />
          )}

          {/* Restricted Routes */}
          <Route
            path="/login"
            element={
              <div>
                <RestrictedRoute component={LoginPage} redirectTo="/diary" />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div>
                <RestrictedRoute
                  component={RegistrationPage}
                  redirectTo="/diary"
                />
              </div>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/diary"
            element={
              <div>
                <ProtectedRoute component={DiaryPage} redirectTo="/login" />
              </div>
            }
          />
          <Route
            path="/calculator"
            element={
              <div>
                <ProtectedRoute
                  component={CalculatorPage}
                  redirectTo="/login"
                />
              </div>
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
