import React from 'react';
import Logo from './ui/Logo';
import Button from './ui/Button';
import { LogIn, User } from 'lucide-react';

export default function Navbar({ onLogin, isLoggedIn }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo size="small" />
        
        <div className="flex items-center gap-3">
          <Button onClick={onLogin} variant={isLoggedIn ? "outline" : "primary"}>
            {isLoggedIn ? (
              <><User className="w-4 h-4 mr-2" /> DASHBOARD</>
            ) : (
              <><LogIn className="w-4 h-4 mr-2" /> LOG IN / SIGN UP</>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
}
