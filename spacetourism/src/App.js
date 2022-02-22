import React from "react";

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import data from "./data/data.json";

function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/destination/*' element={<Destinations destinations={data.destinations}/>}/>         
        <Route path='/crew' element={<Crew crew={data.crew}/>}/>
        <Route path='/technology' element={<Technology technology={data.technology}/>}/>

      </Routes>
  );
}

export default App;
