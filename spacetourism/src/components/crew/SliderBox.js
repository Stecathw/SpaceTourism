import React, { useContext } from 'react';

import DotMenu from './DotMenu';
import Member from './Member';

import { CrewContext } from './util/Context';

import { useSwipeable } from "react-swipeable";

const NEXT = '+1';
const PREV = '-1';

function SliderBox( { crew }) {

     const { activeIndex, setActiveIndex, setCurrentCrewMember, setInProp } = useContext(CrewContext)        

     const toggleAnimation = (e) => {
          if (e.dir !== "Down" && e.dir !== "Up") {
               setInProp(inProp => !inProp)
          }
     }
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
          onSwiped: (e) => toggleAnimation(e),
          onSwipedLeft: () => slide(NEXT),
          onSwipedRight: () => slide(PREV),
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