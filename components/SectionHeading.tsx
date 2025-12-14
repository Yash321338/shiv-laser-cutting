import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  light = false 
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-3 ${light ? 'text-white' : 'text-industrial-black'}`}>
        {title}
      </h2>
      {subtitle && (
        <div className={`w-20 h-1 bg-industrial-accent mb-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      )}
      {subtitle && (
        <p className={`text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;