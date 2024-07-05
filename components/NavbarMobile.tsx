import React from 'react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import {links} from '../data';

interface Props{
    nav: boolean;
    closeNav: () => void;
}

const NavbarMobile = ({nav,closeNav}: Props) => {

    const navAnimation = nav ? 'translate-x-0':'translate-x-[-100%]';
    
    return (
        <div className={`fixed ${navAnimation} transform transistion-all duration-300 top-0 bottom-0 left-0 right-0 bg-dark text-white z-[1000000]`}>
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
                
                <div className='flex flex-col gap-[2rem]'>
                {
                    links.map((data, index) => (
                        <div onClick={closeNav} key={index}>
                            <a 

                                href={data.link} 
                                className='nav-link-mobile'>
                                {data.text}
                            </a>
                        </div>
                    ))
                }
                </div>
                
                
            </div>
            <div onClick={closeNav} className="absolute cursor-pointer top-[3rem] right-[2.8rem] w-[2rem] h-[2rem] text-white">
                <XMarkIcon/>
            </div>
        </div>
    )
}

export default NavbarMobile;
