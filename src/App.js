
import './App.css';
import NavTool from './components/NavTool';
import HeroSection from './components/HeroSection';
import React from 'react';
import Skills from './components/Skills';
import ScrollSnap from 'scroll-snap';




function callback(){
  console.log('snapped')
}

class App extends React.Component{
  container = React.createRef();

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '100%',
    })
    snapElement.bind(callback)
  }
  
  componentDidMount(){
    this.bindScrollSnap()
  }

  render(){
  return (
   <div className="App">
     
     <div id="container" ref={this.container} >
     <NavTool/>
       <HeroSection/>
       <Skills/>
     </div>
   </div>
  );
  }
}

export default App;
