import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronRight, Lightbulb } from 'lucide-react';

export default function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions,
  onAnswer,
  onNext 
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelectAnswer = (index) => {
    if (isAnswered) return;
    
    setSelectedAnswer(index);
    setIsAnswered(true);
    setShowExplanation(true);
    
    const isCorrect = index === question.correct_answer;
    onAnswer(isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);
    setIsAnswered(false);
    onNext();
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-white/40 uppercase tracking-wider">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="h-1 flex-1 mx-6 bg-white/10 overflow-hidden">
          <motion.div 
            className="h-full bg-[#FF5F1F]"
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Box */}
      <motion.div
        key={question.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white/[0.03] border border-white/10 p-8 mb-6"
      >
        <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed mb-8">
          {question.question_text}
        </h2>

        {/* Options */}
        <div className="space-y-3">
          {question.options?.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct_answer;
            const showResult = isAnswered;

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={isAnswered}
                className={`
                  w-full p-4 text-left border transition-all duration-300 flex items-center gap-4
                  ${showResult
                    ? isCorrect
                      ? 'border-green-500 bg-green-500/10 text-green-400'
                      : isSelected
                        ? 'border-red-500 bg-red-500/10 text-red-400'
                        : 'border-white/5 bg-white/[0.02] text-white/50'
                    : 'border-white/10 bg-white/[0.02] hover:border-white/20 text-white/80'
                  }
                `}
              >
                <div className={`
                  w-10 h-10 flex items-center justify-center font-black italic text-sm flex-shrink-0
                  ${showResult && isCorrect ? 'bg-green-500 text-black' : isSelected && !isCorrect ? 'bg-red-500 text-white' : 'bg-white/10 text-white/50'}
                `}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="flex-1 text-base">{option}</span>
                {showResult && isCorrect && <Check className="w-6 h-6 text-green-500" />}
                {showResult && isSelected && !isCorrect && <X className="w-6 h-6 text-red-500" />}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Explanation Phase */}
      <AnimatePresence>
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#FF5F1F]/5 border border-[#FF5F1F]/20 p-6 mb-6"
          >
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[#FF5F1F] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#FF5F1F] uppercase text-sm mb-2">Systems Analysis</h4>
                <p className="text-white/70 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Control Button */}
      {isAnswered && (
        <div className="flex justify-end">
          <button
            onClick={handleNext}
            className="bg-[#FF5F1F] hover:bg-[#FF5F1F]/90 text-black font-black italic uppercase px-8 py-4 flex items-center group"
          >
            PROCEED <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
