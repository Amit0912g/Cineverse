import React from "react";
import error from "/error.gif";
const Error = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <img className="w-[20%]" src={error} alt="" />
    </div>
  );
};

export default Error;
