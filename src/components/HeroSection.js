import React, {useEffect} from "react";
import '../components/HeroSection.css';
import CountUp from 'react-countup';
import image1 from './Images/anim3.jfif'
import image2 from './Images/anim.jfif';
import image3 from './Images/anim2.jfif';
import { Parallax } from "react-scroll-parallax";




class HeroSection extends React.Component {   
        render(){
        return(
            <div className="hero-section animated animatedFadeInUp fadeInUp" >
                <div>
                    <div className="right-content-stack">   
                        
                        <div className="images">
                            <div className="image-stack__item image-stack__item--bottom">
                                <Parallax className="custom-class" y={[-17,17]} tagOuter="figure">
                                    <a href=""><img src={image2} className="image1 animated animatedFadeInUp fadeInUp" alt="image1"/></a>
                                </Parallax> 
                                <span className="header-nav">/01</span>  
                            </div>
                            
                            <div className="image-stack__item image-stack__item--top">
                                <Parallax className="custom-class" y={[-17,17]} tagOuter="figure">
                                    <a href=""><img src={image2} className="image2 fade-in-image" alt="image2"/></a>
                                </Parallax> 
                                <span className="header-nav">/02</span>  
                            </div>
                            <div className="image-stack__item image-stack__item--top2">
                                <Parallax className="custom-class" y={[-17,17]} tagOuter="figure">
                                    <a href=""><img src={image3} className="image3 fade-in-image2" alt="image3"/></a>
                                </Parallax> 
                                <span className="header-nav">/03</span>  
                            </div>
                            <div className="image-stack__item image-stack__item--top3">
                                <Parallax className="custom-class" y={[-17,17]} tagOuter="figure">
                                    <a href=""><img src={image3} className="image3 fade-in-image3" alt="image4"/></a>
                                </Parallax> 
                                <span className="header-nav">/04</span>  
                            </div>
                            <div className="image-stack__item image-stack__item--top4">
                                <Parallax className="custom-class" y={[-17,17]} tagOuter="figure">
                                    <a href=""><img src={image1} className="image3 fade-in-image4" alt="image5"/></a>
                                </Parallax> 
                                <span className="header-nav">/05</span>  
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <p>John Michael De Guzman</p>
                    </div>
                </div>
            </div>
        )
    }
}

   
  



export default HeroSection;