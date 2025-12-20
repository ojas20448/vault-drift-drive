import logoCircular from "@/assets/logo-circular.png";

export const RotatingLogo = () => {
  return (
    <a
      href="https://wa.me/919717820775?text=Hi!%20I'm%20interested%20in%20your%20products"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contact us on WhatsApp"
    >
      <img 
        src={logoCircular} 
        alt="TheRevVault Logo" 
        className="w-16 h-16 animate-spin-slow grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-300"
        style={{
          filter: 'grayscale(100%) brightness(0.75) contrast(1.25) url(#grain)',
        }}
      />
      <svg className="absolute w-0 h-0">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>
    </a>
  );
};