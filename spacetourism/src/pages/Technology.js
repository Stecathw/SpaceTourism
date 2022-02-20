import React, { useState } from 'react';

import Nav from '../components/Nav';
import Techno from '../components/technology/Techno';

function Technology( { technology } ) {

    const [currentTechno, setCurrentTechno] = useState(technology[0])

    const [activeIndex, setActiveIndex] = useState(0)

    const handleClick = (technoName, btnID) => {
        setCurrentTechno(getData(technoName))
        setActiveIndex(btnID)
    }

    const getData = (technoName) => {
        return technology.find(({ name }) => name === technoName);
    }

    return (
        <div className='technology'>
            <Nav/>
            <div className="content">

                <div className='technology-description'>
                    <div className="title"> 
                        <h5><span><strong>03</strong></span>Space Launch 101</h5>
                    </div> 
                    <div className="box">
                        <div className="menu">
                            <ul>
                                {technology.map((techno, _index) => {
                                    return (
                                        <li 
                                            onClick={() => handleClick(techno.name, _index)}
                                            key={_index}
                                            className={activeIndex === _index ? "active" : "idle"}
                                        >
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <Techno techno={ currentTechno } />
                    </div>
                </div> 

                <div className="technology-image">
                    <img src={currentTechno.images.portrait} alt="techno" id="portrait"/> 
                    <img src={currentTechno.images.landscape} alt="techno" id="landscape" style={{display: 'none'}}/> 
                </div>

            </div>
        </div>
    )
}

export default Technology;