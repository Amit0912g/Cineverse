import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNav from "./partials/TopNav";
import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";

const Movie = () => {
  document.title = "Cineverse | Movies";
    let navigate = useNavigate();
    const [category,setCategory]=useState("now_playing")
    const [movie,setMovie]=useState([])
    const [page,setPage]=useState(1)
    const GetMovie = async () => {
      try {
        let { data } = await axios.get(
          `/movie/${category}?page=${page}`
        );
        setMovie(data.results);
      } catch (err) {
        console.log("error", err);
      }
    };
  
    const nextPage = () => {
      setPage((prev) => prev + 1);
      setMovie([]);
    };
    const PreviousPage = () => {
      if (page > 1) {
        setPage((prev) => prev - 1);
        setMovie([]);
      } else {
        setPage(1);
        setMovie([]);
        GetMovie();
      }
    };
    useEffect(() => {
      GetMovie();
    }, [category, page]);
  return movie.length > 0 ? (
    <div className="w-full h-screen px-[3%] overflow-y-auto ">
      <div className="flex items-center justify-between w-full gap-10">
        <h1 className="flex items-center justify-center gap-2 mb-2 text-3xl font-semibold ga text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-1 ri-arrow-left-line hover:text-[#6556cd] text-3xl cursor-pointer"
          ></i>
         Movie <p className="mt-3 text-sm text-zinc-500">({category.toLocaleUpperCase()})</p>
        </h1>
        <div className="flex items-center w-[80%] gap-5">
          <TopNav></TopNav>
          <Dropdown
            title="Category"
            options={["popular","top_rated","upcoming","now_playing"]}
            func={(e) => setCategory(e.target.value)}
          ></Dropdown>
          <div className="w-[2%]"></div>
       
        </div>
      </div>

      <Cards data={movie} title="movie"></Cards>
      {
        page>1 ? (
          <div className="flex mt-3 mb-5 justify-evenly ">
          <button
          onClick={PreviousPage}
          className="text-2xl font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)]  bg-[#6556cd] text-white px-3 py-2 rounded-md"
        >
          <i className="mr-3 text-xl cursor-pointer ri-arrow-left-line"></i>
          Back
        </button>
        <button
          onClick={nextPage}
          className="text-2xl shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] font-semibold bg-[#6556cd] text-white px-3 py-2 rounded-md"
        >
          Next
          <i className="ml-3 text-xl cursor-pointer ri-arrow-right-line"></i>
        </button>
     
      </div>
        ):(
          <div className="w-full mt-3 mb-5 text-center">
        <button
          onClick={nextPage}
          className="text-2xl font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] bg-[#6556cd] text-white px-3 py-2 rounded-md"
        >
          Next
          <i className="ml-3 text-xl cursor-pointer ri-arrow-right-line"></i>
        </button></div>
        )
       
      }
    </div>
  ) : (
    <Loader></Loader>
  );
}

export default Movie
