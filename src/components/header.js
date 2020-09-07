import React, { Component }from 'react';
import { Link } from 'react-router-dom';
//import logo from './src/imgs/logo.png';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css"
import Button from '@material-ui/core/Button';


class Header extends Component {
   constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            scale: 1,
        } 
    }

    onScale(){
        this.setState({
            scale: this.state.scale > 1 ? 1: 1.3
        })
    }
    render(){
    return (
        <div className="header deep-puple z-depth-2" >
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
                    <Link to="/index">Join Kabbee</Link>
                </div>
                <div className="btn">              
                    <Button className="btn__header" variant="contained" color="primary">
                       GET STARTED
                    </Button> 
                </div>
            </div>
        </div>
    )}
}

export default Header
 