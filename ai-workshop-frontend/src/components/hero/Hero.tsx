import React from "react";
import { GrLocation } from "react-icons/gr";

import {
  FaRegCalendarMinus,
  FaRegClock,
  FaWifi,
  FaRegUser,
  FaBookOpen,
} from "react-icons/fa";

import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { WorkshopDetailCard } from "./WorkshopDetailCard";
import Outcomes from "../outcomes/Outcomes";
import FAQ from "../faq/FAQ";

const Hero: React.FC = () => {
  const workshopName: string = "AI & Robotics Summer Workshop";
  const workshopDescription: string =
    "Dive into the world of artificial intelligence and build your own real-world robotics projects in this interactive 4-week online camp designed for young innovators.";
  const workshopDetails = [
    {
      id: 1,
      icon: <FaRegCalendarMinus className="text-amber-600 text-lg" />,
      primaryText: "Jul 15, 2026",
      secondaryText: "START DATE",
    },
    {
      id: 2,
      icon: <FaRegClock className="text-amber-600 text-lg" />,
      primaryText: "4 Weeks",
      secondaryText: "DURATION",
    },
    {
      id: 3,
      icon: <FaWifi className="text-amber-600 text-lg" />,
      primaryText: "Online",
      secondaryText: "TEACHING MODE",
    },
    {
      id: 4,
      icon: <FaRegUser className="text-amber-600 text-lg" />,
      primaryText: "8-14 Years",
      secondaryText: "AGE GROUP",
    },
    {
      id: 5,
      icon: <RiMoneyRupeeCircleFill className="text-amber-600 text-lg" />,
      primaryText: "₹2,999",
      secondaryText: "FEES",
    },
    {
      id: 6,
      icon: <FaBookOpen className="text-amber-600 text-lg" />,
      primaryText: "AI",
      secondaryText: "SUBJECT",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 text-xs font-bold">
        <span className="bg-orange-400 text-white px-3 py-1 rounded-full cursor-default">
          Featured
        </span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full cursor-default">
          Online Event
        </span>
      </div>

      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3">
          {workshopName}
        </h1>
        <p className="text-gray-600 text-sm md:text-xl leading-relaxed">
          {workshopDescription}
        </p>
      </div>

      <div className="w-full h-100 bg-slate-800 rounded-3xl overflow-hidden relative shadow-md">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
          alt="Robotics Workshop"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute bottom-4 left-4 text-white text-sm font-medium cursor-default">
          <span className="bg-black/20 px-3 py-1.5 flex items-center rounded-full backdrop-blur-md">
            <GrLocation className="inline-block mr-1" />
            Remote
          </span>
        </div>
        <div className="absolute bottom-4 right-4 text-white text-sm font-medium cursor-default">
          <span className="bg-black/20 px-3 py-1.5 rounded-full backdrop-blur-md">
            Seats Available
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
        <WorkshopDetailCard workshopDetails={workshopDetails} />
      </div>

      <div className="bg-gray-50 p-5 mt-1 flex flex-col gap-5 rounded-2xl">
        <Outcomes />
      </div>

      <div className="bg-gray-50 p-5 flex flex-col gap-5 rounded-2xl">
        <FAQ />
      </div>
    </div>
  );
};

export default Hero;
