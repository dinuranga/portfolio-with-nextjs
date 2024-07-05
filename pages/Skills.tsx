import React from 'react'
import SkillCard from '@/components/SkillCard';

const skills = [
  {"name":"HTML", image:"html.svg"},
  {"name":"CSS", image:"css.svg"},
  {"name":"JavaScript", image:"js.svg"},
  {"name":"Pyhton", image:"python.svg"},
  {"name":"Java", image:"java.svg"},
  {"name":"Node.js", image:"nodejs.svg"},
  {"name":"PHP", image:"php.svg"},
  {"name":"React", image:"reactjs.svg"},
  {"name":"MongoDB", image:"mongodb.svg"},
  {"name":"Git+GutHub", image:"git.svg"},
];

const Skills = () => {
  return (
    <div id="skills" className='scroll-mt-[12vh] bg-slate-950 pt-[4rem] md:pt-[6rem] pb-[5rem] md:pb-[8rem]'>
      <div className="w-[80%] mx-auto">
        <p className="heading text-center">
          MY <span className='text-highlight'>Skills</span>
        </p>
      </div>
      <div className='w-full flex justify-center mt-[3rem] md:mt-[4rem]'>
        <div className='hidden md:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4'>
          {skills.map(item => (
            <SkillCard key={item.name} skillName={item.name} image={"img/" + item.image} />
          ))}
        </div>
        <div className='w-[80%] md:hidden grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4'>
          {skills.map(item => (
            <SkillCard key={item.name} skillName={item.name} image={"img/" + item.image} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Skills;
