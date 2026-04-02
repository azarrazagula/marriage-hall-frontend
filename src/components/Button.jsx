import React from "react";

const Button = ({ children, onClick, className = "", variant = "primary", ...props }) => {
  const baseStyles = "transition-all duration-300 flex items-center justify-center font-black uppercase tracking-widest text-[10px]";
  
  const variants = {
    primary: "bg-sandalwood text-white hover:bg-sandalwood-dark py-3 px-6 rounded-2xl",
    outline: "border border-slate-200 text-slate-600 hover:bg-slate-50 py-3 px-6 rounded-2xl",
    slider: "w-10 h-10 rounded-full bg-white/80 hover:bg-white backdrop-blur-sm border border-white/60 shadow-lg hover:scale-110",
    link: "text-sandalwood-dark hover:text-sandalwood gap-1",
    ghost: "bg-transparent hover:bg-slate-50 rounded-xl"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
