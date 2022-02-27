import React, { useContext } from 'react';

import { PlanetContext } from './util/Context';

import { getData } from '../util/GetData';

function TabMenu( { allDest }) {

     const destinations = allDest

     const { activeIndex, setActiveIndex, setCurrentPlanet, setInProp } = useContext(PlanetContext)        

     const handleClick = (destName, btnID) => {
          setCurrentPlanet(getData(destinations, destName))
          setActiveIndex(btnID)
          setInProp(inProp => !inProp)
     }

     return (
          <div className="menu" >
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