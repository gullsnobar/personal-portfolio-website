// src/components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/data";

export default function Navbar({ activeSection, scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Brand: Snobar (no icon) */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Snobar
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsMenuOpen(false);
                }}
                className={`relative px-4 py-2 transition-all duration-300 ${
                  activeSection === id ? "text-emerald-400" : "text-gray-300"
                }`}
              >
                {activeSection === id && (
                  <div className="absolute inset-0 bg-emerald-500/10 rounded-lg border border-emerald-500/20"></div>
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-emerald-500/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => {
                  scrollToSection(id);
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-3 w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-200"
              >
                {/* Guard Icon: only render if defined */}
                {Icon ? <Icon size={20} /> : null}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
