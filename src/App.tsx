/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { INITIAL_QUESTIONS } from './data/questions';
import { ActiveQuestion, QuizScreenType, UserAnswerRecord } from './types/quiz';
import { sampleStratifiedQuestions } from './utils/quizSampler';
import { StartScreen } from './components/StartScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { Compass } from 'lucide-react';

export default function App() {
  const [screen, setScreen] = useState<QuizScreenType>('start');
  const [activeQuestions, setActiveQuestions] = useState<ActiveQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [plannedQuestionCount, setPlannedQuestionCount] = useState<number>(20);
  const [answers, setAnswers] = useState<UserAnswerRecord[]>([]);

  // Startet ein neues Quiz mit Schichtung
  const handleStartQuiz = (desiredCount: number) => {
    const sampled = sampleStratifiedQuestions(INITIAL_QUESTIONS, desiredCount);
    // Wenn die gewählte Anzahl größer ist als der Pool, werden alle verfügbaren Fragen gezogen
    setPlannedQuestionCount(sampled.length);
    setActiveQuestions(sampled);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setScreen('quiz');
  };

  // Beantwortung der aktuellen Frage
  const handleAnswerSelected = (selectedOptionIndex: number) => {
    const currentQ = activeQuestions[currentQuestionIndex];
    if (!currentQ) return;

    const selectedOption = currentQ.optionen[selectedOptionIndex];
    const isCorrect = selectedOption?.korrekt ?? false;

    setAnswers((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedOptionIndex,
        isCorrect,
      },
    ]);
  };

  // Nächste Frage oder zum Ergebnis
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScreen('result');
    }
  };

  // Zurücksetzen und Neustart
  const handleRestartQuiz = () => {
    setScreen('start');
    setActiveQuestions([]);
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Oberer Navigationsbalken */}
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <div
            onClick={handleRestartQuiz}
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm group-hover:bg-indigo-700 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg font-heading">
                Führungs- & Verkaufspsychologie
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs text-slate-500 font-medium">
                «Lern-App»
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hauptinhalt */}
      <main className="flex-1 pb-16">
        {screen === 'start' && (
          <StartScreen onStartQuiz={handleStartQuiz} />
        )}

        {screen === 'quiz' && activeQuestions[currentQuestionIndex] && (
          <QuizScreen
            currentQuestion={activeQuestions[currentQuestionIndex]}
            currentIndex={currentQuestionIndex}
            totalQuestions={activeQuestions.length}
            totalAnsweredCount={answers.length}
            onAnswerSelected={handleAnswerSelected}
            onNextQuestion={handleNextQuestion}
            onShowResults={() => setScreen('result')}
            onQuitToStart={handleRestartQuiz}
          />
        )}

        {screen === 'result' && (
          <ResultScreen
            answers={answers}
            totalPlannedQuestions={plannedQuestionCount}
            onRestartQuiz={handleRestartQuiz}
          />
        )}
      </main>

      {/* Fußzeile */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>
          «Führung und Verkaufspsychologie» • Eigenständiges Single-Choice-Lernquiz
        </p>
      </footer>
    </div>
  );
}
