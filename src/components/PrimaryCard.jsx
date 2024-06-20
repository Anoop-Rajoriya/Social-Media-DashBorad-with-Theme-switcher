import React from "react";
import upArrow from "../assets/icon-up.svg";
import downArrow from "../assets/icon-down.svg";

export default function PrimaryCard({ details }) {
  return (
    <div className={`${details.topBorder} border-t-4 rounded-md min-w-[26 0px] h-[240px] bg-[#f0f2fa] dark:bg-[#252a41] dark:hover:bg-[#333A56] hover:bg-[#E1E3F0] py-8 flex flex-col items-center cursor-pointer`}>
      <div className="flex items-center gap-2 text-base font-bold text-[#63687e] dark:text-[#8b97c6]">
        <img className="size-5" src={details.type} alt="" /> @{details.user}
      </div>
      <div className="flex flex-col items-center my-5">
        <span className=" dark:text-[#ffffff] text-6xl font-bold">{details.followers}</span>
        <span className="uppercase mt-1 font-semibold tracking-[0.3em] dark:text-[#8b97c6] text-[#050507]">
          followers
        </span>
      </div>
      <div
        className={`${
          details.state.isUp ? "text-[#1db489]" : "text-[#dc414c]"
        } capitalize flex items-center gap-2 font-bold`}
      >
        <img
          className="size-2"
          src={details.state.isUp ? upArrow : downArrow}
          alt=""
        />{" "}
        {details.state.upcount} today
      </div>
    </div>
  );
}
