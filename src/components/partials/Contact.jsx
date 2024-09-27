import React, { useState } from 'react';
import contact from "/contact.jpg"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:amit.g09122000@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen p-8 text-white bg-gray-900"
    style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(${contact})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg md:p-8 sm:p-5">
      
        <h1 className="font-extrabold text-center md:text-5xl md:mb-6 sm:text-3xl text-zinc-100">Contact</h1>
        
     
        <div className="text-center md:mb-8 sm:mb-4">
          <h2 className="font-bold md:text-2xl sm:text-xl text-zinc-200">Amit Gupta</h2>
          <p className="font-medium sm:text-base md:text-lg text-zinc-200">Phone: 8103140075</p>
          <p className="font-medium sm:text-base md:text-lg text-zinc-200">Email: amit.g09122000@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 sm:text-base md:text-lg font-base medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium sm:text-base md:text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium sm:text-base md:text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              onChange={handleChange}
              value={formData.message}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 font-bold tracking-wide text-white transition duration-300 bg-blue-500 rounded-md sm:text-base md:text-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
