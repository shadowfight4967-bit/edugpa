import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { Scale, BookOpen, AlertCircle, FileText, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Terms and Conditions — ${SITE_NAME}`,
    description: "Terms and Conditions outlining the rules, regulations, and guidelines for using EduGPA.online.",
    path: "/terms-and-conditions",
});

export default function TermsAndConditions() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms and Conditions - EduGPA.online",
        description: "Terms and conditions for using the EduGPA platform.",
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
                        <Scale className="w-5 h-5" />
                        Platform Guidelines
                    </div>
                    <h1 className="text-5xl md:text-9xl font-black text-slate-900 mb-10 tracking-tighter uppercase italic leading-[0.95] animate-fade-in-up">
                        Terms & <br /> <span className="gradient-text">Conditions</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100 font-bold italic opacity-70">
                        The rules and regulations for the use of our educational tools.
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
                                        <BookOpen className="w-8 h-8 text-blue-400" />
                                        Summary
                                    </h2>
                                    <p className="text-slate-400 text-lg font-bold leading-relaxed mb-0 italic">
                                        By accessing this website we assume you accept these terms and conditions. Do not continue to use EduGPA.online if you do not agree to take all of the terms and conditions stated on this page.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {[
                                        "Educational Purposes Only",
                                        "No Warranty of Accuracy",
                                        "User Responsibility",
                                        "Acceptable Use Policy"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm font-black uppercase tracking-widest">
                                            <div className="w-6 h-6 rounded-full bg-blue-500/20 shadow-inner flex items-center justify-center text-blue-400">
                                                <Scale className="w-4 h-4" />
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
                                    01. Introduction
                                </h2>
                                <p>
                                    Welcome to EduGPA.online. These terms and conditions outline the rules and regulations for the use of EduGPA.online&apos;s Website.
                                </p>
                                <p>
                                    The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions.
                                </p>
                            </div>

                            <div id="cookies" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 shadow-sm border border-white/50">
                                        <AlertCircle className="w-6 h-6" />
                                    </div>
                                    02. Cookies
                                </h2>
                                <p>
                                    We employ the use of cookies. By accessing EduGPA.online, you agreed to use cookies in agreement with the EduGPA.online&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                                </p>
                            </div>

                            <div id="license" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-600/10 flex items-center justify-center text-orange-600 shadow-sm border border-white/50">
                                        <BookOpen className="w-6 h-6" />
                                    </div>
                                    03. License & IP
                                </h2>
                                <p>
                                    Unless otherwise stated, EduGPA.online and/or its licensors own the intellectual property rights for all material on EduGPA.online. All intellectual property rights are reserved. You may access this from EduGPA.online for your own personal use subjected to restrictions set in these terms and conditions.
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Republish material from EduGPA.online</li>
                                    <li>Sell, rent or sub-license material from EduGPA.online</li>
                                    <li>Reproduce, duplicate or copy material from EduGPA.online</li>
                                    <li>Redistribute content from EduGPA.online</li>
                                </ul>
                            </div>

                            <div id="hyperlinking" className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-black text-slate-900 flex items-center gap-4 m-0 uppercase tracking-tighter italic">
                                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-600 shadow-sm border border-white/50">
                                        <Scale className="w-6 h-6" />
                                    </div>
                                    04. Liability & Links
                                </h2>
                                <p className="font-bold">iFrame and Content Liability</p>
                                <p>
                                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website. We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website.
                                </p>
                                <p className="font-bold">Reservation of Rights</p>
                                <p>
                                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
                                </p>
                            </div>

                            <div id="updates" className="space-y-6">
                                <h2 className="text-3xl font-black text-slate-900 m-0 uppercase tracking-tight italic">05. Updates</h2>
                                <p>
                                    We reserve the right to amend these terms and conditions and it&apos;s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                                </p>
                                <div className="p-6 rounded-2xl bg-slate-900 text-white inline-block font-black uppercase text-[10px] tracking-widest shadow-xl">
                                    Last Revised: August 2026
                                </div>
                            </div>

                            <div className="pt-20 border-t border-white/40">
                                <Link href="/contact" className="text-blue-600 font-black text-xl italic flex items-center gap-4 hover:gap-8 transition-all group uppercase tracking-widest leading-none">
                                    Contact Us For Questions
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
