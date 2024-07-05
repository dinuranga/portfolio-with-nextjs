import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid';

const data = {
    phone: "+9470 361 4497",
    email: "contact.dinuranga@gmail.com",
    address: "K43, Panakoora, Anhettigama, Deraniyagala"
}

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
              <a href={`tel:${data.phone}`} className='text-highlight text-2xl font-semibold lg:text-lg'>{data.phone}</a>
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
              <a href={`mailto:${data.email}`} className='text-secondary text-sm lg:text-lg'>{data.email}</a>
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
              <p className='text-secondary text-sm lg:text-lg'>{data.address}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full  pt-[1rem] pb-[1rem] bg-slate-950">
            <div className="w-[80%] mx-auto"></div>
            <p className="text-slate-400 text-center text-xs md:text-[1rem]">Crafted by Maleesha Dinuranga. &copy;2024</p>
        </div>
    </footer>
  );
}

export default Footer;
