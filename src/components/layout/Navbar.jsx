import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container';

const NAV_LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Contáctanos', href: '#contactanos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#F9FAFB]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(26,26,26,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            {/* Logomark */}
            <div className="w-9 h-9 border border-[#4B7F52] flex items-center justify-center transition-all duration-300 group-hover:bg-[#4B7F52]">
              <span className="font-display text-[#4B7F52] text-sm font-semibold transition-colors duration-300 group-hover:text-[#F9FAFB]">
                F
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[#1A1A1A] text-lg font-semibold tracking-wide">
                Firma Legal
              </span>
              <span className="font-body text-[#6B7280] text-[10px] tracking-[0.18em] uppercase">
                Abogados & Asociados
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-body text-[#1A1A1A] text-xs tracking-[0.14em] uppercase hover-underline transition-colors hover:text-[#4B7F52] duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contactanos"
              onClick={(e) => handleScroll(e, '#contactanos')}
              className="font-body text-xs tracking-[0.14em] uppercase bg-[#1A1A1A] text-[#F9FAFB] px-6 py-3 hover:bg-[#4B7F52] transition-colors duration-300"
            >
              Consulta
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-6 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div className={`md:hidden bg-[#F9FAFB] border-t border-[#1A1A1A]/10 transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
        <Container>
          <div className="py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-body text-[#1A1A1A] text-xs tracking-[0.14em] uppercase hover:text-[#4B7F52] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </header>
  );
}
