import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Profile from './ProfileDetails/Profile'
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

