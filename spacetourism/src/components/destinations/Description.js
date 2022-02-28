import React, { useContext } from 'react';
import { PlanetContext } from './util/Context';

import { CSSTransition, SwitchTransition } from 'react-transition-group';


function Description() {

    const { currentPlanet, inProp } = useContext(PlanetContext)

    return (        
        <SwitchTransition mode={'out-in'}>
            <CSSTransition 
                key={inProp}
                addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                }}
                classNames="DescriptionNode"
            >
                <div className='planet-infos'>
                    <h2>{ currentPlanet.name }</h2>
                    <p>{ currentPlanet.description }</p>
                    <hr/>
                    <div className='numbers'>
                        <div className='distance'>
                            <h5 className="subheading-2 header">avg. distance</h5>
                            <h5 className="subheading-1">{ currentPlanet.distance }</h5>   
                        </div>
                        <div className='travel'>
                            <h5 className="subheading-2 header">est. travel time</h5>
                            <h5 className="subheading-1">{ currentPlanet.travel }</h5>  
                        </div>                
                    </div>
                </div>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default Description

