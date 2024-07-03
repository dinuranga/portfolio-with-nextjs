import { Bars3Icon } from '@heroicons/react/16/solid'
import React, {useState, useEffect} from 'react'
import Logo from './Logo';

interface Props {
    openNav: () => void;
}

const Navbar = ({openNav}: Props) => {

  const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 60) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => {
            window.removeEventListener('scroll', changeNav);
        };
    }, []);

  return (
    <nav className={`w-[100%] fixed z-[100000] min-h-[12vh] top-0 pb-3 flex items-end h-[50px] transition-all duration-500 ease-in-out bg-slate-950 ${scrollNav ? 'pb-6 bg-opacity-100' : 'bg-opacity-0'}`}>
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
