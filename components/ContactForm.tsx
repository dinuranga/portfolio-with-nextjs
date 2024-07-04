import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div className="rounded-lg shadow-md">
      <h1 className="mt-2 text-secondary text-[22px] md:text-[30px] leading-10 font-semibold">
        Send me a<span className="text-highlight"> Message</span>
      </h1>
      <div className='w-[6rem] rounded-sm h-[0.5rem] mt-[1rem] bg-slate-800'></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mt-[1rem] text-lg font-medium text-slate-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-slate-700 ring-1 ring-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500  sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-slate-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-slate-700 ring-1 ring-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500  sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-slate-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-slate-700 ring-1 ring-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500  sm:text-sm"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
