import React, { useEffect } from 'react'
import '../components/Skills.css';
import Marquee from 'react-fast-marquee';


const Skills = () => {
    return (
            <div className="skills-section">
                <div className="skills-header">
                <Marquee
                        gradientWidth={{
                            gradientWidth:0
                        }}
                        style={{
                            height:200,
                           
                            
                        }}

                        
                        >Making websites of festival design level for those who care for lead generation
                        </Marquee>
                </div>
            </div>
    );
};


export default Skills;