import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import { Mail, MapPin, Clock, Send, MessageSquare, ShieldCheck, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: `Contact Academic Support — ${SITE_NAME}`,
    description: "Have a question about our GPA conversion formulas or need help with our tools? Reach out to the EduGPA team today.",
    path: "/contact",
});

export default function ContactPage() {
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact EduGPA.online",
        description: "Get in touch with the team at EduGPA.online for support and feedback.",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
    };

    const contactCards = [
        {
            title: "Email Us",
            val: "edugpa8@gmail.com",
            sub: "Average response: 4h",
            Icon: Mail,
            color: "text-blue-600 bg-white/50",
        },
        {
            title: "Our Location",
            val: "Global Academy Support",
            sub: "Remote-first team",
            Icon: MapPin,
            color: "text-indigo-600 bg-white/50",
        },
        {
            title: "Support Hours",
            val: "Mon - Fri, 9am - 6pm",
            sub: "UTC-5 Timezone",
            Icon: Clock,
            color: "text-cyan-600 bg-white/50",
        },
    ];

    return (
        <>
            <JsonLd data={contactSchema} />

            {/* Hero Header */}
            <section className="pt-24 pb-20 relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md text-blue-700 px-5 py-2.5 rounded-full text-xs font-black mb-8 animate-fade-in shadow-xl shadow-blue-500/10 border border-white/50">
                        <MessageSquare className="w-4 h-4" />
                        Direct Support Line
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-10 animate-fade-in-up tracking-tighter leading-tight uppercase italic">
                        Get in <br /> <span className="gradient-text">Touch</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed animate-fade-in-up animation-delay-100 max-w-2xl mx-auto font-medium">
                        Whether you have a suggestion for a new conversion guide or need help with our tools, our team is ready to assist.
                    </p>
                </div>
            </section>

            {/* Main Grid with Glass Cards */}
            <section className="section bg-transparent pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-10">

                        {/* Contact Form Glass Card */}
                        <div className="lg:col-span-2 order-2 lg:order-1">
                            <div className="card-glass p-6 sm:p-8 md:p-14 shadow-2xl border-white/60">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 md:mb-10 flex items-center gap-4 uppercase tracking-tight">
                                    Send Message
                                    <Send className="w-8 h-8 text-blue-600 hidden sm:block" />
                                </h2>

                                <form className="space-y-6 md:space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                                        <div className="space-y-2 md:space-y-3">
                                            <label htmlFor="name" className="block text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full bg-white/50 backdrop-blur-sm border border-white/80 px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-[1.5rem] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-bold text-base md:text-lg"
                                                placeholder="e.g. Saad bin Ahmed"
                                            />
                                        </div>
                                        <div className="space-y-2 md:space-y-3">
                                            <label htmlFor="email" className="block text-xs font-black text-slate-500 uppercase tracking-widest pl-1">University Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full bg-white/50 backdrop-blur-sm border border-white/80 px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-[1.5rem] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all font-bold text-base md:text-lg"
                                                placeholder="e.g. name@university.edu"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:space-y-3">
                                        <label htmlFor="subject" className="block text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Reason for Contact</label>
                                        <div className="relative">
                                            <select id="subject" className="w-full bg-white/50 backdrop-blur-sm border border-white/80 px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-[1.5rem] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all appearance-none font-bold text-base md:text-lg">
                                                <option>General Feedback</option>
                                                <option>GPA Formula Query</option>
                                                <option>Guide Request</option>
                                                <option>Bug Report</option>
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:space-y-3">
                                        <label htmlFor="message" className="block text-xs font-black text-slate-500 uppercase tracking-widest pl-1">Your Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full bg-white/50 backdrop-blur-sm border border-white/80 px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-[1.5rem] text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all resize-none font-bold text-base md:text-lg"
                                            placeholder="How can we assist you today?"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start sm:items-center gap-3 md:gap-4 text-emerald-700 bg-emerald-50 px-5 py-4 rounded-2xl font-bold text-xs sm:text-sm border border-emerald-100">
                                        <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                                        Your information is protected by industry-standard encryption.
                                    </div>

                                    {/* Honeypot field for anti-spam */}
                                    <div className="hidden">
                                        <input type="checkbox" name="contact_me_by_fax_only" tabIndex={-1} autoComplete="off" />
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-5 md:py-6 text-lg md:text-xl font-black shadow-2xl shadow-blue-500/30 group flex justify-center items-center gap-2">
                                        Send Application Message
                                        <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 md:group-hover:translate-x-3 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info Cards */}
                        <div className="order-1 lg:order-2 space-y-8">
                            <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
                                <h2 className="text-3xl font-black mb-12 relative z-10 uppercase tracking-tight">Support Info</h2>
                                <ul className="space-y-10 relative z-10">
                                    {contactCards.map((card, i) => (
                                        <li key={i} className="flex items-start gap-6">
                                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg ${card.color}`}>
                                                <card.Icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-2">{card.title}</p>
                                                <p className="text-white font-black text-xl mb-1 tracking-tight">{card.val}</p>
                                                <p className="text-slate-500 text-xs font-bold">{card.sub}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {/* Background Glow */}
                                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 blur-[100px] -mr-40 -mt-40 rounded-full" />
                            </div>

                            {/* Response Time Glass Note */}
                            <div className="card-glass p-10 border-blue-200/40">
                                <h3 className="text-blue-900 font-black mb-6 flex items-center gap-3 uppercase text-lg italic">
                                    <Clock className="w-6 h-6" />
                                    Rapid Protocol
                                </h3>
                                <p className="text-slate-600 font-bold text-sm leading-relaxed mb-0">
                                    Our verified team typically responds within **4 business hours** for academic inquiries.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="bg-white py-20 border-t border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate">
                    <h2>How We Can Help You</h2>
                    <p>
                        <strong>Quick Answer:</strong> The EduGPA support team handles questions about GPA conversion formulas, CGPA calculation methodology, and suggestions for new academic tools. Whether you are a student confused about how your percentage translates to a 4.0 scale or a university advisor looking for a verified conversion resource, we are here to help.
                    </p>

                    <h3>Common Reasons Students Contact Us</h3>
                    <ul>
                        <li><strong>Formula Verification:</strong> Many students reach out to confirm that the conversion logic used in our <a href="/cgpa-calculator">CGPA Calculator</a> or <a href="/percentage-to-gpa">Percentage to GPA Converter</a> aligns with their specific university&apos;s grading policy.</li>
                        <li><strong>New Tool Requests:</strong> We regularly receive and act on suggestions for calculators tailored to specific university systems (such as our dedicated <a href="/srm-cgpa-calculator">SRM CGPA Calculator</a>).</li>
                        <li><strong>Guide Corrections:</strong> If you spot a factual inaccuracy in any of our academic guides, we appreciate corrections and will update the content promptly.</li>
                        <li><strong>Partnership Inquiries:</strong> Educational institutions and academic bloggers interested in linking to or collaborating with our tools are welcome to reach out.</li>
                    </ul>

                    <h3>Our Commitment to Accurate Responses</h3>
                    <p>
                        Every inquiry we receive is reviewed by someone with direct experience in academic grading systems. We do not use automated chatbots for support. When you submit a message through the form above, a real person reads it, researches the answer if necessary, and provides a thorough, accurate response. Our average reply time is four business hours during weekday support windows.
                    </p>

                    <h3>Frequently Asked Questions</h3>
                    <h4>Do you offer phone support?</h4>
                    <p>No. As a lean, remote-first educational team, we provide support exclusively via email. This allows us to give detailed, well-researched written answers to every academic question.</p>

                    <h4>Can you help me calculate my GPA for a specific university?</h4>
                    <p>We can point you to the correct tool and methodology, but we cannot calculate official GPAs for individual students. For certified transcript evaluations, you should contact a credential evaluator like WES (World Education Services).</p>
                </div>
            </section>
        </>
    );
}
