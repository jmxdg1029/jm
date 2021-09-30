import React, {useEffect} from "react";
import '../components/HeroSection.css';
import CountUp from 'react-countup';
import image1 from './Images/anim3.jfif'
import image2 from './Images/anim.jfif';
import image3 from './Images/anim2.jfif';
import Typewriter from "typewriter-effect";
import Marquee from "react-fast-marquee";



class HeroSection extends React.Component {   
        render(){
        return(
            <div className="hero-section animated animatedFadeInUp fadeInUp" >
                <div>
                <div className="marquee">
                            <Marquee
                            gradientWidth={{
                                gradientWidth:0
                            }}
                            style={{
                                height:290,
                                
                            }}
                            
                            >Making websites of festival design level for those who care for lead generation
                            </Marquee>
                        </div>
                    <div className="right-content-stack"> 
                        <div className="images">
                            <div className="image-stack__item image-stack__item--bottom">
                                <img src={image2} className="image1 animated animatedFadeInUp fadeInUp" alt="image1"/>
                            </div>
                            
                            <div className="image-stack__item image-stack__item--top">
                                <img src={image2} className="image2 fade-in-image" alt="image2"/>
                            </div>
                            <div className="image-stack__item image-stack__item--top2">
                                <img src={image3} className="image3 fade-in-image2" alt="image3"/>
                            </div>
                            <div className="image-stack__item image-stack__item--top3">
                                <img src={image3} className="image3 fade-in-image3" alt="image4"/>
                            </div>
                            <div className="image-stack__item image-stack__item--top4">
                                <img src={image1} className="image3 fade-in-image4" alt="image5"/>
                            </div>
                        </div>
                        
                    </div>
    
                </div>
            </div>
        )
    }
}

   
  



export default HeroSection;