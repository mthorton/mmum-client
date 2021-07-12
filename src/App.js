import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import IssLocation from './components/IssLocation';
import OpenAstronomyAPI from './components/OpenAstronomyAPI';
import PlanetAPI from './components/PlanetAPI';
import MoonCalcAPI from './components/MoonCalcAPI';
import TheSolarSystemAPI from './components/TheSolarSystemAPI';
import NasaAPI from './components/NasaAPI';
import GeoLocation from './components/GeoLocation';

function App() {
  return (
    <div className="App">
      test
      <h1>Master Branch</h1>
      <h2>Develop Branch</h2>
      <h3>Max's Branch</h3>
      <h3>Shavonne's Branch</h3>
      <GeoLocation/>
      <IssLocation/>
      <OpenAstronomyAPI/>
      <PlanetAPI/>
      <MoonCalcAPI/>
      <TheSolarSystemAPI/>
      <NasaAPI/>
    </div>
  );
}

export default App;
