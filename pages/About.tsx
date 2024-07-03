import { ArrowDownTrayIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div id="#about" className='relative pb-[3rem] pt-[3rem] lg:pb-[8rem] md:pt-[8rem] bg-slate-900'>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className='text-[20px] font-bold uppercase text-highlight md-[1rem] mb-[1rem]'>About Me</h1>
          <h2 className="text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[1rem] font-bold text-white">Who am I?</h2>
          <div className='w-[6rem] h-[0.5rem] mb-[2rem] bg-primary'></div>
          <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptates quisquam, blanditiis eius molestias debitis laboriosam aspernatur.Rerum voluptates quisquam, blanditiis eius.</p>
          <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptates quisquam, blanditiis eius molestias debitis laboriosam aspernatur.</p>
          <Link href={"#"}>
            <div className="flex justify-center items-center w-[190px] py-2 px-6 bg-highlight rounded-md mt-[2rem]">
              <p>Download CV</p>
              <ArrowDownTrayIcon className='ml-1 w-5'/>
            </div>
          </Link>
        </div>

        <div className="relative flex justify-center lg:justify-center">
          <div className="left-[15rem] bottom-6 bg-[url('/img/profile.jpg')] w-[200px] h-[250px] md:w-[250px] md:h-[300px] lg:w-[320px] lg:h-[360px] bg-cover object-contain rounded-xl z-[100]"></div>
        </div>

      </div>
    </div>
  )
}

export default About