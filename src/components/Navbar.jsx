import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { LuBrain, LuContact } from 'react-icons/lu';
import { GoProject } from 'react-icons/go';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  // Optional: Highlight active nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contacts'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveNav(`#${id}`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white fixed bottom-0 left-0 w-full sm:w-auto sm:bottom-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 flex justify-between sm:gap-12 py-4 px-8 sm:py-4 sm:px-10 rounded-t-xl sm:rounded-full shadow-lg z-20">

      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={`${activeNav === '#home' ? 'bg-gray-300 text-black' : 'text-gray-500'} flex items-center justify-center w-12 h-12 sm:w-8 sm:h-8 rounded-full text-2xl sm:text-3xl hover:bg-gray-200 transition-all`}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={`${activeNav === '#about' ? 'bg-gray-300 text-black' : 'text-gray-500'} flex items-center justify-center w-12 h-12 sm:w-8 sm:h-8 rounded-full text-2xl sm:text-3xl hover:bg-gray-200 transition-all`}
      >
        <BiUser />
      </a>

      <a
        href="#skills"
        onClick={() => setActiveNav('#skills')}
        className={`${activeNav === '#skills' ? 'bg-gray-300 text-black' : 'text-gray-500'} flex items-center justify-center w-12 h-12 sm:w-8 sm:h-8 rounded-full text-2xl sm:text-3xl hover:bg-gray-200 transition-all`}
      >
        <LuBrain />
      </a>

      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={`${activeNav === '#projects' ? 'bg-gray-300 text-black' : 'text-gray-500'} flex items-center justify-center w-12 h-12 sm:w-8 sm:h-8 rounded-full text-2xl sm:text-3xl hover:bg-gray-200 transition-all`}
      >
        <GoProject />
      </a>

      <a
        href="#contacts"
        onClick={() => setActiveNav('#contacts')}
        className={`${activeNav === '#contacts' ? 'bg-gray-300 text-black' : 'text-gray-500'} flex items-center justify-center w-12 h-12 sm:w-8 sm:h-8 rounded-full text-2xl sm:text-3xl hover:bg-gray-200 transition-all`}
      >
        <LuContact />
      </a>
    </nav>
  );
};

export default Nav;
