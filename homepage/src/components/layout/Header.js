import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   return (
       <header>
        <text id="date">March 24, 2018</text><h1><Link id="header"to="/">Stay Woke</Link></h1>
       </header>
   )
}


export default Header;
