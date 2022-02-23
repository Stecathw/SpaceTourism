import React, { createContext, useState } from 'react'
import data from '../../../data/data.json'

export const TechnoContext = createContext()

function TechnoProvider( {children} ) {

     const technology = data.technology
     const [currentTechno, setCurrentTechno] = useState(technology[0])

  return (
    <TechnoContext.Provider value={{currentTechno, setCurrentTechno}}>
         { children }
    </TechnoContext.Provider>
  )
}

export default TechnoProvider