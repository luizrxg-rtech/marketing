'use client';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-16 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-0"
          >
            <div className="text-2xl font-bold text-gradient mb-4">
              {t('globals.appName')}
            </div>
            <p className="text-white/70 max-w-md">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Copywright */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-auto md:text-right"
          >
            <p className="text-white/60 text-sm">
              © 2025 {t('globals.appName')}. {t('footer.rights')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </footer>
  );
};