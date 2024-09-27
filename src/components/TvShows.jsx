import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";

const TvShows = () => {
  document.title = "Cineverse | Tv Shows";
  let navigate = useNavigate();
  const [category, setCategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setPage] = useState(1);
  const Gettv = async () => {
    try {
      let { data } = await axios.get(`/tv/${category}?page=${page}`);
      settv(data.results);
    } catch (err) {
      console.log("error", err);
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
    settv([]);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      settv([]);
    } else {
      setPage(1);
      settv([]);
      Gettv();
    }
  };
  useEffect(() => {
    Gettv();
  }, [category, page]);
  return tv.length > 0 ? (
    <div className="w-full h-screen px-[3%] overflow-y-auto ">
      <div className="flex items-center justify-between w-full gap-10">
        <h1 className="flex items-center justify-center gap-2 mb-2 font-semibold lg:text-3xl text-zinc-400 md:text-xl sm:text-base">
          <i
            onClick={() => navigate(-1)}
            className="mr-1 ri-arrow-left-line hover:text-[#6556cd] lg:text-3xl cursor-pointer md:text-xl sm:text-base"
          ></i>
          Tv
          <p className="mt-3 text-sm text-zinc-500 lg:block sm:hidden">
            ({category.toLocaleUpperCase()})
          </p>
        </h1>
        <div className="flex items-center justify-between md:w-[80%] sm:w-[60%]">
        <div className="lg:w-[70%] md:w-[80%] md:ml-0 sm:-ml-32 sm:mb-1 md:mb-0">
         <TopNav></TopNav>
         </div>
          <div className="md:w-[25%] md:mr-5 lg:w-[25%]  sm:hidden md:block">
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "on_the_air", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          ></Dropdown>
          </div>
          <div className="w-[2%]"></div>
        </div>
      </div>

      <Cards data={tv} title="tv"></Cards>
      {page > 1 ? (
        <div className="flex mt-3 mb-5 justify-evenly ">
          <button
            onClick={PreviousPage}
            className="lg:text-2xl font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)]  bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 sm:py-2 sm:px-2 rounded-md md:text-lg"
          >
            <i className="mr-3 cursor-pointer lg:text-xl ri-arrow-left-line md:text-lg"></i>
            Back
          </button>
          <button
            onClick={nextPage}
            className="lg:text-2xl shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] font-semibold bg-[#6556cd] text-white lg:px-3 lg:py-2 md:py-1 md:px-2 sm:py-2 sm:px-2 rounded-md md:text-lg"
          >
            Next
            <i className="ml-3 cursor-pointer lg:text-xl ri-arrow-right-line md:text-lg"></i>
          </button>
        </div>
      ) : (
        <div className="w-full mt-3 mb-5 text-center">
          <button
            onClick={nextPage}
            className="lg:text-2xl md:text-lg font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 sm:py-2 sm:px-2  rounded-md"
          >
            Next
            <i className="ml-3 cursor-pointer lg:text-xl md:text-lg ri-arrow-right-line"></i>
          </button>
        </div>
      )}
    </div>
  ) : (
    <Loader></Loader>
  );
};
export default TvShows;
