import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#FF5F1F] selection:text-black">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #FF5F1F; }
      `}</style>
      {children}
    </div>
  );
}
