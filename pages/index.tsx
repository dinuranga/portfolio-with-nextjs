import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default Index;
