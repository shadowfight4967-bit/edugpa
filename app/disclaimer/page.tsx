import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { AlertTriangle, Info, FileText, ShieldAlert, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Disclaimer — ${SITE_NAME}`,
    description: "Important disclaimer regarding the use of our GPA calculator and educational tools.",
    path: "/disclaimer",
});

export default function Disclaimer() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Disclaimer - EduGPA.online",
        description: "Educational disclaimer for the EduGPA platform.",
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
                        <AlertTriangle className="w-5 h-5" />
                        Educational Advisory
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic leading-[0.95] animate-fade-in-up">
                        Legal <br /> <span className="gradient-text">Disclaimer</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100 font-bold italic opacity-70">
                        Information provided is for educational guidance, not official academic certification.
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
                                        <Info className="w-8 h-8 text-blue-400" />
                                        Summary
                                    </h2>
                                    <p className="text-slate-400 text-lg font-bold leading-relaxed mb-0 italic">
                                        All the information on this website - EduGPA.online - is published in good faith and for general information and educational purposes only.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "No Academic Warranties",
                                        "Results Are Estimates",
                                        "Verify With Institution",
                                        "Use At Own Risk"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 shadow-inner flex items-center justify-center text-blue-400">
                                                <AlertTriangle className="w-4 h-4" />
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
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    01. General Disclaimer
                                </h2>
                                <p>
                                    EduGPA.online does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (EduGPA.online), is strictly at your own risk. EduGPA.online will not be liable for any losses and/or damages in connection with the use of our website.
                                </p>
                                <p>
                                    While we strive to provide accurate GPA estimation tools based on standard academic algorithms, grading scales and policies vary greatly by institution. You should always consult your school&apos;s official registrar, transcript, or academic advisor for official grade calculations.
                                </p>
                            </div>

                            <div id="links" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 shadow-sm border border-white/50">
                                        <Info className="w-6 h-6" />
                                    </div>
                                    02. External Links
                                </h2>
                                <p>
                                    From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone &apos;bad&apos;.
                                </p>
                                <p>
                                    Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &quot;Terms of Service&quot; before engaging in any business or uploading any information.
                                </p>
                            </div>

                            <div id="consent" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 shadow-sm border border-white/50">
                                        <ShieldAlert className="w-6 h-6" />
                                    </div>
                                    03. Consent
                                </h2>
                                <p>
                                    By using our website, you hereby consent to our disclaimer and agree to its terms. If you require any more information or have any questions about our site&apos;s disclaimer, please feel free to contact us.
                                </p>
                            </div>

                            <div id="updates" className="space-y-6">
                                <h2 className="text-3xl font-black text-slate-900 m-0 uppercase tracking-tight italic">04. Updates</h2>
                                <p>
                                    Should we update, amend or make any changes to this document, those changes will be prominently posted here.
                                </p>
                                <div className="p-6 rounded-2xl bg-slate-900 text-white inline-block font-black uppercase text-[10px] tracking-widest shadow-xl">
                                    Last Revised: August 2026
                                </div>
                            </div>

                            <div className="pt-20 border-t border-white/40">
                                <Link href="/contact" className="text-blue-600 font-black text-xl italic flex items-center gap-4 hover:gap-8 transition-all group uppercase tracking-widest leading-none">
                                    Contact Support
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
