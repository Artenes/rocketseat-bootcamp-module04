import React from 'react';
import './App.css';

import anime from './assets/anime.jpg';
import TechList from './components/TechList';

function App() {
  return (<div>
    <img src={anime} alt="Anime" width="300" height="200"/>
    <TechList />
  </div>);
}

export default App;