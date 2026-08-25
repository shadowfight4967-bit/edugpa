import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { Scale, BookOpen, AlertCircle, FileText, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Terms and Conditions`,
    description: "Binding legal terms and conditions governing the use of the EduGPA academic calculation platform.",
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

            <section className="pt-24 pb-16 relative overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-8 hover:text-blue-800 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Return to Homepage
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border border-blue-200">
                        <Scale className="w-4 h-4" />
                        Platform Guidelines
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
                        These Terms and Conditions govern your access to and use of EduGPA.online. Please read these terms carefully before utilizing our calculation algorithms.
                    </p>
                </div>
            </section>

            <section className="section bg-white pt-16 pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bento-card bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl border-none">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4 flex items-center gap-3 drop-shadow-sm">
                                    <BookOpen className="w-8 h-8 text-blue-200" />
                                    Agreement Acceptance
                                </h2>
                                <p className="text-blue-50 text-base leading-relaxed font-medium">
                                    By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use EduGPA.online if you do not agree to accept all of the terms and conditions stated on this page.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Platform Provided 'As Is' Without Academic Warranty",
                                    "Intellectual Property Retained by EduGPA",
                                    "User Bears Responsibility for Final Submission",
                                    "Strict Acceptable Use Policy Enforced"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-base font-bold text-white">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <Scale className="w-3 h-3 text-white" />
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
                                1. Interpretation and Definitions
                            </h2>
                            <p>
                                The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice: "Client", "You", and "Your" refers to you, the person logging onto this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us", refers to our Company. 
                            </p>
                            <p>
                                All terms refer to the offer, acceptance, and consideration of payment (or usage of free services) necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of the provision of the Company’s stated services, in accordance with and subject to prevailing law.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <AlertCircle className="w-5 h-5 text-slate-400" />
                                2. Intellectual Property Rights
                            </h2>
                            <p>
                                Unless otherwise stated, EduGPA.online and/or its licensors own the intellectual property rights for all material on EduGPA.online, including but not limited to the underlying proprietary calculation algorithms, UI/UX design, academic guides, and graphical assets. All intellectual property rights are reserved.
                            </p>
                            <p>You may access this from EduGPA.online for your own personal educational use subjected to restrictions set in these terms and conditions. You must not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Republish material from EduGPA.online in academic papers without citation.</li>
                                <li>Sell, rent, or sub-license material or software components from EduGPA.online.</li>
                                <li>Reproduce, duplicate, reverse-engineer, or copy proprietary calculation algorithms.</li>
                                <li>Redistribute content from EduGPA.online without express written permission.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <BookOpen className="w-5 h-5 text-slate-400" />
                                3. Acceptable Use Policy
                            </h2>
                            <p>
                                You agree to use the EduGPA platform solely for lawful educational and academic tracking purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or its content.
                            </p>
                            <p>
                                Automated scraping, data mining, or the use of automated testing frameworks (bots) against our calculation endpoints without prior authorization is strictly prohibited and may result in permanent IP blocking and legal action.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Scale className="w-5 h-5 text-slate-400" />
                                4. Limitation of Liability & iFrames
                            </h2>
                            <p>
                                We shall not be held responsible for any content that appears on your Website if you link to us. You agree to protect and defend us against all claims that arise on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of any third-party rights.
                            </p>
                            <p>
                                Without prior approval and written permission, you may not create frames (iFrames) around our Webpages that alter in any way the visual presentation or appearance of our Website.
                            </p>
                            <p>
                                In no event shall EduGPA.online, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website. EduGPA.online shall not be held liable for any indirect, consequential, or special liability arising out of your use of this Website, including scholarship rejections, university admission denials, or academic probation stemming from reliance on estimated calculations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Scale className="w-5 h-5 text-slate-400" />
                                5. Governing Law and Jurisdiction
                            </h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws applicable to online educational information services, without regard to conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                            </p>
                            <p>
                                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between you and EduGPA.online regarding the use of our academic calculation platform.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <AlertCircle className="w-5 h-5 text-slate-400" />
                                6. Frequently Asked Questions About These Terms
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Can I embed your calculators on my own website?</h3>
                                    <p>
                                        No. Embedding our tools via iFrames or any form of direct code reproduction without prior written permission is a violation of our intellectual property rights. If you are an educational institution interested in a partnership or integration, please <a href="/contact">contact our team</a> to discuss licensing arrangements.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Can I link to your tools from my blog or academic website?</h3>
                                    <p>
                                        Yes. We encourage organic backlinking to our tools and guides. You are free to reference and link to any page on EduGPA.online, provided you do not misrepresent our content or imply official affiliation with any specific university.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">How often are these terms updated?</h3>
                                    <p>
                                        We review and update these Terms and Conditions periodically to reflect changes in our platform, services, or legal requirements. Continued use of the platform after a revision constitutes acceptance of the updated terms. Major changes will be announced via a notice on the homepage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-12 mt-12 border-t border-slate-200">
                            <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                                Legal Inquiries Contact
                                <ChevronRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
