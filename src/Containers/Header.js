// code for navigation links

import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';

const Header = () => (
    <header>
        <ul className="main-nav">
        <li><NavLink exact to ="/">Home</NavLink></li>
        <li><NavLink to ="/login">Login</NavLink></li>
        <li><NavLink to ="/productlist">Product List</NavLink></li>
        <li><NavLink to ="/about">About</NavLink></li>
        <li><NavLink to ="/contact">Contact</NavLink></li>
        <li><NavLink to ="/apione">API-ENDPOINT 2</NavLink></li>
        <li><NavLink to ="/apitwo">API-ENDPOINT 3</NavLink></li>
        </ul>
    </header>
);


export default Header;