'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export const Companies = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const companies = [
    { name: 'JBS', logo: 'JBS' },
    { name: 'LIVE!', logo: 'LIVE!' },
    { name: 'GE', logo: 'GE' },
    { name: 'Decanter', logo: 'Decanter' },
    { name: 'Ultra Coffee', logo: 'ULTRA COFFEE' },
    { name: 'Unimed', logo: 'Unimed' },
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Google', logo: 'Google' },
    { name: 'Amazon', logo: 'Amazon' }
  ];

  const itemsPerSlide = 6;
  const totalSlides = Math.ceil(companies.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideCompanies = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return companies.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="companies" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('companies.title')} <br />
            <span className="text-gradient">{t('companies.highlight')}</span>
          </h2>
        </motion.div>

        {/* Companies Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {getCurrentSlideCompanies().map((company, index) => (
              <motion.div
                key={`${company.name}-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-6 rounded-xl bg-white/5  hover:border-white/20 transition-all duration-300"
              >
                <span className="text-white/80 font-semibold text-lg">
                  {company.logo}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm "
          >
            <ChevronLeft className="text-white" size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm "
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2 mt-12"
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-blue-500 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};