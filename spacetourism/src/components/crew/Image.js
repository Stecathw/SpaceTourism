import React, { useContext } from 'react';
import { CrewContext } from './util/Context';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

function Image() {

   const { currentCrewMember, inProp } = useContext( CrewContext )
   
   return (
      
            <SwitchTransition mode={'out-in'}>
                  <CSSTransition 
                        key={inProp}
                        addEndListener={(node, done) => {
                              node.addEventListener("transitionend", done, false);
                        }}
                        classNames="crewNode"
                  >
                        <div className="image">
                              <img src={currentCrewMember.images.png} alt="planet" id="planet"/> 
                        </div>
                  </CSSTransition>
            </SwitchTransition>

  )
}

export default Image