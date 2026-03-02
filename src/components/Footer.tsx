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
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={CTSLogo} alt="Cloud Tech Solutions" className="w-10 h-10 rounded-lg object-contain" />
              <span className="font-heading font-bold text-lg">Cloud Tech Solutions</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Beyond courses. Focused on careers. We prepare you to thrive in the tech industry 
              with industry-ready programs and 100% job assistance.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors text-gray-300 hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.label}>
                  <Link 
                    to={program.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors font-medium text-sm"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-sm">
                  <p className="text-gray-300 hover:text-blue-400 transition-colors">+91 79750 48408</p>
                  <p className="text-gray-300 hover:text-blue-400 transition-colors">+91 97410 99057</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <a href="mailto:info@cloudtechnologysolutions.in" className="text-sm text-gray-300 hover:text-blue-400 transition-colors">info@cloudtechnologysolutions.in</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-sm text-gray-300">Bangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Cloud Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <Link to="/terms-and-conditions" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
            <a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;