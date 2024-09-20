import React, { useState, useEffect } from "react";
import Sidenav from "./partials/Sidenav";
import TopNav from "./partials/TopNav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Loader from "./partials/Loader";

const Home = () => {
  document.title = "Cineverse | homepage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const GetHeaderwallpaper = async () => {
    try {
      let { data } = await axios.get(`/trending/all/day`);
      let random =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(random);
    } catch (err) {
      console.log("error", err);
    }
  };
  const GetTrending = async () => {
    try {
      let { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    !wallpaper && GetHeaderwallpaper();
    GetTrending();
  }, [category]);
  return wallpaper && trending ? (
    <>
      <Sidenav></Sidenav>
      <div className="w-[80%] h-full overflow-x-hidden overflow-y-auto">
        <TopNav></TopNav>
        <Header data={wallpaper}></Header>
        <HorizontalCards
          data={trending}
          func={(e) => setCategory(e.target.value)}
        ></HorizontalCards>
      </div>
    </>
  ) : (
    <Loader></Loader>
  );
};

export default Home;
