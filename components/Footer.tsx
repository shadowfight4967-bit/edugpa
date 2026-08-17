import Link from "next/link";
import { Mail, MapPin, Clock, Twitter, Facebook, Instagram, Github, ChevronRight, GraduationCap } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#09090b] pt-20 pb-10 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center transition-transform group-hover:scale-105">
                                <GraduationCap className="text-[#09090b] w-5 h-5" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">
                                EduGPA
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Empowering students worldwide with precise GPA conversion, tracking tools, and expert academic guides.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Pages Column */}
                    <div>
                        <h3 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-3">
                            {["Home", "Guides", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h3 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Academic Tools</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "GPA to Percentage", url: "/guides/percentage-to-cgpa-conversion" },
                                { name: "SGPA Tracker", url: "/guides/how-to-track-sgpa-each-semester" },
                            ].map((tool) => (
                                <li key={tool.name}>
                                    <a
                                        href={tool.url}
                                        className="text-slate-400 hover:text-white text-sm transition-colors"
                                    >
                                        {tool.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">Contact</h3>
                        <ul className="space-y-4">
                            {[
                                { Icon: Mail, text: "edugpa8@gmail.com" },
                                { Icon: MapPin, text: "Global Student Support" },
                                { Icon: Clock, text: "Mon - Fri, 9am - 6pm" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <item.Icon className="w-4 h-4 text-slate-500" />
                                    <span className="text-slate-400 text-sm">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} EduGPA.online. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-4 md:gap-8 justify-center mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="text-slate-500 hover:text-white text-sm transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms-and-conditions" className="text-slate-500 hover:text-white text-sm transition-colors">
                            Terms
                        </Link>
                        <Link href="/disclaimer" className="text-slate-500 hover:text-white text-sm transition-colors">
                            Disclaimer
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
