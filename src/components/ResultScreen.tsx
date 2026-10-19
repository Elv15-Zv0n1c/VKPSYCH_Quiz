import React, { useState } from 'react';
import { UserAnswerRecord } from '../types/quiz';
import { getAreaById } from '../data/areas';
import {
  Trophy,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  ThumbsUp,
  HelpCircle,
} from 'lucide-react';

interface ResultScreenProps {
  answers: UserAnswerRecord[];
  totalPlannedQuestions: number;
  onRestartQuiz: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  answers,
  totalPlannedQuestions,
  onRestartQuiz,
}) => {
  const [filterMode, setFilterMode] = useState<'wrongOnly' | 'all'>('wrongOnly');
  const [expandedQuestionIds, setExpandedQuestionIds] = useState<Set<number>>(new Set());

  const totalAnswered = answers.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const wrongCount = totalAnswered - correctCount;

  // Prozentwert auf eine Dezimalstelle gerundet
  const percentage = totalAnswered > 0 ? (correctCount / totalAnswered) * 100 : 0;
  const formattedPercent = percentage.toFixed(1).replace('.', ',');
  const roundedPercent = Math.round(percentage);

  // Notenschlüssel nach Vorgabe:
  // 89 % bis 100 %: Note 1 – Sehr Gut
  // 76 % bis 88 %: Note 2 – Gut
  // 64 % bis 75 %: Note 3 – Befriedigend
  // 50 % bis 63 %: Note 4 – Genügend
  // 0 % bis 49 %: Note 5 – Nicht Genügend
  let gradeInfo = {
    noteZahl: '5',
    noteText: 'Nicht Genügend',
    vollTitel: '«Note 5 – Nicht Genügend»',
    desc: 'Unter 50 % der Fragen wurden richtig beantwortet. Nutzen Sie die detaillierte Übersicht unten, um die Inhalte nochmals gezielt zu wiederholen.',
    bg: 'bg-rose-50 border-rose-300 text-rose-950',
    iconBg: 'bg-rose-100 text-rose-700 border-rose-200',
    badgeStyle: 'bg-rose-600 text-white',
    isNote1: false,
    isNote5: true,
  };

  if (roundedPercent >= 89) {
    gradeInfo = {
      noteZahl: '1',
      noteText: 'Sehr Gut',
      vollTitel: '«Note 1 – Sehr Gut»',
      desc: 'Hervorragende Leistung! Sie beherrschen die Führungsmodelle und verkaufspsychologischen Grundsätze auf exzellentem Niveau.',
      bg: 'bg-gradient-to-br from-amber-50 via-amber-100/70 to-yellow-50 border-amber-300 text-amber-950 shadow-md shadow-amber-500/10',
      iconBg: 'bg-amber-400 text-amber-950 border-amber-300',
      badgeStyle: 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-sm',
      isNote1: true,
      isNote5: false,
    };
  } else if (roundedPercent >= 76) {
    gradeInfo = {
      noteZahl: '2',
      noteText: 'Gut',
      vollTitel: '«Note 2 – Gut»',
      desc: 'Sehr solide Leistung! Sie verfügen über ein fundiertes Verständnis der wesentlichen Führungstheorien und Verkaufsstrategien.',
      bg: 'bg-emerald-50 border-emerald-300 text-emerald-950',
      iconBg: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      badgeStyle: 'bg-emerald-600 text-white',
      isNote1: false,
      isNote5: false,
    };
  } else if (roundedPercent >= 64) {
    gradeInfo = {
      noteZahl: '3',
      noteText: 'Befriedigend',
      vollTitel: '«Note 3 – Befriedigend»',
      desc: 'Gutes Basiswissen vorhanden. Einzelne Modelle und Fragestellungen können durch gezielte Wiederholung noch gefestigt werden.',
      bg: 'bg-blue-50 border-blue-300 text-blue-950',
      iconBg: 'bg-blue-100 text-blue-700 border-blue-200',
      badgeStyle: 'bg-blue-600 text-white',
      isNote1: false,
      isNote5: false,
    };
  } else if (roundedPercent >= 50) {
    gradeInfo = {
      noteZahl: '4',
      noteText: 'Genügend',
      vollTitel: '«Note 4 – Genügend»',
      desc: 'Das grundlegende Wissensziel wurde knapp erreicht. Eine Wiederholung der fehlerhaften Fragen wird empfohlen.',
      bg: 'bg-amber-50/90 border-amber-300 text-amber-950',
      iconBg: 'bg-amber-100 text-amber-800 border-amber-200',
      badgeStyle: 'bg-amber-600 text-white',
      isNote1: false,
      isNote5: false,
    };
  }

  const wrongAnswers = answers.filter((a) => !a.isCorrect);
  const displayedAnswers = filterMode === 'wrongOnly' ? wrongAnswers : answers;

  const toggleExpand = (id: number) => {
    setExpandedQuestionIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedQuestionIds(new Set(displayedAnswers.map((a) => a.question.id)));
  };

  const collapseAll = () => {
    setExpandedQuestionIds(new Set());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Festlicher Banner für Note 1 */}
      {gradeInfo.isNote1 && (
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 p-1 mb-8 shadow-xl animate-in zoom-in-95 duration-300">
          <div className="bg-slate-950 rounded-[22px] px-6 py-8 text-center text-white relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl pointer-events-none" />
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
              Spitzenleistung
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-amber-300 font-heading mb-2 tracking-tight">
              «Note 1 – Sehr Gut»
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Sie haben {formattedPercent} % der Fragen korrekt beantwortet – eine meisterhafte Leistung!
            </p>
          </div>
        </div>
      )}

      {/* Haupt-Ergebniskarte mit großer, gut sichtbarer Note */}
      <div className={`rounded-3xl border p-6 sm:p-10 mb-8 ${gradeInfo.bg}`}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Großes Noten-Icon / Noten-Symbol */}
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex flex-col items-center justify-center shrink-0 border shadow-xs ${gradeInfo.iconBg}`}
            >
              {gradeInfo.isNote1 ? (
                <>
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce mb-0.5" />
                  <span className="text-xs font-black uppercase tracking-wider font-heading">
                    Note 1
                  </span>
                </>
              ) : gradeInfo.noteZahl === '2' ? (
                <>
                  <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 mb-0.5" />
                  <span className="text-xs font-black uppercase tracking-wider font-heading">
                    Note 2
                  </span>
                </>
              ) : gradeInfo.noteZahl === '3' ? (
                <>
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 mb-0.5" />
                  <span className="text-xs font-black uppercase tracking-wider font-heading">
                    Note 3
                  </span>
                </>
              ) : gradeInfo.noteZahl === '4' ? (
                <>
                  <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 mb-0.5" />
                  <span className="text-xs font-black uppercase tracking-wider font-heading">
                    Note 4
                  </span>
                </>
              ) : (
                <>
                  <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 mb-0.5" />
                  <span className="text-xs font-black uppercase tracking-wider font-heading">
                    Note 5
                  </span>
                </>
              )}
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
                <span className="text-xs uppercase tracking-wider font-bold opacity-75">
                  Gesamtbewertung
                </span>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/70 border border-black/10 text-xs font-semibold text-slate-800">
                  «{totalAnswered} von {totalPlannedQuestions} Fragen beantwortet»
                </span>
              </div>

              {/* Note groß und gut sichtbar */}
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-2 font-heading">
                {gradeInfo.vollTitel}
              </h1>
              <p className="text-sm sm:text-base max-w-lg leading-relaxed opacity-90">
                {gradeInfo.desc}
              </p>
            </div>
          </div>

          {/* Prozentanzeige */}
          <div className="bg-white/80 backdrop-blur-xs rounded-2xl p-5 border border-black/5 shadow-xs shrink-0 min-w-[160px] text-center">
            <div className="text-4xl sm:text-5xl font-black font-heading text-slate-900">
              {formattedPercent} %
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Erreichte Quote
            </div>
          </div>
        </div>

        {/* Notenschlüssel Übersicht */}
        <div className="mt-6 pt-5 border-t border-black/10">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 text-center sm:text-left">
            Offizieller Notenschlüssel
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
            <div
              className={`p-2 rounded-xl text-center border ${
                gradeInfo.noteZahl === '1'
                  ? 'bg-amber-100 border-amber-300 font-bold text-amber-950 shadow-xs'
                  : 'bg-white/60 border-black/5 text-slate-600'
              }`}
            >
              <span className="block font-semibold">Note 1 (Sehr Gut)</span>
              <span className="text-[11px] opacity-80">89 % – 100 %</span>
            </div>
            <div
              className={`p-2 rounded-xl text-center border ${
                gradeInfo.noteZahl === '2'
                  ? 'bg-emerald-100 border-emerald-300 font-bold text-emerald-950 shadow-xs'
                  : 'bg-white/60 border-black/5 text-slate-600'
              }`}
            >
              <span className="block font-semibold">Note 2 (Gut)</span>
              <span className="text-[11px] opacity-80">76 % – 88 %</span>
            </div>
            <div
              className={`p-2 rounded-xl text-center border ${
                gradeInfo.noteZahl === '3'
                  ? 'bg-blue-100 border-blue-300 font-bold text-blue-950 shadow-xs'
                  : 'bg-white/60 border-black/5 text-slate-600'
              }`}
            >
              <span className="block font-semibold">Note 3 (Befriedigend)</span>
              <span className="text-[11px] opacity-80">64 % – 75 %</span>
            </div>
            <div
              className={`p-2 rounded-xl text-center border ${
                gradeInfo.noteZahl === '4'
                  ? 'bg-amber-100 border-amber-300 font-bold text-amber-950 shadow-xs'
                  : 'bg-white/60 border-black/5 text-slate-600'
              }`}
            >
              <span className="block font-semibold">Note 4 (Genügend)</span>
              <span className="text-[11px] opacity-80">50 % – 63 %</span>
            </div>
            <div
              className={`p-2 rounded-xl text-center border ${
                gradeInfo.noteZahl === '5'
                  ? 'bg-rose-100 border-rose-300 font-bold text-rose-950 shadow-xs'
                  : 'bg-white/60 border-black/5 text-slate-600'
              }`}
            >
              <span className="block font-semibold">Note 5 (Nicht Genügend)</span>
              <span className="text-[11px] opacity-80">0 % – 49 %</span>
            </div>
          </div>
        </div>

        {/* Zahlen-Kacheln */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6 pt-6 border-t border-black/10">
          <div className="bg-white/90 rounded-xl p-3.5 sm:p-4 text-center border border-black/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {totalAnswered}
            </div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">
              Beantwortet
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-3.5 sm:p-4 text-center border border-black/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-heading">
              {correctCount}
            </div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">
              Richtig
            </div>
          </div>
          <div className="bg-white/90 rounded-xl p-3.5 sm:p-4 text-center border border-black/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-rose-600 font-heading">
              {wrongCount}
            </div>
            <div className="text-xs text-slate-600 font-medium mt-0.5">
              Falsch
            </div>
          </div>
        </div>

        {/* Aktionsschaltfläche Neu Starten */}
        <div className="mt-8 flex justify-center sm:justify-start">
          <button
            type="button"
            onClick={onRestartQuiz}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow hover:shadow-md transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-slate-300"
          >
            <RotateCcw className="w-5 h-5" />
            <span>«Neu starten»</span>
          </button>
        </div>
      </div>

      {/* Detaillierte Fehler- und Wissensanalyse */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FileCheck2 className="w-6 h-6 text-indigo-600" />
              Wissensübersicht & Erklärungen
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Reflektieren Sie gezielt die Fachbegriffe und Begründungen der gestellten Fragen.
            </p>
          </div>

          {/* Filter Umschalter */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start sm:self-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => setFilterMode('wrongOnly')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'wrongOnly'
                  ? 'bg-white text-rose-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Nur falsche ({wrongCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Alle beantworteten ({totalAnswered})
            </button>
          </div>
        </div>

        {/* Schnellauswahl Aufklappen/Zuklappen */}
        {displayedAnswers.length > 0 && (
          <div className="flex items-center justify-end gap-3 mb-4 text-xs font-medium text-slate-500">
            <button
              type="button"
              onClick={expandAll}
              className="hover:text-indigo-600 cursor-pointer underline"
            >
              Alle Details aufklappen
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={collapseAll}
              className="hover:text-indigo-600 cursor-pointer underline"
            >
              Alle einklappen
            </button>
          </div>
        )}

        {/* Fragen-Auflistung */}
        {displayedAnswers.length === 0 ? (
          <div className="text-center py-12 px-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-emerald-950 mb-1">
              Keine Fehler vorhanden!
            </h3>
            <p className="text-sm text-emerald-700 max-w-md mx-auto">
              Sie haben alle Fragen dieser Runde ausnahmslos fehlerfrei gelöst.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {displayedAnswers.map((record) => {
              const q = record.question;
              const area = getAreaById(q.bereich);
              const isExpanded = expandedQuestionIds.has(q.id);
              const userOpt = q.optionen[record.selectedOptionIndex];
              const correctOpt = q.optionen.find((o) => o.korrekt);

              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all ${
                    record.isCorrect
                      ? 'border-emerald-200/80 bg-emerald-50/20'
                      : 'border-rose-200 bg-rose-50/20'
                  }`}
                >
                  {/* Fragen-Header */}
                  <div
                    onClick={() => toggleExpand(q.id)}
                    className="p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 rounded-2xl transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        {record.isCorrect ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600" />
                        )}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-slate-400 uppercase">
                            Frage #{q.id}
                          </span>
                          {area && (
                            <span className="text-[11px] font-medium text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                              Bereich {area.id}: «{area.titel}»
                            </span>
                          )}
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                              record.isCorrect
                                ? 'bg-emerald-100 text-emerald-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {record.isCorrect ? 'Richtig' : 'Falsch'}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {q.frage}
                        </h4>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>

                  {/* Ausklappbare Details */}
                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-200/60 space-y-3.5 text-sm">
                      {!record.isCorrect && (
                        <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-950">
                          <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-1">
                            Ihre gewählte Option ({userOpt?.buchstabe}):
                          </span>
                          <p className="font-semibold text-rose-900 mb-1">
                            {userOpt?.text}
                          </p>
                          <p className="text-xs text-rose-700 leading-relaxed">
                            <strong>Warum unzutreffend:</strong> {userOpt?.erklaerung}
                          </p>
                        </div>
                      )}

                      <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                          Korrekte Antwort ({correctOpt?.buchstabe}):
                        </span>
                        <p className="font-semibold text-emerald-900 mb-1">
                          {correctOpt?.text}
                        </p>
                        <p className="text-xs text-emerald-700 leading-relaxed">
                          <strong>Begründung:</strong> {correctOpt?.erklaerung}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
