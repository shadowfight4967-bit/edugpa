import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import SRMCGPACalculator from "@/components/SRMCGPACalculator";
import { Calculator, ArrowLeft, ChevronRight, BookOpen, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
    title: "SRM CGPA Calculator — Official 10-Point Scale Conversion",
    description: "The most authoritative, professional, and convenient online CGPA calculator for SRM University. Strictly follows the official SRM 10-point grading system.",
    path: "/srm-cgpa-calculator",
});

export default function SRMCGPACalculatorPage() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "SRM CGPA Calculator",
        operatingSystem: "Any",
        applicationCategory: "EducationalApplication",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD"
        },
        description: "Official SRM Institute of Science and Technology GPA calculator with O/A+/A/B+/B/C/P/F grade mapping. Calculate semester CGPA instantly."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "What is the difference between SGPA and CGPA at SRM?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "SGPA (Semester Grade Point Average) indicates your performance for a single semester. CGPA (Cumulative Grade Point Average) is the weighted average of all SGPAs from the first semester to the current one."
                }
            },
            {
                "@type": "Question",
                name: "How is SGPA calculated?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "SGPA is calculated by multiplying the credits of each course by the grade points earned, summing them up, and dividing by the total credits for that semester."
                }
            },
            {
                "@type": "Question",
                name: "What is a 'Good' CGPA at SRM for placements?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "While it depends on the company, a CGPA of 7.5 and above is generally considered good. Many top-tier companies (Day 1 recruiters) set a minimum cutoff of 6.0 to 7.0 without any standing arrears."
                }
            },
            {
                "@type": "Question",
                name: "Can I improve my CGPA after a failed subject?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. Once you clear a failed subject (F grade) in a supplementary or reappearance exam, the new grade replaces the 0 in your CGPA calculation. However, the 'F' might still appear on your original semester grade sheet."
                }
            }
        ]
    };

    return (
        <>
            <JsonLd data={pageSchema} />
            <JsonLd data={faqSchema} />

            {/* Hero Section */}
            <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-slate-900 border-b border-slate-800 text-white">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none -mt-64 -mr-64" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 border border-white/20">
                        <Calculator className="w-4 h-4" />
                        Official 10-Point Scale
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6 drop-shadow-md">
                        SRM CGPA Calculator
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-medium mb-8">
                        The most authoritative, professional, and convenient online CGPA calculator for SRM Institute of Science and Technology. Plan your academics with confidence.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-blue-200">
                        <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Privacy</span>
                        <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" /> Instant Results</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> Save Time</span>
                    </div>
                </div>
            </section>

            {/* Main Application Area */}
            <section className="bg-slate-50 pt-10 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SRMCGPACalculator />
                </div>
            </section>

            {/* Long Form SEO Content */}
            <section className="bg-white py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-12 prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-blue-600 prose-img:rounded-xl">
                        
                        <div>
                            <h2>Understanding the SRM CGPA System</h2>
                            <p>
                                The SRM Institute of Science and Technology (SRMIST) is renowned for its rigorous academic curriculum and robust grading system. For students striving for excellence, understanding the nuances of the <strong>SRM CGPA Calculator</strong> is not just helpful—it is absolutely essential for academic survival and success.
                            </p>
                            <p>
                                Navigating through university life involves a multitude of challenges, from maintaining attendance to clearing difficult papers. Amidst this, manually tracking your Cumulative Grade Point Average (CGPA) should not be another hurdle. This comprehensive guide, alongside our powerful calculator tool above, is designed to demystify the 10-point scale grading system utilized across all SRM campuses.
                            </p>
                            <p>
                                Whether you are aiming for prestigious placements, securing international internships, seeking higher education admissions abroad, or trying to secure academic scholarships, a high CGPA is your golden ticket. The SRM CGPA Calculator provides an instant, mathematically accurate assessment of where you stand globally.
                            </p>
                        </div>

                        <div>
                            <h2>How This SRM CGPA Calculator Works</h2>
                            <p>
                                Manual CGPA calculation can be confusing, especially when different semesters possess wildly different credit totals. The traditional method of averaging your SGPAs without factoring in total semester credits leads to mathematically incorrect results. Our SRM calculator removes this guesswork and provides reliable results instantly by utilizing a rigorous weighted average algorithm.
                            </p>
                            <p>
                                <strong>The Official Formula Used:</strong><br/>
                                <code>CGPA = Σ (Semester CGPA × Semester Credits) ÷ Σ Credits</code>
                            </p>
                            <p>
                                <strong>Percentage Conversion:</strong><br/>
                                <code>Percentage = CGPA × 10</code>
                            </p>
                            <p>
                                When you input your data into our calculator, it takes the SGPA of each semester, multiplies it by the respective semester credits to determine your total "Quality Points" for that term. It then aggregates all Quality Points across your entire academic lifecycle and divides it by the total cumulative credits attempted. This ensures a 100% accurate reflection of your academic standing.
                            </p>
                        </div>

                        <div>
                            <h2>Official SRM Grade Points Table</h2>
                            <p>
                                SRM utilizes a standard 10-point grading scale. Use this grading table as a definitive reference while calculating your GPA or CGPA. It is crucial to input the exact grade points to avoid estimation errors.
                            </p>
                            
                            <div className="overflow-x-auto not-prose my-8">
                                <table className="w-full text-sm text-left border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-xs">
                                        <tr>
                                            <th className="px-6 py-4">Letter Grade</th>
                                            <th className="px-6 py-4">Performance</th>
                                            <th className="px-6 py-4 text-center">Grade Point</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">O</td><td className="px-6 py-4">Outstanding</td><td className="px-6 py-4 text-center font-bold text-blue-600">10.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">A+</td><td className="px-6 py-4">Excellent</td><td className="px-6 py-4 text-center font-bold text-blue-600">9.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">A</td><td className="px-6 py-4">Very Good</td><td className="px-6 py-4 text-center font-bold text-blue-600">8.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">B+</td><td className="px-6 py-4">Good</td><td className="px-6 py-4 text-center font-bold text-blue-600">7.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">B</td><td className="px-6 py-4">Above Average</td><td className="px-6 py-4 text-center font-bold text-blue-600">6.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">C</td><td className="px-6 py-4">Average</td><td className="px-6 py-4 text-center font-bold text-blue-600">5.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-900">P</td><td className="px-6 py-4">Pass</td><td className="px-6 py-4 text-center font-bold text-blue-600">4.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-red-600">F</td><td className="px-6 py-4 text-red-600">Fail</td><td className="px-6 py-4 text-center font-bold text-red-600">0.00</td></tr>
                                        <tr className="hover:bg-slate-50"><td className="px-6 py-4 font-bold text-slate-500">W / Ab / I</td><td className="px-6 py-4 text-slate-500">Withdrawal / Absent / Incomplete</td><td className="px-6 py-4 text-center font-bold text-slate-500">0.00</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <p className="text-sm text-slate-500 italic mt-4">
                                Note: Grades and policies may vary slightly depending on course regulations (e.g., 2015 vs 2018 regulations) or specific academic updates. Always verify with official SRM academic guidelines provided by your department head.
                            </p>
                        </div>

                        <div>
                            <h2>Step-by-Step Example Calculation</h2>
                            <p>
                                To illustrate the power and necessity of a weighted CGPA calculator, consider a student transitioning into their sophomore year. Below is a hypothetical representation of their first three semesters:
                            </p>
                            
                            <ul className="space-y-2 mb-6">
                                <li><strong>Semester 1:</strong> Achieved an 8.40 SGPA across 22 credits.</li>
                                <li><strong>Semester 2:</strong> Achieved an 8.90 SGPA across 24 credits.</li>
                                <li><strong>Semester 3:</strong> Achieved an 9.10 SGPA across 21 credits.</li>
                            </ul>
                            
                            <p>
                                A common, fatal mistake students make is simply averaging the three SGPAs: <code>(8.40 + 8.90 + 9.10) / 3 = 8.80</code>.
                            </p>
                            <p>
                                While this happens to be close, it is mathematically flawed. The correct method calculates total quality points:
                                <br/>Sem 1: <code>8.40 * 22 = 184.8</code>
                                <br/>Sem 2: <code>8.90 * 24 = 213.6</code>
                                <br/>Sem 3: <code>9.10 * 21 = 191.1</code>
                            </p>
                            <p>
                                Total Quality Points = <code>589.5</code><br/>
                                Total Credits = <code>67</code><br/>
                                <strong>Actual CGPA:</strong> <code>589.5 / 67 = 8.798 (rounded to 8.80)</code>
                            </p>
                            <p>
                                Our calculator automates this entire rigorous process in real-time. As you type, the underlying algorithm processes the data instantly without requiring page reloads or server queries.
                            </p>
                        </div>

                        <div>
                            <h2>Why Students Prefer Online CGPA Calculators</h2>
                            <p>
                                In the fast-paced environment of SRM Institute of Science and Technology, time is of the essence. Manual CGPA calculations are prone to human error—a misplaced decimal or an incorrectly summed credit can provide a false sense of security or undue panic.
                            </p>
                            <p>Students consistently rely on our SRM CGPA Calculator for several critical milestones:</p>
                            <ul>
                                <li><strong>Campus Interviews & Placements:</strong> Ensuring you meet the stringent 7.0 or 8.0 cutoffs set by Day-1 recruiters (e.g., TCS Digital, Amazon, Microsoft).</li>
                                <li><strong>Semester Result Planning:</strong> Predictive analysis to determine what exact SGPA is required in the upcoming semester to cross a specific CGPA threshold.</li>
                                <li><strong>Applying Abroad:</strong> International universities rely heavily on CGPA and standardized percentage conversions. Our tool provides the exact percentage metric demanded by foreign admission portals.</li>
                                <li><strong>Scholarship Eligibility:</strong> Tracking performance to maintain merit-based financial aid.</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Is CGPA Important at SRM?</h2>
                            <p>
                                Emphatically, yes. While the modern tech industry increasingly values raw skills, open-source contributions, and practical project portfolios, your CGPA remains the primary gating metric used by almost all massive corporate recruiters. 
                            </p>
                            <p>
                                During mass recruitment drives, companies utilize automated filtering software to process thousands of resumes. A strong CGPA (typically above 7.5) ensures your resume survives the initial automated purge. Furthermore, a high CGPA demonstrates consistency, discipline, and a strong work ethic to prospective employers.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 my-16">
                            <h2 className="mt-0">Frequently Asked Questions</h2>
                            
                            <div className="space-y-8 mt-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. What is the difference between SGPA and CGPA at SRM?</h3>
                                    <p className="text-slate-600 m-0">
                                        SGPA (Semester Grade Point Average) indicates your academic performance specifically for a single, isolated semester. CGPA (Cumulative Grade Point Average) is the holistic, weighted average of all your SGPAs accumulated from the first semester to your current standing.
                                    </p>
                                </div>
                                
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. How is SGPA calculated?</h3>
                                    <p className="text-slate-600 m-0">
                                        SGPA is calculated by multiplying the specific credit weight of each individual course by the grade points earned in that course, summing all these values together, and dividing by the total credits attempted during that specific semester.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">3. Is this calculator's result official?</h3>
                                    <p className="text-slate-600 m-0">
                                        This tool provides highly accurate mathematical estimates based exclusively on the data you enter. However, final official academic records and transcripts are issued solely by the SRM University administration. Always refer to the official SRM portal for certified documentation.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">4. What is considered a "Good" CGPA at SRM for placements?</h3>
                                    <p className="text-slate-600 m-0">
                                        While expectations vary wildly depending on the hiring company, a CGPA of 7.5 and above is generally considered safe. Many top-tier 'Super Dream' status companies set a hard minimum cutoff ranging from 7.0 to 8.0, and almost all require zero standing arrears (backlogs).
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">5. Can I improve my CGPA after failing a subject?</h3>
                                    <p className="text-slate-600 m-0">
                                        Yes. Once you successfully clear a failed subject (initially an 'F' grade) in a subsequent supplementary or reappearance examination, the newly acquired grade replaces the 0.00 grade point in your overall CGPA calculation. However, the initial "F" might still be permanently recorded on your original semester grade sheet.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2>Conclusion</h2>
                            <p>
                                If you are searching for a reliable, privacy-first SRM CGPA Calculator, this tool is designed to eliminate academic anxiety. It empowers you to calculate your cumulative CGPA and equivalent percentage instantly with zero hassle. It's lightning-fast, impeccably accurate, fully mobile-friendly, and built explicitly for students demanding quick, actionable result evaluation.
                            </p>
                            <p>
                                Bookmark this page and use the calculator regularly at the end of each semester to track your ongoing progress and stay ahead in your academic journey!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
