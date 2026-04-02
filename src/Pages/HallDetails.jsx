import React from "react";
import Cards from "../components/Cards";

const HallDetails = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-32 px-4 md:px-10 font-outfit text-slate-900">
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <span className="text-sandalwood-dark font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
          Our Collection
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-4">
          Hall <span className="text-transparent bg-clip-text bg-gradient-to-r from-sandalwood-dark to-sandalwood italic">Details</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
          Explore rooms, free catering packages, and everything for your perfect day.
        </p>
      </div>
      <Cards />
    </div>
  );
};

export default HallDetails;
