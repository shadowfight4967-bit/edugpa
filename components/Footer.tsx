import Link from "next/link";
import { Mail, MapPin, Clock, Twitter, Instagram, Github, ChevronRight, GraduationCap } from "lucide-react";

const Pinterest = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.163 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z" />
    </svg>
);

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
                            {[
                                { Icon: Twitter, url: "#" },
                                { Icon: Pinterest, url: "https://www.pinterest.com/EdugpA7/" },
                                { Icon: Github, url: "https://github.com/edugpa8-wq" },
                                { Icon: Instagram, url: "https://www.instagram.com/edugpa/" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.url}
                                    target={social.url !== "#" ? "_blank" : undefined}
                                    rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                                    className="text-slate-500 hover:text-white transition-colors"
                                >
                                    <social.Icon className="w-5 h-5" />
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
                                { name: "SRM CGPA Calculator", url: "/srm-cgpa-calculator" },
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
                        <Link href="/dmca" className="text-slate-500 hover:text-white text-sm transition-colors">
                            DMCA
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
