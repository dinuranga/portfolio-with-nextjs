import React,{ useState } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import NavbarMobile from '@/components/NavbarMobile';

function Home() {

  const [nav,setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className=''>
        {/* Navbar */}
        <NavbarMobile nav={nav} closeNav={closeNav}/>
        <Navbar openNav={openNav}/>
        {/* Hero Section */}
        <Hero/>
    </div>
  )
}

export default Home
