import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Volver arriba"
      className={`fixed bottom-8 right-8 z-50 w-10 h-10 bg-[#4B7F52] text-[#F9FAFB] flex items-center justify-center hover:bg-[#3a6340] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <FiArrowUp size={16} />
    </button>
  );
}
