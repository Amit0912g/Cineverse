import React from "react";
import noimage from "/no_image.webp"
import { Link } from "react-router-dom";

const HorizontalCards1 = ({ data}) => {
  return (
    <div className="w-full p-5">
      <div className="flex w-[100%] overflow-x-auto overflow-y-hidden ">
         { data.length>0 ? data.map((d, i) => (
          <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="min-w-[20%] h-[40vh] bg-zinc-900 mr-5 mb-3 rounded-md overflow-hidden">
            <img className="object-cover w-full mb-2 h-[20vh] "
              src={d.backdrop_path || d.poster_path ?`https://image.tmdb.org/t/p/original/${
                d.backdrop_path || d.poster_path
              }`:noimage}
              alt=""
            />
       <div className="p-2 text-white">
       <h1 className="text-xl font-semibold ">
              {d.name || d.title || d.original_name || d.original_titile}
            </h1>
            <p className="mt-3 mb-3 ">
            {d.overview?d.overview.slice(0,70):<h1>No Description Available</h1>}...
              <span className="text-zinc-500">more</span>
            </p>
       </div>
          </Link>
        )):<h1 className="text-3xl font-medium text-white">No Recommendations Available</h1>}
      </div>
    </div>
  );
};

export default HorizontalCards1;
