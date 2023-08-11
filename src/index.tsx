import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import AppRouter from './components/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
