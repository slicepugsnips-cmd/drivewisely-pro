import React from 'react';
import { Lock, ChevronRight, Play } from 'lucide-react';

export default function ChapterCard({ chapter, isLocked, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`relative p-6 border transition-all duration-300 ${
        isLocked 
        ? 'border-white/5 bg-white/[0.02] opacity-50 cursor-not-allowed' 
        : 'border-white/10 bg-white/[0.02] hover:border-[#FF5F1F] cursor-pointer group'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 flex items-center justify-center font-black italic text-xl ${isLocked ? 'bg-white/10' : 'bg-[#FF5F1F] text-black'}`}>
          {String(chapter.chapter_number).padStart(2, '0')}
        </div>
        {isLocked && <Lock className="w-5 h-5 text-white/30" />}
      </div>

      <h3 className="text-lg font-black italic uppercase text-white mb-2">{chapter.title}</h3>
      <p className="text-sm text-white/40 mb-6">{chapter.description}</p>

      {!isLocked && (
        <div className="flex items-center gap-2 text-[#FF5F1F] font-bold uppercase text-xs tracking-widest">
          <Play className="w-3 h-3 fill-current" />
          Start Module <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </div>
  );
}
