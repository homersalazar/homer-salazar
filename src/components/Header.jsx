import React from 'react';
import LOGO from '../assets/home-logo.png'
const Header = () => {
  return (
    <div>
      <nav className='h-[20vh] text-xl max-sm:text-md'>
        <div className="flex items-center justify-between px-[4rem] py-4 max-sm:px-5">
          <div
            className='font-semibold'
          >
            <a href='#home' className="flex items-center text-2xl max-sm:text-lg">
              <img 
                src={LOGO} 
                alt="" 
                className='h-10'
              />
            </a>
          </div>
          <div
            className='flex items-center space-x-4 ml-auto font-semibold'
          >
            <a href='#home'
            className='hover:text-outline cursor-pointer'
          >
              HOME
            </a>
            <a
              href="#about"
              className="hover:text-outline"
            >
              ABOUT
            </a>
            <a
              href="#skills"
              className="max-sm:hidden hover:text-outline"
            >
              SKILLS
            </a>
            <a
              href="#projects"
              className="max-sm:hidden hover:text-outline"
            >
              PROJECTS
            </a>
            <a
              href="#contact"
              className="hover:text-outline"
            >
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

