import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import HomePage from '../pages/HomePage.tsx';
import DetailPage from '../pages/DetailPage.tsx';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:id" element={<DetailPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default AppRouter;
