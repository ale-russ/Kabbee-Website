import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar">
            <Link to="/header" className="nav-link"/>
            <Link to="/index" className="nav-link"/>
            
            </nav>
         );
    }
}
 
export default Navbar;