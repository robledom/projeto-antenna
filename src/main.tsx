import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // A ÚNICA MUDANÇA FOI REMOVER O <React.StrictMode> QUE ESTAVA AQUI
  <HelmetProvider>
    <App />
  </HelmetProvider>
);