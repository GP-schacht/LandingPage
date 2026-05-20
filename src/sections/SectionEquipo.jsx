import React from 'react';
import { FiLinkedin } from 'react-icons/fi';
import Container from '../components/ui/Container';
import { useInView } from '../hooks/useInView';

const EQUIPO = [
  {
    nombre: 'Juan A. García',
    cargo: 'Fundador & Socio Principal',
    especialidad: 'Derecho Corporativo · Bancario',
  },
  {
    nombre: 'María L. Rodríguez',
    cargo: 'Socia',
    especialidad: 'Derecho de Familia · Civil',
  },
  {
    nombre: 'Carlos E. Mora',
    cargo: 'Abogado Senior',
    especialidad: 'Derecho Penal · Litigios',
  },
  {
    nombre: 'Sofía M. Torres',
    cargo: 'Abogada Asociada',
    especialidad: 'Derecho Inmobiliario',
  },
];

function MemberCard({ nombre, cargo, especialidad, index, inView }) {
  return (
    <div
      className={`group relative flex flex-col transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${150 + index * 100}ms` }}
    >
      {/* Photo placeholder */}
      <div className="relative w-full aspect-[3/4] bg-[#e8ecea] overflow-hidden mb-5">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-16 h-16 rounded-full bg-[#4B7F52]/20 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="15" r="8" stroke="#4B7F52" strokeWidth="1.5" />
              <path d="M4 38c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#4B7F52" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-body text-[10px] tracking-widest text-[#6B7280] uppercase">Foto</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#4B7F52]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/60 flex items-center justify-center text-white hover:bg-white hover:text-[#4B7F52] transition-colors duration-200">
            <FiLinkedin size={16} />
          </a>
        </div>
        {/* Number */}
        <span className="absolute top-3 left-3 font-body text-[10px] tracking-[0.14em] text-[#6B7280]">
          0{index + 1}
        </span>
      </div>

      {/* Info */}
      <div>
        <h3 className="font-display text-xl font-semibold text-[#1A1A1A] mb-1">{nombre}</h3>
        <p className="font-body text-[10px] tracking-[0.18em] text-[#4B7F52] uppercase mb-2">{cargo}</p>
        <p className="font-body text-[#6B7280] text-xs">{especialidad}</p>
      </div>
    </div>
  );
}

export default function SectionEquipo() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="equipo" className="section-pad bg-[#F9FAFB]">
      <Container>
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="font-body text-[10px] tracking-[0.22em] text-[#4B7F52] uppercase mb-4 block">
            Nuestro equipo
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#1A1A1A] leading-tight">
            Los profesionales
          </h2>
          <span className="divider mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {EQUIPO.map((member, i) => (
            <MemberCard key={member.nombre} {...member} index={i} inView={inView} />
          ))}
        </div>
      </Container>
    </section>
  );
}
