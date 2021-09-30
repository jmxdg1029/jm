import React, { useEffect } from 'react'
import '../components/Skills.css';
import img from './Images/tokyo.jfif';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 2000,
            once:true
        
        });
      }, [])
    return (
            <div className="skills-section">
                <div className="skills-header" data-aos="fade-up">
                    <img className="img" src={img}/>
                </div>
            </div>
    );
};


export default Skills;