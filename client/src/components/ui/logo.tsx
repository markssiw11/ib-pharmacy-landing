import logoImage from '@assets/Logo (1)_1756965532172.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <img 
      src={logoImage} 
      alt="IB Pharmacy Logo" 
      className={`${className} object-contain`}
    />
  );
}
