import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p>
                        We are a leading company in IT services, dedicated to delivering quality solutions to our clients.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><NavLink to="/" className="hover:text-gray-400">Home</NavLink></li>
                        <li><NavLink to="services" className="hover:text-gray-400">Services</NavLink></li>
                        <li><NavLink to="about" className="hover:text-gray-400">About</NavLink></li>
                        <li><NavLink to="contact" className="hover:text-gray-400">Contact</NavLink></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p>123 IT Street, Tech City, World 12345</p>
                    <p>Email: info@company.com</p>
                    <p>Phone: +123 456 7890</p>
                    <div className="flex space-x-4 mt-4">
                        <NavLink to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-2xl hover:text-blue-500" />
                        </NavLink>
                        <NavLink to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-2xl hover:text-blue-400" />
                        </NavLink>
                        <NavLink to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-2xl hover:text-pink-500" />
                        </NavLink>
                        <NavLink to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl hover:text-blue-700" />
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
