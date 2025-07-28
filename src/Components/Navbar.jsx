import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mb-20 pt-6 relative'>
      <div className='flex items-center justify-between px-4'>
        {/* Logo */}
        <div className='text-white flex items-center'>
          <img src={logo} alt="logo" className='h-[100px] w-[150px]' />
        </div>

        {/* Desktop Icons */}
        <div className='hidden md:flex items-center gap-10 text-3xl text-white'>
          <a href="https://www.linkedin.com/in/abdul-basit-1039b522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tot3110" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/ba61256888?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className='md:hidden text-white text-3xl' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu - Right Aligned Dropdown */}
      {isOpen && (
        <div className="absolute right-4 mt-2 w-40 rounded-md bg-neutral-900 shadow-lg p-4 flex flex-col gap-3 text-white text-2xl md:hidden z-50">
          <a href="https://www.linkedin.com/in/abdul-basit-1039b522b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/tot3110" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://x.com/ba61256888?s=21" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
