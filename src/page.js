import React, { useState } from 'react';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import TrainingHub from './components/hub/TrainingHub';
import QuizProvider from './components/quiz/QuizProvider';
import Footer from './components/Footer';

export default function App() {
  const [view, setView] = useState('landing'); // landing, hub, or quiz
  const [activeChapter, setActiveChapter] = useState(null);
  
  // Progress State
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

  const handleFinishQuiz = () => {
    setView('hub');
    setActiveChapter(null);
  };

  return (
    <Layout>
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
          onExit={handleFinishQuiz} 
        />
      )}

      <Footer />
    </Layout>
  );
}
