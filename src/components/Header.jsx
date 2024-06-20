import React, { useContext, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { themContext } from "../context/ThemContext";

export default function Header() {
  const [theme] = useContext(themContext);

  return (
    <div>
      <div
        className={`${
          theme ? "dark" : ""
        } bg-[#f5f7ff] dark:bg-[#1e202a] text-[#1e202a] min-h-[15%] flex flex-col justify-between px-4 max-w-[1440px] mx-auto py-6 md:flex-row`}
      >
        <section className="py-3 border-b-2 border-[#1e202a] md:border-b-0">
          <h1 className="capitalize text-2xl font-bold dark:text-[#ffffff]">
            <a href="./">social media dashboard</a>
          </h1>
          <p className="capitalize text-sm font-bold text-[#63687e] dark:text-[#8b97c6]">
            total followers: <span>23,004</span>
          </p>
        </section>
        <section className="flex items-center justify-between py-3">
          <p className="text-[#63687e] dark:text-[#8b97c6] capitalize text-sm font-bold">
            {theme ? "light mode" : "dark mode"}
          </p>
          <ToggleSwitch label="dark mode" />
        </section>
      </div>
    </div>
  );
}
