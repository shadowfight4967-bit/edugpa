import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { Target, Users, ShieldCheck, Heart, ArrowRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `About Our Mission — ${SITE_NAME}`,
    description: "Learn about the team behind EduGPA.online and our dedication to academic transparency and student success.",
    path: "/about",
});

export default function AboutPage() {
    const aboutSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About EduGPA.online",
        description: "EduGPA.online is a dedicated platform for academic grade conversion and tracking.",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
    };

    const values = [
        {
            title: "Accuracy First",
            desc: "Our formulas are derived from official university registrar guidelines across 20+ countries.",
            Icon: Target,
            color: "text-blue-600 bg-white/50",
        },
        {
            title: "Clarity Over Complexity",
            desc: "We simplify dense academic jargon so you can focus on your actual studies.",
            Icon: Users,
            color: "text-indigo-600 bg-white/50",
        },
        {
            title: "Student Centric",
            desc: "Every feature we build is tested by real students to ensure it solves a real problem.",
            Icon: Heart,
            color: "text-cyan-600 bg-white/50",
        },
        {
            title: "Data Integrity",
            desc: "Your grades are private. We never store personal academic data on our servers.",
            Icon: ShieldCheck,
            color: "text-blue-500 bg-white/50",
        },
    ];

    return (
        <>
            <JsonLd data={aboutSchema} />

            {/* Hero Header */}
            <section className="pt-24 pb-20 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md text-blue-700 px-5 py-2.5 rounded-full text-xs font-black mb-8 animate-fade-in shadow-xl shadow-blue-500/10 border border-white/50">
                        <GraduationCap className="w-4 h-4" />
                        Empowering the Next Generation
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 animate-fade-in-up tracking-tighter leading-tight uppercase italic">
                        Mission: <br /> <span className="gradient-text">Success</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-fade-in-up animation-delay-100 font-medium">
                        EduGPA was born out of a simple frustration: academic grading is unnecessarily complicated. We built the world&apos;s most transparent resource.
                    </p>
                </div>
            </section>

            {/* Main Content Glass Card */}
            <section className="section bg-transparent pt-0">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card-glass p-8 md:p-16 space-y-12">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-white font-black text-2xl md:text-4xl italic leading-tight m-0">
                                    &quot;We believe every student deserves to understand their academic standing without needing a degree in mathematics.&quot;
                                </p>
                                <p className="mt-8 text-blue-200 font-black uppercase tracking-widest text-sm">— The EduGPA Core Team</p>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32" />
                        </div>

                        <div className="space-y-8 prose prose-slate prose-xl max-w-none text-slate-600 font-medium leading-relaxed">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">Built by Students</h2>
                            <p>
                                In 2024, our founders noticed a recurring pattern: students were missing out on scholarship opportunities simply because they didn&apos;t know how to accurately convert their local percentage scores to global CGPA scales.
                            </p>
                            <p>
                                We decided to build a platform that put **clarity and user experience** at the forefront. No ads, no jargon, just results.
                            </p>

                            <div className="pt-10 grid sm:grid-cols-2 gap-8 not-prose">
                                {values.map((v, i) => (
                                    <div key={i} className="p-8 rounded-3xl bg-white/30 backdrop-blur-xl border border-white/50 shadow-sm hover:scale-[1.03] transition-transform">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm ${v.color}`}>
                                            <v.Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-slate-900 font-black text-xl mb-4 uppercase tracking-tight">{v.title}</h3>
                                        <p className="text-sm leading-relaxed text-slate-500 font-bold m-0 opacity-80">{v.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 pt-16 tracking-tight uppercase">Global Standards</h2>
                            <p>
                                Today, EduGPA serve thousands of students daily across India, Bangladesh, Pakistan, and the US. We&apos;ve partnered with academic advisors to ensure our engine reflects the latest global standards.
                            </p>
                        </div>

                        <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">Need Support?</h3>
                                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto font-medium">Our team is always ready to assist with complex conversion queries or direct feedback.</p>
                                <Link href="/contact" className="btn-primary bg-white text-slate-900 hover:bg-white inline-flex text-lg font-black px-12 py-5 shadow-none group">
                                    Reach Out Now
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 blur-[100px] -ml-40 -mb-40" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
