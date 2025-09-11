import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Tracker } from "@/lib/tracker";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const HEADER_HEIGHT = 72;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scroll state for styling
      setIsScrolled(currentScrollY > HEADER_HEIGHT + 50);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > HEADER_HEIGHT) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    Tracker.track("NAVIGATE_TO_SECTION", { section: sectionId });
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  // Dynamic className functions based on scroll state
  const getNavClassName = () => {
    const baseClasses = `container mx-auto flex items-center justify-between h-[${HEADER_HEIGHT}px] rounded-[60px] py-4 px-6 transition-all duration-300`;

    if (isScrolled) {
      return `${baseClasses} my-2 bg-white shadow-lg`;
    }

    return `${baseClasses} my-4 glass-effect`;
  };

  const getNavLinkClassName = () => {
    const baseClasses = "transition-colors py-2 px-3";

    if (isScrolled) {
      return `${baseClasses} text-primary hover:text-primary`;
    }

    return `${baseClasses} text-white hover:text-white/80`;
  };

  const getButtonClassName = () => {
    const baseClasses = "transition-all duration-500 shrink-0 rounded-full hidden sm:block";

    if (isScrolled) {
      return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90`;
    }

    return `${baseClasses} bg-white text-primary hover:bg-white/90`;
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      className="fixed top-0 left-0 right-0 z-50 px-10">
      <nav className={getNavClassName()}>
        <div className="flex items-center justify-between h-10 flex-1">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <Button
                size="icon"
                className={cn("md:hidden bg-transparent", isScrolled ? "text-primary" : "text-white")}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              <Logo className="hover:scale-105 transition-transform duration-500" />
              <p className={cn("text-lg font-extrabold montserrat", isScrolled ? "text-primary" : "text-white")}>
                IB Pharmacy
              </p>
            </div>

            <div className="hidden md:flex items-center space-x-2 text-sm">
              <button
                onClick={() => scrollToSection("platforms")}
                className={getNavLinkClassName()}
                data-testid="nav-platforms">
                Nền tảng
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className={getNavLinkClassName()}
                data-testid="nav-features">
                Tính năng
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={getNavLinkClassName()}
                data-testid="nav-contact">
                Liên hệ
              </button>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection("platforms")}
            className={getButtonClassName()}
            data-testid="button-get-started">
            Bắt đầu ngay
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-4 p-4 overflow-hidden bg-white rounded-lg shadow-lg">
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("platforms")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-platforms">
                Nền tảng
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-features">
                Tính năng
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-muted-foreground hover:text-primary transition-colors"
                data-testid="mobile-nav-contact">
                Liên hệ
              </button>
              <Button
                onClick={() => scrollToSection("platforms")}
                className="w-full block sm:hidden"
                data-testid="button-get-started">
                Bắt đầu ngay
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
