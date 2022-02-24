import React, { createContext, useState } from 'react'
import data from '../../../data/data.json'

export const PlanetContext = createContext()

function PlanetProvider( {children} ) {

     const destinations = data.destinations
     // Adding index state to make things easier to manage between swipe or click events ?
     const [activeIndex, setActiveIndex] = useState(0)
     const [currentPlanet, setCurrentPlanet] = useState(destinations[0])

  return (
    <PlanetContext.Provider value={{

      activeIndex,
      setActiveIndex,
      currentPlanet, 
      setCurrentPlanet
    }}>
         { children }
    </PlanetContext.Provider>
  )
}

export default PlanetProvider