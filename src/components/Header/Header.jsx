import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
    return (
        <nav>
            <ActiveLink to = '/'>Home</ActiveLink>
            {/* <Link to = '/friends'>Friends</Link> */}
            <ActiveLink to= '/friends'>Friends </ActiveLink>
            <ActiveLink to = '/about'>About</ActiveLink>
            <ActiveLink to = '/contact'>Contact</ActiveLink>
        </nav>
    );
};

export default Header;