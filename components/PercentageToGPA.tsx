"use client";

import { useState, useMemo } from "react";
import { ArrowRight, Calculator, RefreshCw } from "lucide-react";

export default function PercentageToGPA() {
  const [percentage, setPercentage] = useState<number | "">("");

  const calculateGrades = (pct: number) => {
    // 4.0 Scale Approximation (US Standard)
    let gpa4 = 0.0;
    if (pct >= 93) gpa4 = 4.0;
    else if (pct >= 90) gpa4 = 3.7;
    else if (pct >= 87) gpa4 = 3.3;
    else if (pct >= 83) gpa4 = 3.0;
    else if (pct >= 80) gpa4 = 2.7;
    else if (pct >= 77) gpa4 = 2.3;
    else if (pct >= 73) gpa4 = 2.0;
    else if (pct >= 70) gpa4 = 1.7;
    else if (pct >= 67) gpa4 = 1.3;
    else if (pct >= 65) gpa4 = 1.0;
    else gpa4 = 0.0;

    // 10.0 Scale Approximation (India/Global)
    const gpa10 = pct / 9.5; // common formula: Percentage = CGPA * 9.5
    
    // Letter grade
    let letter = "F";
    if (pct >= 90) letter = "A";
    else if (pct >= 80) letter = "B";
    else if (pct >= 70) letter = "C";
    else if (pct >= 60) letter = "D";

    return {
      gpa4: gpa4.toFixed(1),
      gpa10: (gpa10 > 10 ? 10 : gpa10).toFixed(2),
      letter,
    };
  };

  const results = useMemo(() => {
    if (typeof percentage === "number" && percentage >= 0 && percentage <= 100) {
      return calculateGrades(percentage);
    }
    return { gpa4: "-", gpa10: "-", letter: "-" };
  }, [percentage]);

  return (
    <div className="bento-card border-none shadow-2xl bg-white overflow-hidden max-w-3xl mx-auto w-full my-12">
      <div className="bg-gradient-to-r from-emerald-700 to-teal-600 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shadow-inner">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">Percentage to GPA Converter</h2>
            <p className="text-emerald-100 text-sm mt-1">Instantly convert your percentage score to standard GPA scales.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-20 -mt-20 rounded-full" />
      </div>

      <div className="p-6 md:p-8 bg-slate-50">
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-bold text-slate-700 mb-2">Enter Percentage (%)</label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g. 85"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value === "" ? "" : Number(e.target.value))}
              className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-lg font-bold text-slate-900 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">%</div>
          </div>
        </div>

        <div className="flex justify-center mt-6">
           <button
             onClick={() => setPercentage("")}
             className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700 px-4 py-2 rounded-lg transition-colors"
           >
             <RefreshCw className="w-4 h-4" />
             Reset
           </button>
        </div>
      </div>

      <div className="bg-white border-t border-slate-200 p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-1 text-center p-6 rounded-2xl bg-emerald-50 border border-emerald-100">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">4.0 Scale GPA</p>
            <p className="text-4xl font-black text-emerald-700">{results.gpa4}</p>
          </div>
          <div className="col-span-1 text-center p-6 rounded-2xl bg-teal-50 border border-teal-100 relative">
            <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-slate-300" />
            </div>
            <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2">10.0 Scale CGPA</p>
            <p className="text-4xl font-black text-teal-700">{results.gpa10}</p>
          </div>
          <div className="col-span-1 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
            <div className="hidden md:block absolute -left-5 top-1/2 -translate-y-1/2 z-10">
              <ArrowRight className="w-6 h-6 text-slate-300" />
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Letter Grade</p>
            <p className="text-4xl font-black text-slate-800">{results.letter}</p>
          </div>
        </div>
        <p className="text-center text-xs text-slate-400 mt-6 max-w-lg mx-auto">
          Note: These conversions use standard estimations. Your university may use a slightly different formula. Always refer to your official registrar for exact calculations.
        </p>
      </div>
    </div>
  );
}
