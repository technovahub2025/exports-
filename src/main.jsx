import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './styles/global.css';
import { BASE_PATH } from './utils/basePath.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={BASE_PATH}>
      <App />
    </BrowserRouter>
  </StrictMode>
);



