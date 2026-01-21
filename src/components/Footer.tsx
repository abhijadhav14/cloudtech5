import { Phone, Mail, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import CTSLogo from "@/assets/CTS.png";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "About Us", href: "/about" },
    { label: "Placements", href: "/placements" },
    { label: "Contact", href: "/contact" },
  ];

  const programs = [
    { label: "SAP Training", href: "/programs" },
    { label: "Cloud Computing", href: "/programs" },
    { label: "Python Full-Stack", href: "/programs" },
    { label: "DevOps Training", href: "/programs" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={CTSLogo} alt="Cloud Tech Solutions" className="w-10 h-10 rounded-lg shadow-lg object-contain" />
              <span className="font-heading font-bold text-xl">Cloud Tech Solutions</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Beyond courses. Focused on careers. We prepare you to thrive in the tech industry 
              with industry-ready programs and 100% job assistance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a>
                <p>@cloudtechnologysolutions</p>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link 
                    to={program.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm opacity-80">
                  <p>+91 79750 48408</p>
                  <p>+91 97410 99057</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-sm opacity-80">cloudtechsolutions2026@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-sm opacity-80">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © 2026 Cloud Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;