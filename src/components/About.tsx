import React from 'react';

export const About: React.FC = () => {
  return (
    // 🔴 ALTERAÇÃO AQUI: bg-[#fef6f6] foi alterado para bg-transparent
    <section id="quem-somos" className="relative min-h-[90vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Hero Banner with background image and centered glass card matching screenshot */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#f0d1d3] h-[580px] sm:h-[620px] flex items-center justify-center">
          <img 
            src="\src\img\IMG_9880.jpg" 
            alt="Mãe confeiteira Paola Electo" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Centered White Translucent Card */}
          <div className="relative z-10 max-w-2xl mx-6 sm:mx-auto bg-black/40 backdrop-blur-sm p-8 sm:p-12 rounded-3xl shadow-2xl border border-white/20 text-center space-y-6 text-white">
            
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#e07a82] italic">
              Quem Somos
            </h2>

            <div className="space-y-4 text-[#c2bfbf] text-sm sm:text-base font-serif italic leading-relaxed">
              <p>
                Bem vindo(a) a Confeitaria Paola Electo!
              </p>
              <p>
                Texto aqui
              </p>
              <p>
                Texto aqui
              </p>
              <p className="pt-2 font-semibold">
                Um beijo grande da Paola!
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};