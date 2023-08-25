import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'

const AppRouter: React.FC = function AppRouter() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:page" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="" element={<Navigate to="/1" />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
