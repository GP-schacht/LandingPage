import React from 'react';
import { FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import Container from '../ui/Container';

const LINKS = {
  firma: [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Contáctanos', href: '#contactanos' },
  ],
  legal: [
    { label: 'Política de privacidad', href: '#' },
    { label: 'Términos de uso', href: '#' },
    { label: 'Aviso legal', href: '#' },
  ],
};

const SOCIAL = [
  { Icon: FiTwitter, href: 'https://x.com/', label: 'X' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { Icon: FiInstagram, href: 'https://instagram.com/', label: 'Instagram' },
];

export default function Footer() {
  const handleScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F9FAFB]">
      <Container>
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#F9FAFB]/08">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border border-[#4B7F52] flex items-center justify-center">
                <span className="font-display text-[#4B7F52] text-sm font-semibold">F</span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-[#F9FAFB]">Firma Legal</span>
                <p className="font-body text-[9px] tracking-[0.18em] text-[#6B7280] uppercase">Abogados & Asociados</p>
              </div>
            </div>
            <p className="font-body text-[#6B7280] text-sm leading-relaxed max-w-xs">
              Representación legal de excelencia en Panamá. Comprometidos con la justicia, la ética y los resultados que nuestros clientes merecen.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-8">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-[#F9FAFB]/15 flex items-center justify-center text-[#6B7280] hover:border-[#4B7F52] hover:text-[#4B7F52] transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links: Firma */}
          <div>
            <h5 className="font-body text-[10px] tracking-[0.2em] text-[#4B7F52] uppercase mb-5">La Firma</h5>
            <ul className="flex flex-col gap-3">
              {LINKS.firma.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => handleScroll(e, href)}
                    className="font-body text-sm text-[#6B7280] hover:text-[#F9FAFB] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h5 className="font-body text-[10px] tracking-[0.2em] text-[#4B7F52] uppercase mb-5">Legal</h5>
            <ul className="flex flex-col gap-3">
              {LINKS.legal.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-body text-sm text-[#6B7280] hover:text-[#F9FAFB] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-[11px] text-[#6B7280] tracking-wide">
            © {new Date().getFullYear()} Firma Legal — Abogados &amp; Asociados. Todos los derechos reservados.
          </p>
          <p className="font-body text-[11px] text-[#6B7280]">
            Ciudad de Panamá, República de Panamá
          </p>
        </div>
      </Container>
    </footer>
  );
}
