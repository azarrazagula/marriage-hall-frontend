import React from "react";

const Register = () => {
    return (
        <div className="min-h-screen bg-[#FDFCFB] py-32 px-4 md:px-20 font-outfit text-slate-900 flex flex-col items-center">
            <div className="text-center mb-16">
                <span className="text-sandalwood-dark font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
                    Join Us
                </span>
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
                    Book Your <span className="text-sandalwood italic">Venue</span>
                </h1>
            </div>
            <div className="bg-white border border-slate-100 rounded-[48px] p-12 md:p-16 shadow-2xl shadow-slate-200/50 w-full max-w-2xl transform transition-all duration-700 hover:shadow-sandalwood/10">
                <form className="space-y-12">
                    <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Full Name</label>
                        <input className="bg-transparent border-b-2 border-slate-100 py-3 text-lg focus:outline-none focus:border-sandalwood transition-all duration-500 placeholder:text-slate-200" placeholder="e.g. John Doe" />
                    </div>

                    <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Phone Number</label>
                        <input type="tel" className="bg-transparent border-b-2 border-slate-100 py-3 text-lg focus:outline-none focus:border-sandalwood transition-all duration-500 placeholder:text-slate-200" placeholder="+1 (234) 567-8900" />
                    </div>

                    <div className="flex flex-col gap-3 group">
                        <label className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">Place (City/Location)</label>
                        <input className="bg-transparent border-b-2 border-slate-100 py-3 text-lg focus:outline-none focus:border-sandalwood transition-all duration-500 placeholder:text-slate-200" placeholder="e.g. Karachi" />
                    </div>

                    <button type="submit" className="w-full py-6 bg-slate-900 hover:bg-sandalwood-dark text-white font-black rounded-[20px] transition-all duration-500 uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-slate-900/20 transform hover:-translate-y-1">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
