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
  Users,
  FileText,
  Settings,
  Star,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
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
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Predictive Tracking",
      desc: "Estimate your future CGPA with our advanced semester tracking guides.",
      Icon: TrendingUp,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Global Standards",
      desc: "Understand WES, 4.0, 5.0, and 10-point systems with curated charts.",
      Icon: BarChart3,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Lightning Fast",
      desc: "A pure static experience designed for zero-latency academic planning.",
      Icon: Zap,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Verified Guides",
      desc: "Expertly written content by academic writers for student clarity.",
      Icon: FileText,
      color: "from-indigo-600 to-cyan-600",
    },
    {
      title: "Privacy Focused",
      desc: "No data tracking. Your grades and calculations remain your own.",
      Icon: ShieldCheck,
      color: "from-blue-500 to-indigo-500",
    },
  ];

  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden v bg-gradient-to-b from-blue-400  via-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/40 backdrop-blur-md text-blue-700 px-5 py-2.5 rounded-full text-sm font-bold mb-10 animate-fade-in shadow-xl shadow-blue-500/10 border border-white/50">
            <Star className="w-4 h-4 fill-blue-600" />
            Empowering Students Globally
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-10 animate-fade-in-up">
            Understand <span className="gradient-text">GPA</span> <br className="hidden md:block" /> with Total Clarity.
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 leading-relaxed mb-14 animate-fade-in-up animation-delay-100 font-medium">
            The professional academy for academic metrics. Accurate conversions and expert guides for the modern student.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-200">
            <Link href="/guides" className="btn-primary w-full sm:w-auto text-lg group">
              Explore Guides
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blog" className="btn-secondary w-full sm:w-auto text-lg">
              <Calculator className="w-5 h-5" />
              CGPA Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Glass Cards */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Conversion Tools", val: "50+", Icon: Settings, color: "text-blue-600" },
              { label: "Student Guides", val: "10+", Icon: BookOpen, color: "text-indigo-600" },
              { label: "Partner Sites", val: "12", Icon: Globe2, color: "text-cyan-600" },
              { label: "Accuracy Rate", val: "99.9%", Icon: ShieldCheck, color: "text-blue-500" }
            ].map((stat, i) => (
              <div key={i} className="card-glass p-8 text-center flex flex-col items-center group">
                <div className={`w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${stat.color}`}>
                  <stat.Icon className="w-7 h-7" />
                </div>
                <p className="text-slate-900 font-black text-3xl mb-1">{stat.val}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infographic Section - Wide Glass Card */}
      <section className="section ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-glass p-1 rounded-[3rem] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-16 flex flex-col justify-center bg-white/20">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
                  Mastering the <br /> Academic <span className="text-blue-600">Metric</span>.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                  Whether you&apos;re aiming for Ivy League admissions or local scholarships, your GPA is your most vital credential.
                </p>
                <div className="space-y-6">
                  {[
                    "Accurate SGPA to CGPA aggregation formulas.",
                    "WES-compatible international conversion charts.",
                    "Real-time grade predictive strategies."
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-slate-800 font-bold">
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/30">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-16 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-full max-w-md space-y-8">
                  <div className="flex justify-between items-end gap-6 h-64 bg-white/10 p-8 rounded-3xl backdrop-blur-xl border border-white/20">
                    {[3.8, 3.2, 3.9, 3.5, 4.0].map((h, i) => (
                      <div key={i} className="flex-1 group relative">
                        <div
                          className="w-full bg-white rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-500 shadow-2xl"
                          style={{ height: `${(h / 4.0) * 100}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-white">
                    <p className="font-black text-4xl mb-2">4.0 / 4.0</p>
                    <p className="text-blue-100 uppercase tracking-widest text-xs font-bold">Elite Performance Tier</p>
                  </div>
                </div>
                {/* Background Sparkle */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Tools with Glass Design */}
      <section className="section  pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tight">Recommended Tools</h2>
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-20 font-medium">
            Hand-picked resources to streamline your university workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Tool Card */}
            <div className="col-span-1 md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white text-left relative overflow-hidden shadow-2xl group transition-transform hover:scale-[1.01]">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-16 h-16 rounded-3xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:rotate-6 transition-transform">
                      <Calculator className="w-9 h-9" />
                    </div>
                    <div>
                      <h3 className="font-black text-3xl">CGPA Hub</h3>
                    </div>
                  </div>
                  <p className="text-2xl font-medium leading-relaxed mb-12 opacity-80 max-w-sm">
                    The absolute gold standard for GPA tracking in 2026. Save, predict, and share instantly.
                  </p>
                </div>
                <a href="https://cgpahub.com" target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto px-10 py-5 text-xl font-black hover:gap-6 bg-white text-slate-900 hover:bg-white shadow-none border-none">
                  Open Engine
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
              {/* Mesh Accents */}
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px] -mr-32 -mb-32 pointer-events-none" />
            </div>

            {/* Other tools Glass Cards */}
            {[
              { name: "Grammarly", desc: "Best-in-class writing assistant for papers.", url: "https://www.grammarly.com", color: "text-emerald-500" },
              { name: "Zotero", desc: "Open-source reference manager & research hub.", url: "https://www.zotero.org", color: "text-red-500" }
            ].map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="card-glass p-10 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/50 flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform">
                    <Settings className={`w-7 h-7 ${tool.color}`} />
                  </div>
                  <h3 className="font-black text-slate-900 text-2xl mb-4">{tool.name}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">{tool.desc}</p>
                </div>
                <span className="text-blue-600 font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Visit Official Site
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid with Glass Effects */}
      <section className="section  pt-32 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter uppercase italic">Built for Excellence.</h2>
          <p className="max-w-3xl mx-auto text-xl text-slate-600 mb-20 leading-relaxed font-medium">
            EduGPA is refined for the ambitious. Every tool is a step toward your global potential.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureList.map((feature, i) => (
              <div key={i} className="group card-glass p-10 text-left border-transparent hover:border-white/50">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-10 shadow-xl shadow-blue-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section with Floating Cards */}
      <section className="section pt-32 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight uppercase">Latest Guides</h2>
              <p className="text-blue-600 font-black text-sm uppercase tracking-[0.2em] animate-pulse">Fresh academic insights</p>
            </div>
            <Link href="/guides" className="btn-secondary group px-10">
              Browse Full Library
              <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {PLACEHOLDER_POSTS.slice(0, 3).map((post, i) => (
              <Link
                key={post.slug}
                href={`/guides/${post.slug}`}
                className="group card-glass overflow-hidden flex flex-col p-1"
              >
                <div className="bg-white/40 p-8 rounded-[1.75rem] flex flex-col h-full group-hover:bg-white/60 transition-colors">
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-white/80 px-4 py-2 rounded-full border border-white/50 shadow-sm">{post.category}</span>
                    <FileText className="w-6 h-6 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 transition-all font-bold" />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-8 border-t border-white/30 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-wider">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <span className="text-blue-600 font-black text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Glass CTA Banner */}
   
    </>
  );
}
