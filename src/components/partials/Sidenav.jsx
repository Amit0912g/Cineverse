import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r border-zinc-400 p-10">
      <h1 className="text-2xl font-bold text-white">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span>Cineverse</span>
      </h1>
      <nav className="flex flex-col gap-2 text-xl text-zinc-400">
        <h1 className="mt-5 text-xl font-semibold text-white ">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"
        >
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tvshows"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"
        >
          <i className="mr-2 ri-group-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400 my-1" />
      <nav className="flex flex-col gap-2 text-xl text-zinc-400">
        <h1 className="text-xl font-semibold text-white mt-7 ">
          Website Information
        </h1>
        <Link
          to="/about"
          className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300"
        >
          <i className="mr-2 ri-information-fill"></i>
          About Us
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white rounded-lg p-5 duration-300">
          <i className="mr-2 ri-phone-fill"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
