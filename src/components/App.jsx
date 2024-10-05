import { Header } from './Header/Header';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
};
