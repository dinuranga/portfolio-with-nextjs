import { ArrowDownTrayIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import React from 'react';

const data = {
  heading : "who am I ?",
  description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptates quisquam, blanditiis eius molestias debitis laboriosam aspernatur.Rerum voluptates quisquam, blanditiis eius.",
  buttonText : "Download CV",
}

function About() {
  return (
    <div id="about" className='scroll-mt-[12vh] relative pb-[3rem] pt-[3rem] lg:pb-[8rem] md:pt-[8rem] bg-slate-900'>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className='text-[20px] font-bold uppercase text-highlight md-[1rem] mb-[1rem]'>About Me</h1>
          <h2 className="text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">{data.heading}</h2>
          <div className='w-[6rem] rounded-sm h-[0.5rem] mb-[2rem] bg-slate-800'></div>
          <p className='text-secondary'>{data.description}</p>
          <Link href={"#"}>
            <div className="flex justify-center items-center w-[190px] py-2 px-6 bg-highlight rounded-md mt-[2rem]">
              <p className='font-semibold'>{data.buttonText}</p>
              <ArrowDownTrayIcon className='ml-1 w-5'/>
            </div>
          </Link>
        </div>

        <div className="relative hidden md:flex justify-center lg:justify-center">
          <div className="left-[15rem] bottom-6 bg-[url('/img/profile.jpg')] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[320px] lg:h-[360px] bg-cover object-contain rounded-xl z-[100]"></div>
        </div>
        
        <div className="absolute top-[2.5rem] right-[2.5rem]">
          <div className="bg-[url('/img/profile.jpg')] md:hidden w-[100px] h-[100px] bg-slate-800 rounded-full object-contain bg-cover"></div>
        </div>
      </div>
    </div>
  )
}

export default About;
