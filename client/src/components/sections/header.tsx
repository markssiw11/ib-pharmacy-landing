import { useState } from "react";
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border fade-in">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo className="hover:scale-110 transition-transform duration-300" />
            <div>
              <h1 className="text-xl font-bold text-primary">IB Pharmacy</h1>
              <p className="text-xs text-muted-foreground">Hệ thống quản lý dược phẩm</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('platforms')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-platforms"
            >
              Nền tảng
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-features"
            >
              Tính năng
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Liên hệ
            </button>
            <Button 
              onClick={() => scrollToSection('platforms')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow transition-all duration-300"
              data-testid="button-get-started"
            >
              Bắt đầu ngay
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('platforms')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-platforms"
              >
                Nền tảng
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-features"
              >
                Tính năng
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Liên hệ
              </button>
              <Button 
                onClick={() => scrollToSection('platforms')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 justify-start"
                data-testid="mobile-button-get-started"
              >
                Bắt đầu ngay
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
