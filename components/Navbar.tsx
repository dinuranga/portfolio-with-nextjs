import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'
import HoverGlowButton from './HoverGlowButton';
import CircularText from './CircularText';
import Logo from './Logo';

interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}: Props) => {
  return (
    <nav className='w-[100%] sticky z-[10000] min-h-[12vh] top-0 pb-3 flex items-end h-[50px] '>
      <div className='flex items-end justify-between mx-auto w-[80%] h-[100%] cursor-pointer'>
        <div className='pl-4'>
          <Logo/>
        </div>
        <div className='flex gap-8'>
            <a href="#about" className='nav-link'>About</a>
            <a href="#projects" className='nav-link'>Projects</a>
            <a href="#tech-stack" className='nav-link'>Tech Stack</a>
        </div>
        <div>
            <button className='px-4 py-2 bg-gradient-to-r from-[#03ea7a] to-[#44BCFF] rounded-lg hidden md:block font-semibold text-slate-900'>Contact Me</button>
            
            <div onClick={openNav}>
                <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-white ' />
            </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
