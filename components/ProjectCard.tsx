// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  repository: string;
  demoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, demoUrl, repository }) => {
  return (
    <div className="bg-slate-950 rounded-md overflow-hidden shadow-lg transform hover:-translate-y-4 transition-all duration-200 relative">
      <div className='bg-slate-700 relative'> 
      <Link href={demoUrl} target='_blank' className='cursor-pointer'>
          <Image 
            src={imageUrl} 
            alt={title} 
            width={400} 
            height={200} 
            className="w-full"
          />
        </Link>
        {/* <div className="absolute bottom-0 py-1 px-2 rounded-r-sm bg-highlight">
          <Link href={demoUrl} target='_blank' className='cursor-pointer'>
            <p className='font-semibold'>Live Demo</p>
          </Link>
        </div> */}
      </div>
      
      <div className="px-[1.7rem] py-4">
        <div className="text-highlight mb-[0.2rem] font-semibold text-lg">{title}</div>
        <p className="text-secondary text-sm">{description}</p>
        <Link href={repository} target='_blank'>
          <div className='flex items-center mt-[0.5rem] text-indigo-400 hover:text-indigo-300 transition-all duration-100 ease-in-out'>
            <p className='hover:mr-[.2rem] pt-1 pr-1 pb-1 transition-all duration-100 ease-in-out'>Visit Repository</p>
            <ChevronRightIcon className='w-[20px]'/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;