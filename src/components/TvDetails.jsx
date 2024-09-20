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
      className="w-screen min-h-[205vh] relative  p-[5%] "
    >
      <nav className="w-full  text-zinc-100 text-2xl flex gap-14  items-center h-[10vh] -mt-12">
        <Link
          onClick={() => navigate(-1)}
          className="mr-1 ri-arrow-left-line hover:text-[#6556cd] text-3xl cursor-pointer"
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

      <div className="flex w-full mt-5">
        <img
          className="h-[60vh] w-[20vw] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded "
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-[5%] w-full text-white">
          <h1 className="text-5xl font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_titile}
            <small className="text-3xl font-bold text-zinc-100 ml-[1%]">
              ({info.detail.first_air_date.split("-")[0]})
            </small>
          </h1>

          <div className="flex items-center mt-5 mb-5 font-medium gap-x-5">
            <span className="bg-yellow-600 rounded-full w-[6vh] h-[6vh] text-white text-xl font-semibold flex items-center justify-center ">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>{" "}
            </span>

            <h1 className="w-[60px] font-bold text-xl leading-6">User Score</h1>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
          </div>

          <h1 className="text-xl italic font-semibold text-zinc-200">
            {info.detail.tagline}{" "}
          </h1>
          <h1 className="mt-5 text-2xl font-medium">Overview</h1>
          <p className="w-[80%] text-zinc-100 tracking-wide">
            {info.detail.overview}{" "}
          </p>

          <h1 className="mt-5 text-2xl font-medium">Languages</h1>
          <p className="mb-10 text-zinc-100">{info.translations.join(",")} </p>

          <Link
            to={`${pathname}/trailer`}
            className="px-7 py-4 text-lg bg-[#6556cd] rounded-lg"
          >
            <i className="ri-play-fill"></i> Trailer
          </Link>
        </div>
      </div>
      {info.watchproviders ? (
        <div className="w-[80%] mt-10 mb-3 flex flex-col gap-y-7 justify-evenly ">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex items-center text-white gap-x-10">
              <h1 className="w-[20%] font-medium">Available on Platforms</h1>
              {info.watchproviders.flatrate.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="w-[6vh] h-[6vh] rounded-xl object-cover select-none"
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex items-center text-white gap-x-10">
              <h1 className="w-[20%] font-medium">Available on Rent</h1>
              {info.watchproviders.rent.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="w-[6vh] h-[6vh] rounded-xl object-cover"
                  key={i}
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}

          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex items-center text-white gap-x-10">
              <h1 className="w-[20%] font-medium">Available to Buy</h1>
              {info.watchproviders.buy.map((w, i) => (
                <img
                  title={w.provider_name}
                  className="w-[6vh] h-[6vh] rounded-xl object-cover"
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
      <h1 className="mt-3 text-3xl italic font-semibold text-white ">
        Seasons
      </h1>
      <div className="flex w-full overflow-y-auto">
        {info.detail.seasons.length > 0 ? (
          info.detail.seasons.map((s, i) => (
            <Link
              to={`/tv/details/${s.id}`}
              key={i}
              className="w-[20vw] mr-10 "
            >
              <img
                className="h-[45vh]  min-w-[15vw] mt-3 shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded "
                src={`https://image.tmdb.org/t/p/original/${
                  s.poster_path || s.backdrop_path || s.profile_path
                }`}
                alt=""
              />
              <h1 className="mt-3 text-xl font-semibold text-zinc-400 w-[80%] min-h-[5vh] text-center">
                {s.name || s.title || s.original_name || s.original_titile}
              </h1>
            </Link>
          ))
        ) : (
          <h1 className="text-3xl font-medium text-white">Nothing to Show</h1>
        )}
      </div>

      <hr />
      <h1 className="mt-3 text-3xl italic font-semibold text-white ">
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
