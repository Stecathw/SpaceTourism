import React, { useContext } from 'react';

import { CrewContext } from './util/Context';

function Member() {

  const { currentCrewMember } = useContext(CrewContext)
  return (
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
  )
}

export default Member