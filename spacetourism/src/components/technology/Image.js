import React, { useContext } from 'react';

import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { TechnoContext } from './util/Context';

function Image() {

     const { currentTechno, inProp } = useContext(TechnoContext)
     
     return (
          <SwitchTransition mode={'out-in'}>
               <CSSTransition 
                    key={inProp}
                    addEndListener={(node, done) => {
                              node.addEventListener("transitionend", done, false);
                    }}
                    classNames="technoNode"
               >
                    <div className="image">
                         <img src={currentTechno.images.portrait} alt="techno-portrait" id="portrait"/> 
                         <img src={currentTechno.images.landscape} alt="techno-landscape" id="landscape"/> 
                    </div>
               </CSSTransition>
          </SwitchTransition>
     )
}

export default Image