import React, { Component } from 'react';
import Logo from "../imgs/logo.png";
import Button from '@material-ui/core/Button';

const logoStyle={
    transition: 'all 1s ease-out'
}
class MainBody extends Component {
    constructor(props){
        super(props);
        this.state={
            opacity: 1,
            scale: 1,
        }
    }

    onScale(){
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        })
    }

    render() { 
        return ( 
            <div className="container-fluid"  style={{...logoStyle, transform: 'scale('+ this.state.scale + ')'}}>
                <a onClick={this.onScale.bind(this)} scale={{cursor: 'pointer'}} >
               <img 
               src={Logo} 
               alt="" 
               className="logo" />
               </a>
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