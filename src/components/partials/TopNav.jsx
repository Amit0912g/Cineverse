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
    <div className="w-[80%] h-[10vh] relative flex mx-auto  items-center">
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[60%] p-5  mx-10 text-xl outline-none bg-transparent border-none text-zinc-300"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-3xl text-zinc-400 ri-close-fill hover:cursor-pointer"
        ></i>
      )}
      <div className="w-[60%] rounded max-h-[40vh] bg-zinc-200 absolute z-[99] top-[100%] left-[5%] overflow-y-auto ">
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="flex items-center justify-start w-full p-10 font-semibold duration-300 border-2 hover:text-black hover:bg-zinc-300 text-zinc-600 border-zinc-100"
          >
            <img
              className="w-[15vh] h-[15vh] rounded object-cover mr-10 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_titile}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
