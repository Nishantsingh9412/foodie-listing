import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";


import Button from "./Button";
import mask from "../../assets/img/landingImg/maskGroup.png"
import dish from "../../assets/img/landingImg/dish-2 2.png"
import grass from "../../assets/img/landingImg/Group.png"
import cabbage from "../../assets/img/landingImg/Group5.png"
import grass2 from "../../assets/img/landingImg/Group.png"
import React, { useState } from 'react';
import logo from '../../assets/img/landingImg/logo.png'; // Corrected path
import dish2 from "../../assets/img/landingImg/dish-2 2.png"
import { useNavigate } from 'react-router-dom';
// import curve from "../../assets/img/landingImg/ellipse.png"
// import curve1 from "../../assets/img/landingImg/Ellipse1.png"
// import curve2 from "../../assets/img/landingImg/Ellipse2.png"




const Hero = () => {
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
    <div className="flex flex-col mx-[7vw]">
      <header className="flex flex-row items-center justify-between p-4 bg-transparent ">
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
              className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-[#f5f5f5] z-50 shadow-lg overflow-y-auto"
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
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      navigate('/login')
                    }}
                    className="flex border-b-[1px] border-black/40 pb-[0.8vw] text-lg font-semibold text-black/90 hover:text-orange-500 transition-colors duration-400"
                  >
                    Login
                  </p>
                  <p

                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      navigate('/signup')
                    }}
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
          <p
            onClick={
              () =>
                navigate('/login')
            }
            className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300 cursor-pointer">
            Login
          </p>
          <p onClick={
            () =>
              navigate('/signup')
          }
            className="text-[1.1vw] text-black hover:text-gray-400 transition duration-300 cursor-pointer ">
            SignUp
          </p>

        </div>

        {/* Button for larger screens */}

        <Button className="hidden lg:flex bg-red-700" name="Book a table" />

      </header>

      {/* <img src={curve} className="h-[30vw] absolute"/>
<img src={curve1} className="h-[25vw] absolute"/>
<img src={curve2} className="h-[30vw] absolute"/> */}


      <div className="flex flex-row  my-[13vw] justify-between relative">

        <div className="md:w-[50%] flex flex-col gap-[3vw] py-[7vw] md:px-[3vw]">
          <div className=" md:text-[4vw] text-[8vw] leading-[10vw] md:leading-[4vw] font-semibold">We Provide the best food for you</div>
          <div className="mt-[2vw] md:w-[75%] flex flex-row w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            aliquid ex pariatur, veritatis doloremque repudiandae sed ipsa
            molestias ea omnis magn
            <img src={dish2} className="w-[30vw] flex md:hidden h-[30vw] md:h-[45vw] z-10" />
          </div>
          <div className="flex flex-row gap-[1vw]">
            <Button className="bg-black " name="Menu" />
            <Button className="bg-red-700 " name="Book a table" />
          </div>

          <div className="flex flex-row gap-[2vw] mt-[2vw]">
            <CiFacebook className=" text-[6vw] md:text-[2.25vw]" />
            <FaInstagram className=" text-[6vw] md:text-[2.25vw]" />
            <TfiTwitter className=" text-[6vw] md:text-[2.25vw]" />
          </div>
        </div>

        <div className="md:w-[50%] hidden  md:flex justify-center relative">
          <img src={dish} className="h-[25vw] absolute z-20 mr-[35vw] mt-[19vw] " />
          <img src={grass} className="h-[12vw] absolute mr-[30vw] mt-[-5vw]" />
          <img src={cabbage} className="h-[20vw] absolute mr-[-25vw] mt-[-8vw]" />
          <img src={grass2} className="h-[15vw] absolute mr-[-23vw] mt-[32vw] rotate-[150deg]" />
          <img src={mask} className="w-[40vw] h-[30vw] md:h-[45vw] z-10" />
        </div>
      </div>

    </div >

  );
};

export default Hero;
