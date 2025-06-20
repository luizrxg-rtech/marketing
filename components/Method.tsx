'use client';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';

export const Method = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('method.steps.startup.title'),
      description: t('method.steps.startup.description'),
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: t('method.steps.data.title'),
      description: t('method.steps.data.description'),
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: t('method.steps.growth.title'),
      description: t('method.steps.growth.description'),
      icon: TrendingUp,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Método <span className="text-gradient">Boomer</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t('method.description')}
          </p>
        </motion.div>

        {/* Method Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl font-bold text-white shadow-lg relative z-10`}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 360 }}
                  className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all duration-300"
                >
                  <step.icon className="text-white" size={32} />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </motion.div>

                {/* Connection Arrow (Desktop) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                    className="hidden lg:block absolute top-10 -right-6 text-white/30"
                  >
                    <ArrowRight size={24} />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full group"
          >
            {t('method.cta')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};