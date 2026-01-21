import { Menu, X, Globe, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTSLogo from "@/assets/CTS.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Engagement Models", href: "/engagement-models" },
    { label: "Placements", href: "/placements" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-foreground text-background text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>Serving Students Globally</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:cloudtechsolutions2026@gmail.com" className="hover:text-primary transition-colors">
              cloudtechsolutions2026@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={CTSLogo} alt="Cloud Tech Solutions" className="w-14 h-14 rounded-lg shadow-2xl object-contain hover:scale-110 transition-transform" />
              <div>
                <span className="font-heading font-black text-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Cloud Technology Solutions
                </span>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  Beyond courses. Focused on careers
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.href)
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button className="hero-gradient shadow-lg hover:opacity-90 transition-opacity text-white">
                Start Career Tour
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 animate-fade-in">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-secondary"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 pt-3">
                  <Button className="w-full hero-gradient shadow-lg text-white">
                    Start Career Tour
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;