import React, { useState } from 'react';

import logo from '../../assets/img/logo1.png'
import gp1 from '../../assets/img/gp1.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex justify-evenly items-center p-5 bg-transparent bg-opacity-80 mt-5 fixed w-full top-0 z-50">
            <div className="flex items-center">
                <img src={logo} alt="Restaurant Logo" className="w-30 h-12 mr-2" />
                {/* <span className="text-xl font-bold text-gray-800">restaurant</span> */}
            </div>
            <nav className="hidden md:flex space-x-8">
                <ul className="flex space-x-8">
                    <li><a href="#menu" className="text-gray-800 hover:text-gray-600">Menu</a></li>
                    <li><a href="#events" className="text-gray-800 hover:text-gray-600">Events</a></li>
                    <li><a href="#gallery" className="text-gray-800 hover:text-gray-600">Gallery</a></li>
                    <li><a href="#about" className="text-gray-800 hover:text-gray-600">About</a></li>
                    <li><a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a></li>
                </ul>
            </nav>
            {/* <a href="#book" className="hidden md:block bg-red-800 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700">Book a table</a> */}
            <button className='bg-red-800 px-5 py-3 rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm '>
                <a className="text-white font-david-libre font-sm text-[15px] leading-[29px]">Book a Table</a>
            </button>

            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <nav className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <ul className="flex flex-col items-center space-y-4 p-4">
                        <li><a href="#menu" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Menu</a></li>
                        <li><a href="#events" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Events</a></li>
                        <li><a href="#gallery" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Gallery</a></li>
                        <li><a href="#about" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>About</a></li>
                        <li><a href="#contact" className="text-gray-800 hover:text-gray-600" onClick={toggleMenu}>Contact</a></li>
                        <li><a href="#book" className="bg-red-800 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700" onClick={toggleMenu}>Book a table</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
