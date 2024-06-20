import React, { Children, useContext, useState } from "react";
import { themContext } from "../context/ThemContext";

const ToggleSwitch = ({ label }) => {
  const [theme, setTheme] = useContext(themContext)

  const handleToggle = () => {
    setTheme(!theme)
    localStorage.setItem('theme', !theme)
  };

  return (
    <div className=" relative inline-block w-12 h-5 mx-2  overflow-hidden">
      <input
        type="checkbox"
        id={`toggle-${label}`}
        name={label}
        checked={theme}
        onChange={handleToggle}
        className=" absolute -top-full"
      />
      <label
        htmlFor={`toggle-${label}`}
        className={`bg-[#63687e] cursor-pointer dark:bg-gradient-to-r hover:bg-gradient-to-r from-[#378fe6] to-[#3eda82] block rounded-full w-full h-full`}
      >
        <span
          className={`${
            theme ? "translate-x-[28px]" : ""
          } transition ease-in-out dark:bg-[#1e202a] duration-200 absolute w-[18px] h-[18px] bg-white rounded-full mx-[1px] my-[1px]`}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
