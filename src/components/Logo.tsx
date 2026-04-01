import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ className, light = false, color }) => {
  const blue = "#005596";
  const red = "#ed1c24";
  
  const towerColor = color || (light ? "#ffffff" : blue);
  const textColor = color || (light ? "#ffffff" : red);
  const barColor = color || (light ? "#ffffff" : blue);

  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left Tower */}
      <g>
        {/* Solid Face */}
        <path d="M45 130V65L75 25V130H45Z" fill={towerColor} />
        {/* Lined Face */}
        <path d="M75 130V25L105 65V130H75Z" fill="none" stroke={towerColor} strokeWidth="0.5" />
        <line x1="80" y1="32" x2="80" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="85" y1="39" x2="85" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="90" y1="46" x2="90" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="95" y1="53" x2="95" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="100" y1="60" x2="100" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="105" y1="67" x2="105" y2="130" stroke={towerColor} strokeWidth="1.2" />
      </g>

      {/* Right Tower */}
      <g transform="translate(60, 0)">
        {/* Solid Face */}
        <path d="M45 130V65L75 25V130H45Z" fill={towerColor} />
        {/* Lined Face */}
        <path d="M75 130V25L105 65V130H75Z" fill="none" stroke={towerColor} strokeWidth="0.5" />
        <line x1="80" y1="32" x2="80" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="85" y1="39" x2="85" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="90" y1="46" x2="90" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="95" y1="53" x2="95" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="100" y1="60" x2="100" y2="130" stroke={towerColor} strokeWidth="1.2" />
        <line x1="105" y1="67" x2="105" y2="130" stroke={towerColor} strokeWidth="1.2" />
      </g>

      {/* Text */}
      <text 
        x="105" 
        y="160" 
        textAnchor="middle" 
        fill={textColor} 
        fontSize="32" 
        fontWeight="900" 
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-1"
      >
        GP.INVEST
      </text>

      {/* Bottom Bar */}
      <rect x="45" y="172" width="125" height="15" fill={barColor} />
    </svg>
  );
};

export default Logo;
