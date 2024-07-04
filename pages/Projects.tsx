import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import React from 'react';

const projects = [
    {
        title: "Blood Bank Management System",
        imageUrl: "/img/image-1.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda labore dolorem ad aliquam debitis exercitationem.",
        demoUrl: "https://bbms-client.vercel.app"
    },
    {
        title: "Currency Rates API",
        imageUrl: "/img/image-1.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda labore dolorem ad aliquam debitis exercitationem.",
        demoUrl: "https://bbms-client.vercel.app"
    },
    {
        title: "E-Libaray Mobile App",
        imageUrl: "/img/image-1.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda labore dolorem ad aliquam debitis exercitationem.",
        demoUrl: "https://bbms-client.vercel.app"
    }
];

const Projects = () => {
  return (
     <div className="relative pt-[4rem] md:pt-[6rem] pb-[4rem] md:pb-[6rem] bg-slate-900">
        <div className='w-[80%] mx-auto'>
            <h1 className='text-[20px] font-bold uppercase text-highlight md-[1rem] mb-[1rem]'>Projects</h1>
            <h1 className="heading">
            Recent <span className='text-highlight'>Projects</span> 
        </h1>
        </div>
        
        <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
            {   
                
                projects.map((data, index) => (
                    <Link href={data.demoUrl} target='_blank' key={index}>
                        <div className='cursor-pointor'>
                            <ProjectCard imageUrl={data.imageUrl} title={data.title} description={data.description}/>
                        </div>
                    </Link>
                ))
                
            }
        </div>
    </div>
  )
}

export default Projects;
