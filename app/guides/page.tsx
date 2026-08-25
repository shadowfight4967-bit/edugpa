import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import {
    BookOpen,
    ArrowRight,
    Clock,
    GraduationCap,
    Sparkles,
    Search,
} from "lucide-react";
import { PLACEHOLDER_POSTS } from "@/lib/posts";

export const metadata = buildMetadata({
    title: `Academic Guides — ${SITE_NAME}`,
    description: "Comprehensive guides on GPA calculation, SGPA tracking, and global grade conversion. Master your academic journey with EduGPA.",
    path: "/guides",
});

export default function GuidesPage() {
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Academic Guides & Resources",
        description: "A collection of expert guides for students on GPA and CGPA metrics.",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
    };

    const categories = ["All", "GPA Basics", "Conversions", "Calculations", "Study Tips", "Global Education", "Tech Tips", "Career Development", "Academic Success"];

    return (
        <>
            <JsonLd data={collectionSchema} />

            {/* Hero Header */}
            <section className="pt-24 pb-16 relative overflow-hidden bg-transparent">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-md text-blue-700 px-5 py-2.5 rounded-full text-xs font-bold mb-8 shadow-sm border border-blue-100/50">
                        <Sparkles className="w-4 h-4" />
                        Empowering Your Academic Potential
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Master the <span className="text-blue-600">Success Logic</span>.
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                        From the basics of SGPA to the nuances of global WES conversions. Our research-backed guides simplify your transition to a global scholar.
                    </p>
                </div>
            </section>

            {/* Modern Filter Bar */}
            <section className="sticky top-20 z-40 px-4 mt-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${cat === "All"
                                            ? "bg-slate-900 text-white"
                                            : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search guides..."
                                className="w-full bg-slate-50 border border-slate-200 pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all font-medium text-slate-900 placeholder:text-slate-400"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="pt-16 pb-32">
                <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PLACEHOLDER_POSTS.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/guides/${post.slug}`}
                                className="group bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all flex flex-col h-full overflow-hidden"
                            >
                                {/* Featured thumbnail */}
                                <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                                    {post.featuredImage ? (
                                        <Image
                                            src={post.featuredImage}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                                            <BookOpen className="w-10 h-10 text-blue-300" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full">{post.category}</span>
                                        <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-end">
                                        <span className="text-blue-600 font-bold text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Read Guide
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* Empty State / Coming Soon Card */}
                        <div className="p-10 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center bg-slate-50 group hover:border-slate-300 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <GraduationCap className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">More Access Coming</h3>
                            <p className="text-sm text-slate-500 leading-relaxed font-medium max-w-sm">Drafting additional protocols for UGC & WES frameworks. Stay tuned.</p>
                        </div>
                    </div>

                    
                </div>
            </section>
        </>
    );
}
