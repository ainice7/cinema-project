import React from 'react';

import { Link } from 'react-router-dom';
import './Footer.css'

export const Footer = () => {
    return(
        <footer>
            <div>
                <Link to="/about" >About Us</Link>
                <Link to="/privacy" >Privacy</Link>
                <Link to="/contacts" >Contacts</Link>
            </div>
        </footer>
    )
}