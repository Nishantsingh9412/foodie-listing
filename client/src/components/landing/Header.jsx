import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/img/landingImg/logo.png'; // Corrected path
import Button from './Button';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <header className="flex flex-row items-center justify-between p-4 bg-transparent mx-[7vw]">
      {/* Logo */}
      <img src={logo} className="h-14" alt="Logo" />

      {/* Mobile Menu Button */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#ffffff] z-50 shadow-lg overflow-y-auto"
          >
            <div className="p-5 flex flex-col items-center mt-[5vw] h-full">
              <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 text-xl md:text-3xl">
                <AiOutlineClose />
              </button>
              <div className="space-y-5 px-4 sm:w-full">
                <a
                  href="/menu"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Menu
                </a>
                <a
                  href="/events"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Events
                </a>
                <a
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Gallery
                </a>
                <a
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  About
                </a>
                <a
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Contact
                </a>

                <p
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Login
                </p>

                <p
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                >
                  Signup
                </p>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div onClick={toggleMobileMenu} className="lg:hidden text-2xl">
        <AiOutlineMenu />
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex lg:space-x-12">
        <a href="/menu" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Menu
        </a>
        <a href="/events" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Events
        </a>
        <a href="/gallery" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Gallery
        </a>
        <a href="/about" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          About
        </a>
        <a href="/contact" className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300">
          Contact
        </a>
      </div>

      {/* Button for larger screens */}

      {/* <Button className="hidden lg:flex bg-red-700" name="Book a table" /> */}

    </header>
  );
};

export default Header;
