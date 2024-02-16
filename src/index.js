import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import Profile from './ProfileDetails/Profile'
import reportWebVitals from './reportWebVitals';
import LandingPage from './UserLanding/Landing';
import AdminLogin from './AdminAuthentication/AdminLogin'

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Profile />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

