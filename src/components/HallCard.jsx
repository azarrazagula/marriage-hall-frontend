import React, { useEffect } from "react";
import Button from "./Button";
import useSlider from "../hooks/useSlider";

/* ── MenuItem Sub-component ── */
const MenuItem = ({ text, order }) => {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), order * 55);
    return () => clearTimeout(t);
  }, [order]);

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        color: "#374151",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 0.22s ease, transform 0.22s ease",
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#d1fae5",
          color: "#059669",
          fontSize: 10,
          fontWeight: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {order + 1}
      </span>
      {text}
    </li>
  );
};

/* ── HallCard Component ── */
const HallCard = ({ hall, isMenuOpen, onToggleMenu, cateringMenu, onSelect }) => {
  const { imgIdx, sliding, dir, slideTo } = useSlider(hall.images.length);
  const total = hall.images.length;

  return (
    <div onClick={onSelect} className="group flex flex-col bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-xl hover:shadow-sandalwood/10 border border-slate-100 transition-all duration-500 cursor-pointer">
      {/* Slider */}
      <div className="relative h-[260px] bg-slate-100 overflow-hidden">
        <img
          src={hall.images[imgIdx]}
          alt={hall.name}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            transform: sliding
              ? dir === "right"
                ? "translateX(-100%)"
                : "translateX(100%)"
              : "translateX(0)",
            opacity: sliding ? 0 : 1,
            transition: "transform 0.32s cubic-bezier(.4,0,.2,1), opacity 0.32s ease",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

        {/* Prev Arrow */}
        <Button
          variant="slider"
          onClick={(e) => { e.stopPropagation(); slideTo((imgIdx - 1 + total) % total, "left"); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Button>

        {/* Next Arrow */}
        <Button
          variant="slider"
          onClick={(e) => { e.stopPropagation(); slideTo((imgIdx + 1) % total, "right"); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <svg className="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {hall.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); slideTo(i, i > imgIdx ? "right" : "left"); }}
              className={`rounded-full transition-all duration-300 ${i === imgIdx ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/50"}`}
            />
          ))}
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">{hall.name}</h3>
          <p className="flex items-center gap-1 text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
            <svg className="w-3 h-3 text-sandalwood" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {hall.place}
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 rounded-2xl px-3 py-2.5">
          <div className="w-8 h-8 rounded-xl bg-sandalwood/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-sandalwood" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Rooms</p>
            <p className="text-xl font-black text-slate-900 leading-tight">
              {hall.rooms} <span className="text-xs font-semibold text-slate-400">rooms</span>
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-2xl px-3 py-2.5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-emerald-700">Catering</p>
              <p className="text-xs font-bold text-emerald-600">Free with booking</p>
            </div>
            <Button
              variant="link"
              onClick={(e) => { e.stopPropagation(); onToggleMenu(); }}
            >
              Menu
              <svg
                className={`w-3 h-3 transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </div>

          {isMenuOpen && (
            <ul
              style={{
                marginTop: 12,
                paddingTop: 12,
                borderTop: "1px solid #d1fae5",
                listStyle: "none",
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {cateringMenu.map((item, i) => (
                <MenuItem key={i} text={item} order={i} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default HallCard;
