'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import TrainingHub from '../components/hub/TrainingHub';
import QuizProvider from '../components/quiz/QuizProvider';
import Footer from '../components/Footer';

export default function Home() {
  const [view, setView] = useState('landing'); 
  const [activeChapter, setActiveChapter] = useState(null);
  
  const [userProgress, setUserProgress] = useState({
    is_premium: false,
    questions_answered: 0,
    correct_answers: 0,
    completed_chapters: []
  });

  const handleStartChapter = (chapterId) => {
    setActiveChapter(chapterId);
    setView('quiz');
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar 
        onLogin={() => setView('hub')} 
        isLoggedIn={view !== 'landing'} 
      />

      {view === 'landing' && (
        <>
          <FeaturesSection />
          <PricingSection setPremiumStatus={(status) => {
            setUserProgress(prev => ({...prev, is_premium: status}));
            setView('hub');
          }} />
        </>
      )}

      {view === 'hub' && (
        <TrainingHub 
          userProgress={userProgress} 
          onStartChapter={handleStartChapter} 
        />
      )}

      {view === 'quiz' && (
        <QuizProvider 
          chapterId={activeChapter} 
          onExit={() => setView('hub')} 
        />
      )}

      <Footer />
    </main>
  );
}
