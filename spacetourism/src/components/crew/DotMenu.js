import React, { useState, useContext }from 'react';

import { CrewContext } from './util/Context';

import { getData } from './util/GetData';

function DotMenu( { allCrewMembers } ) {

     const crew = allCrewMembers

     const { setCurrentCrewMember } = useContext(CrewContext)

     const [activeIndex, setActiveIndex] = useState(0)

     const handleClick = (crewMemberName, btnID) => {
          setCurrentCrewMember(getData(crew, crewMemberName))
          setActiveIndex(btnID)
     }

     return (
          <div className="menu">
               <ul>
                    {crew.map((member, _index) => {
                         return (
                         <li 
                              onClick={() => handleClick(member.name, _index)}
                              key={_index}
                              className={activeIndex === _index ? "active" : "idle"}
                         />
                         )
                    })}
               </ul>
          </div>
     )
}

export default DotMenu