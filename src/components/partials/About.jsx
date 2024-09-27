import React from "react";
import deadpool from "/deadpool.png";
import unsplash from "/unsplash.jpg";

const About = () => {
  return (
    <div
      className="relative w-full lg:h-[123vh] md:h-[122vh] sm:h-[107vh] p-[5%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(${unsplash})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-center w-full h-[60vh] ">
       
        <h1
          className="absolute italic font-black lg:text-[150px] md:text-[120px] lg:top-[17%] md:top-[15%] z-10 mx-auto font-[silk-serif] sm:text-[80px] sm:top-[10%]"
          style={{
            background: "linear-gradient(to bottom, #ffffff,#ffffff, #8779dc)", 
            WebkitBackgroundClip: "text", 
            backgroundClip: "text", 
            color: "transparent", 
          }}
        >
          Hi there,
        </h1>

        <img
          src={deadpool}
          alt="Deadpool"
          className="absolute lg:top-[32%] z-20 lg:w-3/6 md:left-[20%]  lg:left-[28%] md:top-[22%] md:w-3/5 sm:w-4/6 sm:top-[18%] sm:left-[20%] "
        />
      </div>

      <div className="w-full lg:mt-3 p-[5%] md:-mt-12 sm:-mt-36">
        <div className="md:w-[80%] sm:w-[90%] text-white flex flex-col items-center justify-center mx-auto">
          <h1 className="lg:text-5xl md:text-3xl sm:text-lg font-extrabold tracking-wider text-[#8779dc]">
            {" "}
            About Cineverse Project
          </h1>
          <p className="w-[85%] font-medium lg:leading-6 md:leading-5 sm:leading-4 md:text-lg sm:text-sm tracking-wide mx-auto ml-[10%] mt-[3%]">
            This project is built using data from The Movie Database (TMDB), a
            community-driven platform that provides comprehensive information
            about movies, TV shows, and celebrities. TMDB’s robust API allows
            developers to access its vast collection of multimedia data, making
            it ideal for creating applications that display movie-related
            content. This project demonstrates the integration of TMDB's API to
            create an interactive and user-friendly interface for browsing
            movies, TV shows, and actor details. It reflects my skills in web
            development, API integration, and UI/UX design, with a focus on
            delivering an engaging experience for film and TV enthusiasts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
