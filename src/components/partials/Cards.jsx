import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no_image.webp";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap justify-center flex-shrink-0 w-full mx-auto px-[3%]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          className=" relative  lg:max-w-[19%] mr-2 mb-2 mx-auto flex-shrink-0  md:max-w-[30%] sm:max-w-[40%]"
          key={i}
        >
          <img
            className="lg:h-[45vh] lg:w-[90%] md:h-[40vh] md:w-[90%] mt-3 shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded"
            src={
              c.poster_path || c.backdrop_path || c.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    c.poster_path || c.backdrop_path || c.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="mt-3 lg:text-xl md:lg font-semibold text-zinc-400 w-[80%] min-h-[5vh] text-center">
            {c.name || c.title || c.original_name || c.original_titile}
          </h1>
          {c.vote_average && (
            <div className="bg-yellow-600 rounded-full w-[6vh] h-[6vh] text-white lg:text-xl md:text-lg font-semibold flex items-center justify-center absolute md:right-[3%] bottom-[30%] sm:-right-[9%] ">
              {(c.vote_average * 10).toFixed()} <sup>%</sup>{" "}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
