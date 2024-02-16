import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from './logo.svg';
import logo1 from './static/logo1.png'
import './App.css';
import DialogBox from "./authentication/DialogBox";

function App() {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const redirectToProfile = () => {
    navigate('/about');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <DialogBox state={isDialogOpen} handleClose={handleDialogClose} />
        <button onClick={handleDialogOpen}>
          Activate Lasers
        </button>
        <button onClick={redirectToProfile}>
          Deactivate Lasers
        </button>
      </body>
    </div>
  );
}

export default App;
