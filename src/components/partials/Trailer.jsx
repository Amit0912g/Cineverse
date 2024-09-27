import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="w-full bg-[rgba(0,0,0,.9)] h-screen flex items-center justify-center absolute top-0 left-0 z-[100] ">
      {ytvideo ? (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        ></ReactPlayer>
      ) : (
        <Error></Error>
      )}
      <Link
        onClick={() => navigate(-1)}
        className="ml-5 ri-close-fill hover:text-[#6556cd] text-4xl cursor-pointer mb-[35%] font-black text-white "
      ></Link>
    </div>
  );
};

export default Trailer;
