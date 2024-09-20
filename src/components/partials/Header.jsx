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
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[3%] "
    >
      <h1 className="text-5xl w-[70%] font-bold text-white">
        {data.name || data.title || data.original_name || data.original_titile}
      </h1>
      <p className="w-[70%] text-white mt-3 mb-3 ">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white">
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
        className="mt-3 bg-[#6556CD] p-3 text-white font-medium rounded"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
