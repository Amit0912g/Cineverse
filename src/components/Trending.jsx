import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";

const Trending = () => {
  document.title = "Cineverse | Trending";
  let navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);

  const GetTrending = async () => {
    try {
      let { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      setTrending(data.results);
    } catch (err) {
      console.log("error", err);
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
    setTrending([]);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      setTrending([]);
    } else {
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  };
  useEffect(() => {
    GetTrending();
  }, [category, duration, page]);
  return trending.length > 0 ? (
    <div className="w-full h-screen px-[3%] overflow-y-auto ">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-semibold lg:text-3xl text-zinc-400 md:text-xl sm:text-base">
          <i
            onClick={() => navigate(-1)}
            className="md:mr-1 sm:mr-[1px] ri-arrow-left-line hover:text-[#6556cd] lg:text-3xl cursor-pointer md:text-xl sm:text-base"
          ></i>
          Trending
        </h1>
        <div className="flex items-center justify-between md:w-[80%] sm:w-[60%] ">
        
         <div className=" lg:w-[70%] md:ml-0 sm:-ml-24 ">
         <TopNav></TopNav>
         </div>
         <div className=" w-[40%] gap-1 sm:hidden md:flex  ">
         <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          ></Dropdown>
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          ></Dropdown>
         </div>
        </div>
      </div>

      <Cards data={trending} title={category}></Cards>
      {
        page>1 ? (
          <div className="flex mt-3 mb-5 justify-evenly ">
          <button
          onClick={PreviousPage}
          className="lg:text-2xl md:text-lg  font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)]  bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 sm:py-2 sm:px-2  rounded-md"
        >
          <i className="mr-3 cursor-pointer lg:text-xl md:text-lg ri-arrow-left-line"></i>
          Back
        </button>
        <button
          onClick={nextPage}
          className="text-2xl shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] font-semibold bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 sm:py-2 sm:px-2  rounded-md"
        >
          Next
          <i className="ml-3 cursor-pointer lg:text-xl md:text-lg ri-arrow-right-line"></i>
        </button>
      
      </div>
        ):(
          <div className="w-full mt-3 mb-5 text-center">
        <button
          onClick={nextPage}
          className="lg:text-2xl md:text-lg font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 sm:py-2 sm:px-2 rounded-md"
        >
          Next
          <i className="ml-3 cursor-pointer lg:text-xl md:text-lg ri-arrow-right-line"></i>
        </button></div>
        )
       
      }
    </div>
  ) : (
    <Loader></Loader>
  );
};

export default Trending;
