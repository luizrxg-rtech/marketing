'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.companies', href: '#companies' },
    { key: 'nav.cases', href: '#cases' },
    { key: 'nav.method', href: '#method' },
    { key: 'nav.faq', href: '#faq' }
  ];

  return (
    <motion.header
      className={`max-w-[1024px] box-content mx-auto px-6 py-3 fixed top-3 left-0 right-0 rounded-2xl z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-white/5'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
        >
          {t('globals.appName')}
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(item.key)}
            </motion.a>
          ))}
        </nav>

        {/* Language Switcher & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Select value={language} onValueChange={(value: 'pt' | 'en') => setLanguage(value)}>
            <SelectTrigger className="w-20 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <div className="flex items-center space-x-2">
                <Globe size={16} />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-black/90 border-white/20 backdrop-blur-sm">
              <SelectItem value="pt" className="text-white hover:bg-white/10 focus:bg-white/10">
                PT
              </SelectItem>
              <SelectItem value="en" className="text-white hover:bg-white/10 focus:bg-white/10">
                EN
              </SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
            {t('hero.cta')}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden mt-4 glass-effect rounded-2xl mx-4 p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <Select value={language} onValueChange={(value: 'pt' | 'en') => setLanguage(value)}>
                <SelectTrigger className="w-24 bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
                  <div className="flex items-center space-x-2">
                    <Globe size={16} />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-black/90 border-white/20 backdrop-blur-sm">
                  <SelectItem value="pt" className="text-white hover:bg-white/10 focus:bg-white/10">
                    PT
                  </SelectItem>
                  <SelectItem value="en" className="text-white hover:bg-white/10 focus:bg-white/10">
                    EN
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                {t('hero.cta')}
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};