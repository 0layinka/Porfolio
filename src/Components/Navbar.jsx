import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='grid grid-cols-12 h-20'>
        {/* First line for small screens */}
        <div className='md:hidden col-start-1 col-span-12 flex flex-col items-center'>
          <div className="mt-3 flex items-center space-x-2">
            <img 
              src="/image.png"
              alt="Quazeem" 
              className="w-10 h-10 rounded-full" 
            />
            <div className="text-2xl my-3 text-blue-500">I'm Quazeem</div>
          </div>
          <hr className='border border-blue-500 w-full mt-2 animate-pulse' />
        </div>
        <div className="hidden col-span-4 items-end md:flex h-full">
          <hr className='border-1 animate-pulse w-full border-blue-500' />
        </div>

        {/* Nav content for larger screens */}
        <div className='hidden md:flex col-span-5 col-start-6 justify-end items-end list-none'>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><Link to="/">Home</Link></li>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><Link to="/projects">Projects</Link></li>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><Link to="/experience">Work Experience</Link></li>
          <li className='mx-4 text-xl font-thin hover:text-blue-500'><Link to="/contact">Contact</Link></li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
