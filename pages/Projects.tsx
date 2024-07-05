import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import React from 'react';

const projects = [
    {
        title: "Personal Portfolio with Next.js",
        imageUrl: "/img/image-1.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda labore dolorem ad aliquam debitis exercitationem.",
        demoUrl: "https://dinuranga.vercel.app"
    },
    {
        title: "Blood Bank Management System",
        imageUrl: "/img/image-2.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda labore dolorem ad aliquam debitis exercitationem.",
        demoUrl: "https://bbms-client.vercel.app"
    },
    {
        title: "Tesla Website with React.js",
        imageUrl: "/img/image-3.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic assumenda labore dolorem ad aliquam debitis exercitationem.",
        demoUrl: "https://teslasite.netlify.app"
    }
];

const Projects = () => {
    return (
        <div 
            id="projects" className="scroll-mt-[12vh] relative pt-[4rem] md:pt-[6rem] pb-[4rem] md:pb-[6rem] bg-slate-900">
            <div className='w-[80%] mx-auto'>
                <h1 className='text-[20px] font-bold uppercase text-highlight md-[1rem] mb-[1rem]'>Projects</h1>
                <h1 className="heading">
                Recent <span className='text-highlight'>Projects</span> 
                </h1>
            </div>
            
            <div data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
                {   
                    projects.map((data, index) => (
                        <Link href={data.demoUrl} target='_blank' key={index}>
                            <div className='cursor-pointer'>
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
