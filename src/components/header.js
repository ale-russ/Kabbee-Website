import React from 'react';
import { Link } from 'react-router-dom';
//import logo from './src/imgs/logo.png';
import "./style.css"
import Button from '@material-ui/core/Button';
function Header() {
    return (
        <div className="header">
            <div className="header__left" >
                
                <a href="..." className="left__link">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo"/>
                    <div className="kabbee">
                        <h2>Kabbee</h2>
                    </div> 
                </a>
            </div>
           
            <div className="header__center">
                <ul className='ul__header' >
                    <li id="menu-item "className="menu-item">
                        <a href="...">Services</a>
                    </li>
                    <li id="menu-item"className="menu-item">
                        <a href="...">Blog</a>
                    </li>
                    <li id="menu-item"className="menu-item ">
                        <a href="...">About</a>
                    </li>
                </ul>
               
            </div>
            <div className="header__right">
                <div className="join__kabbee">
                    <Link to="/loginRegister/">Join Kabbee</Link>
                </div>
                <div className="btn">              
                    <Button className="btn-header" variant="contained" color="primary">
                        Get Started
                    </Button> 
                </div>

            </div>
        </div>
    )
}

export default Header
 