import React from "react";

const Dropdown = ({ title, options, func }) => {
  return (
    <div className="select xl:text-xl md:text-sm xl:w-[40vh] xl:h-[7vh] lg:w-[30vh] lg:h-[7vh] md:w-[19vh] md:h-[5vh] lg:text-lg sm:text-sm sm:w-[12vh] sm:h-[4vh] ">
      <select name="format" defaultValue={"0"} onChange={func} id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((o, i) => (
          <option value={o} key={i}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
