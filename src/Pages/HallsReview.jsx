import React from "react";
import { useHallContext } from "../context/HallContext";

const HallsReview = () => {
    const { hallsData, selectedHallId } = useHallContext();
    const selectedHall = hallsData.find(h => h.id === selectedHallId) || hallsData[0];

    return (
        <div className="min-h-screen bg-[#FAF9F6] py-32 px-4 md:px-20 font-outfit text-slate-900">
            <div className="text-center mb-20 max-w-4xl mx-auto">
                <span className="text-sandalwood-dark font-black tracking-[0.4em] uppercase text-[10px] mb-4 block">
                    Real Experiences
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                    Reviews for <span className="text-transparent bg-clip-text bg-gradient-to-r from-sandalwood-dark to-sandalwood italic">{selectedHall.name}</span>
                </h1>
                <div className="flex items-center justify-center gap-3">
                    <span className="text-2xl font-black text-slate-900">{selectedHall.rating}</span>
                    <div className="flex gap-1 text-sandalwood">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-5 h-5 ${i < Math.floor(selectedHall.rating) ? 'fill-current' : 'fill-slate-200'}`} viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest border-l border-slate-300 pl-3">
                        {selectedHall.reviewCount} Reviews
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {selectedHall.reviews.map((review, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-xl shadow-sandalwood/5 hover:shadow-2xl hover:shadow-sandalwood/10 transition-all duration-500 relative group overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sandalwood/10 to-transparent rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
                        
                        <div>
                            <div className="flex items-center gap-2 mb-6 text-sandalwood">
                                {[...Array(5)].map((_, idx) => (
                                    <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-slate-600 italic mb-8 leading-relaxed opacity-90 text-lg relative z-10">
                                "{review.text}"
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                            {review.photo ? (
                                <img src={review.photo} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
                            ) : (
                                <div className="w-12 h-12 bg-sandalwood/10 rounded-full flex items-center justify-center text-sandalwood-dark font-black text-lg">
                                    {review.name.charAt(0)}
                                </div>
                            )}
                            <div>
                                <h4 className="font-black text-base text-slate-900 tracking-tight">{review.name}</h4>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HallsReview;
