import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import {
  Calculator,
  ArrowRight,
  BarChart3,
  BookOpen,
  Zap,
  Globe2,
  ShieldCheck,
  TrendingUp,
  FileText,
  Settings,
  Star,
  CheckCircle2,
  ExternalLink,
  Clock
} from "lucide-react";
import { PLACEHOLDER_POSTS } from "@/lib/posts";

export const metadata = buildMetadata({
  title: "EduGPA — Understand & Track Your GPA Easily",
  description: "The ultimate academic resource for students. Calculate GPA, SGPA, CGPA, and convert percentages to global scales with accuracy and ease.",
});

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const featureList = [
    {
      title: "Smart Conversions",
      desc: "Convert percentage to CGPA across multiple international scales effortlessly.",
      Icon: Globe2,
    },
    {
      title: "Predictive Tracking",
      desc: "Estimate your future CGPA with our advanced semester tracking guides.",
      Icon: TrendingUp,
    },
    {
      title: "Global Standards",
      desc: "Understand WES, 4.0, 5.0, and 10-point systems with curated charts.",
      Icon: BarChart3,
    },
    {
      title: "Lightning Fast",
      desc: "A pure static experience designed for zero-latency academic planning.",
      Icon: Zap,
    },
    {
      title: "Verified Guides",
      desc: "Expertly written content by academic writers for student clarity.",
      Icon: FileText,
    },
    {
      title: "Privacy Focused",
      desc: "No data tracking. Your grades and calculations remain your own.",
      Icon: ShieldCheck,
    },
  ];

  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* Hero Section */}
      <section className="relative pb-20 md:pb-32 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-semibold mb-8 animate-fade-in border border-white/30">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              Empowering Students Globally
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1] mb-8 animate-fade-in-up drop-shadow-md">
              Understand <br/> <span className="text-cyan-300 drop-shadow-sm">GPA</span> with <br/> Total Clarity.
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-blue-100 leading-relaxed mb-10 animate-fade-in-up animation-delay-100 font-medium">
              The professional standard for academic metrics. Accurate conversions and expert guides for the modern student.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up animation-delay-200">
              <Link href="/blog" className="btn-primary w-full sm:w-auto text-base bg-white text-blue-900 hover:bg-blue-50 border-none shadow-xl">
                <Calculator className="w-4 h-4" />
                CGPA Calculator
              </Link>
              <Link href="/guides" className="btn-secondary w-full sm:w-auto text-base group bg-blue-700/50 text-white hover:bg-blue-700 border-blue-500 backdrop-blur-sm">
                Explore Guides
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg relative animate-fade-in-up animation-delay-300 hidden md:block">
            <div className="bento-card p-8 bg-white shadow-2xl shadow-blue-500/10 border border-slate-200 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="font-bold text-slate-900 text-lg">Current Standing</p>
                  <p className="text-sm text-slate-500">Cumulative Grade Point</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                  3.8
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { term: "Semester 1", val: 3.6, w: "80%" },
                  { term: "Semester 2", val: 3.9, w: "95%" },
                  { term: "Semester 3", val: 4.0, w: "100%" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-slate-600">{item.term}</span>
                      <span className="text-slate-900">{item.val}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 rounded-full" style={{ width: item.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-400/20 blur-[100px] -z-10 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section with Bento Box Grid */}
      <section className="pb-24 pt-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Content Approach", val: "In-Depth", Icon: FileText, color: "bg-blue-500" },
              { label: "User Privacy", val: "Strict", Icon: ShieldCheck, color: "bg-indigo-500" },
              { label: "Conversions", val: "Global", Icon: Globe2, color: "bg-violet-500" },
              { label: "Methodology", val: "Verified", Icon: CheckCircle2, color: "bg-emerald-500" }
            ].map((stat, i) => (
              <div key={i} className="bento-card p-6 md:p-8 flex flex-col group border-none shadow-lg">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white shadow-md transition-transform group-hover:scale-110 ${stat.color}`}>
                  <stat.Icon className="w-6 h-6" />
                </div>
                <p className="text-slate-900 font-black text-3xl mb-1 tracking-tight">{stat.val}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic Section - Minimalist Split */}
      <section className="section bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tighter">
                Mastering the <br /> Academic Metric.
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Whether you&apos;re aiming for Ivy League admissions or local scholarships, your GPA is your most vital credential. We provide the tools to decode it.
              </p>
              <div className="space-y-4">
                {[
                  "Accurate SGPA to CGPA aggregation formulas.",
                  "WES-compatible international conversion charts.",
                  "Real-time grade predictive strategies."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bento-card p-8 bg-slate-900 text-white shadow-2xl relative overflow-hidden h-[400px] flex flex-col justify-end">
                <div className="absolute top-8 left-8">
                    <p className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-1">Elite Performance Tier</p>
                    <p className="font-black text-5xl">4.0 <span className="text-xl text-slate-500">/ 4.0</span></p>
                </div>
                
                <div className="flex justify-between items-end gap-4 h-48 w-full mt-auto border-b border-slate-800 pb-4 relative z-10">
                {[2.5, 3.2, 3.8, 3.5, 4.0].map((h, i) => (
                    <div key={i} className="flex-1 group relative flex flex-col justify-end h-full">
                    <div
                        className="w-full bg-blue-500 rounded-t-sm group-hover:bg-blue-400 transition-colors"
                        style={{ height: `${(h / 4.0) * 100}%` }}
                    />
                    </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Tools */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Recommended Tools</h2>
            <p className="text-lg text-slate-600">Hand-picked resources to streamline your university workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Tool Card */}
            <div className="col-span-1 md:col-span-2 bento-card bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-8">
                    <Calculator className="w-7 h-7" />
                </div>
                <h3 className="font-black text-3xl mb-4">CGPA Hub</h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-md">
                The absolute gold standard for GPA tracking in 2026. Save, predict, and share instantly.
                </p>
              </div>
              <a href="https://cgpahub.com" target="_blank" rel="noopener noreferrer" className="btn-secondary self-start border-none">
                Visit CGPA Hub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Other tools */}
            <div className="flex flex-col gap-6">
                {[
                { name: "Grammarly", desc: "Best-in-class writing assistant.", url: "https://www.grammarly.com" },
                { name: "Zotero", desc: "Open-source reference manager.", url: "https://www.zotero.org" }
                ].map((tool) => (
                <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="bento-card p-6 flex-1 flex flex-col justify-center group hover:bg-slate-50"
                >
                    <h3 className="font-bold text-slate-900 text-xl mb-2">{tool.name}</h3>
                    <p className="text-slate-500 text-sm mb-4">{tool.desc}</p>
                    <span className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Visit Site <ArrowRight className="w-4 h-4" />
                    </span>
                </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Built for Excellence</h2>
            <p className="text-lg text-slate-600">Refined for the ambitious student.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureList.map((feature, i) => (
              <div key={i} className="bento-card p-8 group border-none shadow-lg bg-slate-50 hover:bg-blue-50/50">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white mb-6 shadow-md transition-transform group-hover:scale-110 ${i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-red-500' : 'bg-amber-500'}`}>
                  <feature.Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">Latest Guides</h2>
              <p className="text-blue-600 font-bold text-sm uppercase tracking-widest">Fresh insights</p>
            </div>
            <Link href="/guides" className="btn-secondary">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {PLACEHOLDER_POSTS.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/guides/${post.slug}`}
                className="bento-card flex flex-col group hover:bg-slate-50"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
