"use client";

import { useState, useMemo } from "react";
import { Plus, X, Calculator, RefreshCw } from "lucide-react";

interface Semester {
  id: string;
  name: string;
  sgpa: number | "";
  credits: number | "";
}

export default function SRMCGPACalculator() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: "1", name: "Sem 1", sgpa: "", credits: "" },
    { id: "2", name: "Sem 2", sgpa: "", credits: "" },
    { id: "3", name: "Sem 3", sgpa: "", credits: "" },
  ]);

  const addSemester = () => {
    setSemesters((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        name: `Sem ${prev.length + 1}`,
        sgpa: "",
        credits: "",
      },
    ]);
  };

  const removeSemester = (id: string) => {
    if (semesters.length > 1) {
      setSemesters((prev) => prev.filter((s) => s.id !== id).map((s, idx) => ({ ...s, name: `Sem ${idx + 1}` })));
    }
  };

  const updateSemester = (id: string, field: keyof Semester, value: number | "") => {
    setSemesters((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const resetForm = () => {
    setSemesters([
      { id: "1", name: "Sem 1", sgpa: "", credits: "" },
      { id: "2", name: "Sem 2", sgpa: "", credits: "" },
      { id: "3", name: "Sem 3", sgpa: "", credits: "" },
    ]);
  };

  const { overallCGPA, totalCredits, percentage } = useMemo(() => {
    let totalQualityPoints = 0;
    let sumCredits = 0;

    semesters.forEach((sem) => {
      if (typeof sem.sgpa === "number" && typeof sem.credits === "number" && sem.sgpa >= 0 && sem.credits > 0) {
        totalQualityPoints += sem.sgpa * sem.credits;
        sumCredits += sem.credits;
      }
    });

    const cgpa = sumCredits > 0 ? totalQualityPoints / sumCredits : 0;
    
    return {
      overallCGPA: cgpa.toFixed(2),
      totalCredits: sumCredits,
      percentage: (cgpa * 10).toFixed(1), // Competitor uses CGPA * 10
    };
  }, [semesters]);

  return (
    <div className="bento-card border-none shadow-2xl bg-white overflow-hidden max-w-3xl mx-auto w-full my-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8 text-white relative overflow-hidden">
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shadow-inner">
            <Calculator className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight">SRM CGPA Calculator</h2>
            <p className="text-slate-400 text-sm mt-1">Calculate your cumulative grade point average instantly.</p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] -mr-20 -mt-20 rounded-full" />
      </div>

      {/* Calculator Body */}
      <div className="p-6 md:p-8 bg-slate-50">
        
        {/* Table Headers */}
        <div className="grid grid-cols-12 gap-4 mb-4 text-xs font-bold text-slate-500 uppercase tracking-widest px-2">
          <div className="col-span-3">Semester</div>
          <div className="col-span-4">SGPA (0-10)</div>
          <div className="col-span-4">Credits</div>
          <div className="col-span-1 text-center">Action</div>
        </div>

        {/* Rows */}
        <div className="space-y-3 mb-8">
          {semesters.map((sem) => (
            <div key={sem.id} className="grid grid-cols-12 gap-3 md:gap-4 items-center bg-white p-3 rounded-xl border border-slate-200 shadow-sm transition-all hover:border-blue-300 hover:shadow-md">
              <div className="col-span-3">
                <span className="font-semibold text-slate-700">{sem.name}</span>
              </div>
              <div className="col-span-4">
                <input
                  type="number"
                  min="0"
                  max="10"
                  step="0.01"
                  placeholder="e.g. 8.5"
                  value={sem.sgpa}
                  onChange={(e) => updateSemester(sem.id, "sgpa", e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="col-span-4">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 24"
                  value={sem.credits}
                  onChange={(e) => updateSemester(sem.id, "credits", e.target.value === "" ? "" : Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="col-span-1 flex justify-center">
                <button
                  onClick={() => removeSemester(sem.id)}
                  disabled={semesters.length === 1}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Remove semester"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
          <button
            onClick={addSemester}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Semester
          </button>
          
          <button
            onClick={resetForm}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-700 px-4 py-2 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Reset Data
          </button>
        </div>
      </div>

      {/* Results Footer */}
      <div className="bg-white border-t border-slate-200 p-6 md:p-8">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Credits</p>
            <p className="text-3xl font-black text-slate-900">{totalCredits}</p>
          </div>
          <div className="col-span-1 text-center p-4 rounded-xl bg-blue-50 border border-blue-100">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Overall CGPA</p>
            <p className="text-3xl font-black text-blue-700">{overallCGPA}</p>
          </div>
          <div className="col-span-1 text-center p-4 rounded-xl bg-emerald-50 border border-emerald-100">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Percentage</p>
            <p className="text-3xl font-black text-emerald-700">{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
