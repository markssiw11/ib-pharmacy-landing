interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div className={`${className} bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm`}>
      IB
    </div>
  );
}
