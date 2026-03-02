import { Menu, X, Globe, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CTSLogo from "@/assets/frontPage/Popular Programs/Logos/CTS_LOGO.png";

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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top info bar */}
      <div className="bg-slate-900 text-white text-sm py-2.5 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Globe className="w-4 h-4" />
              <span>Serving Students Globally</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM IST</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@cloudtechnologysolutions.in" className="hover:text-blue-400 transition-colors">
              info@cloudtechnologysolutions.in
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img src={CTSLogo} alt="Cloud Tech Solutions" className="w-12 h-12 rounded-lg object-contain shadow-md group-hover:shadow-lg transition-shadow" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-slate-900">
                  Cloud Technology Solutions
                </span>
                <p className="text-xs text-gray-500 hidden sm:block font-medium">
                  Beyond courses. Focused on careers
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all" asChild>
                <Link to="/contact">
                  Start Career Tour
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
            <div className="lg:hidden pb-4 border-t border-gray-200 bg-gray-50">
              <div className="flex flex-col gap-1 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-200"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="px-4 pt-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                      Start Career Tour
                    </Link>
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
