import React, { useContext } from 'react';

import { TechnoContext } from './util/Context';

function Techno() {

  const { currentTechno } =useContext(TechnoContext)
  return (
    <div className='techno-infos'>
        <h5>The terminology...</h5>
        <h3>{  currentTechno.name }</h3>
        <p>{ currentTechno.description}</p>        
    </div>
  )
}

export default Techno