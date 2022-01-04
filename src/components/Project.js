import React, {useEffect,useState} from "react";
import Aos from 'aos';
import icon from './Images/icon.png';
import 'aos/dist/aos.css'
import styled from "styled-components";
import '../components/Project.css';


const Project = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 5000,
            once:true
        });
      }, [])

     
        return(
            <div>
                <div className="project-section">
                    <div className="project-section-leftHalf" data-aos="fade-up" >
                    
                    </div>
                    
                    <div className="project-section-rightHalf" data-aos="fade-up">
                        <div className="skill-desc">
                            <h1 data-aos="fade-up">SKILLS <img src={icon}/></h1>
                            <h2>Front-end Developer</h2>
                            <p>I focus on the visuals and component part of the website. My skills consist of many languages that take part in fron-end developing such as frameworks and using API's</p>
                            <hr/>
                        </div>
                        <div className="skill-lang">
                            <h3>Skills</h3>
                            <p>Javascipt, HTML, CSS, PHP, C#, MYSQL, Python, Java, React, Bootstra, Sass</p>
                            <h3>Tools</h3>
                            <p>Github, VScode</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}


   
  



export default Project;