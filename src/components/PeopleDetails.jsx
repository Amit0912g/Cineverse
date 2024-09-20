import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadpeople, removepeople } from "../store/actions/peopleActions";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import Loader from "./partials/Loader";
import HorizontalCards1 from "./partials/HorizontalsCards1";
import Dropdown from "./partials/Dropdown";


const PeopleDetails = () => {
  const [category,setCategory]=useState("movie")
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
    <div className=" w-screen min-h-screen px-[15%] mb-[3%]">
      <nav className="w-full  text-zinc-100 text-2xl flex gap-14  items-center h-[10vh] ">
        <Link
          onClick={() => navigate(-1)}
          className="mr-1 ri-arrow-left-line hover:text-[#6556cd] text-3xl cursor-pointer"
        ></Link>
      </nav>

      <div className="flex w-full">
        <div className="w-[25%]">
          <img
            className="h-[50vh] w-[20vw] shadow-[8px_17px_38px_2px_rgba(0,0,0,0.6)]  object-cover rounded "
            src={`https://image.tmdb.org/t/p/original/${
              info.detail.profile_path || info.detail.backdrop_path
            }`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          <div className="flex text-2xl text-white gap-x-5">
          <a
           target="_blank"
           href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
         >
           <i className="ri-earth-fill"></i>
        </a>
            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}>
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}>
              <i className="ri-instagram-fill"></i>
            </a>
            <a target="_blank" href={`https://www.twitter.com/${info.externalid.instagram_id}`}>
              <i className="ri-twitter-fill"></i>
            </a>
          
          </div>
          
          <h1 className="my-5 text-2xl font-semibold text-zinc-400">
            Person Information
          </h1>
          
          <h1 className="text-xl font-medium text-zinc-400">
          Known For
          </h1>
          <h1 className="mb-2 -mt-1 text-lg font-bold text-zinc-300">
           {info.detail.known_for_department}
          </h1>
          
          <h1 className="text-xl font-medium text-zinc-400">
          Gender
          </h1>
          <h1 className="mb-2 -mt-1 text-lg font-bold text-zinc-300">
           {info.detail.gender == 2 ? "Male" : "Female"} </h1>
           
          <h1 className="text-xl font-medium text-zinc-400">
         Birthday
          </h1>
          <h1 className="mb-2 -mt-1 text-lg font-bold text-zinc-300">
           {info.detail.birthday? formatDate(info.detail.birthday):<h1>NA</h1> } </h1>
           
          <h1 className="text-xl font-medium text-zinc-400">
      Deathday
          </h1>
          <h1 className="mb-2 -mt-1 text-lg font-bold text-zinc-300">
           {info.detail.deathday? formatDate(info.detail.birthday):"Still Alive"} </h1>
           
           <h1 className="text-xl font-medium text-zinc-400">
          Place Of Birth
          </h1>
          <h1 className="mb-2 -mt-1 text-lg font-bold text-zinc-300">
           {info.detail.place_of_birth}
          </h1>
          
           <h1 className="text-xl font-medium text-zinc-400">
          Also Known As 
          </h1>
          <h1 className="mb-2 -mt-1 text-lg font-bold text-zinc-300">
           {info.detail.also_known_as}
          </h1>
          
        </div>
          
         <div className="w-[75%] ml-[5%] -mt-7">
         <h1 className="my-5 text-6xl font-black text-zinc-400">
           {info.detail.name}
          </h1>
          
          <h1 className="text-xl font-medium text-zinc-400">
         Biography
          </h1>
          <p className="mt-3 text-lg font-medium text-zinc-400">{info.detail.biography}</p>
         
          <h1 className="mt-5 text-lg font-medium text-zinc-400">
        Known For
          </h1>
          
          <HorizontalCards1 data={info.combinedcredits.cast}></HorizontalCards1>

          <div className="flex justify-between w-full">
        <h1 className="mt-5 text-xl font-semibold text-zinc-400">
          Acting
        </h1>
        <Dropdown title="Category" options={["tv","movie"]} func={(e)=>setCategory(e.target.value)}></Dropdown>
      </div>

             <div className="w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.3)] mb-[2%] mt-2 border-2 border-zinc-700 p-5">
                {info[category + "credits"].cast.map((c,i)=>(
                  <li key={i} className="mt-3 duration-300 cursor-pointer text-zinc-400 hover:text-white">
                 <Link to={`${category}/details/${c.id}`} >
                 <span > {c.name ||
              c.title ||
              c.original_name ||
              c.original_titile}</span>
                 <span className="block ml-5 ">{c.character ? ` Character Name: ${c.character}` :"NA"}</span>
                  
                 </Link>
                  
                 </li>
                ))}
              
              
             </div>
      
         </div> 
         
        
      </div>

      
    </div>
  ) : (
    <Loader></Loader>
  );
};

export default PeopleDetails;
