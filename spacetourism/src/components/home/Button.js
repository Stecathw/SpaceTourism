import React from 'react';

import { Link } from 'react-router-dom';

function Button() {
     return (
          <div className="buttonIdleCircle"> 
               <Link to="/destination"> 
               <div className='circle'>
                    <h4>Explore</h4>                             
               </div>  
               </Link>                                               
          </div>
     )
}

export default Button