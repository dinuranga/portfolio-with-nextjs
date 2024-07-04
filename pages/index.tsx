import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Index;
