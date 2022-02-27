import React, { useContext } from 'react'
import { PlanetContext } from './util/Context'

import { CSSTransition, SwitchTransition } from 'react-transition-group';

function Image() {

   const { inProp, currentPlanet } = useContext( PlanetContext )

   return (
      <div className='image'>
            <SwitchTransition mode={'out-in'}>
                  <CSSTransition 
                        key={inProp}
                        addEndListener={(node, done) => {
                              node.addEventListener("transitionend", done, false);
                        }}
                        classNames="planetNode"
                  >
                        <img src={currentPlanet.images.png} alt="planet" id="planet"/> 
                  </CSSTransition>                 
            </SwitchTransition>

      </div>
  )
}

export default Image