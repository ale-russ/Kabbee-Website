import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/header/" className="nav-link"/>
            </nav>
         );
    }
}
 
export default Navbar;