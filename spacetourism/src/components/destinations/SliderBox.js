import React, { useContext } from 'react';

import TabMenu from './TabMenu';
import Description from './Description';

import { PlanetContext } from './util/Context';

import { useSwipeable } from "react-swipeable";

const NEXT = '+1';
const PREV = '-1';

function SliderBox( { destinations }) {

     const { activeIndex, setActiveIndex, setCurrentPlanet } = useContext(PlanetContext)        

     const slide = (dir) => {
          let directionChange = dir === NEXT ? NEXT : PREV
          let calcIndex = activeIndex + Number(directionChange)
          let newIndex;
          if (calcIndex >= destinations.length) {
               newIndex = 0;
          } else if (calcIndex < 0) {
               newIndex = destinations.length - 1;
          } else {
               newIndex = calcIndex;
          }
          setActiveIndex(newIndex)
          setCurrentPlanet(destinations[newIndex])
     }

     const handlers = useSwipeable({
          onSwipedLeft: () => slide(NEXT),
          onSwipedRight: () => slide(PREV),
          preventDefaultTouchmoveEvent: true,
          trackMouse: true
     })
     
     return (
          <div className="box" {...handlers}>
               <TabMenu allDest = { destinations }/>              
               <Description/>
          </div>
     )
}

export default SliderBox