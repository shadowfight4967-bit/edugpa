import { buildMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import CGPACalculator from "@/components/CGPACalculator";

export const metadata = buildMetadata({
  title: "CGPA Calculator — Calculate Cumulative GPA",
  description: "Calculate your Cumulative Grade Point Average (CGPA) effortlessly with our accurate and free CGPA calculator.",
  path: "/cgpa-calculator",
});

export default function CGPACalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CGPA Calculator",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description: "A free tool to calculate Cumulative Grade Point Average (CGPA).",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-slate-50 pt-20 pb-12 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            CGPA Calculator
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Easily compute your Cumulative Grade Point Average by entering your GPA and credits for each semester.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CGPACalculator />
          <div className="max-w-3xl mx-auto mt-16 prose prose-slate">
            <h2>Understanding Your Cumulative Grade Point Average</h2>
            <p>
              <strong>Quick Answer:</strong> The free CGPA calculator above allows you to instantly compute your Cumulative Grade Point Average by aggregating your semester GPAs based on credit hours. Simply enter your GPA and credits for each term, click &quot;Add Semester,&quot; and the tool will automatically generate your final cumulative score.
            </p>
            
            <h3>Key Takeaways</h3>
            <ul>
              <li>A Cumulative Grade Point Average (CGPA) is a weighted average of all your individual semester grades.</li>
              <li>Your total credit hours directly impact the weight of a specific semester on your final score.</li>
              <li>Consistently tracking your CGPA prevents end-of-term surprises and allows for data-driven academic planning.</li>
              <li>This calculator operates entirely in your browser; your academic data is never stored or tracked.</li>
            </ul>

            <h3>How to Use This CGPA Calculator</h3>
            <p>
              Tracking your academic standing across multiple semesters can involve tedious math, especially if your semesters have varying credit loads. Our tool simplifies this process entirely:
            </p>
            <ol>
              <li><strong>Input Your Semester Data:</strong> Locate the first row and enter the GPA you achieved for that specific term (e.g., 3.6).</li>
              <li><strong>Add Credit Hours:</strong> Enter the total number of credits you completed during that term (e.g., 15).</li>
              <li><strong>Add Multiple Semesters:</strong> Click the &quot;Add Semester&quot; button to generate a new row for your next term.</li>
              <li><strong>Review Your Results:</strong> Your overall CGPA and total aggregated credits will automatically update in the summary box at the bottom of the tool.</li>
            </ol>

            <h2>What Is a CGPA and Why Does It Matter?</h2>
            <p>
              A Cumulative Grade Point Average is the definitive academic metric of your university career. Unlike your semester GPA — which reflects only one term — your CGPA is a weighted aggregate of every grade you have earned since your first day of enrollment. It is the single number that scholarship committees, graduate admissions boards, and corporate recruiters evaluate when reviewing your academic history.
            </p>
            <p>
              Understanding the distinction between a simple average and a weighted average is critical. A simple average of your semester GPAs treats every term as equal. A weighted CGPA accounts for the fact that semesters with more credit hours represent more academic work — and should therefore carry more weight in your cumulative score.
            </p>

            <h3>The CGPA Formula: How the Weighted Average Works</h3>
            <p>
              The correct formula for calculating your CGPA is:
            </p>
            <p>
              <strong>CGPA = Σ (Semester GPA × Semester Credit Hours) ÷ Σ Total Credit Hours</strong>
            </p>
            <p>
              Each semester&apos;s GPA is multiplied by its credit hours to produce &quot;quality points.&quot; The sum of all quality points is then divided by the sum of all credit hours. The result is your true credit-weighted cumulative average.
            </p>
            <p>
              A concrete example: Semester 1 produced a 3.5 GPA over 15 credits, and Semester 2 produced a 3.9 GPA over 18 credits. The weighted CGPA is:
            </p>
            <p>
              <em>(3.5 × 15) + (3.9 × 18) ÷ (15 + 18) = (52.5 + 70.2) ÷ 33 = 122.7 ÷ 33 = <strong>3.72 CGPA</strong></em>
            </p>
            <p>
              If you had simply averaged 3.5 and 3.9, you would get 3.70 — close but mathematically inaccurate. The difference grows significantly when semester credit loads vary substantially. Our calculator applies the weighted formula automatically for every semester you enter.
            </p>

            <h3>Why Tracking Your CGPA Matters Throughout Your Degree</h3>
            <p>
              Most students only check their CGPA when they receive their final transcript or when a job application asks for it. This reactive approach misses the entire point of the metric. Your CGPA is a living number — it changes every semester, and every semester is an opportunity to either improve or erode your academic standing.
            </p>
            <p>
              Tracking your CGPA proactively — specifically using this calculator to model &quot;what-if&quot; scenarios — gives you a precise picture of what you need to achieve in upcoming semesters. If your current CGPA is 3.1 after three semesters and your target for graduate school admission is 3.5, you can calculate exactly what SGPA you need across your remaining semesters to reach that goal. That information transforms a vague aspiration into a specific, actionable plan.
            </p>

            <h3>Common Mistakes Students Make When Calculating CGPA</h3>
            <p>
              <strong>Mistake 1: Averaging semester GPAs directly.</strong> This ignores credit hour weighting and produces an incorrect result whenever semesters have different credit loads — which is nearly always the case.
            </p>
            <p>
              <strong>Mistake 2: Including pass/fail courses in the GPA calculation.</strong> Courses graded as Pass or Fail (P/F) contribute to your credit hour total for graduation requirements, but they do not contribute quality points to your GPA calculation. Including their credit hours in your denominator artificially dilutes your CGPA.
            </p>
            <p>
              <strong>Mistake 3: Confusing SGPA with CGPA.</strong> Your SGPA (Semester GPA) is a single-term metric. Your CGPA is cumulative across all terms. Graduate schools and employers almost always want your CGPA. When a job application asks for &quot;your GPA,&quot; provide the cumulative number.
            </p>
            <p>
              <strong>Mistake 4: Using incorrect scale conversions.</strong> If your university uses a 10-point scale and an application asks for your GPA, you cannot simply present 8.5 as 8.5 — the reader will interpret it as an 8.5 on a 4.0 scale (which is impossible). Always specify the scale or convert it using our <a href="/percentage-to-gpa">Percentage to GPA Converter</a>.
            </p>

            <h3>How Your CGPA Is Used in Admissions and Employment</h3>

            <h4>Graduate School Admissions</h4>
            <p>
              Most accredited graduate programs in the United States and Canada enforce a minimum CGPA cutoff of 3.0 on the 4.0 scale. Competitive programs at research-intensive universities typically admit students with CGPAs of 3.5 or higher. Elite programs — medical schools, top law schools, Ivy League PhD programs — maintain effective admissions averages at or above 3.8.
            </p>
            <p>
              For international students, your home country CGPA must be converted to the 4.0 scale through a NACES-certified credential evaluation service (such as WES or ECE) before formal assessment. For a full breakdown of what CGPA different countries require, read our guide on <a href="/guides/what-is-a-good-cgpa-for-masters-abroad">what is a good CGPA for a Master&apos;s abroad</a>.
            </p>

            <h4>Corporate Recruitment</h4>
            <p>
              Large employers — particularly in finance, consulting, engineering, and technology — frequently use GPA filters in their applicant tracking systems. A CGPA below 3.0 (or below 7.5 on a 10-point scale) can result in automatic rejection before a human reviewer ever sees the application. For campus recruitment in India, most tier-1 companies set minimum CGPA cutoffs between 6.0 and 8.0 depending on the role.
            </p>
            <p>
              The threshold matters most in early career applications. After two to three years of professional experience, employers shift their evaluation weight significantly toward work history and skills — making CGPA a diminishing but never entirely irrelevant factor.
            </p>

            <h3>CGPA on Different Scales: Understanding the Global Landscape</h3>
            <p>
              Our calculator works with any numerical grading scale. Whether your university uses the US 4.0 system, India&apos;s 10-point system, or any other numerical scale, the weighted average formula is identical — only the scale values change.
            </p>
            <ul>
              <li><strong>US 4.0 Scale:</strong> Standard at American universities. An A earns 4.0 points; B earns 3.0; C earns 2.0; D earns 1.0; F earns 0.</li>
              <li><strong>Indian 10-Point Scale:</strong> Used by CBSE, UGC-framework colleges, and many engineering institutions. Outstanding (O) performance earns 10 points; Pass earns 4-5 points depending on institution.</li>
              <li><strong>UK Degree Classifications:</strong> First Class (70%+), Upper Second 2:1 (60-69%), Lower Second 2:2 (50-59%). The UK does not use a numerical GPA scale — degree classification is the primary credential.</li>
              <li><strong>European ECTS:</strong> Credits are standardized, but grading remains national. Grade Distribution Tables help translate national grades to comparative standing across institutions.</li>
            </ul>
            <p>
              For a detailed breakdown of how these scales compare, read our guide on <a href="/guides/understanding-gpa-conversion-charts">understanding GPA conversion charts</a>. If you need to convert your percentage marks to a GPA scale, use our <a href="/percentage-to-gpa">Percentage to GPA Converter</a>.
            </p>

            <h3>Strategies to Improve Your CGPA</h3>
            <p>
              If your CGPA is below your target, the most important step is understanding the mathematics of recovery. Because CGPA is a weighted average of all accumulated credits, your leverage decreases as you progress through your degree. An improvement in your first or second semester has far more long-term impact than the same improvement in your final semester.
            </p>
            <p>
              Key recovery strategies include: retaking failed courses through grade replacement policies (where the new grade replaces the old one in your GPA calculation), prioritizing high-credit courses where strong performance has the most mathematical impact, and targeting the specific CGPA thresholds that matter for your goals rather than pursuing maximum possible scores uniformly across all courses.
            </p>
            <p>
              For a comprehensive guide to CGPA recovery specific to your year of study, read our guide on <a href="/guides/how-to-improve-cgpa-in-final-year">improving your CGPA in your final year</a> and our article on <a href="/guides/tips-to-improve-semester-gpa">proven tips to improve your semester GPA</a>.
            </p>

            <h3>Frequently Asked Questions</h3>
            <h4>Does this tool support a 10-point scale?</h4>
            <p>Yes. The mathematics behind a weighted average are identical regardless of the scale. You can enter a 9.2 GPA on a 10-point scale, and the calculator will aggregate it correctly. Just ensure all your inputs use the same scale consistently.</p>
            
            <h4>How does credit hour weighting affect my CGPA?</h4>
            <p>Heavier semesters (e.g., 18 credits) have a proportionally larger impact on your cumulative average than lighter semesters (e.g., 12 credits). A semester with 18 credits contributes 50% more to your CGPA calculation than a 12-credit semester. The calculator handles this weighting automatically.</p>

            <h4>Can I use this calculator to predict my future CGPA?</h4>
            <p>Yes. Enter your completed semesters with their actual GPAs and credits, then add a future semester with your target GPA and expected credits. The calculator will show you exactly what your cumulative CGPA would be if you achieved that target — giving you a concrete goal for the upcoming term.</p>

            <h4>Is my data safe when I use this calculator?</h4>
            <p>Completely. All calculations happen locally in your browser using client-side JavaScript. No grade data is transmitted to any server, stored in any database, or associated with your identity. Your academic records remain entirely private.</p>

            <h4>What is the difference between CGPA and cumulative GPA?</h4>
            <p>There is no meaningful difference — &quot;CGPA&quot; (Cumulative Grade Point Average) and &quot;cumulative GPA&quot; refer to the same concept: the credit-weighted average of all your grades across all completed semesters. &quot;CGPA&quot; is more commonly used in South Asian and European contexts; &quot;cumulative GPA&quot; is the standard US terminology for the same metric.</p>
          </div>
        </div>
      </section>
    </>
  );
}
