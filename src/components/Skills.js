import React, { useEffect } from 'react'
import '../components/Skills.css';
import img2 from './Images/skill2.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import {Parallax} from 'react-scroll-parallax';


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
                        <div className='skill-header'>
                            <h1>ATTRACT</h1>
                        </div>
                        <Parallax className="custom-class" x={[-54,124]} tagOuter="figure">
                            <img src={img2} className="img2" alt='IMAGE'/>
                        </Parallax>
                        <div className="skills-Image" data-aos="fade-up">
                            <h1>Developer</h1>
                            <hr/>
                            <p className="stretch">DESIGN</p>                
                            <p className="desc-skills">I create multi-leveling websites that attracts users who appeal to artistic views </p>
                        </div>
                </div>
            </div>
    );
};


export default Skills;