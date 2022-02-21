import React, { useState, useRef }  from 'react';

import { NavLink } from 'react-router-dom';

import Burger from './nav/Burger';
import MobileMenu from './nav/MobileMenu';
import Icon from './nav/Icon';

import { useOnClickOutside } from './nav/CustomHook';


function Nav() {

    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));  

    return (
        <>
            <div className='navBar' ref={node}>
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
                <Icon />
                <Burger open={open} setOpen={setOpen}/>
                <MobileMenu open={open} setOpen={setOpen}/>       
            </div>
        </>
    )
}

export default Nav;