import React from 'react';
//import './App.css';
import Measurements from './views/myViews/Measurements';
import EcoIcon from '@material-ui/icons/Eco';
import SpaIcon from '@material-ui/icons/Spa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <Measurements />
    </div>
  );
}

export default App;
