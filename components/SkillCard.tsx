import React from 'react';
import Image from 'next/image';

interface SkillCardProps {
  skillName: string;
  image: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skillName, image }) => {
  return (
    <div className='ring-[1px] hover:ring-[2px] transition duration-150 ease-in-out border-solid ring-slate-600 w-14 md:w-24 lg:w-[120px] h-14 md:h-24 lg:h-[120px] relative bg-slate-900 rounded-xl shadow-glow hover:shadow-cyan-500/50'> {/*shadow-cyan-500/50*/}
      <div className='w-full h-full flex items-center justify-center'>
        <Image src={image} alt={skillName} width={48} height={48} className='w-[40%] h-[40%] mb-2' />
      </div>
      <p className="absolute left-1/2 transform -translate-x-1/2 bottom-1 md:bottom-2 text-white text-[.5rem] md:text-[.8rem]">
        {skillName}
      </p>
    </div>
  );
};

export default SkillCard;