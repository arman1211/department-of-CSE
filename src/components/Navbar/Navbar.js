import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <a href="/">Home</a>
            <a href="/profile">Student Profile</a>
            <a href="/syllebus">Syllebus</a>
            <a href="/project">Projects</a>
            <a href="/login">Login</a>
        </nav>
    );
};

export default Navbar;