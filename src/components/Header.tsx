import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/50 bg-card/98 backdrop-blur-md supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="text-2xl font-bold text-heading focus-visible-ring" aria-label="Home">
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors focus-visible-ring text-base font-medium">
            About
          </a>
          <a href="#work" className="text-foreground hover:text-primary transition-colors focus-visible-ring text-base font-medium">
            Work
          </a>
          <a href="#skills" className="text-foreground hover:text-primary transition-colors focus-visible-ring text-base font-medium">
            Skills
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors focus-visible-ring text-base font-medium">
            Contact
          </a>
          <Button variant="default" size="sm" asChild className="focus-visible-ring shadow-md hover:shadow-lg transition-shadow">
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
          <div className="absolute top-20 left-0 right-0 bg-card border-b-2 border-border md:hidden shadow-xl">
            <div className="flex flex-col gap-6 p-6">
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
