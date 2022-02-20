import React from 'react'

function Techno( { techno}) {
  return (
    <div className='techno-infos'>
        <h5>The terminology...</h5>
        <h3>{  techno.name }</h3>
        <p>{ techno.description}</p>        
    </div>
  )
}

export default Techno