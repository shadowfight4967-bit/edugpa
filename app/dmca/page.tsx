import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { ShieldAlert, FileText, ChevronRight, ArrowLeft, Mail, Gavel } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `DMCA Policy — ${SITE_NAME}`,
    description: "Digital Millennium Copyright Act (DMCA) policy and takedown request procedures for EduGPA.",
    path: "/dmca",
});

export default function DMCAPage() {
    const dmcaSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: `DMCA Policy - ${SITE_NAME}`,
        description: "Official DMCA Policy document for EduGPA.",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
    };

    return (
        <>
            <JsonLd data={dmcaSchema} />

            <section className="pt-24 pb-16 relative overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 mb-8 hover:text-blue-800 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Return to Homepage
                    </Link>
                    <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border border-red-200">
                        <ShieldAlert className="w-4 h-4" />
                        Copyright Protection
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
                        DMCA Policy
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
                        Effective Date: August 17, 2026. Procedures for reporting copyright infringement on EduGPA.online.
                    </p>
                </div>
            </section>

            <section className="section bg-white pt-16 pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="bento-card bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl border-none">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4 flex items-center gap-3 drop-shadow-sm">
                                    <Gavel className="w-8 h-8 text-blue-400" />
                                    Intellectual Property
                                </h2>
                                <p className="text-slate-300 text-base leading-relaxed font-medium">
                                    EduGPA respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA), we respond promptly to notices of alleged copyright infringement that comply with applicable intellectual property laws.
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    "Rapid Takedown Process",
                                    "Protection of Original Works",
                                    "Transparent Dispute Resolution"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 text-base font-bold text-white">
                                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <ShieldAlert className="w-3 h-3 text-white" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] -mr-20 -mt-20 rounded-full" />
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 space-y-12 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">
                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <FileText className="w-5 h-5 text-slate-400" />
                                1. Reporting Copyright Infringements
                            </h2>
                            <p>
                                If you believe that your intellectual property rights have been violated by EduGPA or by a third party who has uploaded materials to our website, please provide the following information to our designated copyright agent in writing:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>A description of the copyrighted work or other intellectual property that you claim has been infringed.</li>
                                <li>A description of where the material that you claim is infringing is located on the EduGPA website (including specific URLs).</li>
                                <li>An address, telephone number, and email address where we can contact you.</li>
                                <li>A statement that you have a good-faith belief that the use is not authorized by the copyright owner or other intellectual property rights owner, by its agent, or by law.</li>
                                <li>A statement by you under penalty of perjury that the information in your notice is accurate and that you are the copyright or intellectual property owner or are authorized to act on the owner's behalf.</li>
                                <li>Your electronic or physical signature.</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <Mail className="w-5 h-5 text-slate-400" />
                                2. Contact Information for Takedown Notices
                            </h2>
                            <p>
                                Please send all DMCA takedown requests via email to ensure the fastest processing time:
                            </p>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 inline-block font-bold">
                                Email: edugpa8@gmail.com
                            </div>
                            <p className="text-sm text-slate-500 mt-2">
                                Note: Misrepresentations of infringement can result in liability for monetary damages. Please consult an attorney before filing a notice to ensure your claims are legally sound.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl flex items-center gap-3 pb-2 border-b border-slate-100">
                                <ChevronRight className="w-5 h-5 text-slate-400" />
                                3. Counter-Notice Procedures
                            </h2>
                            <p>
                                If you believe that material you posted on the site was removed or access to it was disabled by mistake or misidentification, you may file a counter-notice with us by submitting written notification to our copyright agent containing the following information:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Your physical or electronic signature.</li>
                                <li>An identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access disabled.</li>
                                <li>Adequate information by which we can contact you (including your name, postal address, telephone number, and email address).</li>
                                <li>A statement under penalty of perjury by you that you have a good faith belief that the material identified above was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
