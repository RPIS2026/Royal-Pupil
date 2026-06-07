import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Vision', href: '#vision' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Policies', href: '#policies' },
    { name: 'Parents', href: '#parents' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[rgba(27,67,50,0.95)] backdrop-blur-[10px] h-[64px] shadow-sm' : 'bg-[rgba(27,67,50,0.95)] backdrop-blur-[10px] h-[72px]'
      } border-b-2 border-rp-gold flex items-center`}
    >
      <div className="w-full px-10 flex justify-between items-center">
        <a href="#" className="font-serif text-[18px] font-bold text-rp-gold flex items-center gap-3 tracking-wide uppercase">
          <img src="https://res.cloudinary.com/dwjdbyw4l/image/upload/f_auto,q_auto/Screenshot_2026-06-07_175214_1_nlcksl" alt="Logo" className="h-[40px] w-auto" />
          <div className="flex flex-col">
            <span className="leading-tight">Royal Pupil</span>
            <span className="text-[8px] font-sans tracking-[0.2em]">International Residential School</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-rp-cream hover:text-rp-gold transition-colors font-medium text-[13px] uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-rp-gold text-rp-forest px-[20px] py-[8px] rounded font-bold text-[13px] hover:bg-yellow-400 transition-colors uppercase"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-rp-cream hover:text-rp-gold">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-rp-forest/95 backdrop-blur-lg absolute top-full left-0 w-full shadow-xl border-b-2 border-rp-gold"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-rp-cream hover:text-rp-gold hover:bg-rp-leaf rounded-md font-medium text-[13px] uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-rp-gold text-rp-forest px-6 py-3 rounded font-bold text-[13px] uppercase hover:bg-yellow-400"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
