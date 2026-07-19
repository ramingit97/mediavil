function SunIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="1.5" x2="12" y2="4.5" />
        <line x1="12" y1="19.5" x2="12" y2="22.5" />
        <line x1="1.5" y1="12" x2="4.5" y2="12" />
        <line x1="19.5" y1="12" x2="22.5" y2="12" />
        <line x1="4.6" y1="4.6" x2="6.7" y2="6.7" />
        <line x1="17.3" y1="17.3" x2="19.4" y2="19.4" />
        <line x1="4.6" y1="19.4" x2="6.7" y2="17.3" />
        <line x1="17.3" y1="6.7" x2="19.4" y2="4.6" />
      </g>
    </svg>
  );
}

export default SunIcon;
