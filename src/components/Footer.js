import React from 'react';
import Logo from './ui/Logo';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo size="small" />
          
          <div className="flex items-center gap-8 text-xs font-bold uppercase text-white/40 tracking-widest">
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FF5F1F] transition-colors">Support</a>
          </div>
          
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2024 DRIVEWISELY PRO. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
