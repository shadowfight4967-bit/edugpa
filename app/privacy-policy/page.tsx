import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { ShieldCheck, Lock, Eye, FileText, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Privacy Policy — ${SITE_NAME}`,
    description: "Our commitment to data privacy and academic integrity. Learn how we protect your information at EduGPA.online.",
    path: "/privacy-policy",
});

export default function PrivacyPolicy() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy - EduGPA.online",
        description: "Detailed privacy policy for the EduGPA.online platform.",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
    };

    return (
        <>
            <JsonLd data={websiteSchema} />

            {/* Hero Header */}
            <section className="pt-24 pb-16 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <Link href="/" className="inline-flex items-center gap-3 text-sm font-black text-blue-600 mb-12 hover:gap-6 transition-all group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                        Homepage Sync
                    </Link>
                    <div className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-md text-emerald-700 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl shadow-emerald-500/10 border border-white/50">
                        <ShieldCheck className="w-5 h-5" />
                        Verified Compliance Protocol
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic leading-[0.95] animate-fade-in-up">
                        Privacy <br /> <span className="gradient-text">Encrypted</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100 font-bold italic opacity-70">
                        Our commitment to academic integrity means your personal data is never reached, tracked, or traded.
                    </p>
                </div>
            </section>

            {/* Main Content Glass Reader */}
            <section className="section bg-transparent pt-0 pb-40">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="card-glass p-8 md:p-16 shadow-2xl border-white/80">
                        {/* Summary Box Dark Glass */}
                        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white mb-24 shadow-2xl relative overflow-hidden">
                            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <h2 className="text-3xl font-black mb-8 flex items-center gap-4 uppercase tracking-tight italic">
                                        <Lock className="w-8 h-8 text-blue-400" />
                                        Summary
                                    </h2>
                                    <p className="text-slate-400 text-lg font-bold leading-relaxed mb-0 italic">
                                        No grade storage. No personal tracking. Zero commercial trading of student data. Pure static infrastructure.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Offline Calculation Engines",
                                        "Anonymized Protocol Logs",
                                        "High-Secure Vercel Hosting",
                                        "GDPR & CCPA Verified"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 shadow-inner flex items-center justify-center text-blue-400">
                                                <ShieldCheck className="w-4 h-4" />
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] -mr-48 -mt-48" />
                        </div>

                        <div className="prose prose-slate prose-xl max-w-none text-slate-700 font-medium space-y-16">

                            <div id="intro" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 shadow-sm border border-white/50">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    01. Protocol
                                </h2>
                                <p>
                                    EduGPA.online (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respect your privacy as a student and scholar. This Protocol describes how technical logs are handled when you synchronize with our platform.
                                </p>
                            </div>

                            <div id="data" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 shadow-sm border border-white/50">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    02. Encryption
                                </h2>
                                <p>
                                    Every calculation on EduGPA is processed locally within your environment. We do not maintain any centralized server database for grades or individual results.
                                </p>
                            </div>

                            <div id="analytics" className="space-y-6">
                                <h2 className="text-3xl font-black text-slate-900 m-0 uppercase tracking-tight italic">03. Machine Logs</h2>
                                <p>
                                    We utilize decentralized analytics to monitor platform stability. This stream is stripped of all personal identifiers before ingestion.
                                </p>
                            </div>

                            <div id="updates" className="space-y-6">
                                <h2 className="text-3xl font-black text-slate-900 m-0 uppercase tracking-tight italic">04. Updates</h2>
                                <p>
                                    Standard updates to this protocol are released quarterly.
                                </p>
                                <div className="p-6 rounded-2xl bg-slate-900 text-white inline-block font-black uppercase text-[10px] tracking-widest shadow-xl">
                                    Last Stream Revised: March 2026
                                </div>
                            </div>

                            <div className="pt-20 border-t border-white/40">
                                <Link href="/contact" className="text-blue-600 font-black text-xl italic flex items-center gap-4 hover:gap-8 transition-all group uppercase tracking-widest leading-none">
                                    Legal Inquiry Access
                                    <ChevronRight className="w-8 h-8 group-hover:scale-150 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
