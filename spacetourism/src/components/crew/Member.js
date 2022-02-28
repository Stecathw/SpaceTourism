import React, { useContext } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import { CrewContext } from './util/Context';

function Member() {

  const { currentCrewMember, inProp } = useContext(CrewContext)
  return (
    <SwitchTransition mode={'out-in'}>
      <CSSTransition 
          key={inProp}
          addEndListener={(node, done) => {
                  node.addEventListener("transitionend", done, false);
          }}
          classNames="DescriptionNode"
      >
        <div className='member-infos'>

          <div className='member-role'>
              <h4>{currentCrewMember.role}</h4>
          </div>
          
          <div className="member-name">
              <h3>{currentCrewMember.name}</h3>
          </div>
          <div className="member-bio">
              <p>{currentCrewMember.bio}</p>            
          </div>

        </div>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default Member