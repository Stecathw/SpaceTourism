import React, {  useState, useEffect } from 'react';
import Nav from '../components/Nav';


import { Destinations } from '../data/Destinations';


function Destination() {

    const [destinations, setDestinations] = useState(Destinations)


    return (
        <div className="destination">
            <Nav/>
            <div className="content">


                <div className="planet-image">

                    <div className="title"> 
                        <h5><span><strong>01</strong></span>Pick your destination</h5>
                    </div>  

                    <div className="image">
                        <img src="./media/destination/image-moon.png" alt="planet" id="planet"/> 
                    </div>

                </div>

                <div className="planet-description">
                    <div className="menu">
                        <ul>
                            <li className='nav-text'>
                                <a href="">Moon</a>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>            
        </div>
    )
}

export default Destination;