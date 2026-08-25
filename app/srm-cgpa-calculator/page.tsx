import JsonLd from "@/components/JsonLd";
import { buildMetadata, SITE_NAME, SITE_URL } from "@/lib/metadata";
import SRMCGPACalculator from "@/components/SRMCGPACalculator";
import { Calculator, ArrowLeft, ChevronRight, BookOpen, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                    
                    <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-12 prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-h2:text-4xl md:prose-h2:text-5xl prose-h3:text-2xl md:prose-h3:text-3xl prose-a:text-blue-600 prose-img:rounded-xl">
                        
                        <div>
                            <h2>Comprehensive SRM Grade Calculation Guide</h2>
                            <p>
                                <strong>Quick Answer:</strong> The official SRM CGPA Calculator allows students to accurately aggregate their semester grades using the university's strict 10-point scale. Simply input the exact credits and grade points earned in each semester to instantly calculate your Cumulative Grade Point Average and its percentage equivalent.
                            </p>
                            
                            <h3>Key Takeaways</h3>
                            <ul>
                                <li>SRM University uses a 10-point grading scale where an 'O' (Outstanding) equals 10.0 points.</li>
                                <li>To calculate an accurate CGPA, you must weight each semester's SGPA against the specific number of credits taken during that term.</li>
                                <li>A CGPA of 7.5 or higher is generally required to clear the automated screening rounds for top-tier campus placements.</li>
                                <li>This digital calculator automates the complex weighted average math instantly, ensuring your academic tracking is perfectly accurate.</li>
                            </ul>

                            <h3>Understanding the SRM CGPA System</h3>
                            <p>
                                The <a href="https://www.srmist.edu.in/" target="_blank" rel="noopener noreferrer">SRM Institute of Science and Technology (SRMIST)</a> is renowned for its rigorous academic curriculum. Navigating through university life involves a multitude of challenges, from maintaining strict attendance to clearing difficult papers. Amidst this, manually calculating and tracking your Cumulative Grade Point Average (CGPA) should not be another administrative burden.
                            </p>
                            <p>
                                Whether you are aiming for prestigious placements, securing international internships, seeking higher education admissions abroad, or trying to secure merit-based scholarships, a high CGPA is your golden ticket. Understanding exactly how this number is calculated prevents end-of-semester surprises and allows you to strategically plan your study hours.
                            </p>
                        </div>

                        <div>
                            <h3>How This SRM CGPA Calculator Works</h3>
                            <p>
                                Manual calculation is highly prone to human error, especially when different semesters possess wildly different credit totals. A common mistake students make is simply averaging their SGPAs together. This traditional method ignores the credit weighting and leads to mathematically incorrect results. 
                            </p>
                            <p>
                                Our SRM calculator removes this guesswork. It utilizes the rigorous weighted average algorithm officially mandated by the university.
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
                                When you input your data, the calculator multiplies the SGPA of each semester by the respective semester credits to determine your total "Quality Points" for that term. It then aggregates all Quality Points across your entire academic lifecycle and divides it by the total cumulative credits attempted.
                            </p>

                            <figure className="not-prose my-10">
                                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                                    <Image
                                        src="/SRM CGPA Calculator.webp"
                                        alt="How to use the SRM CGPA Calculator — step by step visual guide"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 768px"
                                    />
                                </div>
                                <figcaption className="mt-3 text-center text-sm text-slate-500 italic font-medium">
                                    Visual guide: Using the SRM CGPA Calculator to aggregate your semester grades
                                </figcaption>
                            </figure>
                        </div>

                        <div>
                            <h3>Official SRM Grade Points Table</h3>
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
                            <h3>Step-by-Step Example Calculation</h3>
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
                            <h2>Importance of CGPA at SRM University</h2>
                            <h3>Why Students Prefer Online CGPA Calculators</h3>
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
                            <h3>Is CGPA Crucial for SRM Placements?</h3>
                            <p>
                                Emphatically, yes. While the modern tech industry increasingly values raw skills, open-source contributions, and practical project portfolios, your CGPA remains the primary gating metric used by almost all massive corporate recruiters during campus placement drives.
                            </p>
                            <p>
                                During mass recruitment events, companies utilize automated filtering software (Applicant Tracking Systems) to process thousands of resumes. A strong CGPA (typically above 7.5, and often strictly above 8.0 for premium roles) ensures your resume survives the initial automated purge. 
                            </p>
                            
                            <h4>The "Super Dream" and "Dream" Offer Categories</h4>
                            <p>
                                SRM categorizes placement offers into tiers. "Super Dream" offers (typically 10 LPA and above from companies like Amazon, Microsoft, and Google) almost universally enforce strict academic cutoffs. To even sit for the initial coding rounds or aptitude tests for these companies, a minimum CGPA of 8.0 with zero history of standing arrears is the standard baseline. 
                            </p>
                            <p>
                                For standard "Dream" offers (5 to 9.9 LPA) or mass recruitment offers (TCS, Wipro, Cognizant), the cutoff usually sits around 7.0 or 60% equivalent. Falling below a 7.0 CGPA mathematically locks you out of a significant percentage of on-campus opportunities, regardless of your coding abilities.
                            </p>

                            <h4>Beyond the Initial Filter</h4>
                            <p>
                                Furthermore, a high CGPA demonstrates consistency, discipline, and a strong work ethic to prospective employers. Interviewers often use academic performance as a proxy for an applicant's ability to learn complex, sometimes tedious information and deliver results consistently over a four-year period.
                            </p>
                            
                            <h3>Strategies for Maintaining a High SRM CGPA</h3>
                            <p>
                                Understanding how your CGPA is calculated is only half the battle; actively managing it requires strategy. The most effective approach leverages the mathematical weight of the credit system:
                            </p>
                            <ul>
                                <li><strong>Prioritize High-Credit Courses:</strong> Core engineering subjects and intensive lab courses often carry 3 or 4 credits. Earning an 'O' or 'A+' in a 4-credit course has four times the positive impact on your CGPA as doing well in a 1-credit seminar. Allocate your study time proportionally to credit weight.</li>
                                <li><strong>Protect Your First Year:</strong> The first two semesters often feature foundational courses that are less complex than third-year core subjects. Securing a 9.0+ CGPA in your first year creates a mathematical buffer. Because CGPA is cumulative, a high early score is very difficult to drag down later, just as a low early score is mathematically difficult to pull up.</li>
                                <li><strong>Clear Arrears Immediately:</strong> A failing grade (F = 0 points) devastates a semester's SGPA. If you fail a subject, prioritize clearing it in the very next supplementary exam cycle. The new passing grade will replace the zero in your cumulative calculation, instantly repairing the damage to your overall CGPA.</li>
                            </ul>
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
