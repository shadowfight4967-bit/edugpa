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
    ArrowUpRight,
} from "lucide-react";
import { PLACEHOLDER_POSTS } from "@/lib/posts";

export const metadata = buildMetadata({
    title: `Academic Guides — ${SITE_NAME}`,
    description: "Comprehensive guides on GPA calculation, SGPA tracking, and global grade conversion. Master your academic journey with EduGPA.",
    path: "/guides",
});

const categoryColors: Record<string, { bg: string; text: string; dot: string }> = {
    "GPA Basics":        { bg: "bg-violet-50",  text: "text-violet-700", dot: "bg-violet-400" },
    "Conversions":       { bg: "bg-orange-50",  text: "text-orange-700", dot: "bg-orange-400" },
    "Calculations":      { bg: "bg-emerald-50", text: "text-emerald-700",dot: "bg-emerald-400" },
    "Study Tips":        { bg: "bg-blue-50",    text: "text-blue-700",   dot: "bg-blue-400" },
    "Global Education":  { bg: "bg-sky-50",     text: "text-sky-700",    dot: "bg-sky-400" },
    "Tech Tips":         { bg: "bg-rose-50",    text: "text-rose-700",   dot: "bg-rose-400" },
    "Career Development":{ bg: "bg-amber-50",   text: "text-amber-700",  dot: "bg-amber-400" },
    "Academic Success":  { bg: "bg-teal-50",    text: "text-teal-700",   dot: "bg-teal-400" },
};

function CategoryBadge({ category }: { category: string }) {
    const c = categoryColors[category] ?? { bg: "bg-slate-50", text: "text-slate-600", dot: "bg-slate-400" };
    return (
        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${c.bg} ${c.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {category}
        </span>
    );
}

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

    const heroPost = PLACEHOLDER_POSTS[PLACEHOLDER_POSTS.length - 1];
    const gridPosts = PLACEHOLDER_POSTS.slice(0, PLACEHOLDER_POSTS.length - 1);

    const uniqueCategories = [...new Set(PLACEHOLDER_POSTS.map(p => p.category))];

    return (
        <>
            <JsonLd data={collectionSchema} />

            {/* ── Hero ── */}
            <section className="pt-24 pb-10 relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Label pill */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-blue-200">
                            <Sparkles className="w-3.5 h-3.5" />
                            {PLACEHOLDER_POSTS.length} Expert Guides Published
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 text-center leading-[1.05] tracking-tight mb-6">
                        Your Academic{" "}
                        <span className="relative">
                            <span className="relative z-10 text-blue-600">Knowledge Hub</span>
                            <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-0 rounded" />
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-center text-lg md:text-xl text-slate-500 leading-relaxed mb-12">
                        Research-backed guides on GPA, CGPA, SGPA, global conversions, and student success strategies — all free.
                    </p>

                    {/* Category pills */}
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {uniqueCategories.map(cat => (
                            <CategoryBadge key={cat} category={cat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Hero Feature Card (latest post) ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <Link
                    href={`/guides/${heroPost.slug}`}
                    className="group relative flex flex-col md:flex-row rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                >
                    {/* Image */}
                    <div className="relative md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
                        {heroPost.featuredImage ? (
                            <Image
                                src={heroPost.featuredImage}
                                alt={heroPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                <BookOpen className="w-16 h-16 text-blue-300" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                                    ✦ Featured Guide
                                </span>
                                <CategoryBadge category={heroPost.category} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                {heroPost.title}
                            </h2>
                            <p className="text-slate-500 leading-relaxed text-base line-clamp-3">
                                {heroPost.excerpt}
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                                <Clock className="w-4 h-4" />
                                {heroPost.readTime}
                            </div>
                            <span className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                                Read Guide
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                        </div>
                    </div>
                </Link>
            </section>

            {/* ── All Guides Grid ── */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">

                {/* Section label */}
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight">All Guides</h2>
                    <div className="flex-1 h-px bg-slate-200" />
                    <span className="text-sm font-bold text-slate-400">{gridPosts.length} articles</span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/guides/${post.slug}`}
                            className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            {/* Thumbnail */}
                            <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
                                {post.featuredImage ? (
                                    <Image
                                        src={post.featuredImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
                                        <BookOpen className="w-8 h-8 text-blue-200" />
                                    </div>
                                )}
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {/* Read badge on hover */}
                                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                                        Read <ArrowRight className="w-3 h-3" />
                                    </span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex items-center justify-between mb-3">
                                    <CategoryBadge category={post.category} />
                                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </div>
                                </div>
                                <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}

                    {/* Coming Soon card */}
                    <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/60 flex flex-col items-center justify-center text-center p-8 min-h-[280px] group hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-blue-200 transition-all duration-300">
                            <GraduationCap className="w-7 h-7 text-slate-300 group-hover:text-blue-400 transition-colors" />
                        </div>
                        <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Coming Soon</p>
                        <h3 className="text-base font-bold text-slate-700 mb-1">More Guides Incoming</h3>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-[200px]">
                            New articles on UGC, WES, and global frameworks drop regularly.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
