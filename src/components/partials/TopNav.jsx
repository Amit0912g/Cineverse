import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/no_image.webp";
const TopNav = () => {
  let [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const GetSearches = async () => {
    try {
      let { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-[80%] h-[10vh] md:ml-[2%] sm:ml-[20%] relative flex mx-auto  items-center">
      <i className="xl:text-3xl text-zinc-400 ri-search-line lg:text-2xl md:text-xl sm:text-base sm:-mr-8 md:mr-0"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="xl:w-[80%] lg:w-[75%] md:w-[80%] sm:w-[90%] p-5 md:text-base sm:text-sm mx-10 xl:text-xl lg:text-lg outline-none bg-transparent border-none text-zinc-300 "
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-zinc-400 ri-close-fill hover:cursor-pointer"
        ></i>
      )}
      <div className=" xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[80%] ml-0 sm:ml-5 rounded max-h-[40vh] bg-zinc-200 absolute z-[99] top-[100%] left-[5%] overflow-y-auto  ">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="flex flex-col items-center justify-start w-full gap-2 font-semibold duration-300 border-2 lg:p-10 hover:text-black hover:bg-zinc-300 text-zinc-600 border-zinc-100 md:p-4 sm:p-2"
          >
            <img
              className="md:w-[15vh] md:h-[15vh] lg:h-[20vh] lg:w-[25vh] sm:w-[15vh] sm:h-[10vh] rounded object-cover shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span className="text-center">
              {s.name || s.title || s.original_name || s.original_titile}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
