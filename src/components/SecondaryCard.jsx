import React from "react";
import upArrow from "../assets/icon-up.svg";
import downArrow from "../assets/icon-down.svg";

export default function SecondaryCard({ details }) {


  return (
    <div className="h-[140px] cursor-pointer dark:bg-[#252a41] dark:hover:bg-[#333A56] bg-[#f0f2fa] hover:bg-[#E1E3F0] rounded-md flex">
      <section
        id="left"
        className="w-1/2 pl-6 py-4 h-full flex flex-col justify-evenly"
      >
        <p className="font-bold capitalize text-[#63687e] dark:text-[#8b97c6]">{details.leftTop}</p>
        <p className="font-bold text-5xl capitalize dark:text-[#ffffff]">{details.leftBottom}</p>
      </section>
      <section
        id="right"
        className="w-1/2 pr-10 py-4 h-full flex flex-col justify-evenly items-end"
      >
        <img className="size-5" src={details.type} alt="" />
        <div
          className={`${
            details.rightBottom.state === "up"
              ? "text-[#1db489]"
              : "text-[#dc414c]"
          } flex items-center gap-1  capitalize font-bold`}
        >
          <img
            className="size-2"
            src={details.rightBottom.state === "up" ? upArrow : downArrow}
            alt=""
          />
          {details.rightBottom.val}%
        </div>
      </section>
    </div>
  );
}
