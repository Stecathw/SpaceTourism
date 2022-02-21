import React from 'react'

import styled from 'styled-components';

export const StyledIcon = styled.div`     
     display: none;
     @media screen and (max-width: 540px) {
          display: block; 
          grid-area: nav;
          position: absolute;
          left: 0;
          top: 0;
          padding-top: 24px;
          padding-left: 24px;
          img {       
              min-width: 40px;
              height: auto;
              z-index: 3;
          }
     } 
`;

function Icon() {
  return (
       <>
          <StyledIcon>
               <img 
                    src="./media/logo.svg" 
                    alt="logo-svg-mobile" 
                    id="logo-svg-mobile"              
               />  
          </StyledIcon>
       </>

  )
}

export default Icon