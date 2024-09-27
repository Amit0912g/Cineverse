import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from "/no_image.webp";

const HorizontalCards = ({ data, func }) => {
  return (
    <div className="w-full xl:p-5 lg:p-3 md:p-2 sm:p-2">
      <div className="flex items-center justify-between xl:mb-5 lg:mb-2 md:mb-2 sm:mb-2">
        <h1 className="font-semibold xl:text-3xl text-zinc-400 lg:text-2xl md:text-xl sm:text-sm">Trending</h1>
        <Dropdown
          title="Filter"
          options={["movie", "tv", "all"]}
          func={func}
        ></Dropdown>
      </div>

      <div className="flex w-[100%] overflow-x-auto overflow-y-hidden xl:min-h-[40vh] lg:max-h-[38vh] md:max-h-[32vh] sm:max-h-[35vh]">
        {data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="xl:min-w-[20%] lg:min-w-[27%] md:min-w-[25%] sm:min-w-[40%] bg-zinc-900 mr-5 md:mb-3 sm:mb-1 rounded-md overflow-hidden"
          >
            <img
              className="object-cover w-full lg:mb-2 md:mb-0 sm:mb-2 shrink-0 "
              src={
                d.backdrop_path || d.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="p-2 text-white">
              <h1 className="font-semibold xl:text-xl lg:text-lg md:text-base sm:text-sm">
                {d.name || d.title || d.original_name || d.original_titile}
              </h1>
              <p className="xl:mb-3 xl:mt-3 lg:mb-1 lg:mt-1 lg:text-sm xl:text-md md:mt-0 md:text-xs sm:text-xs sm:mt-3 sm:mb-2">
                {d.overview ? (
                  d.overview.slice(0, 70)
                ) : (
                  <h1>No Description Available</h1>
                )}
                ...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCards;
