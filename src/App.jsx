import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/partials/Error";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import TvShows from "./components/TvShows";
import People from "./components/People";
import MovieDetails from "./components/MovieDetails";
import TvDetails from "./components/TvDetails";
import PeopleDetails from "./components/PeopleDetails";
import Trailer from "./components/partials/Trailer";
import About from "./components/partials/About";
import Contact from "./components/partials/Contact";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/trending" element={<Trending></Trending>}></Route>
        <Route path="/popular" element={<Popular></Popular>}></Route>
        <Route path="/movie" element={<Movie></Movie>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/movie/details/:id"
          element={<MovieDetails></MovieDetails>}
        >
          <Route path="/movie/details/:id/trailer" element={<Trailer></Trailer>} ></Route>
        </Route>
        <Route path="/tvshows" element={<TvShows />}></Route>
        <Route
          path="/tv/details/:id"
          element={<TvDetails></TvDetails>}
        >
          <Route path="/tv/details/:id/trailer" element={<Trailer></Trailer>} ></Route>
        </Route>
        <Route path="/people" element={<People />}></Route>
        <Route
          path="/people/details/:id"
          element={<PeopleDetails></PeopleDetails>}
        ></Route>
        <Route path="*" element={<Error></Error> }></Route>
      </Routes>
    </div>
  );
};

export default App;
