import React, { createContext, useState } from 'react'
import data from '../../../data/data.json'

export const TechnoContext = createContext()

function TechnoProvider( {children} ) {

     const technology = data.technology
     const [currentTechno, setCurrentTechno] = useState(technology[0])
     const [inProp, setInProp ] = useState(true)

  return (
    <TechnoContext.Provider value={{
      currentTechno, 
      setCurrentTechno, 
      inProp, 
      setInProp}}>
         { children }
    </TechnoContext.Provider>
  )
}

export default TechnoProvider