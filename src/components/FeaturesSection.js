import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Clock, Shield, Zap, Award } from 'lucide-react';

const features = [
  { icon: Brain, title: 'ADAPTIVE LEARNING', description: 'AI-powered system that focuses on your weak areas.' },
  { icon: Target, title: 'REAL EXAM QUESTIONS', description: 'Practice with actual DMV test questions updated for 2024.' },
  { icon: Clock, title: 'TRACK PROGRESS', description: 'Resume exactly where you left off. Syncs across all devices.' },
  { icon: Shield, title: 'GUARANTEED RESULTS', description: 'Our methodology ensures you pass on your first attempt.' },
  { icon: Zap, title: 'INSTANT FEEDBACK', description: 'Get detailed explanations for every single answer.' },
  { icon: Award, title: 'LIFETIME ACCESS', description: 'One payment, unlimited access. No monthly subscriptions.' }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-4">
            WHY <span className="text-[#FF5F1F]">CHOOSE US</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto uppercase text-xs tracking-widest">
            Everything you need to ace your driving test
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-white/5 bg-white/[0.02] hover:border-[#FF5F1F]/20 transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#FF5F1F]/10 mb-6 group-hover:bg-[#FF5F1F]/20 transition-colors">
                <feature.icon className="w-7 h-7 text-[#FF5F1F]" />
              </div>
              <h3 className="text-lg font-black italic uppercase text-white mb-3">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
