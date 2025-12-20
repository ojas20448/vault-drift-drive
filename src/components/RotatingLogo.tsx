import logoCircular from "@/assets/logo-circular.png";

export const RotatingLogo = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <img 
        src={logoCircular} 
        alt="TheRevVault Logo" 
        className="w-16 h-16 animate-spin-slow"
      />
    </div>
  );
};