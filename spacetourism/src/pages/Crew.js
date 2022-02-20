import React, { useState } from 'react';
import Member from '../components/crew/Member';
import Nav from '../components/Nav';

function Crew( { crew } ) {

    const [currentCrew, setCurrentCrew] = useState(crew[0])

    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (crewName, btnID) => {
        setCurrentCrew(getData(crewName))
        setActiveIndex(btnID)
    }

    const getData = (crewName) => {
        return crew.find(({ name }) => name === crewName);
    }

    return (
        <div className='crew'>
            <Nav/>
            <div className="content">
                <div className="crew-description"> 
                    <div className="title"> 
                            <h5><span><strong>02</strong></span>Meet your crew</h5>
                    </div>  
                    <div className="box">
                        <Member member={currentCrew}/>
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
                    </div>
                </div> 

                <div className="crew-image">
                    <img src={currentCrew.images.png} alt="member" id="member"/> 
                </div>

            </div>
        </div>
    )
}

export default Crew;