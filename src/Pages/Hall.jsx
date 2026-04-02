import React from "react";
import Hall1 from "../Assets/Hall1.png";
import Hall2 from "../Assets/Hall2.png";
import Hall3 from "../Assets/Hall3.png";
import Hall4 from "../Assets/Hall4.png";

const halls = [
    { id: 1, name: "The Grand Pavilion", location: "Royal Gardens", image: Hall1 },
    { id: 2, name: "Emerald Ballroom", location: "Crystal Plaza", image: Hall2 },
    { id: 3, name: "Golden Oasis", location: "Sunset Boulevard", image: Hall3 },
    { id: 4, name: "Pearl Sanctuary", location: "Heritage Hill", image: Hall4 },
];

const Hall = () => {
    return (
        <div className="min-h-screen bg-[#FAF9F6] flex flex-col">

            {/* Section Header */}
            <div id="hall" className="pt-40 pb-10 px-6 max-w-7xl mx-auto w-full">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                    Explore Our <span className="text-sandalwood italic">Venues</span>
                </h2>
                <p className="text-slate-500 text-lg mt-4 font-outfit leading-relaxed max-w-xl">
                    Hand-picked premium halls for your perfect day.
                </p>
            </div>

            {/* Infinite Marquee
                FIX 1: outer div is NOT flex-centered so it spans full viewport width
                FIX 2: 'group' on overflow container, 'group-hover:' on animating div → hover pause works from anywhere inside
                FIX 3: no px-4 on animating div (avoids translateX(-50%) overshoot/jump)
            */}
            <div className="w-full overflow-hidden group pb-20">
                <div
                    className="flex gap-8 py-6 animate-marquee group-hover:[animation-play-state:paused]"
                    style={{ willChange: "transform" }}
                >
                    {[...halls, ...halls].map((hall, index) => (
                        <div
                            key={`${hall.id}-${index}`}
                            className="flex-none w-[350px] md:w-[450px] h-[300px] md:h-[400px] relative rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[1.03] cursor-pointer group/card border-4 border-white/60"
                        >
                            <img
                                src={hall.image}
                                alt={hall.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover/card:opacity-85 transition-opacity duration-500"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-1 group-hover/card:translate-y-0 transition-transform duration-500">
                                <span className="text-sandalwood font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">
                                    {hall.location}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                    {hall.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Hall;
