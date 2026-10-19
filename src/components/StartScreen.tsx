import React from 'react';
import { THEMENBEREICHE } from '../data/areas';
import { Award, BookOpen, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

interface StartScreenProps {
  onStartQuiz: (questionCount: number) => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStartQuiz,
}) => {
  const options = [20, 40, 60];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      {/* Header Banner */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 border border-amber-500/20">
          <Sparkles className="w-4 h-4 text-amber-600" />
          Single-Choice-Lernquiz
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          «Führung und Verkaufspsychologie»
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Festigen Sie Ihr Fachwissen zu fundierten Managementmodellen, Führungsstilen,
          Mitarbeitermotivation, psychologischen Kaufmotiven und professioneller Verhandlungsführung.
        </p>
      </div>

      {/* Fragenanzahl-Wahl */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8 mb-10">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            Fragenanzahl wählen
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            Die Fragen werden zufällig aus allen Themenbereichen gezogen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {options.map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => onStartQuiz(count)}
              className="group relative flex flex-col items-center justify-center p-6 sm:p-8 rounded-xl border-2 border-slate-200 hover:border-indigo-600 bg-white hover:bg-indigo-50/30 text-slate-900 transition-all duration-200 text-center cursor-pointer shadow-sm hover:shadow focus:outline-none focus:ring-4 focus:ring-indigo-100"
            >
              <div className="text-3xl sm:text-4xl font-extrabold mb-1 font-heading text-slate-900 group-hover:text-indigo-600 transition-colors">
                {count}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                Fragen
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modus & Bewertungskriterien */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70">
          <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Faire Schichtung</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-normal">
            Verteilung nach dem Verfahren der größten Reste mit mindestens einer Frage pro aktivem Themenbereich.
          </p>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70">
          <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
            <BookOpen className="w-4 h-4 text-indigo-600" />
            <span>Fundierte Begründungen</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-normal">
            Nach jeder Antwort wird sofort erläutert, warum die Option richtig bzw. warum die Falschantwort unzutreffend ist.
          </p>
        </div>
        <div className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/70">
          <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Notenschlüssel</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-normal">
            Bewertung nach Noten von «Note 1 – Sehr Gut» (ab 89 %) bis «Note 5 – Nicht Genügend» mit ausführlicher Fehleranalyse.
          </p>
        </div>
      </div>

      {/* Themenbereiche Übersicht */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-8">
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900">
            Die 9 Themenbereiche des Gesamtpools
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {THEMENBEREICHE.map((bereich) => (
            <div
              key={bereich.id}
              className="p-3.5 rounded-xl border border-slate-200/80 bg-white hover:border-indigo-200 transition-all text-left shadow-xs"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  Bereich {bereich.id}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Fragen {bereich.bereichVonBis[0]}–{bereich.bereichVonBis[1]}
                </span>
              </div>
              <div className="text-sm font-semibold text-slate-900 mb-1 leading-snug">
                «{bereich.titel}»
              </div>
              <div className="text-xs text-slate-500 line-clamp-1">
                {bereich.beschreibung}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
