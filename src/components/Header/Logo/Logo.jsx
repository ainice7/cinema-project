import React from 'react';
import {Link} from 'react-router-dom';

import Trooper from '../../../assets/image/stormtrooper.svg'

const Logo = () => {
    return    <div className='logo'>
        <Link to={'/'}>
            <img src={Trooper} alt="logo" />
        </Link>
    </div>
}

export default Logo;