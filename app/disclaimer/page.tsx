import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { AlertTriangle, Info, FileText, ShieldAlert, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Disclaimer — ${SITE_NAME}`,
    description: "Official legal and educational disclaimer for the EduGPA academic platform.",
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

            <section className="pt-24 pb-16 relative overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-8 hover:text-blue-800 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Return to Homepage
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border border-amber-200">
                        <AlertTriangle className="w-4 h-4" />
                        Educational Advisory
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        Legal Disclaimer
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
                        Information provided by EduGPA.online is strictly for educational guidance and estimation purposes, not official academic certification.
                    </p>
                </div>
            </section>

            <section className="section bg-white pt-16 pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bento-card bg-gradient-to-br from-amber-500 to-orange-600 p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl border-none">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4 flex items-center gap-3 drop-shadow-sm">
                                    <ShieldAlert className="w-8 h-8 text-amber-100" />
                                    Notice of Non-Affiliation
                                </h2>
                                <p className="text-amber-50 text-base leading-relaxed font-medium">
                                    EduGPA.online is an independent utility platform. We are not officially affiliated with, authorized, maintained, sponsored, or endorsed by any specific university, college, or educational governing body.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "No Guarantees of Absolute Academic Accuracy",
                                    "Results Are Estimates for Planning Purposes",
                                    "Always Verify With Your Institution's Registrar",
                                    "Platform Assumes No Liability for External Decisions"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-base font-bold text-white">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <AlertTriangle className="w-3 h-3 text-white" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative background blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-20 -mt-20 rounded-full" />
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 space-y-12 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <FileText className="w-5 h-5 text-slate-400" />
                                1. General Educational Disclaimer
                            </h2>
                            <p>
                                All the information on this website - EduGPA.online - is published in good faith and strictly for general information and educational planning purposes only. EduGPA.online does not make any absolute warranties about the completeness, reliability, and accuracy of this information. 
                            </p>
                            <p>
                                While we utilize standard algorithmic models recognized by international grading systems (e.g., standard 4.0 scale, WES conversions), institutional grading policies vary wildly. Factors such as specific credit weighting, grade forgiveness policies, and plus/minus valuation are uniquely determined by your specific educational institution.
                            </p>
                            <p>
                                <strong>Any action you take upon the information you find on this website is strictly at your own risk.</strong> EduGPA.online will not be liable for any losses and/or damages in connection with the use of our website, including miscalculated scholarship eligibility, graduation prerequisites, or program admittance.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Info className="w-5 h-5 text-slate-400" />
                                2. External Links & Third-Party Content
                            </h2>
                            <p>
                                From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful, ethical, and academically relevant websites, we possess no control over the content and nature of these sites.
                            </p>
                            <p>
                                These links to other websites do not imply a blanket recommendation or endorsement for all the content found on these sites. Site owners and content may undergo changes without notice and may occur before we have the opportunity to remove a link which may have gone 'bad' or been compromised.
                            </p>
                            <p>
                                Please also be aware that when you leave our website, other sites may operate under different privacy policies and terms of service which are entirely beyond our control. Please be sure to check the Privacy Policies of these external sites as well as their "Terms of Service" before engaging in any business, downloading software, or uploading any personal academic information.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <ShieldAlert className="w-5 h-5 text-slate-400" />
                                3. Fair Use & Consent
                            </h2>
                            <p>
                                This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance the understanding of educational metrics and international grading scales. We believe this constitutes a 'fair use' of any such copyrighted material.
                            </p>
                            <p>
                                By utilizing our website and its associated tools, you hereby consent to our disclaimer and agree to its terms in their entirety.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Info className="w-5 h-5 text-slate-400" />
                                4. Frequently Asked Questions
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Are your calculator results officially certified?</h3>
                                    <p>
                                        No. Our calculators provide highly accurate mathematical estimates based on the data you input. They are designed for personal academic planning and self-assessment. For official academic documentation — such as transcripts required for graduate school admissions or credential evaluations — you must contact your university registrar or a certified evaluation service like WES (World Education Services).
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Why might my calculated CGPA differ from my university portal?</h3>
                                    <p>
                                        Universities occasionally apply internal policies that affect GPA calculations in ways that are not publicly documented. These include grade forgiveness programs (where a retaken course replaces the original grade), rounding conventions, and the exclusion of specific course types (such as pass/fail courses or transfer credits). Our calculator uses standard weighted-average mathematics and cannot account for institution-specific policies.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Can I rely on the percentage-to-GPA conversion for my study abroad application?</h3>
                                    <p>
                                        Our <a href="/percentage-to-gpa">Percentage to GPA Converter</a> uses standard international brackets recognized by major credential evaluation organizations. It provides an excellent estimate for personal screening purposes. However, if a university requires an official GPA conversion, they will typically request a paid evaluation from an accredited agency rather than accepting self-reported conversions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 mt-12 border-t border-slate-200">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Contact Support for Clarifications
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
