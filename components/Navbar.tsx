import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, BRAND_NAME, CONTACT_INFO } from '../constants';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-industrial-gray text-gray-300 text-xs py-2 px-4 hidden md:block border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <p className="tracking-wide uppercase font-medium">Precision Laser Cutting in Rajkot, Gujarat</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-industrial-accent" />
              <a href={`tel:${CONTACT_INFO.phone[0]}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone[0]}</a>
            </span>
            <span className="text-industrial-accent">|</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? 'bg-industrial-black/95 backdrop-blur-sm shadow-xl py-3' : 'bg-industrial-black py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col group">
              <span className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-tighter group-hover:text-industrial-accent transition-colors">
                Shiv<span className="text-industrial-accent group-hover:text-white transition-colors">Laser</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase hidden md:block">
                Precision Metal Works
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-industrial-accent ${
                    location.pathname === item.path ? 'text-industrial-accent' : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button to="/quote" variant="primary" className="py-2 px-5 text-xs">
                Get a Quote
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-industrial-black border-t border-gray-800 shadow-2xl transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-wider block py-2 border-b border-gray-800 ${
                    location.pathname === item.path ? 'text-industrial-accent' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/quote" 
              className="bg-industrial-accent text-white font-bold uppercase text-center py-3 rounded-sm mt-4"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;