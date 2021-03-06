import React from 'react';

import Nav from '../components/Nav';
import Title from '../components/Title';
import Image from '../components/crew/Image';
import SliderBox from '../components/crew/SliderBox';

import CrewProvider from '../components/crew/util/Context';

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
                    {/* <div className='crew-menu'>
                        <DotMenu allCrewMembers={ crew }/> 
                    </div>
                    <div className='crew-content'>
                        <Member />           
                    </div>                     */}
                    <div className='crew-content'>
                        <SliderBox crew={crew}/>
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