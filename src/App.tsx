import React, { useState } from 'react';

// 1. Importação dos componentes (ajuste os caminhos se necessário)
import {Navbar} from './components/Navbar';
import {Hero} from './components/Hero';
import {About} from './components/About';
import {Experience} from './components/Experience';
import {Footer} from './components/Footer';
import {WhatsAppButton} from './components/WhatsAppButton';
import {CartDrawer} from './components/CartDrawer'; // Caso use o carrinho globalmente
import {Menu} from './components/Menu'; // Caso use o menu globalmente

// 2. Importação das imagens de fundo
import bolo from './img/Gráficos de Apoio-56.png';
import torre from './img/Gráficos de Apoio-57.png';
import caixa from './img/Gráficos de Apoio-58.png';
import macarons from './img/Gráficos de Apoio-59.png';
import { CartItem } from './types';
import { Product } from './data/products';

export default function App() {
   const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.product.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('cardapio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };
  
  
  
  
  
  
  return (
    // Container principal: define a cor de fundo (um rosa bem clarinho, ajuste o HEX se precisar)
    // overflow-hidden previne que as imagens gerem rolagem horizontal indesejada
    <div className="relative min-h-screen bg-[#FFF5F5] overflow-hidden font-sans">
      
      {/* ==========================================
          LAYER DE FUNDO (BACKGROUND COM AS ARTES)
          ========================================== */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-20">
        
        {/* Topo Esquerda */}
        <img 
          src={macarons} 
          alt="" 
          className="absolute top-12 left-4 md:left-12 w-28 md:w-40 lg:w-48 object-contain" 
        />
        
        {/* Topo Direita */}
        <img 
          src={caixa} 
          alt="" 
          className="absolute top-8 right-4 md:right-12 w-32 md:w-48 lg:w-56 object-contain" 
        />
        
        {/* Meio Esquerda */}
        <img 
          src={torre} 
          alt="" 
          className="absolute top-1/2 -translate-y-1/2 -left-6 md:left-8 w-24 md:w-36 lg:w-48 object-contain" 
        />

        {/* Base Esquerda */}
        <img 
          src={bolo} 
          alt="" 
          className="absolute bottom-16 left-4 md:left-16 w-32 md:w-48 lg:w-56 object-contain" 
        />

        {/* Base Centro */}
        <img 
          src={macarons} 
          alt="" 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 md:w-32 lg:w-40 object-contain" 
        />

        {/* Base Direita (afastado do botão do WhatsApp) */}
        <img 
          src={caixa} 
          alt="" 
          className="absolute bottom-24 right-16 md:right-28 w-28 md:w-40 lg:w-52 object-contain" 
        />
        
      </div>

      {/* ==========================================
          CONTEÚDO DO SITE (ACIMA DO FUNDO)
          ========================================== */}
      {/* O z-10 garante que o site fique clicável e na frente das imagens */}
      <main className="relative z-10 bg-transparent flex flex-col min-h-screen">
        <Navbar 
        cart={cart} 
        setIsCartOpen={setIsCartOpen} 
        setActiveSection={setActiveSection} 
        />

         <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
        
       <main>
        <Hero onExplore={scrollToMenu} />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <Experience />
      </main>

      <Footer />
        <WhatsAppButton />
      </main>

    </div>
  );
}