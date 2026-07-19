function WaveSectionIcon({
  className,
  fill = "#f7f7f7",
  gradientFrom,
  gradientTo,
}: {
  className?: string;
  fill?: string;
  /* When both gradient colors are given, the wave is filled with a vertical
     gradient (from = at the wavy edge, to = at the bottom) instead of `fill`. */
  gradientFrom?: string;
  gradientTo?: string;
}) {
  const useGradient = Boolean(gradientFrom && gradientTo);

  return (
    <svg
      className={className}
      viewBox="0 0 1900 164"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {useGradient && (
        <defs>
          <linearGradient
            id="wave_section_vertical_grad"
            x1="950"
            y1="0"
            x2="950"
            y2="164"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientFrom} />
            <stop offset="1" stopColor={gradientTo} />
          </linearGradient>
        </defs>
      )}
      <path
        d="M1902 86.3558C1742.75 88.2347 1399.71 92.4528 1327 73.1277C1236.11 48.9713 1190.48 -16.9183 1157.5 5.62769C1124.52 28.1737 985.863 137.499 843.5 95.6277C701.137 53.7566 627.322 -37.6529 530 21.1277C432.678 79.9083 281.313 197.065 -1 114.128L-1 164L1902 164Z"
        fill={useGradient ? "url(#wave_section_vertical_grad)" : fill}
      />
    </svg>
  );
}

export default WaveSectionIcon;
