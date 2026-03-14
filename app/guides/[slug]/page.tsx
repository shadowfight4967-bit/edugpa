import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_URL, SITE_NAME } from "@/lib/metadata";
import {
    getAllSlugs,
    getPostBySlug,
    PLACEHOLDER_POSTS,
    getPostContent
} from "@/lib/posts";
import {
    ArrowLeft,
    Clock,
    Calendar,
    ChevronRight,
    Layout,
    AlertCircle,
    BookOpen,
    ArrowRight
} from "lucide-react";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};
    return buildMetadata({
        title: `${post.title} — ${SITE_NAME}`,
        description: post.excerpt,
        path: `/guides/${slug}`,
    });
}

function SimpleMarkdownRenderer({ content }: { content: string }) {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];

    let inList = false;
    let listItems: string[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushList = () => {
        if (inList) {
            elements.push(
                <ul key={`list-${elements.length}`} className="list-disc pl-8 mb-10 text-slate-700 space-y-4 font-medium">
                    {listItems.map((item, i) => (
                        <li key={i} className="leading-relaxed">{parseInline(item)}</li>
                    ))}
                </ul>
            );
            inList = false;
            listItems = [];
        }
    };

    const flushTable = () => {
        if (inTable) {
            elements.push(
                <div key={`table-wrapper-${elements.length}`} className="overflow-x-auto mb-10 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <table className="min-w-full divide-y divide-slate-200">
                        <thead className="bg-slate-50">
                            <tr>
                                {tableRows[0].map((cell, i) => (
                                    <th key={i} className="px-6 py-4 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">
                                        {parseInline(cell)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {tableRows.slice(2).map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                    {row.map((cell, j) => (
                                        <td key={j} className="px-6 py-4 text-sm text-slate-800 font-medium whitespace-nowrap">
                                            {parseInline(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
            inTable = false;
            tableRows = [];
        }
    };

    function parseInline(text: string) {
        let parts: (string | React.ReactNode)[] = [text];

        // Bold **text**
        parts = parts.flatMap(p => {
            if (typeof p !== "string") return p;
            const fragments = p.split(/\*\*(.*?)\*\*/g);
            return fragments.map((f, i) => i % 2 === 1 ? <strong key={i} className="font-black text-slate-950">{f}</strong> : f);
        });

        // Italic *text*
        parts = parts.flatMap(p => {
            if (typeof p !== "string") return p;
            const fragments = p.split(/\*(.*?)\*/g);
            return fragments.map((f, i) => i % 2 === 1 ? <em key={i} className="italic text-blue-900 font-bold">{f}</em> : f);
        });

        // Links [text](url)
        parts = parts.flatMap(p => {
            if (typeof p !== "string") return p;
            const fragments = p.split(/\[(.*?)\]\((.*?)\)/g);
            const res: (string | React.ReactNode)[] = [];
            for (let i = 0; i < fragments.length; i += 3) {
                res.push(fragments[i]);
                if (i + 1 < fragments.length) {
                    const label = fragments[i + 1];
                    const url = fragments[i + 2];
                    const isExternal = url.startsWith("http");
                    res.push(
                        <a
                            key={i}
                            href={url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="text-blue-600 font-black hover:underline decoration-blue-200 decoration-2 underline-offset-4"
                        >
                            {label}
                        </a>
                    );
                }
            }
            return res;
        });

        return parts;
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === "") {
            flushList();
            flushTable();
            continue;
        }

        if (line.startsWith("# ")) {
            flushList(); flushTable();
            continue; // Skip title as it's in hero
        } else if (line.startsWith("## ")) {
            flushList(); flushTable();
            elements.push(<h2 key={i} className="text-3xl font-bold text-slate-900 mt-16 mb-6 tracking-tight">{parseInline(line.replace("## ", ""))}</h2>);
        } else if (line.startsWith("### ")) {
            flushList(); flushTable();
            elements.push(<h3 key={i} className="text-xl font-bold text-slate-800 mt-10 mb-4">{parseInline(line.replace("### ", ""))}</h3>);
        } else if (line.startsWith("- ")) {
            flushTable();
            inList = true;
            listItems.push(line.replace("- ", ""));
        } else if (line.startsWith("|") && line.endsWith("|")) {
            flushList();
            inTable = true;
            tableRows.push(line.split("|").filter(s => s !== "").map(s => s.trim()));
        } else if (line.startsWith("> ")) {
            flushList(); flushTable();
            elements.push(
                <blockquote key={i} className="border-l-4 border-blue-600 bg-blue-50 px-6 py-5 rounded-r-xl text-slate-700 italic font-medium my-10 shadow-sm">
                    <div className="flex gap-4">
                        <div className="text-blue-200 shrink-0">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <div className="leading-relaxed text-lg">{parseInline(line.replace("> ", ""))}</div>
                    </div>
                </blockquote>
            );
        } else if (line.startsWith("📊 **Visual Placeholder:**")) {
            flushList(); flushTable();
            elements.push(
                <div key={i} className="my-10 p-8 rounded-xl border border-slate-200 bg-slate-50 text-center shadow-sm">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mx-auto mb-4">
                        <Layout className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-slate-500 font-semibold mb-2 text-xs uppercase tracking-wider">Figure Placeholder</p>
                    <p className="text-slate-700 font-medium">{line.replace("📊 **Visual Placeholder:**", "")}</p>
                </div>
            );
        } else if (line.startsWith("⚠️ **")) {
            flushList(); flushTable();
            elements.push(
                <div key={i} className="my-10 p-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 shadow-sm flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 shrink-0 text-amber-600" />
                    <div className="text-base leading-relaxed font-medium">{parseInline(line)}</div>
                </div>
            );
        } else if (line.startsWith("---")) {
            flushList(); flushTable();
            elements.push(<hr key={i} className="my-12 border-slate-200" />);
        } else {
            flushList(); flushTable();
            elements.push(<p key={i} className="text-slate-600 text-lg leading-relaxed mb-6">{parseInline(line)}</p>);
        }
    }

    flushList();
    flushTable();

    return <>{elements}</>;
}

export default async function GuidePostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const content = await getPostContent(slug);

    const related = PLACEHOLDER_POSTS.filter(
        (p) => p.slug !== slug && (p.category === post.category || p.category === "GPA Basics")
    ).slice(0, 3);

    const postSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png` },
        },
        url: `${SITE_URL}/guides/${slug}`,
    };

    return (
        <>
            <JsonLd data={postSchema} />

            {/* Hero Header Section */}
            <section className="relative overflow-hidden pt-20 pb-16 bg-transparent border-b border-slate-200/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 mb-10 hover:gap-4 transition-all group">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Library
                    </Link>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                        <span className="text-xs font-bold text-blue-700 bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 uppercase tracking-wider">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-wider bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
                        {post.excerpt}
                    </p>
                </div>
            </section>

            {/* Main Content Reader */}
            <section className="pt-16 pb-32">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg prose-slate max-w-none">
                        {content ? <SimpleMarkdownRenderer content={content} /> : <div className="py-20 text-center"><p className="text-slate-500 font-bold uppercase tracking-widest animate-pulse">Loading content...</p></div>}
                    </article>
                </div>
            </section>

            {/* Further Reading Grid */}
            {related.length > 0 && (
                <section className="py-24 bg-transparent border-t border-slate-200/50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-12 flex items-center gap-4 tracking-tight">
                            Related Guides
                            <ChevronRight className="w-8 h-8 text-blue-600" />
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {related.map((rp) => (
                                <Link key={rp.slug} href={`/guides/${rp.slug}`} className="group bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col h-full overflow-hidden">
                                    <div className="p-8 flex flex-col h-full">
                                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1.5 rounded-full self-start mb-6">{rp.category}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                                            {rp.title}
                                        </h3>
                                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                                            <span className="text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">Read Guide</span>
                                            <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
