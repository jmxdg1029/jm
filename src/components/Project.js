import React, {useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../components/Project.css';
import img1 from './Images/skill.jfif'





const Project = () => {
    useEffect(() => {
        Aos.init({ 
            duration: 2000,
            once:true
        });
      }, [])
        return(
            <div className="project-section animated animatedFadeInUp fadeInUp"  >
               <img src={img1} data-aos="fade-up" className="img1"/>
            </div>
        )
}


   
  



export default Project;