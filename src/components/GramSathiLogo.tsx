import React from 'react';

export const GramSathiMasterLogo: React.FC<{
  className?: string;
  heightClass?: string;
  variant?: 'light' | 'dark' | 'on-white';
}> = ({
  className = '',
  heightClass = 'h-10',
  variant = 'light',
}) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div
        className={`inline-flex items-center rounded-xl overflow-hidden transition-all ${
          variant === 'light'
            ? 'bg-[#FAF9F5] p-1 px-2.5 shadow-sm border border-amber-300/40'
            : variant === 'on-white'
            ? 'p-0.5'
            : 'mix-blend-multiply'
        }`}
      >
        <img
          src="/gramsathi-master-logo.png"
          alt="GramSathi (ग्रामसाथी)"
          className={`${heightClass} w-auto object-contain`}
          loading="eager"
        />
      </div>
    </div>
  );
};

export const PashuPoshanBadge: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}> = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
    '2xl': 'w-36 h-36',
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden flex-shrink-0 shadow-xl ring-4 ring-amber-400/90 border-2 border-emerald-900 bg-[#FAF9F5] ${sizeMap[size]} ${className}`}
    >
      <img
        src="/gramsathi-pashu-poshan-badge.png"
        alt="GramSathi Pashu Poshan (ग्रामसाथी - पशु पोषण)"
        className="w-full h-full object-cover scale-105"
        loading="eager"
      />
    </div>
  );
};
