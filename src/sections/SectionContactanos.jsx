import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import Container from '../components/ui/Container';
import { useInView } from '../hooks/useInView';

const CONTACTO_ITEMS = [
  {
    Icon: FiMapPin,
    label: 'Dirección',
    lines: [
      'Edificio Plaza Marbella, Piso 12',
      'Calle 53 Este, Marbella',
      'Ciudad de Panamá, Panamá',
    ],
    action: null,
  },
  {
    Icon: FiMail,
    label: 'Correo',
    lines: [
      'info@firmalegal.com.pa',
      'consultas@firmalegal.com.pa',
    ],
    action: 'mailto:info@firmalegal.com.pa',
    actionLabel: 'Enviar correo',
  },
  {
    Icon: FiPhone,
    label: 'Teléfonos',
    lines: [
      '+507 300-0000',
      '+507 300-0001',
      'Lun–Vie  8:00am – 6:00pm',
    ],
    action: 'tel:+5073000000',
    actionLabel: 'Llamar ahora',
  },
];

export default function SectionContactanos() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contactanos" className="section-pad bg-[#F9FAFB] border-t border-[#1A1A1A]/08">
      <Container>
        {/* Header */}
        <div
          ref={ref}
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="font-body text-[10px] tracking-[0.22em] text-[#4B7F52] uppercase mb-4 block">
            Hablemos
          </span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-[#1A1A1A] leading-tight">
            Contáctanos
          </h2>
          <span className="divider mt-5" />
        </div>

        {/* Contact boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CONTACTO_ITEMS.map(({ Icon, label, lines, action, actionLabel }, i) => (
            <div
              key={label}
              className={`flex flex-col p-10 border border-[#1A1A1A]/10 hover:border-[#4B7F52]/50 group transition-all duration-400 hover:-translate-y-1 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + i * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center border border-[#4B7F52]/30 text-[#4B7F52] mb-6 group-hover:bg-[#4B7F52] group-hover:text-[#F9FAFB] transition-all duration-300">
                <Icon size={20} />
              </div>

              {/* Label */}
              <span className="font-body text-[9px] tracking-[0.2em] text-[#4B7F52] uppercase mb-3">
                {label}
              </span>

              {/* Lines */}
              <div className="flex flex-col gap-1 flex-1">
                {lines.map((line, j) => (
                  <p key={j} className={`font-body leading-relaxed ${j === lines.length - 1 && label === 'Teléfonos' ? 'text-[#6B7280] text-xs mt-2 pt-2 border-t border-[#1A1A1A]/08' : 'text-[#1A1A1A] text-sm'}`}>
                    {line}
                  </p>
                ))}
              </div>

              {/* Action */}
              {action && (
                <a
                  href={action}
                  className="mt-6 inline-flex items-center gap-2 font-body text-[10px] tracking-[0.14em] uppercase text-[#4B7F52] hover:text-[#3a6340] transition-colors group/link"
                >
                  {actionLabel}
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="group-hover/link:translate-x-1 transition-transform duration-200">
                    <path d="M0 4h14M11 1l3 3-3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className={`mt-10 p-10 bg-[#1A1A1A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h3 className="font-display text-2xl text-[#F9FAFB] font-light mb-1">
              ¿Listo para una consulta?
            </h3>
            <p className="font-body text-[#6B7280] text-sm">Primera consulta sin compromiso.</p>
          </div>
          <a
            href="mailto:consultas@firmalegal.com.pa"
            className="font-body text-xs tracking-[0.18em] uppercase bg-[#4B7F52] text-[#F9FAFB] px-10 py-4 hover:bg-[#5e9e67] transition-colors duration-300 whitespace-nowrap"
          >
            Agendar ahora
          </a>
        </div>
      </Container>
    </section>
  );
}
