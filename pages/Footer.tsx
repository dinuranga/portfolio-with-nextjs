import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid';
import {contact} from "../data";
import LogoList from '@/components/LogoList';

function Footer() {
  return (
    <footer className='relative w-full pt-16 bg-slate-900'>
      <div className="w-[80%] mx-auto  pb-16 grid grid-cols-1 lg:grid-cols-2 text-slate-400 gap-8">
        <div className="rounded-md bg-slate-950 py-[1rem] px-[1rem]">
          <div className="flex items-center space-x-4">
            <div className="w-[45px] h-[45px]">
              <PhoneIcon className="h-12 w-12 text-slate-400 hover:text-highlight" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Phone</h1>
              <a href={`tel:${contact.phone}`} className='text-highlight text-2xl font-semibold lg:text-lg'>{contact.phone}</a>
            </div>
          </div>
        </div>

        <div className="rounded-md bg-slate-950 py-[1rem] px-[1rem]">
          <div className="flex items-center space-x-4">
            <div className="w-[45px] h-[45px]">
              <EnvelopeIcon className="h-[45px] w-[45px] text-slate-400 hover:text-highlight" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Email</h1>
              <a href={`mailto:${contact.email}`} className='text-secondary text-sm lg:text-lg'>{contact.email}</a>
            </div>
          </div>
        </div>

        <div id="footer" className="scroll-mt-[12vh] rounded-md bg-slate-950 py-[1rem] px-[1rem]">
          <div className="flex space-x-4">
            <div className="w-[45px] h-[45px]">
              <MapPinIcon className="h-12 w-12 text-slate-400 hover:text-highlight" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">Address</h1>
              <p className='text-secondary text-sm lg:text-lg'>{contact.address}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full  pt-[2rem] pb-[2rem] bg-slate-950">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center opacity-75">
              <LogoList/>
              <p className="text-slate-400 mt-[1rem] lg:mt-0 text-center lg:text-right text-xs lg:text-[1rem]">Developed by Maleesha Dinuranga. &copy;2024</p>
            </div>
            
        </div>
    </footer>
  );
}

export default Footer;
