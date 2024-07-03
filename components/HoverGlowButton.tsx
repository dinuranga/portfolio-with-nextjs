import React from 'react';

interface HoverGlowButtonProps {
  text:string,
  className: string,
  href: string
}

const HoverGlowButton: React.FC<HoverGlowButtonProps> = ({ text, className, href}) => {
  return (
    <a href={href}>
      <div className="relative inline-flex group">
        <div className="absolute transition-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#03ea7a]  to-[#44BCFF] rounded-xl blur-xl group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <button
          type="button"
          className={`relative inline-flex items-center justify-center transition-all duration-300 rounded-lg ${className}`}
        >
          {text}
        </button>
      </div>
    </a>
  );
};

export default HoverGlowButton;
