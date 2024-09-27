import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "./partials/Loader";
import HorizontalCards1 from "./partials/HorizontalsCards1";
import Dropdown from "./partials/Dropdown";

const PeopleDetails = () => {
  const [category, setCategory] = useState("movie");
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);
  return info ? (
    <div className=" w-screen min-h-screen lg:px-[10%] lg:mb-[3%] md:px-[5%] md:mb-[5%] sm:px-[3%] sm:mb-[3%] ">
      <nav className="w-full  text-zinc-100 lg:text-2xl flex lg:gap-14  items-center h-[10vh] md:text-lg md:gap-10 sm:text-3xl">
        <Link
          onClick={() => navigate(-1)}
          className="mr-1 ri-arrow-left-line hover:text-[#6556cd] lg:text-3xl md:text-xl cursor-pointer"
        ></Link>
      </nav>

      <div className="flex w-full">
        <div className="lg:w-[25%] md:w-[35%] sm:w-[40%]">
          <img
            className="lg:h-[50vh] lg:w-[20vw] md:h-[45vh] md:w-[35vh] sm:w-full sm:h-[30vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path || info.detail.backdrop_path
            }`}
            alt=""
          />
          <hr className="lg:mt-10 lg:mb-5 md:mt-7 md:mb-3 sm:mt-7 sm:mb-5 border-none h-[2px] bg-zinc-500" />

          <div className="flex text-white lg:text-2xl lg:gap-x-5 md:text-xl md:gap-x-7 sm:gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.instagram_id}`}
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>

          <h1 className="font-semibold lg:text-2xl lg:my-5 md:text-xl md:my-3 text-zinc-400">
            Person Information
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl text-zinc-400">
            Known For
          </h1>
          <h1 className="mb-2 -mt-1 font-bold md:text-base lg:text-lg text-zinc-300">
            {info.detail.known_for_department}
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl text-zinc-400">
            Gender
          </h1>
          <h1 className="mb-2 -mt-1 font-bold md:text-base lg:text-lg text-zinc-300">
            {info.detail.gender == 2 ? "Male" : "Female"}{" "}
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl text-zinc-400">
            Birthday
          </h1>
          <h1 className="mb-2 -mt-1 font-bold md:text-base lg:text-lg text-zinc-300">
            {info.detail.birthday ? (
              formatDate(info.detail.birthday)
            ) : (
              <h1>NA</h1>
            )}{" "}
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl text-zinc-400">
            Deathday
          </h1>
          <h1 className="mb-2 -mt-1 font-bold md:text-base lg:text-lg text-zinc-300">
            {info.detail.deathday
              ? formatDate(info.detail.birthday)
              : "Still Alive"}{" "}
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl text-zinc-400">
            Place Of Birth
          </h1>
          <h1 className="mb-2 -mt-1 font-bold md:text-base lg:text-lg text-zinc-300">
            {info.detail.place_of_birth}
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl text-zinc-400">
            Also Known As
          </h1>
          <h1 className="mb-2 -mt-1 font-bold md:text-base lg:text-lg text-zinc-300">
            {info.detail.also_known_as}
          </h1>
        </div>

        <div className="lg:w-[75%] lg:ml-[5%] lg:-mt-7 md:w-[65%] sm:w-[60%] md:ml-[3%] md:-mt-5 sm:ml-3 sm:-mt-2 ">
          <h1 className="my-5 font-black lg:text-6xl md:text-4xl sm:text-3xl text-zinc-400">
            {info.detail.name}
          </h1>

          <h1 className="font-medium md:text-lg lg:text-xl sm:text-base text-zinc-400">
            Biography
          </h1>
          <p className="mt-3 font-medium md:text-base lg:text-lg text-zinc-400 md:leading-5 lg:leading-8 sm:leading-4 sm:text-xs">
            {info.detail.biography.slice(0, 1000)}
          </p>

          <h1 className="mt-5 font-medium md:text-lg lg:text-xl text-zinc-400">
            Known For
          </h1>

          <HorizontalCards1 data={info.combinedcredits.cast}></HorizontalCards1>

         <div className="sm:hidden md:block">
         <div className="flex justify-between w-full">
            <h1 className="text-xl font-semibold lg:mt-5 text-zinc-400">
              Acting
            </h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            ></Dropdown>
          </div>

          <div className="w-full lg:h-[50vh] md:h-[40vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] md:mt-3 md:mb-[3%] lg:mb-[2%] lg:mt-2 border-2 border-zinc-700 p-5">
            {info[category + "credits"].cast.map((c, i) => (
              <li
                key={i}
                className="mt-3 duration-300 cursor-pointer text-zinc-400 hover:text-white"
              >
                <Link to={`${category}/details/${c.id}`}>
                  <span>
                    {" "}
                    {c.name || c.title || c.original_name || c.original_titile}
                  </span>
                  <span className="block ml-5 ">
                    {c.character ? ` Character Name: ${c.character}` : "NA"}
                  </span>
                </Link>
              </li>
            ))}
          </div>
         </div>
        </div>
      </div>

      <div className="justify-between w-full sm:flex md:hidden">
            <h1 className="mt-5 text-base font-semibold text-zinc-400">
              Acting
            </h1>
          <div className="mt-5 mr-1 -mb-1">
          <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            ></Dropdown>
          </div>
          </div>
      <div className=" md:hidden sm:block">
        <div className=" sm:h-[30vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)]  sm:mt-2 sm:mb-2 border-2 border-zinc-700 p-5  sm:w-full">
          {info[category + "credits"].cast.map((c, i) => (
            <li
              key={i}
              className="mt-3 duration-300 cursor-pointer text-zinc-400 hover:text-white"
            >
              <Link to={`${category}/details/${c.id}`}>
                <span className=" sm:text-sm">
                  {" "}
                  {c.name || c.title || c.original_name || c.original_titile}
                </span>
                <span className="block ml-5 md:text-lg lg:text-xl sm:text-xs">
                  {c.character ? ` Character Name: ${c.character}` : "NA"}
                </span>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loader></Loader>
  );
};

export default PeopleDetails;
