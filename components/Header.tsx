"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calculator, GraduationCap, ChevronRight } from "lucide-react";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 transition-all duration-500 border-b ${scrolled ? "bg-white border-slate-200 shadow-sm" : "bg-transparent border-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <GraduationCap className="text-white w-6 h-6" />
                        </div>
                        <span className="font-bold text-2xl tracking-tight text-slate-900">
                            Edu<span className="gradient-text">GPA</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-5 py-2.5 rounded-full text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="w-px h-6 bg-slate-200 mx-4" />
                       
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2.5 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full animate-fade-in bg-white border-b border-slate-200 px-4 py-6 shadow-2xl">
                    <nav className="flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-4 rounded-2xl text-lg font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-all"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                      
                    </nav>
                </div>
            )}
        </header>
    );
}
