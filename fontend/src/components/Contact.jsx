import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';


const Contact = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const data = useSelector((state) => state.authToken.user)




  const handleInput = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const sendContact = await axios.post('https://mern-tlme.onrender.com/api/contact', contact);
      if (sendContact.status === 200) {
        toast.success(sendContact.data.message);
        setContact({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {

      toast.error("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    if (data) {
      setContact({
        name: data.name || '',
        email: data.email || '',
        message: ''
      });
    }
  }, [data])

  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-black text-white p-8">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          className="w-full h-[27rem] rounded-lg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm2lnDm_XxXxoWcgfu4pLUjAOiXZiiE4aGg&s"
          alt="Contact Us"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="name" className="text-lg">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={contact.name}
            onChange={handleInput}
            required
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={contact.email}
            onChange={handleInput}
            required
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea
            id="message"
            name="message"
            value={contact.message}
            onChange={handleInput}
            required
            className="p-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-indigo-500 p-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
