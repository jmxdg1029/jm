import React, {Component} from "react";
import '../components/NavTool.css';
import logo from './Images/logos/logo-7.png'
import Typewriter from 'typewriter-effect';
class NavTool extends Component{
    render(){
        return(
            <div className="nav">
                <div className="nav-info animatedDelay animatedFadeInUp fadeInUp">
                    <div>
                    <img className="name" src={logo}></img>
                    </div>
               
                </div>
            </div>
        )
    }
}

export default NavTool;