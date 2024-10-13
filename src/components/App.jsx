import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';

import { Outlet, Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import Header from './Header/Header';

import authOperations from 'redux/auth/authOperations';

import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import HomePage from '../pages/HomePage/HomePage';

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Container
      maxW={{ sm: '768px', md: '1280px' }}
      position="relative"
      pt={{ xs: '152px', md: '180px', lg: '293px' }}
    >
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="diary" element={<DiaryPage />} />
            <Route path="uikit" element={<UiKit />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Container>
  );
};
