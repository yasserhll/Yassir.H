import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Skills',
    href: '#expertise'
  }, {
    name: 'Work',
    href: '#parcours'
  }, {
    name: 'Projects',
    href: '#projets'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-warm flex items-center justify-center font-display font-bold text-xl text-primary-foreground">
            Y
          </div>
          <span className="hidden sm:block font-display font-semibold text-lg tracking-tight">Yassir<span className="text-primary">.H</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, index) => <motion.a key={link.name} href={link.href} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1 + 0.3
        }} className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </motion.a>)}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com/yasserhll" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/yassir-hallaji-1954b6327/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:hallajiyassir@gmail.com" className="px-5 py-2.5 rounded-lg bg-gradient-warm text-primary-foreground font-semibold text-sm hover:glow-warm transition-all">
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg border border-border">
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden glass-dark mt-2 mx-4 rounded-xl overflow-hidden">
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium py-2 hover:text-primary transition-colors">
                  {link.name}
                </a>)}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a href="https://github.com/yasserhll" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/yassir-hallaji-1954b6327/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
                <a href="mailto:hallajiyassir@gmail.com">
                  <Mail className="w-5 h-5 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
};
export default Navbar;