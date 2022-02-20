import React from 'react'

function Member( { member } ) {
  return (
    <div className='member-infos'>

        <div className='member-role'>
            <h4>{member.role}</h4>
        </div>
        
        <div className="member-name">
            <h3>{member.name}</h3>
        </div>
        <div className="member-bio">
            <p>{member.bio}</p>            
        </div>
    </div>
  )
}

export default Member