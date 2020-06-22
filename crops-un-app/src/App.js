import React from 'react';
import { Route } from 'react-router-dom';
//import './App.css';
import MainView from './views/myViews/MainView';
import View2 from './views/myViews/View2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </header>
      <Route path="/" exact component={MainView}></Route>
      <Route path="/resultados" exact component={View2}></Route>
    </div>
  );
}

export default App;
