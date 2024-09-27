import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full xl:h-[50vh] lg:h-[40vh] md:h-[45vh] sm:h-[45vh] flex flex-col justify-end items-start p-[3%] "
    >
      <h1 className="xl:text-5xl lg:text-3xl md:text-xl sm:text-base w-[70%] font-bold text-white">
        {data.name || data.title || data.original_name || data.original_titile}
      </h1>
      <p className="w-[70%] text-white mt-3 mb-3 md:text-sm lg:text-base sm:text-xs">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white lg:base md:text-sm sm:text-xs">
        {data.release_date ? (
          <i className="mr-1 text-yellow-500 ri-movie-2-fill"></i>
        ) : (
          " "
        )}
        {data.release_date}
        <i className="ml-3 text-yellow-500 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link
        to={`${data.media_type}/details/${data.id}/trailer`}
        className="lg:mt-3 bg-[#6556CD] lg:p-3 md:p-2 sm:p-1 md:mt-2 sm:mt-3 text-white font-medium rounded sm:text-xs md:text-base lg:text-lg"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
