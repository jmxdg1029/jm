import React from "react";
import '../components/NavTool.css';
import logo from './Images/logos/logo-7.png'
import logo2 from './Images/logos/black.png';
import Typewriter from 'typewriter-effect';


class NavTool extends React.Component{
    state = {
        img:logo,
       
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 900) {
          this.setState({img:logo2})
         
        } else {
          this.setState({img:logo})
          
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    render(){
        return(
            <div className="nav">
                <div className="nav-info animatedDelay animatedFadeInUp fadeInUp">
                    <div>
                    <img className="name" src={this.state.img}></img>
                    </div>
                   
                </div>
            </div>
        )
    }
}

export default NavTool;