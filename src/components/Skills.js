import React, { useEffect } from 'react'
import '../components/Skills.css';
import img from './Images/tokyo.jfif';
import img2 from './Images/car.png';
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
                <div className="collumn">
                    <Parallax className="custom-class" x={[-54,104]} tagOuter="figure">
                        <img src={img2} className="img2"/>
                    </Parallax>
                    <div className="skills-header" data-aos="fade-up">
                        <h1 className="h1">Art Gallery</h1>
                        <p>Making websites of festival design level for those who care for lead generation</p>
                    </div>
                </div>
            </div>
    );
};


export default Skills;