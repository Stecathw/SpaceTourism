import React from 'react';
import { bool, func } from 'prop-types';

import styled from 'styled-components';

export const StyledBurger = styled.div`
     
     display: none;
     @media screen and (max-width: 540px) {
          display: block; 
          grid-area: nav;
          position: absolute;
          right: 0;
          top: 0;
          padding-top: 33px;
          padding-right: 24px;
          img {       
              width: 24px;
              height: 21px;
              z-index: 3;
          }
     } 
`;

function Burger({ open, setOpen }) {

  return (
       <>
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
               <img src="./media/nav/icon-hamburger.svg" alt="hamburger" id="hamburger" />
          </StyledBurger>
       </>
  )
}

Burger.propTypes = {
     open: bool.isRequired,
     setOpen: func.isRequired,
};

export default Burger