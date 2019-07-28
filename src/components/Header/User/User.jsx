import React from 'react';
import { Link } from 'react-router-dom';

import UserIcon from '../../../assets/image/user.png'

const User = () => {
    return <div className='user' >
        <Link to='/' >
            <img src={UserIcon} alt="user-icon" />
        </Link>
    </div>
}

export default User;