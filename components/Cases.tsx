'use client';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export const Cases = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get cases from translations
  const getCases = () => {
    const casesData = t('cases.items');
    if (typeof casesData === 'string') return [];

    return [
      {
        title: t('cases.items.0.title'),
        company: t('cases.items.0.company'),
        description: t('cases.items.0.description'),
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: { growth: '+300%', users: '50K+', rating: '4.9' }
      },
      {
        title: t('cases.items.1.title'),
        company: t('cases.items.1.company'),
        description: t('cases.items.1.description'),
        image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: { growth: '+250%', users: '30K+', rating: '4.8' }
      },
      {
        title: t('cases.items.2.title'),
        company: t('cases.items.2.company'),
        description: t('cases.items.2.description'),
        image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: { growth: '+400%', users: '100K+', rating: '4.9' }
      },
      {
        title: t('cases.items.3.title'),
        company: t('cases.items.3.company'),
        description: t('cases.items.3.description'),
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: { growth: '+200%', users: '75K+', rating: '4.7' }
      },
      {
        title: t('cases.items.4.title'),
        company: t('cases.items.4.company'),
        description: t('cases.items.4.description'),
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: { growth: '+500%', users: '200K+', rating: '4.9' }
      },
      {
        title: t('cases.items.5.title'),
        company: t('cases.items.5.company'),
        description: t('cases.items.5.description'),
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: { growth: '+350%', users: '80K+', rating: '4.8' }
      }
    ];
  };

  const cases = getCases();
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(cases.length / itemsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideCases = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return cases.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t('cases.title')} <br />
            <span className="text-gradient">{t('cases.highlight')}</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('cases.description')}
          </p>
        </motion.div>

        {/* Cases Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentSlideCases().map((caseItem, index) => (
              <motion.div
                key={`${caseItem.company}-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-sm  rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-400 text-sm font-medium">
                      {caseItem.company}
                    </span>
                    <ArrowRight className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" size={16} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {caseItem.title}
                  </h3>

                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {caseItem.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="text-green-400" size={16} />
                      </div>
                      <div className="text-lg font-bold text-white">
                        {caseItem.metrics.growth}
                      </div>
                      <div className="text-xs text-white/60">{t('cases.metrics.growth')}</div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="text-blue-400" size={16} />
                      </div>
                      <div className="text-lg font-bold text-white">
                        {caseItem.metrics.users}
                      </div>
                      <div className="text-xs text-white/60">{t('cases.metrics.users')}</div>
                    </div>

                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Star className="text-yellow-400" size={16} />
                      </div>
                      <div className="text-lg font-bold text-white">
                        {caseItem.metrics.rating}
                      </div>
                      <div className="text-xs text-white/60">{t('cases.metrics.rating')}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm "
          >
            <ChevronLeft className="text-white" size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm "
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-2"
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