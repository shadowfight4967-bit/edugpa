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
            <section className="pt-24 pb-20 relative overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold mb-8 shadow-sm border border-slate-200 uppercase tracking-wider">
                        <MessageSquare className="w-4 h-4" />
                        Direct Support Line
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
                        Whether you have a suggestion for a new conversion guide or need help with our tools, our team is ready to assist you.
                    </p>
                </div>
            </section>

            {/* Main Grid with Cards */}
            <section className="section bg-white pt-20 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Contact Form Card */}
                        <div className="lg:col-span-2 order-2 lg:order-1">
                            <div className="bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-3xl">
                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                                    Send a Message
                                    <Send className="w-6 h-6 text-blue-600 hidden sm:block" />
                                </h2>

                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all text-base"
                                                placeholder="e.g. Saad bin Ahmed"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700">University Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all text-base"
                                                placeholder="e.g. name@university.edu"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700">Reason for Contact</label>
                                        <div className="relative">
                                            <select id="subject" className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all appearance-none text-base">
                                                <option>General Feedback</option>
                                                <option>GPA Formula Query</option>
                                                <option>Guide Request</option>
                                                <option>Bug Report</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <ChevronRight className="w-5 h-5 rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700">Your Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full bg-slate-50 border border-slate-200 px-5 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all resize-none text-base"
                                            placeholder="How can we assist you today?"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start sm:items-center gap-3 text-emerald-700 bg-emerald-50 px-5 py-4 rounded-xl text-sm font-medium border border-emerald-100">
                                        <ShieldCheck className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                                        Your information is protected by industry-standard encryption.
                                    </div>

                                    {/* Honeypot field for anti-spam */}
                                    <div className="hidden">
                                        <input type="checkbox" name="contact_me_by_fax_only" tabIndex={-1} autoComplete="off" />
                                    </div>

                                    <button type="submit" className="btn-primary w-full py-5 text-lg font-bold shadow-md shadow-blue-600/10 group flex justify-center items-center gap-2 rounded-xl">
                                        Send Message
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Sidebar Info Cards */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-sm">
                                <h2 className="text-2xl font-bold text-slate-900 mb-8 relative z-10">Support Info</h2>
                                <ul className="space-y-6 sm:space-y-8 relative z-10">
                                    {contactCards.map((card, i) => (
                                        <li key={i} className="flex items-start sm:items-center gap-4 sm:gap-5">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 shadow-sm text-blue-600">
                                                <card.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-slate-500 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-1">{card.title}</p>
                                                <p className="text-slate-900 font-bold text-base sm:text-lg mb-0.5 truncate">{card.val}</p>
                                                <p className="text-slate-500 text-xs sm:text-sm font-medium">{card.sub}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                {/* Decorative Element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 blur-[50px] -mr-16 -mt-16 rounded-full pointer-events-none" />
                            </div>

                            {/* Response Time Note */}
                            <div className="bg-blue-50 p-6 sm:p-8 rounded-3xl border border-blue-100">
                                <h3 className="text-blue-800 font-bold mb-3 flex items-center gap-2 text-base">
                                    <Clock className="w-5 h-5" />
                                    Rapid Protocol
                                </h3>
                                <p className="text-blue-900/80 font-medium text-sm leading-relaxed mb-0">
                                    Our verified team typically responds within <strong className="text-blue-900 font-bold">4 business hours</strong> for academic inquiries.
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
