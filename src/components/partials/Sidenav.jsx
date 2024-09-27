import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r border-zinc-400 xl:p-10 lg:p-7 md:p-3">
      <h1 className="font-bold text-white xl:text-2xl lg:text-xl md:text-lg lg:mt-0 md:mt-5">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>Cineverse</span>
      </h1>
      <nav className="flex flex-col gap-2 xl:text-xl text-zinc-400 lg:text-lg md:text-base">
        <h1 className="font-semibold text-white xl:mt-4 xl:text-xl lg:text-lg lg:mt-3 md:mt-8 md:text-base">New Feeds</h1>
        <div className="flex flex-col">
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:p-1 md:mt-5 xl:-mt-0"
        >
          <i className="mr-2 ri-fire-fill "></i>
         <h2> Trending</h2>
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:p-1 md:mt-5 xl:-mt-0"
        >
          <i className="mr-2 ri-bard-fill"></i>
         <h2> Popular</h2>
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:p-1 md:mt-5 xl:-mt-0"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          <h2> Movies</h2>
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:p-1 md:mt-5  xl:-mt-0"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          <h2>Tv Shows</h2>
        </Link> 
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:p-1 md:mt-5 xl:-mt-0"
        >
          <i className="mr-2 ri-group-fill"></i>
          <h2>People</h2>
        </Link>
        </div>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 lg:my-1 md:my-10" />
      <nav className="flex flex-col gap-2 text-xl text-zinc-400">
        <h1 className="font-semibold text-white xl:text-xl xl:mt-7 lg:text-lg lg:mt-5 md:mt-8 md:text-base">
          Website Information
        </h1>
        <div className="flex flex-col xl:mt-0 lg:mt-5 md:mt-5">
        <Link
          to="/about"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:text-base md:mt-5 md:p-1 xl:-mt-0"
        >
          <i className="mr-2 ri-information-fill"></i>
          About Us
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg xl:p-5 duration-300 flex xl:-ml-0 lg:mx-auto lg:p-4 lg:-ml-[3%] md:text-base md:mt-5 md:p-1 xl:-mt-0">
          <i className="mr-2 ri-phone-fill"></i>
          Contact
        </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidenav;

