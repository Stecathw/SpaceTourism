import React, { createContext, useState } from 'react';
import data from '../../../data/data.json';

export const CrewContext = createContext()

function CrewProvider( {children} ) {

     const crew = data.crew
     const [activeIndex, setActiveIndex] = useState(0)
     const [currentCrewMember, setCurrentCrewMember] = useState(crew[0])
     const [inProp, setInProp] = useState(true)

     return (
          <CrewContext.Provider value={{
               activeIndex, 
               setActiveIndex, 
               currentCrewMember, 
               setCurrentCrewMember,
               inProp,
               setInProp
          }}>
               { children }
          </CrewContext.Provider>
     )
}
export default CrewProvider