import React from 'react';

import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import User from './User/User';
import './Header.css'

const Header = () => {
    return <header>
        <Logo />
        <Navbar />
        <User />
    </header>
}

export default Header;