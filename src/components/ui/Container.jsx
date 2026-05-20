import React from 'react';

export default function Container({ children, className = '', narrow = false }) {
  return (
    <div className={`mx-auto w-full px-6 md:px-10 ${narrow ? 'max-w-4xl' : 'max-w-7xl'} ${className}`}>
      {children}
    </div>
  );
}
