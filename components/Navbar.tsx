import { Bars3Icon } from '@heroicons/react/16/solid';
import React, {useState, useEffect} from 'react';
import Logo from './Logo';

interface Props {
    openNav: () => void;
}

export const links = [
  {
    text : "About",
    link : "#",
  },
  {
    text : "Projects",
    link : "#",
  },
  {
    text : "Skills",
    link : "#",
  }
];

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
    <nav className={`w-[100%] fixed z-[100000] min-h-[12vh] top-0 pb-3 flex items-end h-[50px] transition-all duration-300 ease-in-out bg-slate-950 ${scrollNav ? 'pb-6 bg-opacity-60 backdrop-blur-lg backdrop-brightness-100' : 'bg-opacity-0 backdrop-blur-none'}`}>
      <div className='flex items-end justify-between mx-auto w-[80%] h-[100%] cursor-pointer'>
        <div className='pl-4'>
          <Logo/>
        </div>
        <div className='flex gap-8'>
          {
            links.map((data, index) => (
              <a 
                href={data.link} 
                className='nav-link'
                key={index}>
                {data.text}
              </a>
            ))
          }
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
