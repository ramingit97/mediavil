function HeroBottomWaveIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1900 164"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* wave fill */}
      <path
        d="M1902 86.3558C1742.75 88.2347 1399.71 92.4528 1327 73.1277C1236.11 48.9713 1190.48 -16.9183 1157.5 5.62769C1124.52 28.1737 985.863 137.499 843.5 95.6277C701.137 53.7566 627.322 -37.6529 530 21.1277C432.678 79.9083 281.313 197.065 -1 114.128L-1 164L1902 164Z"
        fill="#ffffff"
      />
      {/* dashed wave line — same curve */}
      <path
        d="M1902 86.3558C1742.75 88.2347 1399.71 92.4528 1327 73.1277C1236.11 48.9713 1190.48 -16.9183 1157.5 5.62769C1124.52 28.1737 985.863 137.499 843.5 95.6277C701.137 53.7566 627.322 -37.6529 530 21.1277C432.678 79.9083 281.313 197.065 -1 114.128"
        stroke="url(#hero_wave_gradient)"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      {/* dots at wave peaks/valleys */}
      <circle cx="1167" cy="6"   r="7.5" fill="#F9F9F9" stroke="#BFBFBF" strokeWidth="3" />
      <circle cx="852"  cy="96"  r="7.5" fill="#F9F9F9" stroke="#BFBFBF" strokeWidth="3" />
      <circle cx="539"  cy="21"  r="7.5" fill="#F9F9F9" stroke="#BFBFBF" strokeWidth="3" />
      <circle cx="220"  cy="137" r="7.5" fill="#F9F9F9" stroke="#BFBFBF" strokeWidth="3" />
      <defs>
        <linearGradient
          id="hero_wave_gradient"
          x1="1902"
          y1="82"
          x2="-1"
          y2="82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5F5F5" />
          <stop offset="0.461538" stopColor="#B9B9B9" />
          <stop offset="0.764423" stopColor="#B9B9B9" />
          <stop offset="1" stopColor="#F5F5F5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default HeroBottomWaveIcon;
