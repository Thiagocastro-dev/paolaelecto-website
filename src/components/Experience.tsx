import React from 'react';
import { MapPin, Clock, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-[#fef6f6] relative border-t border-[#f0d1d3]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#f0d1d3] shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fef6f6] border border-[#f0d1d3] text-xs font-bold text-[#e07a82]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ambiente 100% Instagramável</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#4a4a4a]">
              Venha viver momentos doces e inesquecíveis conosco
            </h2>
            <p className="text-[#4a4a4a]/80 text-base leading-relaxed">
              Nossa loja foi pensada com todo carinho para ser o cenário perfeito das suas melhores lembranças. Um ambiente aconchegante, cheirinho de bolo saindo do forno, café fresquinho e cantinhos exclusivos para suas fotos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-72">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fef6f6] border border-[#f0d1d3]">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#e07a82] shadow-xs">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#4a4a4a]/60 block font-bold">Localização</span>
                <span className="text-sm font-bold text-[#4a4a4a]">Belém - PA</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#fef6f6] border border-[#f0d1d3]">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#e07a82] shadow-xs">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-[#4a4a4a]/60 block font-bold">Atendimento</span>
                <span className="text-sm font-bold text-[#4a4a4a]">Cafeteria, salão, encomendas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Cantinho do Café",
              desc: "Aconchego e sabor em cada xícara",
              image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80"
            },
            {
              title: "Decoração Exclusiva",
              desc: "Perfeito para fotos e encontros",
              image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=80"
            },
            {
              title: "Vitrine Diária",
              desc: "Sempre fresquinhos para você",
              image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80"
            }
          ].map((item, idx) => (
            <div key={idx} className="group relative rounded-3xl overflow-hidden shadow-md border border-[#f0d1d3] bg-white h-80 flex flex-col justify-end">
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="relative p-6 text-white z-10 space-y-1">
                <h3 className="text-xl font-bold font-serif">{item.title}</h3>
                <p className="text-xs text-white/80 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
