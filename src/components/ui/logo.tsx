import logoImg from "../../assets/imgs/logo.png";

export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoImg} alt="Chemall Logo" className="h-full object-contain" />
    </div>
  );
}