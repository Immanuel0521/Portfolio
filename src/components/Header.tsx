import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state
      setScrolled(currentScrollY > 50);
      
      // Hide/show navigation based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past hero section
        setHidden(true);
      } else {
        // Scrolling up or at top
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#activities', label: 'Activities' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-2 transition-transform duration-500 ${
      hidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <nav className={`container mx-auto transition-all duration-500 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl px-6 py-2' 
          : 'bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-2'
      }`}>
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Immanuel <span className="text-blue-400">Avula</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white transition-all duration-300 font-medium px-3 py-1.5 rounded-lg hover:bg-white/10 active:scale-95 active:bg-white/20 transform text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 active:scale-90 transform backdrop-blur-sm border border-white/20"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-3 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-left px-3 py-2 rounded-lg hover:bg-white/10 active:scale-95 active:bg-white/20 transform text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;