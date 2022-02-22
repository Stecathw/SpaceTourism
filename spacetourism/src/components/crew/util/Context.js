import React, { createContext, useState } from 'react'
import data from '../../../data/data.json'

export const CrewContext = createContext()

function CrewProvider( {children} ) {

     const crew = data.crew
     const [currentCrewMember, setCurrentCrewMember] = useState(crew[0])

     return (
          <CrewContext.Provider value={{currentCrewMember, setCurrentCrewMember}}>
               { children }
          </CrewContext.Provider>
     )
}
export default CrewProvider