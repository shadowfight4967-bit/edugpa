import Link from "next/link";
import { Mail, MapPin, Clock, Twitter, Facebook, Instagram, Github, ChevronRight } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 pt-20 pb-10 overflow-hidden relative border-t border-slate-800">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                                <span className="text-white font-bold text-lg italic">E</span>
                            </div>
                            <span className="font-bold text-2xl text-white tracking-tight">
                                Edu<span className="text-blue-400">GPA</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Empowering students worldwide with precise GPA conversion, tracking tools, and expert academic guides. Your success, simplified.
                        </p>
                        <div className="flex items-center gap-3">
                            {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all shadow-sm"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Pages Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Platform</h3>
                        <ul className="space-y-4">
                            {["Home", "Guides", "About", "Contact", "Privacy Policy"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-slate-400 hover:text-white text-sm flex items-center gap-2 group transition-colors"
                                    >
                                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Academic Tools</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "GPA to Percentage", url: "/guides/percentage-to-cgpa-conversion" },
                                { name: "SGPA Tracker", url: "/guides/how-to-track-sgpa-each-semester" },
                            ].map((tool) => (
                                <li key={tool.name}>
                                    <a
                                        href={tool.url}
                                        className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-2 group transition-colors"
                                    >
                                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-blue-400" />
                                        {tool.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6 text-lg">Get in Touch</h3>
                        <ul className="space-y-5">
                            {[
                                { Icon: Mail, text: "edugpa8@gmail.com" },
                                { Icon: MapPin, text: "Global Student Support" },
                                { Icon: Clock, text: "Mon - Fri, 9am - 6pm" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                                        <item.Icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-slate-400 text-sm pt-2">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-xs">
                        © {currentYear} EduGPA.online. All academic rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="text-slate-500 hover:text-white text-xs transition-colors">
                            Privacy
                        </Link>
                        <Link href="/contact" className="text-slate-500 hover:text-white text-xs transition-colors">
                            Support
                        </Link>
                        <Link href="/about" className="text-slate-500 hover:text-white text-xs transition-colors">
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background glow */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -ml-64 -mb-64 pointer-events-none" />
        </footer>
    );
}
