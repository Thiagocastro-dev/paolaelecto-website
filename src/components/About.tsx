import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="quem-somos" className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[#fef6f6]">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Hero Banner with background image and centered glass card matching screenshot */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#f0d1d3] h-[550px] sm:h-[600px] flex items-center justify-center">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&auto=format&fit=crop&q=80" 
            alt="Mãe confeiteira Paola Electo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Centered White Translucent Card */}
          <div className="relative z-10 max-w-2xl mx-6 sm:mx-auto bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl border border-white/50 text-center space-y-6">
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#e07a82] italic">
              Quem Somos
            </h2>

            <div className="space-y-4 text-[#4a4a4a] text-sm sm:text-base font-serif italic leading-relaxed">
              <p>
                Bem vindo(a) a Doceria Paola Electo!
              </p>
              <p>
                Somos 3 irmãs que decidimos abrir uma doceria para compartilhar tudo o que aprendemos sobre doces com a nossa mãe s2
              </p>
              <p>
                Fazemos nossos produtos com muito amor e carinho para cada um de vocês!
              </p>
              <p className="pt-2 font-semibold">
                Um beijo grande da Débora(De), Larissa(La) e Letícia(Lê)!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
