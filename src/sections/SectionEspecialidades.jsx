import React from 'react';
import { FiUsers, FiHome, FiDollarSign, FiAlertTriangle, FiBriefcase } from 'react-icons/fi';
import Container from '../components/ui/Container';
import { useInView } from '../hooks/useInView';

const ESPECIALIDADES = [
  {
    Icon: FiUsers,
    title: 'Derecho de Familia',
    description: 'Divorcios, custodia, pensiones alimenticias, sucesiones y adopciones. Acompañamiento integral en momentos difíciles.',
    tag: 'Familia',
  },
  {
    Icon: FiHome,
    title: 'Derecho Inmobiliario',
    description: 'Compraventa de bienes raíces, contratos de arrendamiento, titulación de propiedades y litigios inmobiliarios.',
    tag: 'Inmobiliaria',
  },
  {
    Icon: FiDollarSign,
    title: 'Derecho Bancario',
    description: 'Asesoría en transacciones financieras, cumplimiento regulatorio, contratos bancarios y resolución de disputas.',
    tag: 'Bancario',
  },
  {
    Icon: FiAlertTriangle,
    title: 'Derecho Penal',
    description: 'Defensa penal robusta en todas las instancias, desde la investigación hasta la apelación, protegiendo sus derechos.',
    tag: 'Penal',
  },
  {
    Icon: FiBriefcase,
    title: 'Derecho Corporativo',
    description: 'Constitución de empresas, contratos comerciales, fusiones, adquisiciones y asesoría empresarial estratégica.',
    tag: 'Corporativo',
  },
];

export default function SectionEspecialidades() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="especialidades" className="section-pad bg-[#1A1A1A]">
      <Container>
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="font-body text-[10px] tracking-[0.22em] text-[#4B7F52] uppercase mb-4 block">
            Áreas de práctica
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#F9FAFB] leading-tight">
            Especialidades
          </h2>
          <span className="divider mt-5" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F9FAFB]/08">
          {ESPECIALIDADES.map(({ Icon, title, description, tag }, i) => (
            <div
              key={tag}
              className={`bg-[#1A1A1A] p-10 flex flex-col gap-5 group hover:bg-[#4B7F52]/10 transition-all duration-400 border border-[#F9FAFB]/06 hover:border-[#4B7F52]/40 cursor-default transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-[#F9FAFB]/20 text-[#4B7F52] group-hover:bg-[#4B7F52] group-hover:border-[#4B7F52] group-hover:text-[#F9FAFB] transition-all duration-300">
                <Icon size={20} />
              </div>
              {/* Tag */}
              <span className="font-body text-[9px] tracking-[0.2em] text-[#4B7F52] uppercase">
                {tag}
              </span>
              {/* Title */}
              <h3 className="font-display text-xl text-[#F9FAFB] font-semibold leading-snug">
                {title}
              </h3>
              {/* Description */}
              <p className="font-body text-[#6B7280] text-sm leading-relaxed flex-1">
                {description}
              </p>
              {/* Arrow */}
              <div className="flex items-center gap-2 text-[#4B7F52] group-hover:gap-4 transition-all duration-300">
                <span className="font-body text-[10px] tracking-[0.14em] uppercase">Ver más</span>
                <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
                  <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}

          {/* Empty fill card to complete row */}
          <div className="bg-[#1A1A1A] p-10 border border-[#F9FAFB]/06 hidden lg:flex items-end">
            <p className="font-display text-[#F9FAFB]/20 text-4xl font-light italic leading-none">
              ¿Tiene otra consulta?
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
