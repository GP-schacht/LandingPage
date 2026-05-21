import React from 'react';
import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Container from '../ui/Container';
import Button from '../ui/Button';

const SOCIAL_LINKS = [
  { Icon: FiTwitter, href: 'https://x.com/', label: 'X / Twitter' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { Icon: FiInstagram, href: 'https://instagram.com/', label: 'Instagram' },
];

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#F9FAFA de] overflow-hidden pt-20">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/3 w-px h-full bg-[#1A1A1A]/[0.04]" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-[#1A1A1A]/[0.04]" />
        <div className="absolute left-0 top-1/2 w-full h-px bg-[#1A1A1A]/[0.04]" />
      </div>

      {/* Olive accent — top right */}
      <div className="absolute top-24 right-0 w-1 h-40 bg-[#4B7F52] opacity-60" aria-hidden />

      <Container>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 py-20">
          {/* Main content */}
          <div className="flex-1 max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8 animate-fadeIn" style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <span className="block w-8 h-px bg-[#4B7F52]" />
              <span className="font-body text-[10px] tracking-[0.22em] text-[#6B7280] uppercase">
                Panamá · Derecho & Asesoría
              </span>
            </div>

            {/* Slogan */}
            <h1
              className="font-display text-[clamp(3rem,7vw,6rem)] font-light text-[#1A1A1A] leading-[1.05] mb-8 animate-fadeInUp"
              style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Justicia con
              <br />
              <em className="font-light text-[#4B7F52] not-italic">precisión</em>{' '}
              y<br />
              <span className="font-semibold">propósito.</span>
            </h1>

            {/* Sub */}
            <p
              className="font-body text-[#6B7280] text-base leading-relaxed max-w-md mb-12 animate-fadeInUp"
              style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}
            >
              Representación legal experta con enfoque estratégico. Defendemos sus intereses con integridad, experiencia y dedicación absoluta.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 animate-fadeInUp"
              style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
            >
              <button
                onClick={() => handleScroll('#contactanos')}
                className="font-body text-xs tracking-[0.18em] uppercase bg-[#4B7F52] text-[#F9FAFB] px-10 py-4 hover:bg-[#3a6340] transition-colors duration-300 w-full sm:w-auto text-center"
              >
                Solicitar Consulta
              </button>
              <button
                onClick={() => handleScroll('#nosotros')}
                className="font-body text-xs tracking-[0.18em] uppercase border border-[#1A1A1A] text-[#1A1A1A] px-10 py-4 hover:bg-[#1A1A1A] hover:text-[#F9FAFB] transition-all duration-300 w-full sm:w-auto text-center"
              >
                Conocer la firma
              </button>
            </div>
          </div>

          {/* Right: social + decorative */}
          <div
            className="flex md:flex-col items-center gap-6 animate-fadeIn"
            style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
          >
            <span className="hidden md:block w-px h-16 bg-[#1A1A1A]/20" />
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center border border-[#1A1A1A]/20 text-[#6B7280] hover:border-[#4B7F52] hover:text-[#4B7F52] transition-all duration-300 hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
            <span className="hidden md:block w-px h-16 bg-[#1A1A1A]/20" />
          </div>
        </div>
      </Container>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fadeIn" style={{ animationDelay: '1s', opacity: 0, animationFillMode: 'forwards' }}>
        <span className="font-body text-[9px] tracking-[0.2em] text-[#6B7280] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#6B7280] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
