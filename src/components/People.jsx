import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNav from "./partials/TopNav";
import Cards from "./partials/Cards";
import Loader from "./partials/Loader";

const People = () => {
  document.title = "Cineverse | People";
  let navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const GetPerson = async () => {
    try {
      let { data } = await axios.get(`/person/${category}?page=${page}`);
      setPerson(data.results);
    } catch (err) {
      console.log("error", err);
    }
  };

  const nextPage = () => {
    setPage((prev) => prev + 1);
    setPerson([]);
  };
  const PreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      setPerson([]);
    } else {
      setPage(1);
      setPerson([]);
      GetPerson();
    }
  };
  useEffect(() => {
    GetPerson();
  }, [category, page]);
  return person.length > 0 ? (
    <div className="w-full h-screen px-[3%] overflow-y-auto ">
      <div className="flex items-center justify-between w-full gap-10">
        <h1 className="flex items-center justify-center gap-2 mb-2 font-semibold lg:text-3xl md:text-xl sm:text-base text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="mr-1 ri-arrow-left-line hover:text-[#6556cd] lg:text-3xl md:text-xl sm:text-base cursor-pointer"
          ></i>
          People
        </h1>
        <div className="flex items-center md:w-[80%] sm:w-[60%] gap-5">
        <div className="lg:w-[70%] md:w-[80%] md:ml-0 sm:-ml-24">
         <TopNav></TopNav>
         </div>
          <div className="w-[2%]"></div>
        </div>
      </div>

      <Cards data={person} title="people"></Cards>
      {page > 1 ? (
        <div className="flex mt-3 mb-5 justify-evenly ">
          <button
            onClick={PreviousPage}
            className="lg:text-2xl md:text-lg font-semibold shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)]  bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 rounded-md sm:py-2 sm:px-2"
          >
            <i className="mr-3 cursor-pointer lg:text-xl md:text-lg ri-arrow-left-line"></i>
            Back
          </button>
          <button
            onClick={nextPage}
            className="lg:text-2xl md:text-lg shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] font-semibold bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 rounded-md sm:py-2 sm:px-2"
          >
            Next
            <i className="ml-3 cursor-pointer lg:text-xl md:text-lg ri-arrow-right-line"></i>
          </button>
        </div>
      ) : (
        <div className="w-full mt-3 mb-5 text-center">
          <button
            onClick={nextPage}
            className="lg:text-2xl md:text-lg shadow-[8px_7px_28px_2px_rgba(0,0,0,0.5)] font-semibold bg-[#6556cd] text-white lg:px-3 lg:py-2 md:px-2 md:py-1 rounded-md sm:py-2 sm:px-2"
          >
            Next
            <i className="ml-3 cursor-pointer md:text-lg lg:text-xl ri-arrow-right-line"></i>
          </button>
        </div>
      )}
    </div>
  ) : (
    <Loader></Loader>
  );
};

export default People;
