import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const token = useSelector((state) => state.authToken.token);
    const admin = useSelector((state) => state.authToken.isAdmin);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-center justify-between font-medium text-[#7564f5] bg-black p-4 md:p-8'>
            <div className='text-lg md:text-xl'>SUMAN</div>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-white'>
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
            <div
                className={`${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-black md:flex md:static md:w-auto md:bg-transparent`}
            >
                <ul className='flex flex-col md:flex-row gap-5 p-5 md:p-0'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/services"
                            className={({ isActive }) =>
                                `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                            }
                        >
                            Services
                        </NavLink>
                    </li>
                    {token ? (
                        <NavLink
                            to="/logout"
                            className={({ isActive }) =>
                                `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                            }
                        >
                            LogOut
                        </NavLink>
                    ) : (<>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/signup"
                                className={({ isActive }) =>
                                    `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                                }
                            >
                                SignUp
                            </NavLink>
                        </li>
                    </>


                    )}
                    {admin && (
                        <li>
                            <NavLink to="/admin" className={({ isActive }) =>
                                `hover:text-white ${isActive ? 'text-white font-bold' : ''}`
                            }>
                                Admin
                            </NavLink>
                        </li>
                    )}
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
