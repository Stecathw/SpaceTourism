import React, { useContext } from 'react';

import DotMenu from './DotMenu';
import Member from './Member';

import { CrewContext } from './util/Context';

import { useSwipeable } from "react-swipeable";

const NEXT = '+1';
const PREV = '-1';

function SliderBox( { crew }) {

     const { activeIndex, setActiveIndex, setCurrentCrewMember, setInProp } = useContext(CrewContext)        

     const slide = (dir) => {
          let directionChange = dir === NEXT ? NEXT : PREV
          let calcIndex = activeIndex + Number(directionChange)
          let newIndex;
          if (calcIndex >= crew.length) {
               newIndex = 0;
          } else if (calcIndex < 0) {
               newIndex = crew.length - 1;
          } else {
               newIndex = calcIndex;
          }
          setActiveIndex(newIndex)
          setCurrentCrewMember(crew[newIndex])
     }

     const handlers = useSwipeable({
          onSwipedLeft: () => {slide(NEXT); setInProp(inProp => !inProp)},
          onSwipedRight: () => {slide(PREV); setInProp(inProp => !inProp)},
          preventDefaultTouchmoveEvent: true,
          trackMouse: true
     })
     
     return (
          <div className='box' {...handlers}>
               {/* <div className='crew-menu'> */}
                    <DotMenu allCrewMembers={ crew }/> 
               {/* </div> */}
               {/* <div className='crew-content'> */}
                    <Member />           
               {/* </div>   */}
          </div>
     )
}

export default SliderBox