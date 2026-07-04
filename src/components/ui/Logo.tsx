import React from 'react';

interface LogoProps {
  variant?: 'desktop' | 'mobile' | 'footer' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'desktop' }) => {
  if (variant === 'icon') {
    // Red "7" simplified mark for compact displays or favicons
    return (
      <span className="font-sans font-black text-2xl text-red-primary select-none leading-none">
        7
      </span>
    );
  }

  // Sizing definitions:
  // - Desktop: 170–190px (using 180px / text-[28px])
  // - Mobile: 120–140px (using 130px / text-[22px])
  // - Footer: slightly smaller (using 150px / text-[24px])
  const sizeClasses = {
    desktop: 'w-[180px] text-[28px] tracking-tighter',
    mobile: 'w-[130px] text-[22px] tracking-tighter',
    footer: 'w-[150px] text-[24px] tracking-tighter',
  };

  return (
    <div className={`flex items-center justify-start font-black text-white uppercase select-none leading-none ${sizeClasses[variant]}`}>
      <span>
        REELTO<span className="text-red-primary">7</span>
      </span>
    </div>
  );
};

export default Logo;
