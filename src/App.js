import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";
import Game from "./pages/game";

function App() {
  return (
    <div>
      <Nav />
      <Game />
    </div>
  );
}

export default App;
