import ContactForm from '@/components/ContactForm';
import TextEffect2 from '@/components/TextEffect2';
import React from 'react';

const Contact = () => {
    return (
        <div className="pt-[4rem] md:pt-[6rem] pb-[4rem] md:pb-[6rem] bg-slate-950">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div className="w-[80%] pb-[3rem]">
                    <h1 className='text-[20px] font-bold uppercase text-highlight md-[1rem] mb-[1rem]'>Contact ME</h1>
                    <h1 className='text-[25px] lg:text-[50px] text-secondary font-secondary font-bold'>
                        {/* I could be the <span className='text-primary'>next talent</span> you are looking for ! */}
                        <TextEffect2/>
                    </h1>
                </div>

                <div className="relative w-[100%] h-[100%] text-white bg-slate-900 rounded-xl py-6 px-6">
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
}

export default Contact;