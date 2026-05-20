import React from 'react';
import { FiAward, FiShield, FiUsers } from 'react-icons/fi';
import Container from '../components/ui/Container';
import { useInView } from '../hooks/useInView';

const PILLARS = [
  {
    Icon: FiAward,
    title: 'Excelencia',
    description: 'Nos comprometemos con los más altos estándares de práctica legal, garantizando resultados óptimos en cada caso.',
  },
  {
    Icon: FiShield,
    title: 'Integridad',
    description: 'Actuamos con total transparencia y ética profesional, poniendo siempre los intereses de nuestros clientes primero.',
  },
  {
    Icon: FiUsers,
    title: 'Compromiso',
    description: 'Cada cliente recibe atención personalizada y dedicación plena, construyendo relaciones de confianza duraderas.',
  },
];

export default function SectionNosotros() {
  const { ref: titleRef, inView: titleInView } = useInView();
  const { ref: contentRef, inView: contentInView } = useInView();
  const { ref: pillarsRef, inView: pillarsInView } = useInView();

  return (
    <section id="nosotros" className="section-pad bg-[#F9FAFB]">
      <Container>
        {/* Objeto 0: Título */}
        <div
          ref={titleRef}
          className={`mb-20 transition-all duration-700 ${titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="font-body text-[10px] tracking-[0.22em] text-[#4B7F52] uppercase mb-4 block">
            Quiénes somos
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#1A1A1A] leading-tight">
            Sobre la firma
          </h2>
          <span className="divider mt-5" />
        </div>

        {/* Objeto 1: Founder + imagen */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24 transition-all duration-700 delay-150 ${contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Parte 1: texto */}
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-2xl font-semibold text-[#1A1A1A] mb-4 italic">
              "Más de dos décadas defendiendo lo que más importa."
            </h3>
            <p className="font-body text-[#6B7280] leading-relaxed mb-6 text-[15px]">
              Fundada con la convicción de que cada persona merece representación legal de calidad, nuestra firma ha construido una trayectoria sólida basada en la confianza, el rigor jurídico y el servicio al cliente.
            </p>
            <p className="font-body text-[#6B7280] leading-relaxed mb-8 text-[15px]">
              Desde sus inicios, la firma ha crecido hasta convertirse en un referente del derecho panameño, combinando el conocimiento profundo de la legislación local con una visión estratégica moderna para enfrentar los retos jurídicos más complejos.
            </p>

            {/* Firma del founder (placeholder) */}
            <div className="mt-4">
              <div className="inline-block border-b border-[#1A1A1A]/30 pb-2">
                <span className="font-display text-3xl text-[#1A1A1A] italic font-light">
                  Juan A. García
                </span>
              </div>
              <p className="font-body text-[10px] tracking-[0.18em] text-[#6B7280] uppercase mt-2">
                Fundador & Socio Principal
              </p>
            </div>
          </div>

          {/* Parte 2: imagen del founder */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] bg-[#e8ecea] overflow-hidden">
              {/* Placeholder image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-20 h-20 rounded-full bg-[#4B7F52]/20 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="15" r="8" stroke="#4B7F52" strokeWidth="1.5" />
                    <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#4B7F52" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-body text-[11px] tracking-widest text-[#6B7280] uppercase">Foto del fundador</span>
              </div>
              {/* Decorative olive strip */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4B7F52]" />
            </div>
            {/* Offset border decoration */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#4B7F52]/30 -z-10" />
          </div>
        </div>

        {/* Objeto 2: Pilares / valores */}
        <div
          ref={pillarsRef}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-700 delay-300 ${pillarsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {PILLARS.map(({ Icon, title, description }, i) => (
            <div
              key={title}
              className="flex flex-col items-start gap-4 p-8 border border-[#1A1A1A]/08 hover:border-[#4B7F52]/40 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[#4B7F52]/40 text-[#4B7F52] group-hover:bg-[#4B7F52] group-hover:text-[#F9FAFB] transition-all duration-300">
                <Icon size={18} />
              </div>
              <h4 className="font-display text-xl font-semibold text-[#1A1A1A]">{title}</h4>
              <p className="font-body text-[#6B7280] text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
