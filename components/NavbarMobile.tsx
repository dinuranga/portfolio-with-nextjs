import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
    nav: boolean;
    closeNav: () => void;
}

const NavbarMobile = ({nav,closeNav}: Props) => {

    const navAnimation = nav ? 'translate-x-0':'translate-x-[-100%]';
    
    return (
        <div className={`fixed ${navAnimation} transform transistion-all duration-300 top-0 bottom-0 left-0 right-0 bg-dark text-white z-[100000]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                <a href="#about" className='nav-link-mobile'>About</a>
                <a href="#projects" className='nav-link-mobile'>Projects</a>
                <a href="#tech-stack" className='nav-link-mobile'>Tech Stack</a>
            </div>
            <div onClick={closeNav} className="absolute cursor-pointer top-[3rem] right-[2.8rem] w-[2rem] h-[2rem] text-white">
                <XMarkIcon/>
            </div>
        </div>
    )
}

export default NavbarMobile
