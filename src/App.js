import React from 'react';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutImage from './images/about.png';
import aboutImage1 from './images/download.png';
import Presentation from './Components/Presentation';
import Contact from './Components/Contect';

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutImage} title="Comes With All You Need For Daily Life" button="Get The App"/>
      <Presentation/>
      <About image={aboutImage1} title="Download And Get The APP Now" button="Download"/>
      <Contact/>
    </div>
  );
}

export default App;
