import React from 'react';

import Nav from '../components/Nav';
import Title from '../components/Title';
import Techno from '../components/technology/Techno';
import TechnoProvider from '../components/technology/util/Context';
import CircleMenu from '../components/technology/CircleMenu';
import Image from '../components/technology/Image';

function Technology( { technology } ) {

    return (
        <div className='technology'>
            <Nav/>
            <div className="title-content">
                <Title nb={'03'} title={'Space Launch 101'}/>
            </div>
            <div className="content">
                <TechnoProvider>

                <div className="techno-menu">
                    <CircleMenu technology={technology}/>
                </div>

                <div className="techno-content">                        
                    <Techno />
                </div>

                <div className="techno-image">
                    <Image /> 
                </div>                            
                </TechnoProvider>
            </div>
        </div>
    )
}

export default Technology;