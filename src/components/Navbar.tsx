import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ChevronRight, Phone, Mail } from 'lucide-react';
import { cn } from '../lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const menuLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Giới thiệu', path: '/about' },
    { name: 'Tầm nhìn', path: '/vision' },
    { name: 'Sự kiện', path: '/events' },
    { name: 'Tuyển dụng', path: '/careers' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-blue-dark/90 backdrop-blur-sm border-b border-white/10">
        <div className="container-custom py-4">
          <div className="flex justify-between items-center">
            {/* Left Side: Menu & Search */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsOpen(true)}
                className="flex items-center bg-white/5 border border-white/10 rounded-sm overflow-hidden group"
              >
                <div className="bg-brand-red p-2 group-hover:bg-brand-red/80 transition-colors">
                  <Menu size={20} className="text-white" />
                </div>
                <span className="px-4 py-2 text-xs font-bold text-white uppercase tracking-wider hidden sm:inline-block">Menu</span>
              </button>
              
              <button className="flex items-center bg-white/5 border border-white/10 rounded-sm overflow-hidden group">
                <div className="bg-brand-red p-2 group-hover:bg-brand-red/80 transition-colors">
                  <Search size={20} className="text-white" />
                </div>
                <span className="px-4 py-2 text-xs font-bold text-white uppercase tracking-wider hidden sm:inline-block">Tìm kiếm</span>
              </button>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
              <Logo className="h-16 w-auto" light={true} />
            </Link>

            {/* Right Side: Language & Contact */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-3 text-[10px] font-bold text-white uppercase tracking-widest">
                <span className="text-white cursor-pointer hover:text-brand-red transition-colors">Tiếng Việt</span>
                <span className="text-white/30">|</span>
                <span className="text-white/50 cursor-pointer hover:text-brand-red transition-colors">English</span>
              </div>
              
              <button className="flex items-center bg-white/5 border border-white/10 rounded-sm overflow-hidden group">
                <span className="px-4 py-2 text-xs font-bold text-white uppercase tracking-wider hidden sm:inline-block">Liên hệ</span>
                <div className="bg-brand-red p-2 group-hover:bg-brand-red/80 transition-colors">
                  <ChevronRight size={20} className="text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[100] bg-brand-blue-dark transition-all duration-500 flex items-center justify-center",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-white hover:text-brand-red transition-colors"
        >
          <X size={40} />
        </button>

        <div className="container-custom">
          <div className="flex flex-col items-center space-y-8">
            {menuLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white hover:text-brand-red transition-all transform",
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
