import React from 'react';
import { Target, CheckCircle, Percent } from 'lucide-react';

export default function StatsBar({ userProgress }) {
  const stats = [
    { label: 'SOLVED', value: userProgress?.questions_answered || 0, icon: Target },
    { label: 'CORRECT', value: userProgress?.correct_answers || 0, icon: CheckCircle },
    { label: 'RANK', value: userProgress?.is_premium ? 'PRO' : 'ROOKIE', icon: Percent },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-10">
      {stats.map((s) => (
        <div key={s.label} className="bg-white/[0.03] border border-white/5 p-4">
          <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase mb-1">
            <s.icon className="w-3 h-3 text-[#FF5F1F]" /> {s.label}
          </div>
          <div className="text-2xl font-black italic text-white">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
