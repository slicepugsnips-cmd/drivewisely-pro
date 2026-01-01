import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import QuestionCard from './QuestionCard';

export default function QuizProvider({ chapterId, onExit }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const q = query(collection(db, "questions"), where("chapter_id", "==", chapterId));
      const querySnapshot = await getDocs(q);
      setQuestions(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchQuestions();
  }, [chapterId]);

  if (questions.length === 0) return <div className="text-center py-20">PREPARING QUESTIONS...</div>;

  return (
    <div className="py-10">
      <QuestionCard 
        question={questions[currentIndex]} 
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        onNext={() => {
          if (currentIndex < questions.length - 1) setCurrentIndex(c => c + 1);
          else onExit();
        }}
      />
    </div>
  );
}
