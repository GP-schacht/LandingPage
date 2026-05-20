import React from 'react';

export default function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-body font-400 tracking-widest text-xs uppercase transition-all duration-300 focus:outline-none';

  const variants = {
    primary: 'bg-[#1A1A1A] text-[#F9FAFB] px-8 py-4 hover:bg-[#4B7F52] letter-spacing-wider',
    outline: 'border border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 hover:bg-[#1A1A1A] hover:text-[#F9FAFB]',
    olive: 'bg-[#4B7F52] text-[#F9FAFB] px-8 py-4 hover:bg-[#3a6340]',
    ghost: 'text-[#4B7F52] px-0 py-2 hover:text-[#3a6340] underline-offset-4 hover:underline',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
