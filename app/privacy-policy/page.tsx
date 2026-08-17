import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { ShieldCheck, Lock, Eye, FileText, ChevronRight, ArrowLeft, Cookie, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Privacy Policy — ${SITE_NAME}`,
    description: "Comprehensive Privacy Policy outlining our data collection, processing, and protection protocols at EduGPA.",
    path: "/privacy-policy",
});

export default function PrivacyPolicy() {
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy - EduGPA.online",
        description: "Official Privacy Policy document for the EduGPA academic platform.",
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
                    <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-200">
                        <ShieldCheck className="w-4 h-4" />
                        Legally Binding Document
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
                        Effective Date: August 17, 2026. This comprehensive document details our commitment to safeguarding your academic and personal data.
                    </p>
                </div>
            </section>

            <section className="section bg-white pt-16 pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="bento-card bg-gradient-to-br from-emerald-500 to-teal-700 p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl border-none">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4 flex items-center gap-3 drop-shadow-sm">
                                    <Lock className="w-8 h-8 text-emerald-200" />
                                    Executive Summary
                                </h2>
                                <p className="text-emerald-50 text-base leading-relaxed font-medium">
                                    EduGPA operates on a principle of data minimization. We do not require account creation, nor do we permanently store your specific course grades on centralized servers. Calculations are performed locally on your device where possible. 
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "No Academic Data Sold to Third Parties",
                                    "Compliant with GDPR, CCPA & FERPA Guidelines",
                                    "Transparent Cookie & Ad Tracking Policies",
                                    "Strict Decentralized Processing Architecture"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-base font-bold text-white">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <ShieldCheck className="w-3 h-3 text-white" />
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
                                <Eye className="w-5 h-5 text-slate-400" />
                                1. Information Collection and Processing
                            </h2>
                            <p>
                                At EduGPA.online (accessible from https://edugpa.online), the privacy of our students, educators, and visitors is of paramount importance. This document details the types of information we collect, record, and how we utilize it to provide our academic calculation services.
                            </p>
                            <p>
                                <strong>Voluntarily Provided Data:</strong> When utilizing our calculators, the numerical data (credits, grade points, percentages) you input is processed strictly to generate the requested output. We do not permanently store this academic data in relational databases tied to your personal identity.
                            </p>
                            <p>
                                <strong>Automatically Collected Data:</strong> As is standard practice for modern web infrastructure, we collect technical metadata to ensure platform security and optimization. This includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP) routing, referring/exit pages, operating systems, and timestamp data.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Cookie className="w-5 h-5 text-slate-400" />
                                2. Cookies, Web Beacons, and Advertising
                            </h2>
                            <p>
                                EduGPA.online utilizes "cookies" to optimize the user experience. These small text files store user preferences and record the pages accessed during a session. This allows us to customize our web page content based on visitors' browser types and other non-identifying information.
                            </p>
                            <p><strong>Google DoubleClick DART Cookie:</strong></p>
                            <p>
                                Google is a designated third-party vendor on our platform. Google uses DART cookies to serve contextual advertisements to our site visitors based upon their visit to EduGPA.online and other sites on the internet. Visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy directly at: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a>.
                            </p>
                            <p><strong>Advertising Partners Privacy Policies:</strong></p>
                            <p>
                                Third-party ad servers or networks use technologies like cookies, JavaScript, or Web Beacons within their advertisements and links appearing on EduGPA.online. These technologies are sent directly to users' browsers, automatically receiving your IP address in the process. They are utilized to measure the effectiveness of advertising campaigns and to personalize the advertising content you encounter. EduGPA.online exercises no access to or control over these cookies used by third-party advertisers.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Globe className="w-5 h-5 text-slate-400" />
                                3. Consumer Privacy Rights (CCPA & GDPR)
                            </h2>
                            <p>
                                We deeply respect international privacy frameworks. Depending on your jurisdiction, you may have specific rights regarding your personal data.
                            </p>
                            <p><strong>California Consumer Privacy Act (CCPA):</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>The right to request disclosure of the specific pieces of personal data we have collected.</li>
                                <li>The right to request the deletion of any personal data collected.</li>
                                <li>The right to demand that a business selling consumer data halts the sale of said data ("Do Not Sell My Personal Information").</li>
                            </ul>
                            <p><strong>General Data Protection Regulation (GDPR):</strong></p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Right to Access & Rectification:</strong> You may request copies of your personal data or request corrections to inaccurate information.</li>
                                <li><strong>Right to Erasure:</strong> You may request that we erase your personal data under specific conditions.</li>
                                <li><strong>Right to Restrict or Object to Processing:</strong> You possess the right to restrict or entirely object to our processing of your personal data under certain conditions.</li>
                            </ul>
                            <p>
                                To exercise any of these rights, please contact our Data Protection Officer via the Contact page. We are legally bound to respond within 30 days of receipt.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <FileText className="w-5 h-5 text-slate-400" />
                                4. Children's Information Protection
                            </h2>
                            <p>
                                Adding protection for children while using the internet is a core priority. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                            </p>
                            <p>
                                EduGPA.online does not knowingly collect any Personally Identifiable Information from children under the age of 13. If you believe your child provided this kind of information on our website, we strongly encourage you to contact us immediately, and we will execute our best efforts to promptly remove such information from our records.
                            </p>
                        </div>

                        <div className="pt-12 mt-12 border-t border-slate-200">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Submit a Data Subject Access Request (DSAR)
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
