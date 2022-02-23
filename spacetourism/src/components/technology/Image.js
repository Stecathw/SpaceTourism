import React, { useContext } from 'react';
import { TechnoContext } from './util/Context';

function Image() {

     const { currentTechno } = useContext(TechnoContext)
     
     return (
          <div className="image">
               <img src={currentTechno.images.portrait} alt="techno-portrait" id="portrait"/> 
               <img src={currentTechno.images.landscape} alt="techno-landscape" id="landscape"/> 
          </div>
     )
}

export default Image