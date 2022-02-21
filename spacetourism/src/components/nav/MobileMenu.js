import React from 'react'
import { bool, func } from 'prop-types';

import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const StyledMenu = styled.nav`
     
     display: none;
     @media screen and (max-width: 540px) {
          display: block; 
          z-index: 2; 
          position: absolute;
          right: 0;
          top: 0;
          width: 66vw;
          height: 100vh;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(81.5485px);
          transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
          transition: transform 0.3s ease-in-out;
     }
`;

export const StyledClose = styled.div`
    @media screen and (max-width: 540px) {
          position : absolute;
          right: 0;
          top: 0;      
          width: 24px;
          height: 24px;
          padding-top: 36px;
          padding-right: 24px;
          z-index: 3;
     }
`;

export const StyledLinks = styled.ul`
     @media screen and (max-width: 540px) {
          padding-top: 118px; 
          padding-left: 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;                    
          width: 100%;
          counter-reset: navlinks;            
     }
`;

function MobileMenu({ open, setOpen }) {

  return (     
     <>
          <StyledMenu open={open}> 
               <StyledClose>
                    <img src="./media/nav/icon-close.svg" alt="close" id="close" onClick={() => setOpen(!open)}/>
               </StyledClose> 
               <div className='mobileNav'>
                    <ul>
                         <li>
                              <NavLink to="/" className='navLink' activeClassName='active'>Home</NavLink>
                         </li>
                         <li>
                              <NavLink to="/destination" className='navLink' activeClassName='active'>Destination</NavLink>
                         </li>
                         <li>
                              <NavLink to="/crew" className='navLink' activeClassName='active'>Crew</NavLink>
                         </li>
                         <li>
                              <NavLink to="/technology" className='navLink' activeClassName='active'>Technology</NavLink>
                         </li>
                    </ul>  
               </div>                           
          </StyledMenu>
     </>
     )
}

MobileMenu.propTypes = {
     open: bool.isRequired,
     setOpen: func.isRequired,
};

export default MobileMenu