import React from "react";

import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

import data from "./data/data.json";


function App() {
  const location = useLocation()  
  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destinations destinations={data.destinations}/>}/>         
          <Route path='/crew' element={<Crew crew={data.crew}/>}/>
          <Route path='/technology' element={<Technology technology={data.technology}/>}/>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}
export default App;
