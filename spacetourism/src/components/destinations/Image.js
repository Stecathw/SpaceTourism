import React, { useContext } from 'react'
import { PlanetContext } from './util/Context'

function Image() {

   const { currentPlanet } = useContext( PlanetContext )
   
   return (
      <div className="image">
            <img src={currentPlanet.images.png} alt="planet" id="planet"/> 
      </div>
  )
}

export default Image