import React, { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import { ShoppingBag, Search } from 'lucide-react';

interface MenuProps {
  onAddToCart: (product: Product) => void;
}

export const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cardapio" className="py-24 bg-[#fef6f6] relative border-t border-[#f0d1d3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#e07a82] italic">
            Cardápio
          </h2>
          <p className="text-[#4a4a4a] text-lg font-medium">
            Escolha sua torta, bolo ou salgado favorito e peça direto pelo WhatsApp ou adicione à sacola.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-2xl border border-[#f0d1d3] shadow-xs">
            {[
              { id: 'todos', label: 'Todos' },
              { id: 'bolos', label: 'Bolos & Tortas Doces' },
              { id: 'tortas', label: 'Tortas Especiais' },
              { id: 'salgados', label: 'Salgados & Empadões' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#e07a82] text-white shadow-md'
                    : 'text-[#4a4a4a] hover:bg-[#fef6f6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a]/60" />
            <input
              type="text"
              placeholder="Buscar no cardápio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#f0d1d3] rounded-2xl pl-12 pr-4 py-3 text-[#4a4a4a] placeholder-[#4a4a4a]/50 focus:outline-none focus:border-[#e07a82] transition-colors text-sm font-medium shadow-xs"
            />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#f0d1d3]">
            <p className="text-lg text-[#4a4a4a] font-medium">Nenhum produto encontrado com essa busca.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl border border-[#f0d1d3] overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {product.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#e07a82] text-white text-xs font-bold shadow-md">
                      {product.badge}
                    </span>
                  )}

                  {product.size && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#4a4a4a] text-xs font-bold border border-[#f0d1d3]">
                      {product.size}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-[#4a4a4a] mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#4a4a4a]/80 line-clamp-3 leading-relaxed font-medium">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#f0d1d3]/40">
                    <div>
                      <span className="text-xs text-[#4a4a4a]/60 block font-semibold">Valor</span>
                      <span className="text-xl font-bold text-[#e07a82]">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-5 py-3 rounded-2xl bg-[#e07a82] hover:bg-[#d06971] text-white font-bold text-sm transition-all flex items-center gap-2 shadow-md active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4 text-white" />
                      <span>Adicionar</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
