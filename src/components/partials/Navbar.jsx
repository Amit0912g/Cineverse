import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open,isOpen]=useState(false)
    const handleNavbar=()=>{
      isOpen(!open)
    }
  return (
    <>
  <button
        onClick={handleNavbar}
        className="absolute z-50 text-2xl text-white top-4 left-4 "
      >
        {open ? (
          <i className="ri-close-line"></i> 
        ) : (
          <i className="ri-menu-line"></i> 
        )}
      </button>
        
   
    <div className={`fixed top-0 left-0 w-[70%] h-full bg-zinc-900 p-5 transition-transform duration-500 ease-in-out z-40 ${
          open ? "translate-x-0" : "-translate-x-full"}
        `}>
      
      <nav className="flex flex-col mt-[20%] text-lg text-zinc-400">
      
        <div className="flex flex-col text-xl ">
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 flex p-1 mt-8  "
        >
          <i className="mr-2 ri-fire-fill "></i>
         <h2> Trending</h2>
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 flex p-1 mt-8 "
        >
          <i className="mr-2 ri-bard-fill"></i>
         <h2> Popular</h2>
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 flex p-1 mt-8 "
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          <h2> Movies</h2>
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 flex p-1 mt-8 "
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          <h2>Tv Shows</h2>
        </Link> 
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 flex p-1 mt-8 "
        >
          <i className="mr-2 ri-group-fill"></i>
          <h2>People</h2>
        </Link>
        </div>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 my-3" />
      <nav className="flex flex-col gap-2 text-xl text-zinc-400">
        <h1 className="mt-3 text-lg font-semibold text-white">
          Website Information
        </h1>
        <div className="flex flex-col mt-3">
        <Link
          to="/about"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg  duration-300 flex  text-base mt-8 p-1 "
        >
          <i className="mr-2 ri-information-fill"></i>
          About Us
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 flex  text-base mt-8 p-1 ">
          <i className="mr-2 ri-phone-fill"></i>
          Contact
        </Link>
        </div>
      </nav>
    </div>
  </>
  );
};

export default Navbar;




