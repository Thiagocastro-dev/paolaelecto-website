import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const ifoodUrl = "https://www.ifood.com.br/delivery/belem-pa/macarons-electo---doceria-nazare/3695e4a2-6750-4bde-bc2e-24b88b3076c0?utm_medium=share";

  return (
    <footer className="bg-white border-t border-[#f0d1d3] pt-16 pb-12 text-[#4a4a4a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Brand Banner */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 pb-12 border-b border-[#f0d1d3]">
          <div>
            <h2 className="text-4xl font-bold font-serif tracking-wide text-[#e07a82]">
              Paola Electo
            </h2>
            <p className="text-sm font-semibold tracking-widest uppercase text-[#4a4a4a]/70 mt-1">Doceria & Cafeteria</p>
          </div>
        </div>

        {/* Links & Contacts grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <ul className="space-y-2 font-semibold">
              <li><a href="#hero" className="hover:text-[#e07a82] transition-colors">Home</a></li>
              <li><a href="#quem-somos" className="hover:text-[#e07a82] transition-colors">Quem Somos</a></li>
              <li><a href="#politicas" className="hover:text-[#e07a82] transition-colors">Políticas de Troca</a></li>
              <li><span className="text-[#4a4a4a]">Nos siga</span></li>
            </ul>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-[#fef6f6] border border-[#f0d1d3] text-[#e07a82] flex items-center justify-center shadow-xs hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <ul className="space-y-2 font-semibold">
              <li><a href="#cardapio" className="hover:text-[#e07a82] transition-colors">Encomendas</a></li>
              <li>
                <a href={ifoodUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#e07a82] transition-colors inline-flex items-center gap-1">
                  <span>Produtos no iFood</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
              <li><a href="#cardapio" className="hover:text-[#e07a82] transition-colors">Cardápio</a></li>
            </ul>
          </div>

          {/* Col 3: Atendimento */}
          <div className="space-y-3 font-medium">
            <h3 className="font-bold font-serif text-lg text-[#e07a82]">Atendimento</h3>
            <p className="text-sm">
              <strong className="block text-[#4a4a4a]">Unidade Duque</strong>
              (91) 99840-0024
            </p>
            <p className="text-sm">
              <strong className="block text-[#4a4a4a]">Unidade Grão</strong>
              (91) 98401-9288
            </p>
            <p className="text-sm">
              <strong className="block text-[#4a4a4a]">Unidade Metrópole</strong>
              (91) 98413-9912
            </p>
            <p className="text-sm">
              <strong className="block text-[#4a4a4a]">Unidade Patio</strong>
              (91) 98409-5909
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#f0d1d3] flex flex-col sm:flex-row items-center justify-between text-xs font-semibold text-[#4a4a4a]/80 gap-4">
          <p>Paola Electo 2026. Todos os direitos reservados - CNPJ: 14.517.313/0001-26</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido com carinho</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
