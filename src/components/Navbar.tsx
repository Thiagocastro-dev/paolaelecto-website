import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cart, setIsCartOpen, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#f0d1d3] shadow-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick('quem-somos')} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden border border-[#f0d1d3] shadow-xs flex items-center justify-center bg-[#d8b4be]/20 group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 1000 1000" className="w-full h-full object-cover">
              <circle cx="500" cy="500" r="500" fill="#d8b4be" />
              <g transform="translate(150, 250) scale(0.7)">
                <path d="M150 150 H280 V250 H200 V350 H270 V450 H150 Z" fill="none" />
              </g>
              {/* Monogram Representation using SVG paths styled after the user's uploaded emblem */}
              <text x="500" y="575" fontFamily="serif" fontSize="420" fontWeight="bold" textAnchor="middle" fill="#1e293b">PE</text>
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-serif tracking-wide text-[#4a4a4a] group-hover:text-[#e07a82] transition-colors">
            Paola Electo
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => handleNavClick('quem-somos')}
            className="text-sm font-semibold text-[#4a4a4a] hover:text-[#e07a82] transition-colors"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('cardapio')}
            className="text-sm font-semibold text-[#4a4a4a] hover:text-[#e07a82] transition-colors"
          >
            Eventos
          </button>
          <button 
            onClick={() => handleNavClick('experiencia')}
            className="text-sm font-semibold text-[#4a4a4a] hover:text-[#e07a82] transition-colors"
          >
            Lojas
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 text-[#4a4a4a] hover:text-[#e07a82] transition-colors group py-2"
            aria-label="Carrinho de compras"
          >
            <div className="p-2 rounded-xl bg-[#fef6f6] border border-[#f0d1d3] flex items-center gap-2 group-hover:border-[#e07a82] transition-colors">
              <ShoppingBag className="w-5 h-5 text-[#e07a82]" />
              <span className="text-xs font-bold text-[#4a4a4a] px-1">{totalItems}</span>
            </div>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#4a4a4a] bg-[#fef6f6] border border-[#f0d1d3]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#f0d1d3] px-6 py-6 space-y-4 animate-fadeIn shadow-lg">
          <button 
            onClick={() => handleNavClick('quem-somos')}
            className="block w-full text-left text-base font-semibold text-[#4a4a4a] py-2"
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('cardapio')}
            className="block w-full text-left text-base font-semibold text-[#4a4a4a] py-2"
          >
            Eventos
          </button>
          <button 
            onClick={() => handleNavClick('experiencia')}
            className="block w-full text-left text-base font-semibold text-[#4a4a4a] py-2"
          >
            Lojas
          </button>
        </div>
      )}
    </header>
  );
};
