import React from 'react'
import Image from 'next/image';

const logos = [
    {
        url: "/img/reactjs.svg"
    },
    {
        url: "/img/nextjs.svg"
    },
    {
        url: "/img/typescript.svg"
    },
    {
        url: "/img/tailwindcss.svg"
    },
    {
        url: "/img/vercel.svg"
    },
]

const LogoList = () => {
  return (
    <div className='flex justify-center lg:justify-start items-center gap-[2rem]'>
      {
        logos.map((logo, index) => (
            <div key={index} className='h-[15px] lg:h-[20px]'>
                <Image src={logo.url} alt="" className='w-[100%] h-[100%]' width={45} height={45}></Image>
            </div>
        ))
      }
    </div>
  )
}

export default LogoList;
