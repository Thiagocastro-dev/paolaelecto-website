import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  // Número de WhatsApp principal da Doceria Paola Electo (Unidade Duque ou geral)
  const whatsappNumber = "5591984340097";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de tirar dúvidas ou fazer uma encomenda.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Tooltip ao passar o mouse */}
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-[#171717] text-xs font-semibold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
          Fale conosco no WhatsApp
        </span>
        
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        
        {/* Indicador de online */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full"></span>
      </a>
    </aside>
  );
};