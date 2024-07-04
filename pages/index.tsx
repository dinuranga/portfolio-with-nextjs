import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';

const Index = () => {
  return (
    <div className='overflow-x-hidden'>
      <Home/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Index;
