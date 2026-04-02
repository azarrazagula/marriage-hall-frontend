import React from "react";


const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Main Hero Section — Premium Glowing Matte Paper */}
      <div className="hero-bg relative min-h-[100vh] flex items-center justify-center overflow-hidden">

        {/* Floating decorative ring — top left */}
        <div className="absolute top-[15%] left-[5%] w-64 h-64 rounded-full border border-sandalwood/10 animate-[spin_30s_linear_infinite] z-[2]"></div>
        {/* Floating decorative ring — bottom right */}
        <div className="absolute bottom-[12%] right-[6%] w-48 h-48 rounded-full border border-sandalwood/10 animate-[spin_20s_linear_infinite_reverse] z-[2]"></div>
        {/* Tiny accent dot cluster */}
        <div className="absolute top-[30%] right-[10%] w-3 h-3 rounded-full bg-sandalwood/20 blur-[1px] z-[2]"></div>
        <div className="absolute top-[32%] right-[11.5%] w-2 h-2 rounded-full bg-sandalwood/15 blur-[1px] z-[2]"></div>

        {/* Content Section */}
        <div className="relative z-10 text-center px-6 max-w-5xl flex flex-col items-center pt-24 pb-32">
          <span className="text-sandalwood-dark font-black tracking-[0.5em] uppercase text-[10px] mb-8">
            Premium Wedding Haven
          </span>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold text-slate-900 mb-10 tracking-tighter leading-[0.85] font-outfit">
            A Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sandalwood-dark via-sandalwood to-[#D4A853] italic">
              Elegance
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto mb-16 font-outfit leading-relaxed">
            Welcome to the most prestigious wedding venue where modern luxury meets pure heritage. Your journey to forever begins here.
          </p>


        </div>
      </div>
    </div>
  );
};

export default Home;
