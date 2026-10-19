import React, { useState } from 'react';
import { ActiveQuestion, ShuffledQuestionOption } from '../types/quiz';
import { getAreaById } from '../data/areas';
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  Award,
  AlertCircle,
  HelpCircle,
  LogOut,
} from 'lucide-react';

interface QuizScreenProps {
  currentQuestion: ActiveQuestion;
  currentIndex: number;
  totalQuestions: number;
  totalAnsweredCount: number;
  onAnswerSelected: (optionIndex: number) => void;
  onNextQuestion: () => void;
  onShowResults: () => void;
  onQuitToStart: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  totalAnsweredCount,
  onAnswerSelected,
  onNextQuestion,
  onShowResults,
  onQuitToStart,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);

  const isLocked = selectedIndex !== null;
  const area = getAreaById(currentQuestion.bereich);
  const selectedOption: ShuffledQuestionOption | null =
    selectedIndex !== null ? currentQuestion.optionen[selectedIndex] : null;
  const correctOption = currentQuestion.optionen.find((o) => o.korrekt);
  const isCorrect = selectedOption?.korrekt ?? false;
  const isLastQuestion = currentIndex + 1 >= totalQuestions;

  const handleSelect = (index: number) => {
    if (isLocked) return;
    setSelectedIndex(index);
    onAnswerSelected(index);
  };

  const handleContinue = () => {
    setSelectedIndex(null);
    onNextQuestion();
  };

  const progressPercent = Math.round(((currentIndex + (isLocked ? 1 : 0)) / totalQuestions) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10">
      {/* Top Bar mit Fortschritt und dezenter Schaltfläche «Übung beenden» */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 mb-2 font-medium">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">
              «Frage {currentIndex + 1} von {totalQuestions}»
            </span>
            {area && (
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-normal">
                Bereich {area.id}: «{area.titel}»
              </span>
            )}
          </div>

          {/* Dezente Schaltfläche «Übung beenden», immer aktiv */}
          <button
            type="button"
            onClick={() => setShowExitModal(true)}
            className="text-slate-500 hover:text-slate-900 transition-colors text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-slate-200/60 border border-transparent hover:border-slate-300/80 cursor-pointer inline-flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5 text-slate-400" />
            <span>«Übung beenden»</span>
          </button>
        </div>

        {/* Fortschrittsbalken */}
        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-indigo-600 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {area && (
          <div className="sm:hidden mt-2 text-xs text-indigo-700 font-medium">
            Bereich {area.id}: «{area.titel}»
          </div>
        )}
      </div>

      {/* Frage-Karte */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/90 p-6 sm:p-8 mb-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className="text-xs font-bold text-slate-400 font-mono tracking-wider uppercase">
            Fragen-Nr. {currentQuestion.id}
          </span>
          {currentQuestion.pruefen && (
            <span
              title="Diese Frage beinhaltet nach didaktischer Lehrmeinung variierende Begriffszählungen"
              className="inline-flex items-center gap-1 text-[11px] font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded"
            >
              <HelpCircle className="w-3 h-3" />
              Didaktische Varianz
            </span>
          )}
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
          {currentQuestion.frage}
        </h2>
      </div>

      {/* 4 Antwort-Karten */}
      <div className="grid grid-cols-1 gap-3.5 mb-6">
        {currentQuestion.optionen.map((option, idx) => {
          const isSelected = selectedIndex === idx;

          let cardStyle =
            'border-slate-200/90 bg-white hover:border-indigo-400 hover:bg-indigo-50/20 text-slate-800';
          let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';

          if (isLocked) {
            if (option.korrekt) {
              cardStyle =
                'border-emerald-500 bg-emerald-50/60 text-emerald-950 ring-2 ring-emerald-500/20';
              badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
            } else if (isSelected) {
              cardStyle =
                'border-rose-500 bg-rose-50/60 text-rose-950 ring-2 ring-rose-500/20';
              badgeStyle = 'bg-rose-600 text-white border-rose-600';
            } else {
              cardStyle = 'border-slate-200 bg-slate-50/40 text-slate-400 opacity-60';
              badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
            }
          }

          return (
            <button
              key={option.buchstabe}
              disabled={isLocked}
              onClick={() => handleSelect(idx)}
              className={`w-full text-left p-4 sm:p-5 rounded-xl border-2 transition-all duration-150 flex items-start gap-3.5 relative ${
                !isLocked ? 'cursor-pointer active:scale-[0.995]' : 'cursor-default'
              } ${cardStyle}`}
            >
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 border ${badgeStyle} transition-colors`}
              >
                {option.buchstabe}
              </div>

              <div className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5 font-normal">
                {option.text}
              </div>

              {isLocked && (
                <div className="shrink-0 pt-0.5">
                  {option.korrekt && (
                    <CheckCircle className="w-6 h-6 text-emerald-600 animate-in fade-in zoom-in duration-200" />
                  )}
                  {!option.korrekt && isSelected && (
                    <XCircle className="w-6 h-6 text-rose-600 animate-in fade-in zoom-in duration-200" />
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Erklärung nach Auswahl */}
      {isLocked && selectedOption && (
        <div
          className={`rounded-2xl p-5 sm:p-6 mb-6 border animate-in fade-in slide-in-from-bottom-2 duration-200 ${
            isCorrect
              ? 'bg-emerald-50/90 border-emerald-200 text-emerald-950'
              : 'bg-rose-50/90 border-rose-200 text-rose-950'
          }`}
        >
          <div className="flex items-start gap-3 mb-2">
            {isCorrect ? (
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                {isCorrect ? '«Richtig beantwortet!»' : '«Leider nicht richtig»'}
              </h3>
              <p className="text-sm mt-1 leading-relaxed">
                {isCorrect ? (
                  selectedOption.erklaerung
                ) : (
                  <>
                    <strong className="block mb-1 text-rose-900">
                      Warum Ihre Wahl nicht zutrifft:
                    </strong>
                    {selectedOption.erklaerung}
                  </>
                )}
              </p>

              {!isCorrect && correctOption && (
                <div className="mt-4 pt-3 border-t border-rose-200/80">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                    Richtige Antwort ({correctOption.buchstabe}):
                  </span>
                  <p className="text-sm text-slate-800 font-medium mb-1">
                    {correctOption.text}
                  </p>
                  <p className="text-xs text-slate-600 leading-normal">
                    {correctOption.erklaerung}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Weiter-Schaltfläche */}
      {isLocked && (
        <div className="flex justify-end">
          <button
            onClick={handleContinue}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-base shadow-sm hover:shadow transition-all duration-150 cursor-pointer focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            <span>{isLastQuestion ? '«Ergebnis anzeigen»' : '«Weiter»'}</span>
            {isLastQuestion ? (
              <Award className="w-5 h-5" />
            ) : (
              <ArrowRight className="w-5 h-5" />
            )}
          </button>
        </div>
      )}

      {/* Modal: «Möchten Sie die Übung beenden?» */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full p-6 text-center animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              «Möchten Sie die Übung beenden?»
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {totalAnsweredCount > 0
                ? `Bisher wurden ${totalAnsweredCount} von ${totalQuestions} Fragen beantwortet.`
                : 'Es wurde noch keine Frage beantwortet.'}
            </p>

            <div className="flex flex-col gap-2.5">
              {/* «Ergebnis anzeigen»: nur wenn mindestens eine Frage beantwortet wurde */}
              {totalAnsweredCount > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setShowExitModal(false);
                    onShowResults();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-colors cursor-pointer shadow-sm"
                >
                  «Ergebnis anzeigen»
                </button>
              )}

              {/* «Zum Start zurück» */}
              <button
                type="button"
                onClick={() => {
                  setShowExitModal(false);
                  onQuitToStart();
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 font-semibold text-sm transition-colors cursor-pointer"
              >
                «Zum Start zurück»
              </button>

              {/* «Weiter üben» */}
              <button
                type="button"
                onClick={() => setShowExitModal(false)}
                className="w-full py-3 px-4 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-600 font-medium text-sm transition-colors cursor-pointer"
              >
                «Weiter üben»
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
