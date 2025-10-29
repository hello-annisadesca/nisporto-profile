import React from "react";
import profileImg from "../assets/images/myprofile.jpg"; 
import lampIcon from "../assets/icon/lamp.png";
import rocketIcon from "../assets/icon/rocket.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] bg-[conic-gradient(from_285deg_at_78.02%_74.42%,_#1C92D2_0deg,_#F2FCFE_360deg)] overflow-hidden border-gray-200">
      {/* decorative circles */}
      <div className="absolute w-60 h-60 left-10 top-10 opacity-20 bg-yellow-300 rounded-full"></div>
      <div className="absolute w-80 h-80 right-10 bottom-10 opacity-20 bg-blue-600 rounded-full"></div>

      {/* Main content */}
      <div className="max-w-[1152px] mx-auto flex items-center justify-between h-full px-6 relative">
        <div className="flex flex-col gap-4 max-w-[480px]">
          <p className="text-black-400 text-xs font-normal font-dmsans tracking-[2.4px]">
            Hello, I’m
          </p>

          <h1 className="text-gray-800 text-5xl font-bold font-grotesk leading-[48px]">
            Annisa Desca
          </h1>

          <div className="inline-block bg-gradient-to-r from-sky-200 via-blue-400 to-sky-700 rounded-full px-6 py-2 shadow-lg">
            <span className="text-white text-base font-medium font-dmsans">
              UI/UX Designer & Web Developer
            </span>
          </div>

          <p className="text-black-500 text-xl font-normal font-dmsans leading-6 mt-2">
            Menampilkan hasil karya, dan proses kreatif dalam berbagai proyek
            yang mencerminkan perjalanan dan perkembangan saya di bidang yang
            saya tekuni.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-sky-700 text-white text-base font-semibold font-[Poppins] px-6 py-2 rounded-xl shadow-md hover:bg-sky-800 transition">
              Lihat Karya
            </button>
            <button className="text-sky-700 border border-sky-700 text-base font-semibold font-[Poppins] px-6 py-2 rounded-xl shadow-md hover:bg-sky-50 transition">
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div className="relative">
          <img
            src={profileImg}
            alt="profile"
            className="w-72 h-72 rounded-3xl shadow-2xl border-8 border-white object-cover"
          />

          {/* white square */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/90 rounded-xl shadow-md flex items-center justify-center z-20">
            <img src={lampIcon} alt="lamp icon" className="w-6 h-8" />
          </div>

          {/* blue circle */}
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-bl from-sky-600 to-blue-300 rounded-full flex items-center justify-center shadow-lg z-20">
            <img src={rocketIcon} alt="rocket icon" className="w-7 h-7" />
          </div>
        </div>
      </div>
    </section>
  );
}
