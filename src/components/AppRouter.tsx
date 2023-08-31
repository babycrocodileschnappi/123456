import React from 'react'
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import DetailPage from '../pages/DetailPage'

const AppRouter: React.FC = function AppRouter() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:page" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="" element={<Navigate to="/1" />} />
      </Routes>
    </HashRouter>
  )
}

export default AppRouter
