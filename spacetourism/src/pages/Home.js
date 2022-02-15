import React from 'react';
import Nav from '../components/Nav';

import { Link } from 'react-router-dom';


function Home() {
    return (
                    
        // <div className="home">
        <div className="home">
            <Nav/>
            <div className="content">            
                <div className="homeIntroduction">
                    <h5>So, you want to travel to</h5>
                    <h1>Space</h1>
                    <p>  
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>                
                </div>
                <div className="buttonExplore">
                        <div className="buttonIdleCircle"> 
                        <Link to="/destination"> 
                            <div className='circle'>
                                <h4>Explore</h4>                             
                            </div>  
                        </Link>                                               
                        </div> 
                                                                                                                  
                </div>
            </div>
        </div>
          
    )
}

export default Home;