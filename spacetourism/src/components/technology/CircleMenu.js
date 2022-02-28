import React, { useState, useContext } from 'react';

import { TechnoContext } from './util/Context';

// import { getData } from './util/GetData';
import { getData } from '../util/GetData';

function CircleMenu( { technology }) {

     const { setCurrentTechno, setInProp } = useContext( TechnoContext )

     const [activeIndex, setActiveIndex] = useState(0)

     const handleClick = (technoName, btnID) => {
         setCurrentTechno(getData(technology, technoName))
         setActiveIndex(btnID)
         setInProp(inProp => !inProp)
     }
     
     return (
          <div className="menu">
               <ul>
               {technology.map((techno, _index) => {
                    return (
                         <li 
                              onClick={() => handleClick(techno.name, _index)}
                              key={_index}
                              className={activeIndex === _index ? "active" : "idle"}
                         >
                         </li>
                    )
               })}
               </ul>
          </div>
     )
}

export default CircleMenu