import React from 'react';
import Hero from '../components/layout/Hero';
import SectionNosotros from '../sections/SectionNosotros';
import SectionEspecialidades from '../sections/SectionEspecialidades';
import SectionEquipo from '../sections/SectionEquipo';
import SectionContactanos from '../sections/SectionContactanos';

export default function Landing() {
  return (
    <main>
      <Hero />
      <SectionNosotros />
      <SectionEspecialidades />
      <SectionEquipo />
      <SectionContactanos />
    </main>
  );
}
