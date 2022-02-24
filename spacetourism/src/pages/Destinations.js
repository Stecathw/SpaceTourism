import React from 'react';

import Nav from '../components/Nav';
import Image from '../components/destinations/Image';
import Title from '../components/Title';
import SliderBox from '../components/destinations/SliderBox';

import PlanetProvider from '../components/destinations/util/Context';


function Destinations( { destinations } ) {

     // CONTEXT : destination
     return (
        <div className="destination">
            <Nav/>
            <div className="title-content">
                <Title nb={'01'} title={'Pick your destination'}/>
            </div>              
            <div className="content">
                <PlanetProvider>
                    <div className="planet-image">
                        <Image />
                    </div> 
                    <div className="planet-content"> 
                        {/* ALL MENU AND DESCRIPTION IS LISTING TO SWIPE EVENT */}
                        <SliderBox destinations={destinations}/>
                        {/* <div className="box">
                            <TabMenu allDest = { destinations }/>              
                            <Description/>
                        </div> */}
                    </div>                           
                </PlanetProvider>
            </div>
        </div>
    )
}
export default Destinations



// import Destination from '../components/destinations/Destination';

// function Destinations( {destinations} ) {

//     const [currentPlanet, setCurrentPlanet] = useState(destinations[0])

//     const [activeIndex, setActiveIndex] = useState(0)

//     const handleClick = (destName, btnID) => {
//         setCurrentPlanet(getData(destName))
//         setActiveIndex(btnID)
//     }

//     const getData = (destName) => {
//         return destinations.find(({ name }) => name === destName);
//     }

//     return (
//         <div className="destination">
            
//             <Nav/>

//             <div className="content">
//                 <div className="planet-image">
//                     <div className="title"> 
//                         <h5><span><strong>01</strong></span>Pick your destination</h5>
//                     </div>  
//                     <div className="image">
//                         <img src={currentPlanet.images.png} alt="planet" id="planet"/> 
//                     </div>
//                 </div>
//                 <div className="planet-description">  
//                     <div className="box">
//                         <div className="menu">
//                             <ul>
//                                 {destinations.map((destination, _index) => {
//                                     return (
//                                         <li 
//                                             onClick={() => handleClick(destination.name, _index)}
//                                             key={_index}
//                                             className={activeIndex === _index ? "active" : "idle"}
//                                         >
//                                             <span>{destination.name}</span>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                         <Destination planet={currentPlanet}/>
//                     </div>   
//                 </div>
//             </div>            
//         </div>
//     )
// }

// export default Destinations;