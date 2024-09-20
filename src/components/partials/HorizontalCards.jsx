import React from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import noimage from "/no_image.webp";

const HorizontalCards = ({ data, func }) => {
  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-semibold text-zinc-400">Trending</h1>
        <Dropdown
          title="Filter"
          options={["movie", "tv", "all"]}
          func={func}
        ></Dropdown>
      </div>

      <div className="flex w-[100%] overflow-x-auto overflow-y-hidden ">
        {data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="min-w-[20%] bg-zinc-900 mr-5 mb-3 rounded-md overflow-hidden"
          >
            <img
              className="object-cover w-full mb-2 "
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
              <h1 className="text-xl font-semibold ">
                {d.name || d.title || d.original_name || d.original_titile}
              </h1>
              <p className="mt-3 mb-3 ">
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
