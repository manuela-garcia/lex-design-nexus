import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4" aria-label="Main navigation">
        <Link to="/" className="text-xl font-bold text-heading focus-visible-ring" aria-label="Home">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors focus-visible-ring">
            About
          </a>
          <a href="#work" className="text-foreground hover:text-primary transition-colors focus-visible-ring">
            Work
          </a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors focus-visible-ring">
            Skills
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors focus-visible-ring">
            Contact
          </a>
          <Button variant="default" size="sm" asChild className="focus-visible-ring">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus-visible-ring p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border md:hidden shadow-lg">
            <div className="flex flex-col gap-4 p-4">
              <a 
                href="#about" 
                className="text-foreground hover:text-primary transition-colors focus-visible-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#work" 
                className="text-foreground hover:text-primary transition-colors focus-visible-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                Work
              </a>
              <a 
                href="#skills" 
                className="text-foreground hover:text-primary transition-colors focus-visible-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-primary transition-colors focus-visible-ring"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="default" size="sm" asChild className="focus-visible-ring">
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
