import Particle from './Particle';
import React from 'react';
import TextEffect from './TextEffect';
import HoverGlowButton from './HoverGlowButton';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

const Hero = () => {
  return (
    <div className='min-h-[88vh] h-[600px] z-[1000] mt-[12vh]'>
      <Particle/>
      <div className="w-[80%] grid grid-cols-1 mx-auto lg:grid-cols-2 gap-[3rem] h-[100%] items-end relative z-[10000]">
        <div className="flex flex-col items-center lg:items-start justify-end h-[100%] lg:justify-center gap-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl mb-2 text-white font-normal">
                  Hi, I'm
                  <span className='font-medium'> Dinuranga</span>
              </h1>

              <div className="relative font-secondary font-semibold text-2xl lg:text-4xl">
                <div className="bg-gradient-to-r from-[#03ea7a] to-[#44BCFF] text-transparent bg-clip-text">
                <TextEffect/>
                </div>
              </div>
            </div>
            <HoverGlowButton href="/pdf/CV_Maleesha_Dinuranga.pdf" text="Download CV" className='py-3 px-8 bg-gradient-to-r from-[#03ea7a]  to-[#44BCFF] font-semibold'/>
            <Link href="http://linkedin.com/in/dinuranga" target="_blank">
              <div className="flex hover:text-cyan-400 text-secondary">
                <p className="">LinkedIn Profile</p>
                <ChevronRightIcon className='ml-1 w-6'/>
              </div>
            </Link>
        </div>
        <div className="flex items-start lg:items-center justify-center lg:justify-end h-[100%]">
            <div className="relative rounded-full">
              <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] bg-[url('/img/dp.jpeg')] bg-center bg-cover rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
