import React from 'react';
import { Link } from 'react-router-dom';

import './NavbarContainer.css';

const Navbar = () => {

    return <div className='navbar-container' >
        <nav role="navigation">
            <div id="menuToggle">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <Link to='/sessions' ><li>Sessions</li></Link>
                </ul>
            </div>
        </nav>
        <div>
            <p>STAR WARS</p>
            <p>Cinema</p>
        </div>
    </div>
}

export default Navbar;