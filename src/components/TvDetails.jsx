import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadTv, removetv } from "../store/actions/tvActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./partials/Loader";
import { ComingSoon } from "./partials/ComingSoon";
import HorizontalCards1 from "./partials/HorizontalsCards1";

const TvDetails = () => {
  const { pathname } = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadTv(id));
    return () => {
      dispatch(removetv());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen lg:min-h-[205vh] relative  p-[5%] md:min-h-[170vh] sm:min-h-[245vh] "
    >
      <nav className="w-full  text-zinc-100 lg:text-2xl md:text-lg flex lg:gap-14 md:gap-7 items-center h-[10vh] lg:-mt-12 md:-mt-5 sm:-mt-5 sm:gap-5">
        <Link
          onClick={() => navigate(-1)}
          className="mr-1 ri-arrow-left-line hover:text-[#6556cd] lg:text-3xl md:text-xl sm:text-3xl cursor-pointer"
        ></Link>
        <a target="_blank" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a href="">Imdb</a>
      </nav>

      <div className="md:flex md:flex-row  sm:flex sm:flex-col w-full lg:mt-5 md:mt-1 lg:ml-0 md:-ml-[3%] sm:ml-[3%]">
        <img
          className="lg:h-[60vh] lg:w-[20vw] md:h-[50vh] md:w-[25vw] sm:w-[80vw] sm:h-[70vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content lg:ml-[5%] md:ml-[2%] lg:w-full md:w-[87%] sm:w-[90%] text-white sm:text-center md:text-start">
          <h1 className="font-black lg:text-5xl md:text-3xl lg:w-full md:w-[90%] sm:w-[100%] sm:text-4xl">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_titile}
            <small className="lg:text-3xl md:text-xl sm:text-lg font-bold text-zinc-100 ml-[1%]">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex items-center font-medium lg:mb-5 lg:mt-5 lg:gap-x-5 md:gap-x-2 md:mt-1 md:mb-1 sm:flex sm:flex-col ">
          <div className="md:gap-4 sm:flex md:flex md:flex-row md:my-0 sm:my-2">
           <span className="bg-yellow-600 rounded-full lg:w-[6vh] lg:h-[6vh] md:w-[4vh] md:h-[4vh] text-white lg:text-xl md:text-lg sm:h-[6vh] sm:w-[6vh] font-semibold flex items-center justify-center ">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>{" "}
            </span>

            <h1 className="w-[60px] font-bold lg:text-xl md:text-base lg:leading-6 md:leading-5  sm:leading-tight">User Score</h1>
           </div>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
          </div>

          <h1 className="italic md:font-semibold lg:text-xl md:text-base sm:font-extrabold sm:text-xl text-zinc-200">
            {info.detail.tagline}{" "}
          </h1>
          <h1 className="md:font-medium sm:font-bold lg:mt-5 md:mt-2 lg:text-2xl md:text-xl sm:text-base">Overview</h1>
          <p className="lg:w-[80%] md:w-[90%]  text-zinc-100 lg:tracking-wide md:tracking-tighter md:text-sm lg:text-base sm:text-xs">
            {info.detail.overview.slice(0,350)}{" "}
          </p>

          <h1 className="md:font-medium sm:font-bold lg:mt-5 md:mt-2 lg:text-2xl md:text-xl">Languages</h1>
          <p className="mb-10 text-zinc-100 md:text-sm lg:text-base sm:text-xs">{info.translations.join(",")} </p>

          <Link
            to={`${pathname}/trailer`}
            className="lg:px-7 lg:py-4 lg:text-lg bg-[#6556cd] rounded-lg md:text-base md:px-5 md:py-3 sm:py-4 sm:px-5"
          >
            <i className="ri-play-fill"></i> Trailer
          </Link>
        </div>
      </div>
      {info.watchproviders ? (
        <div className="w-[80%] lg:mt-10 lg:mb-3 md:mt-7 md:mb-3 flex flex-col lg:gap-y-7 md:gap-y-5 justify-evenly sm:mt-10 sm:mb-7">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center text-white md:gap-x-10 sm:gap-x-5">
              <h1 className="w-[20%] font-medium md:text-lg sm:text-xs">Available on Platforms</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="lg:w-[6vh] lg:h-[6vh] md:w-[5vh] md:h-[5vh] lg:rounded-xl md:rounded-md object-cover sm:rounded-md sm:h-[5vh] sm:w-[5vh]"
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex items-center text-white md:gap-x-10 sm:gap-x-5">
              <h1 className="w-[20%] font-medium md:text-lg sm:text-xs">Available on Rent</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="lg:w-[6vh] lg:h-[6vh] md:w-[5vh] md:h-[5vh] lg:rounded-xl md:rounded-md object-cover sm:rounded-md sm:h-[5vh] sm:w-[5vh]"
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex items-center text-white md:gap-x-10 sm:gap-x-5">
              <h1 className="w-[20%] font-medium md:text-lg sm:text-xs">Available to Buy</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="lg:w-[6vh] lg:h-[6vh] md:w-[5vh] md:h-[5vh] lg:rounded-xl md:rounded-md object-cover sm:rounded-md sm:h-[5vh] sm:w-[5vh]"
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <ComingSoon></ComingSoon>
      )}

      <hr />
      <h1 className="italic font-semibold text-white lg:text-3xl lg:mt-3 md:text-xl md:mt-2 sm:text-base sm:mt-1">
        Seasons
      </h1>
      <div className="flex w-full overflow-y-auto">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <Link
              to={`/tv/details/${s.id}`}
              key={i}
              className="lg:w-[20vw] lg:mr-10 md:w-[25vw] sm:w-[32vw] md:mr-5 sm:mr-4"
            >
              <img
                className="lg:h-[45vh] md:h-[35vh] md:min-w-[15vw] sm:min-h-[30vh] sm:min-w-[32vw] mt-3 shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded "
                src={`https://image.tmdb.org/t/p/original/${
                  s.poster_path || s.backdrop_path || s.profile_path
                }`}
                alt=""
              />
              <h1 className="lg:mt-3 lg:text-xl md:mt-1 md:text-base sm:text-base sm:mt-2 font-semibold text-zinc-400 w-[80%] min-h-[5vh] text-center ">
                {s.name || s.title || s.original_name || s.original_titile}
              </h1>
            </Link>
          ))
        ) : (
          <h1 className="font-medium text-white lg:text-3xl md:text-xl">Nothing to Show</h1>
        )}
      </div>

      <hr />
      <h1 className="italic font-semibold text-white lg:text-3xl lg:mt-3 md:text-xl md:mt-1 sm:text-base sm:mt-3 ">
        Recommendations
      </h1>
      <HorizontalCards1
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      ></HorizontalCards1>
      <Outlet></Outlet>
    </div>
  ) : (
    <Loader></Loader>
  );
};

export default TvDetails;
