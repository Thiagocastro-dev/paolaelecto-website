import React from 'react';
import { ExternalLink, ShoppingBag, Clock, MapPin, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  const ifoodUrl = "https://www.ifood.com.br/delivery/belem-pa/macarons-electo---doceria-nazare/3695e4a2-6750-4bde-bc2e-24b88b3076c0?utm_medium=share";

  return (
    <section id="experiencia" className="py-24 bg-[#fff9f9] border-t border-[#f0d1d3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef6f6] border border-[#f0d1d3] text-[#e07a82] text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Delivery Exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#4a4a4a]">
            Produtos no iFood
          </h2>
          <p className="text-base text-[#4a4a4a]/80 font-medium">
            Peça seus macarons artesanais, caixas de presente e doces finos direto na comodidade da sua casa através da nossa loja no iFood.
          </p>
        </div>

        {/* Card destaque iFood */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#f0d1d3] shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-72 md:h-auto overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=800&auto=format&fit=crop&q=80" 
              alt="Macarons no iFood"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <ShoppingBag className="w-3.5 h-3.5" />
                Loja Oficial iFood
              </span>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-[#4a4a4a]">
               Confeitaria Paola Electo - Nazaré
              </h3>
              <p className="text-sm text-[#4a4a4a]/80 leading-relaxed">
                Nossos doces fresquinhos entregues com rapidez e todo o cuidado que você merece. Seleção completa de sabores e embalagens para presente.
              </p>
              
              <div className="space-y-2 pt-2 text-xs font-medium text-[#4a4a4a]/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e07a82]" />
                  <span>Atendendo Belém - PA e arredores</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#e07a82]" />
                  <span>Consulte horários de funcionamento no app</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a 
                href={ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#ea1d2c] hover:bg-[#d01321] text-white font-bold flex items-center justify-center gap-3 shadow-lg shadow-red-500/20 hover:scale-[1.02] transition-all text-center"
              >
                <span>Acessar no iFood</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
