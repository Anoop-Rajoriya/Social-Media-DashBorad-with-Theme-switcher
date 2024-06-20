import React, { useContext } from "react";
import PrimaryCard from "./PrimaryCard";
import SecondaryCard from "./SecondaryCard";
import facbookIcon from "../assets/icon-facebook.svg";
import instaIcon from "../assets/icon-instagram.svg";
import twitIcon from "../assets/icon-twitter.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import { themContext } from "../context/ThemContext";

const primaryUserData = [
  {
    type: facbookIcon,
    user: "nathonf",
    followers: "1987",
    state: {
      isUp: true,
      upcount: "12",
    },
    topBorder: 'border-[#198ff5]'
  },
  {
    type: twitIcon,
    user: "nathonf",
    followers: "1044",
    state: {
      isUp: true,
      upcount: "99",
    },
    topBorder: 'border-[#1ca0f2]'
  },
  {
    type: instaIcon,
    user: "reelnathonf",
    followers: "11k",
    state: {
      isUp: true,
      upcount: "1099",
    },
    topBorder: 'border-[#df4996]'
  },
  {
    type: youtubeIcon,
    user: "Nathon f.",
    followers: "8239",
    state: {
      isUp: false,
      upcount: "144",
    },
    topBorder: 'border-[#c4032a]'
  },
];
const secondaryUserData = [
  {
    type: facbookIcon,
    rightBottom: { state: "up", val: "3" },
    leftTop: "page views",
    leftBottom: "87",
  },
  {
    type: facbookIcon,
    rightBottom: { state: "down", val: "2" },
    leftTop: "likes",
    leftBottom: "52",
  },
  {
    type: instaIcon,
    rightBottom: { state: "up", val: "2257" },
    leftTop: "likes",
    leftBottom: "5462",
  },
  {
    type: instaIcon,
    rightBottom: { state: "up", val: "1375" },
    leftTop: "profile views",
    leftBottom: "52k",
  },
  {
    type: twitIcon,
    rightBottom: { state: "up", val: "303" },
    leftTop: "retweets",
    leftBottom: "117",
  },
  {
    type: twitIcon,
    rightBottom: { state: "up", val: "553" },
    leftTop: "likes",
    leftBottom: "507",
  },
  {
    type: youtubeIcon,
    rightBottom: { state: "down", val: "19" },
    leftTop: "like",
    leftBottom: "107",
  },
  {
    type: youtubeIcon,
    rightBottom: { state: "down", val: "12" },
    leftTop: "totle views",
    leftBottom: "1407",
  },
];

export default function Main() {
  const [theme] = useContext(themContext)
  return (
    <div className={`${theme? 'dark': ''} bg-[#ffffff] dark:bg-[#1e202a] min-h-[85%] px-4 max-w-[1440px] mx-auto`}>
      <div
        id="primary-card-container"
        className=" grid sm:grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-4 py-6"
      >
        {primaryUserData.map((acc) => (
          <PrimaryCard
            key={crypto.randomUUID()}
            details={acc}
            accType="facebook"
            acc="nathnf"
            followers="1987"
            time="12"
          />
        ))}
      </div>
      <p className="capitalize dark:text-[#ffffff] text-2xl font-bold text-[#63687e]">
        overview-today
      </p>
      <div
        id="secondary-card-container"
        className="grid sm:grid-cols-2 gap-x-3 gap-y-6 lg:grid-cols-4 py-6 grid-rows-1"
      >
        {secondaryUserData.map((user) => (
          <SecondaryCard key={crypto.randomUUID()}  details={user} />
        ))}
      </div>
    </div>
  );
}
