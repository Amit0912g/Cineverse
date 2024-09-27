import React from "react";
import noimage from "/no_image.webp"
import { Link } from "react-router-dom";

const HorizontalCards1 = ({ data}) => {
  return (
    <div className="w-full xl:p-5 lg:p-3 md:p-2 sm:p-2">
      <div className="flex w-[100%] overflow-x-auto overflow-y-hidden ">
         { data.length>0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="lg:min-w-[20%] lg:h-[40vh] bg-zinc-900 lg:mr-5 lg:mb-3  rounded-md overflow-hidden md:min-w-[25%] md:h-[35vh] md:mr-5 md:mb-2 sm:h-[30vh] sm:min-w-[40%] sm:mr-2 sm:mb-2">
            <img className="object-cover w-full mb-2 lg:h-[20vh] md:h-[15vh] sm:h-[12vh] "
              src={d.backdrop_path || d.poster_path ?`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`:noimage}
              alt=""
            />
       <div className="text-white md:p-1 lg:p-2 sm:p-1">
       <h1 className="font-semibold lg:text-xl md:text-base sm:text-xs">
              {d.name || d.title || d.original_name || d.original_titile}
            </h1>
            <p className="lg:mb-3 lg:mt-3 md:mt-2 md:mb-1 lg:text-base md:text-sm sm:text-[12px] sm:my-2">
            {d.overview?d.overview.slice(0,70):<h1>No Description Available</h1>}...
              <span className="text-zinc-500">more</span>
            </p>
       </div>
          </Link>
        )):<h1 className="font-medium text-white lg:text-3xl md:text-xl">No Recommendations Available</h1>}
      </div>
    </div>
  );
};

export default HorizontalCards1;
