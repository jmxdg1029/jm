import React, { useEffect } from 'react'
import '../components/Marquee.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Marquee from "react-fast-marquee";

const MarqueeJS = () => {
    return (
        
            <div className="marquee-section">
                <div className="marquee">
                       <Marquee
                       gradientWidth={{
                           gradientWidth:0
                       }}
                       speed={200}
                       loop={0}
                       style={{
                           height:200,
                       }}
                       >Making websites of festival design level for those who care for lead generation
                       </Marquee>
                </div>
            </div>
           
    );
};


export default MarqueeJS;