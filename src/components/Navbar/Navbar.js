import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
             <Link to ="/">Home</Link>
            <Link to ="/profile">Student Profile</Link>
            <Link to ="/syllebus">Syllebus</Link>
            <Link to ="/project">Projects</Link>
            <Link to ="/login">Login</Link>
           
        </nav>
    );
};

export default Navbar;