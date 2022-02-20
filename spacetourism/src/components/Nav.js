import React  from 'react';

import { NavLink } from 'react-router-dom';

function Nav() {

    const openMobileNav = () => {

    let navLinks= document.querySelector('.navLinksMobile');
    let iconMenu = document.querySelector('#hamburger');
    let iconClose = document.querySelector('#close')
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            iconMenu.style.display = 'block';
            iconClose.style.display = 'none'
        } else {
            navLinks.style.display = 'flex';
            iconMenu.style.display = 'none';
            iconClose.style.display = 'block';
        }
    }

    return (
    <div className='navBar'>

        <div className='navLogo'>
            <img src="./media/logo.svg" alt="logo-svg" id="logo-svg"/>            
        </div>

        <div className="horizontalLine"><hr></hr></div>

        <nav className='navLinks'>
            <ul>
                <li>
                    <NavLink to="/" className='navLink' activeclassname='active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/destination" className='navLink' activeclassname='active'>Destination</NavLink>
                </li>
                <li>
                    <NavLink to="/crew" className='navLink' activeclassname='active'>Crew</NavLink>
                </li>
                <li>
                    <NavLink to="/technology" className='navLink' activeclassname='active'>Technology</NavLink>
                </li>
            </ul>
        </nav>

        <div className="hamburgerMenu">
            <img src="./media/nav/icon-hamburger.svg" alt="hamburger" id="hamburger" onClick={openMobileNav}/>               
        </div>

        {/* <div className="mobileNav">

            <img src="./media/nav/icon-close.svg" alt="close" id="close" onClick={openMobileNav}/>

            <nav className='navLinksMobile'>                
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
            </nav>
        </div> */}
    </div>

    )
}

export default Nav;