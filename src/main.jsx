import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ size: '20px' }}>
        <App />
      </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
