import React, { useEffect } from 'react'
import '../components/Skills.css';
import img from './Images/tokyo.jfif';
import img2 from './Images/img-2.jfif';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Parallax} from 'react-scroll-parallax';
import Marquee from "react-fast-marquee";

const Skills = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 2000,
            once:true
        });
      }, [])
    return (
            <div className="skills-section">
                <div className="marquee">
                       
                       <Marquee
                       gradientWidth={{
                           gradientWidth:0
                       }}
                       speed={200}
                       loop={0}
                       style={{
                           height:140,
                       }}
                       >Making websites of festival design level for those who care for lead generation
                       </Marquee>
                       
                </div>
                <div className="skills-header" data-aos="fade-up">
                    <img className="img" src={img2}/>
                </div>
                <Parallax className="custom-class" x={[-54,54]} tagOuter="figure">
                    <img src={img2} className="img2"/>
                </Parallax>
            </div>
    );
};


export default Skills;