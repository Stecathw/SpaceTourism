import React from 'react';

function Destination( { planet } ) {

    return (
        <div className='planet-infos'>
            <h2>{ planet.name }</h2>
            <p>{planet.description}</p>
            <hr/>
            <div className='numbers'>
                <div className='distance'>
                    <h5 className="subheading-2 header">avg. distance</h5>
                    <h5 className="subheading-1">{planet.distance}</h5>   
                </div>
                <div className='travel'>
                    <h5 className="subheading-2 header">est. travel time</h5>
                    <h5 className="subheading-1">{planet.travel}</h5>  
                </div>                
            </div>           
        </div>
    )
}

export default Destination