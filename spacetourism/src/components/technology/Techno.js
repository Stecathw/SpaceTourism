import React, { useContext } from 'react';

import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { TechnoContext } from './util/Context';

function Techno() {

  const { currentTechno, inProp } =useContext(TechnoContext)
  return (
    <SwitchTransition mode={'out-in'}>
      <CSSTransition 
          key={inProp}
          addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
          }}
          classNames="DescriptionNode"
      >
        <div className='techno-infos'>
            <h5>The terminology...</h5>
            <h3>{  currentTechno.name }</h3>
            <p>{ currentTechno.description}</p>        
        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default Techno