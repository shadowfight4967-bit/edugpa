import Link from "next/link";
import { Home, Search, AlertCircle, Calculator, ArrowLeft } from "lucide-react";

export default function NotFound() {
    const popularResources = [
        { title: "CGPA Calculator", href: "/cgpa-calculator", desc: "Calculate your cumulative GPA instantly." },
        { title: "Percentage to GPA", href: "/percentage-to-gpa", desc: "Convert percentage marks to a 4.0 scale." },
        { title: "SRM CGPA Calculator", href: "/srm-cgpa-calculator", desc: "Official 10-point scale for SRM students." },
    ];

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden bg-slate-50">
            <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-30" />

            <div className="max-w-2xl w-full text-center relative z-10">
                <div className="relative mb-12">
                    <h1 className="text-[12rem] font-black text-slate-200 leading-none select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-3xl bg-white shadow-2xl flex items-center justify-center animate-bounce border border-slate-100">
                            <AlertCircle className="w-12 h-12 text-blue-600" />
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Page Not Found</h2>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium max-w-md mx-auto">
                    The academic resource you&apos;re looking for might have been moved, renamed, or is temporarily unavailable. Try one of our popular tools below.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
                    <Link href="/" className="btn-primary shadow-lg shadow-blue-500/20">
                        <Home className="w-5 h-5" />
                        Return to Homepage
                    </Link>
                    <Link href="/guides" className="btn-secondary">
                        <Search className="w-5 h-5" />
                        Browse All Guides
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                </div>

                {/* Popular Resources Grid */}
                <div className="text-left">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Popular Resources</h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {popularResources.map((resource, i) => (
                            <Link
                                key={i}
                                href={resource.href}
                                className="bento-card p-5 group hover:bg-blue-50/50 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <Calculator className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">{resource.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed">{resource.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-50" />
            <div className="absolute bottom-40 right-20 w-3 h-3 bg-indigo-300 rounded-full opacity-50" />
        </div>
    );
}
