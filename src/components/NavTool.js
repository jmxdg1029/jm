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
                    <p className="place"><Typewriter  
                            options={{
                                autoStart:true,
                                delay:308,
                            }}
                            onInit={(typewriter) =>{
                                typewriter.typeString('Toronto, Canada')
                                .changeDelay(Number(1000))
                                .start();
                            }}
                        /></p>
                </div>
            </div>
        )
    }
}

export default NavTool;