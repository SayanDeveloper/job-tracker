import React, { useState } from 'react'
import {NavLink} from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () => {
    const [sideNavOpen, setSideNavOpen] = useState(false);

    return (
        <>
            <div className='top-navbar'>
                <div className='hamburger' onClick={() => setSideNavOpen(prev => !prev)}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </div>
                <div className='app-name'>Tracker</div>
                <div className='profile'>
                    <i className="fa fa-user" aria-hidden="true"></i>
                </div>
            </div>

            {sideNavOpen &&
                <div className='sidebar-dark-bg' onClick={() => setSideNavOpen(false)}></div>
            }
            <div className={`sidenav ${sideNavOpen ? "sidenav-open" : ""}`}>
                <NavLink to="/" onClick={() => setSideNavOpen(false)} className='each-el' end>
                    Dashboard
                </NavLink>
                <NavLink to="/applications" onClick={() => setSideNavOpen(false)} className='each-el'>
                    All Applications
                </NavLink>
                <NavLink to="/faq" onClick={() => setSideNavOpen(false)} className='each-el'>
                    FAQs
                </NavLink>
            </div>
        </>
    )
}

export default Navbar
