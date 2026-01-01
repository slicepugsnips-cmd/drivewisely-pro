import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, ChevronRight, Loader2 } from 'lucide-react';

export default function PricingSection({ setPremiumStatus }) {
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handleFakeCheckout = () => {
    setIsPurchasing(true);
    
    // Simulate a 2-second payment delay
    setTimeout(() => {
      setIsPurchasing(false);
      setPremiumStatus(true); // This unlocks the whole app!
      alert("Payment Successful! Welcome to Pro.");
    }, 2000);
  };

  return (
    <section className="py-24 px-6 bg-[#0a0a0a] relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black italic uppercase text-white mb-4">
            ONE <span className="text-[#FF5F1F]">PAYMENT</span>
          </h2>
          <p className="text-white/50">No subscriptions. No hidden fees. Just results.</p>
        </div>

        <div className="relative bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl font-black italic text-white">$49.99</span>
              </div>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center gap-3"><Check className="text-[#FF5F1F] w-5 h-5"/> Lifetime Access</li>
                <li className="flex items-center gap-3"><Check className="text-[#FF5F1F] w-5 h-5"/> 1,000+ Practice Questions</li>
              </ul>
            </div>

            <button
              onClick={handleFakeCheckout}
              disabled={isPurchasing}
              className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-black font-black italic uppercase px-10 py-5 flex items-center transition-all hover:shadow-[0_0_30px_rgba(255,95,31,0.4)] disabled:opacity-50"
            >
              {isPurchasing ? (
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Zap className="w-5 h-5 mr-2" />
              )}
              {isPurchasing ? "PROCESSING..." : "GET STARTED"}
              {!isPurchasing && <ChevronRight className="w-5 h-5 ml-2" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
