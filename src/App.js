
import './App.css';
import NavTool from './components/NavTool';
import HeroSection from './components/HeroSection';
import React, {useEffect} from 'react';
import Skills from './components/Skills';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
 useEffect(() => {
   Aos.init({ duration: 2000});
 }, [])
  return (
   <div className="App">   
     <div id="container" >
       
     <NavTool/>
       <HeroSection/>
      
        <Skills/>
     
       
     </div>
   </div>
  );
  
}

export default App;
