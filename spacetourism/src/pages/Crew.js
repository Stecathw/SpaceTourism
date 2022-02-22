import React from 'react';

import Member from '../components/crew/Member';
import DotMenu from '../components/crew/DotMenu';
import Nav from '../components/Nav';
import Title from '../components/Title';

import CrewProvider from '../components/crew/util/Context';
import Image from '../components/crew/Image';


function Crew( { crew }) {

    // CONTEXT : crew
    return (
        <div className="crew">
            <Nav/>
            <div className="title-content">
                <Title nb={'02'} title={'Meet your crew'}/>
            </div>
            <div className='content'>
                <CrewProvider>

                    <div className='crew-content'>
                        <Member />  
                        <DotMenu allCrewMembers={ crew }/>                  
                    </div>  
                    
                    <div className='crew-image'>
                        <Image/>
                    </div> 
             
                </CrewProvider>
            </div>
        </div>
    )
}

export default Crew

// BEFORE REFACTORING

// function Crew( { crew } ) {

//     const [currentCrew, setCurrentCrew] = useState(crew[0])

//     const [activeIndex, setActiveIndex] = useState(0)

//     const handleClick = (menberName, btnID) => {
//         setCurrentCrew(getData(menberName, crew))
//         setActiveIndex(btnID)
//     }

//     const getData = (crewName) => {
//         return crew.find(({ name }) => name === crewName);
//     }

//     return (
//         <div className='crew'>
//             <Nav/>
//             <div className="content">
//                 <div className="crew-description"> 
//                     <div className="title"> 
//                             <h5><span><strong>02</strong></span>Meet your crew</h5>
//                     </div>  
//                     <div className="box">
//                         <Member member={currentCrew}/>
//                         <div className="menu">
//                             <ul>
//                                 {crew.map((member, _index) => {
//                                     return (
//                                         <li 
//                                             onClick={() => handleClick(member.name, _index)}
//                                             key={_index}
//                                             className={activeIndex === _index ? "active" : "idle"}
//                                         />
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                     </div>
//                 </div> 

//                 <div className="crew-image">
//                     <img src={currentCrew.images.png} alt="member" id="member"/> 
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Crew;