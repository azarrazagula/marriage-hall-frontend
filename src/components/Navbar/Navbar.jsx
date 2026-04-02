import React from 'react';
import useToggle from '../../hooks/useToggle';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, toggleMenu, setIsMenuOpen] = useToggle(false);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] max-w-[1240px] z-[1000] font-outfit">
            <div className="bg-white/10 backdrop-blur-[24px] border border-white/20 rounded-[32px] flex justify-between items-center px-12 py-5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden md:overflow-visible transition-all duration-700">
                {/* Logo Section */}
                <div className="flex items-center">
                    <a href="#home" className="text-2xl font-black text-slate-900 tracking-tighter hover:scale-105 transition-transform duration-300">
                        LOGO
                    </a>
                </div>

                {/* Navbar Links Section */}
                <div className={`
                    absolute md:static top-24 md:top-auto left-0 md:left-auto w-full md:w-auto 
                    bg-white/95 md:bg-transparent flex flex-col md:flex-row items-center gap-6 md:gap-10 
                    p-14 md:p-0 rounded-[40px] md:rounded-none transition-all duration-500 ease-in-out border md:border-none border-slate-100 shadow-2xl md:shadow-none
                    ${isMenuOpen ? 'flex translate-y-0 opacity-100' : 'hidden md:flex -translate-y-10 md:translate-y-0 opacity-0 md:opacity-100'}
                `}>
                    <a href="#home" className="nav-link text-slate-600 hover:text-slate-900 font-bold tracking-wide uppercase text-[10px]" onClick={handleLinkClick}>Home</a>
                    <a href="#hall" className="nav-link text-slate-600 hover:text-slate-900 font-bold tracking-wide uppercase text-[10px]" onClick={handleLinkClick}>Hall</a>
                    <a href="#hall-details" className="nav-link text-slate-600 hover:text-slate-900 font-bold tracking-wide uppercase text-[10px]" onClick={handleLinkClick}>Hall Details</a>
                    <a href="#halls-review" className="nav-link text-slate-600 hover:text-slate-900 font-bold tracking-wide uppercase text-[10px]" onClick={handleLinkClick}>Halls Review</a>
                    <a href="#register" className="bg-slate-900 text-white px-8 py-3 rounded-full font-black hover:bg-sandalwood-dark transition-all duration-500 shadow-lg uppercase tracking-widest text-[10px]" onClick={handleLinkClick}>
                        Register
                    </a>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden cursor-pointer p-2" onClick={toggleMenu}>
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-[2.5px] bg-slate-900 transition-all duration-300 rounded-full ${isMenuOpen ? 'rotate-45 translate-y-[8.5px]' : ''}`}></span>
                        <span className={`block w-6 h-[2.5px] bg-slate-900 transition-all duration-300 rounded-full ${isMenuOpen ? 'opacity-0 scale-0' : ''}`}></span>
                        <span className={`block w-6 h-[2.5px] bg-slate-900 transition-all duration-300 rounded-full ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
