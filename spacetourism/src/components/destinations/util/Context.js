import React, { createContext, useState } from 'react'
import data from '../../../data/data.json'

export const PlanetContext = createContext()

function PlanetProvider( {children} ) {

     const destinations = data.destinations
     const [currentPlanet, setCurrentPlanet] = useState(destinations[0])

  return (
    <PlanetContext.Provider value={{currentPlanet, setCurrentPlanet}}>
         { children }
    </PlanetContext.Provider>
  )
}

export default PlanetProvider