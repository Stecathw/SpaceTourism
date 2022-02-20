import React, { useState, useContext } from 'react'

import { PlanetContext } from './util/Context';

import { getData } from './util/GetData';


function TabMenu( { allDest }) {

     const destinations = allDest

     const { setCurrentPlanet } = useContext(PlanetContext)
     
     const [activeIndex, setActiveIndex] = useState(0)

     const handleClick = (destName, btnID) => {
          setCurrentPlanet(getData(destinations, destName))
          setActiveIndex(btnID)
     }

     return (
          <div className="menu">
               <ul>
                    {destinations.map((destination, _index) => {
                         return (
                              <li 
                                   onClick={() => handleClick(destination.name, _index)}
                                   key={_index}
                                   className={activeIndex === _index ? "active" : "idle"}
                              >
                                   <span>{ destination.name }</span>
                              </li>
                         )
                    })}
               </ul>
          </div>
     )
}

export default TabMenu