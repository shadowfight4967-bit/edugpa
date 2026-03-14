import Link from "next/link";
import { Home, ArrowLeft, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden bg-slate-50">
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-30" />

            <div className="max-w-md w-full text-center relative z-10">
                <div className="relative mb-12">
                    <h1 className="text-[12rem] font-black text-slate-200 leading-none select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-3xl bg-white shadow-2xl flex items-center justify-center animate-bounce border border-slate-100">
                            <AlertCircle className="w-12 h-12 text-blue-600" />
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Page Not Found</h2>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">
                    The academic resource you&apos;re looking for might have been moved, renamed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col gap-4">
                    <Link href="/" className="btn-primary w-full shadow-lg shadow-blue-500/20">
                        <Home className="w-5 h-5" />
                        Return to Homepage
                    </Link>
                    <Link href="/guides" className="btn-secondary w-full">
                        <Search className="w-5 h-5" />
                        Search All Guides
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-blue-300 rounded-full opacity-50" />
            <div className="absolute bottom-40 right-20 w-3 h-3 bg-indigo-300 rounded-full opacity-50" />
        </div>
    );
}
