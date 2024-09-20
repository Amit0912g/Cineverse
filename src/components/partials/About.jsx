import React from "react";
import deadpool from "/deadpool.png";
import unsplash from "/unsplash.jpg";

const About = () => {
  return (
    <div
      className="relative w-full h-[123vh]  p-[5%]"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4),rgba(0,0,0,0.7)),url(${unsplash})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-center w-full h-[60vh] ">
        {/* <h1 className='absolute italic font-black text-white text-[150px] top-[17%] z-10 mx-auto'>Hi there,</h1> */}
        <h1
          className="absolute italic font-black text-[150px] top-[17%] z-10 mx-auto font-[silk-serif]"
          style={{
            background: "linear-gradient(to bottom, #ffffff,#ffffff, #8779dc)", // Gradient from white to #8779dc
            WebkitBackgroundClip: "text", // For WebKit-based browsers (Chrome, Safari)
            backgroundClip: "text", // For other browsers
            color: "transparent", // Make text color transparent
          }}
        >
          Hi there,
        </h1>

        <img
          src={deadpool}
          alt="Deadpool"
          className="absolute top-[32%] z-20 w-3/6  left-[28%] "
        />
      </div>

      <div className="w-full mt-3 p-[5%] ">
        <div className="w-[80%] text-white flex flex-col items-center justify-center mx-auto">
          <h1 className="text-5xl font-extrabold tracking-wider text-[#8779dc]">
            {" "}
            About Cineverse Project
          </h1>
          <p className="w-[85%] font-medium leading-6 tracking-wide mx-auto ml-[10%] mt-[3%]">
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
