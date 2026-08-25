import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { Target, Users, ShieldCheck, Heart, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `About Our Mission — ${SITE_NAME}`,
    description: "Learn about the mission behind EduGPA.online and our dedication to providing accurate academic tracking and conversion tools.",
    path: "/about",
});

export default function AboutPage() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About EduGPA.online",
        description: "EduGPA.online is an independent utility platform for academic grade conversion and tracking.",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
    };

    const values = [
        {
            title: "Accuracy First",
            desc: "Our formulas are meticulously derived from official university registrar guidelines.",
            Icon: Target,
            color: "text-violet-600 bg-white shadow-sm",
        },
        {
            title: "Clarity Over Complexity",
            desc: "We simplify dense academic jargon so you can focus on your actual studies.",
            Icon: Users,
            color: "text-fuchsia-600 bg-white shadow-sm",
        },
        {
            title: "Student Centric",
            desc: "Every feature we build is designed to solve real academic planning problems.",
            Icon: Heart,
            color: "text-pink-600 bg-white shadow-sm",
        },
        {
            title: "Data Integrity",
            desc: "Your grades are completely private. We never store personal academic data.",
            Icon: ShieldCheck,
            color: "text-purple-500 bg-white shadow-sm",
        },
    ];

    return (
        <>
            <JsonLd data={aboutSchema} />

            <section className="bg-slate-50 pt-20 pb-12 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white text-slate-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm border border-slate-200">
                        <GraduationCap className="w-4 h-4 text-violet-600" />
                        Our Mission
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        About EduGPA.online
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Dedicated to academic transparency and providing reliable tools for students navigating complex grading systems.
                    </p>
                </div>
            </section>

            <section className="section bg-white pt-16 pb-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="bento-card bg-gradient-to-br from-violet-600 to-fuchsia-700 p-8 md:p-12 text-white mb-16 relative overflow-hidden shadow-2xl border-none">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-black mb-4 drop-shadow-sm">
                                    Our Core Philosophy
                                </h2>
                                <p className="text-violet-50 text-base leading-relaxed font-medium">
                                    "We believe every student deserves to understand their academic standing clearly, without needing to navigate complex, obscure mathematical formulas."
                                </p>
                            </div>
                            <div className="space-y-4">
                                {values.slice(0, 3).map((v, i) => (
                                    <div key={i} className="flex items-start gap-3 text-base font-bold text-white">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                                            <v.Icon className="w-3 h-3 text-white" />
                                        </div>
                                        {v.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Decorative background blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-20 -mt-20 rounded-full" />
                    </div>

                    <div className="prose prose-slate max-w-none text-slate-700 space-y-12 prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600">
                        <div>
                            <h2>An Independent Educational Utility Built for Students</h2>
                            <p>
                                <strong>Our Story:</strong> EduGPA.online was established to address a recurring, frustrating pattern in academia. Year after year, highly capable students miss out on merit-based scholarships, international internships, and graduate school admissions simply because they lack the tools to accurately track or convert their academic standing.
                            </p>
                            <p>
                                When calculating a Cumulative Grade Point Average (CGPA) or converting a raw percentage for a foreign university application, a mathematical error of 0.1 can be the difference between an acceptance letter and an automated rejection. We built this platform to ensure that never happens to you.
                            </p>
                            
                            <h3>Why Trust Our Tools?</h3>
                            <p>
                                As an independent educational platform, we are wholly focused on providing calculators that strictly adhere to official university grading algorithms. 
                            </p>
                            <ul>
                                <li><strong>No Approximations:</strong> Our tools do not rely on rough estimates. They are programmed to mirror the exact weighted mathematics utilized by university examination boards, such as the standard 10-point scales used globally.</li>
                                <li><strong>Verified Conversion Logic:</strong> Our percentage-to-GPA converters utilize established, universally recognized grading brackets (such as those referenced by global credential evaluators) to provide the most accurate estimations possible.</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Privacy by Design</h2>
                            <p>
                                We fundamentally believe that your academic data belongs to you, and you alone. Unlike many educational platforms that harvest student data for marketing purposes, EduGPA.online is built entirely on modern client-side technologies. 
                            </p>
                            <p>
                                This architecture means that when you use our calculators, the mathematical operations are executed directly within your own web browser. <strong>We do not collect, transmit, or store your course grades, CGPA, or personal academic standing on any external servers.</strong> Your privacy is mathematically guaranteed by our infrastructure.
                            </p>
                        </div>

                        {/* Founder Section */}
                        <div className="not-prose mt-16 mb-8">
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start shadow-sm relative overflow-hidden">
                                {/* Decorative background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 blur-[50px] rounded-full" />
                                
                                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100 border-4 border-white shadow-lg flex-shrink-0 flex items-center justify-center relative z-10">
                                    <span className="text-3xl md:text-5xl font-black text-violet-600">MA</span>
                                </div>
                                
                                <div className="text-center md:text-left relative z-10">
                                    <h3 className="text-2xl font-black text-slate-900 mb-1">Muhammad Amir</h3>
                                    <p className="text-violet-600 font-bold text-sm uppercase tracking-wider mb-4">Founder & Lead Developer</p>
                                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                                        As an active student and developer, Muhammad experienced firsthand the frustration of navigating complex, localized grading systems when applying for international opportunities. He built EduGPA to solve a critical problem: the lack of a unified, mathematically accurate tool for global grade conversion. Combining his academic insight with technical expertise, he created this platform to empower millions of students to take control of their academic trajectory without sacrificing their data privacy.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 grid sm:grid-cols-2 gap-6 not-prose">
                            {values.map((v, i) => (
                                <div key={i} className="bento-card p-6 bg-slate-50 border-slate-200">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 ${v.color}`}>
                                        <v.Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-slate-900 font-bold text-lg mb-2">{v.title}</h3>
                                    <p className="text-sm leading-relaxed text-slate-600 m-0">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 bento-card p-10 bg-slate-900 text-center text-white relative overflow-hidden shadow-xl border-none">
                        <div className="relative z-10">
                            <h3 className="text-2xl font-black mb-4">Have Questions or Feedback?</h3>
                            <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto font-medium">We continually refine our tools based on user feedback. If you notice a discrepancy with a specific university grading scale, let us know.</p>
                            <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-slate-100 inline-flex text-sm font-bold px-8 py-3 shadow-sm group">
                                Contact Us
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-600/20 blur-[80px] -ml-20 -mb-20 rounded-full" />
                    </div>

                </div>
            </section>
        </>
    );
}
