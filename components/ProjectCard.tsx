// components/ProjectCard.tsx

import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-slate-950 rounded-md overflow-hidden shadow-lg transform cursor-pointer hover:-translate-y-4 transition-all duration-200 relative">
      <Image 
        src={imageUrl} 
        alt={title} 
        width={400} 
        height={200} 
        className="w-full"
      />
      <div className="px-[1.7rem] py-4">
        <div className="text-highlight mb-[0.2rem] font-semibold text-lg">{title}</div>
        <p className="text-secondary text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;