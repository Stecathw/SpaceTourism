import React, { useContext } from 'react'
import { CrewContext } from './util/Context'

function Image() {

   const { currentCrewMember } = useContext( CrewContext )
   
   return (
      <div className="image">
            <img src={currentCrewMember.images.png} alt="planet" id="planet"/> 
      </div>
  )
}

export default Image