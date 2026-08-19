import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ExternalLink } from 'lucide-react';
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

  const ifoodUrl = "https://www.ifood.com.br/delivery/belem-pa/macarons-electo---doceria-nazare/3695e4a2-6750-4bde-bc2e-24b88b3076c0?utm_medium=share";

  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#f0d1d3] shadow-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick('quem-somos')} 
          className="cursor-pointer flex items-center gap-3 group"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border border-[#f0d1d3] shadow-xs flex items-center justify-center bg-white group-hover:scale-105 transition-transform">
            <img 
            /* LOGO */
              src="\src\img\logo6.png" 
              alt="Paola Electo Logo" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h1 className="text-lg sm:text-lg font-bold font-serif tracking-wide text-[#4a4a4a] group-hover:text-[#e07a82] transition-colors">
           Confeitaria <br className="hidden sm:block" />  Paola Electo
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
          <a 
            href={ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#4a4a4a] hover:text-[#e07a82] transition-colors flex items-center gap-1.5"
          >
            <span>Produtos no iFood</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
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
          <a 
            href={ifoodUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full text-left text-base font-semibold text-[#4a4a4a] py-2"
          >
            <span>Produtos no iFood</span>
            <ExternalLink className="w-4 h-4 text-[#e07a82]" />
          </a>
        </div>
      )}
    </header>
  );
};
