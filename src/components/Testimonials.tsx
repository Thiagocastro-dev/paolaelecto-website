import React from 'react';
import { Star, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="clientes" className="py-24 bg-[#fef6f6] relative border-t border-[#f0d1d3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#f0d1d3] text-xs font-bold text-[#e07a82] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nossos Clientes</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#e07a82] italic">
            O que dizem sobre nós
          </h2>
          <p className="text-[#4a4a4a] text-lg font-medium">
            Na Delalê temos a honra de ter um grupo fiel e diversificado de clientes que apreciam a qualidade e variedade dos nossos produtos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Gabriel Castro",
              text: "Os doces são maravilhosos e o ambiente é 100% instagramável. Tudo tão perfeito!",
              rating: 5
            },
            {
              name: "Jacqueline Fontes",
              text: "Sensacional esse lugar! Além de uma decoração aconchegante, é impossível não apreciar tanta gostosura, amo a apresentação de cada doce, tortas e bolos.",
              rating: 5
            },
            {
              name: "Daniela",
              text: "A torta de morango é a melhor da cidade! Atendimento impecável das três irmãs.",
              rating: 5
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-[#f0d1d3] shadow-md flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#e07a82] text-[#e07a82]" />
                  ))}
                </div>
                <p className="text-sm font-serif italic text-[#4a4a4a] leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#f0d1d3]/40">
                <div className="w-10 h-10 rounded-full bg-[#fef6f6] border border-[#f0d1d3] flex items-center justify-center font-bold text-[#e07a82] text-sm">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#4a4a4a]">{item.name}</h4>
                  <span className="text-xs text-[#4a4a4a]/60 font-semibold">Cliente Verificada</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
