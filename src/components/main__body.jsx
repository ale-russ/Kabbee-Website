import React, { Component } from 'react';
import Logo from "../imgs/logo.png";
import Button from '@material-ui/core/Button';

class MainBody extends Component {

    render() { 
        return ( 
            <div className="container-fluid">
               <img 
               src={Logo} 
               alt="" 
               className="logo" />
                    <div className="motto__div">
                        <div  className="h1__div">
                            <h1>
                                We Rise Together By Helping Eachother
                            </h1>
                        </div> 
                        <span className="btn__motto">
                            <Button 
                                className="btn-center"
                                variant="contained" 
                                color="primary">
                            Get Started
                            </Button>
                        </span>                    
                </div>
            </div>
         );
    }
}
 
export default MainBody ;