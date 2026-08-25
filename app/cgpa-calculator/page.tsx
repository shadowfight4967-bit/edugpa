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
              <strong>Quick Answer:</strong> The free CGPA calculator above allows you to instantly compute your Cumulative Grade Point Average by aggregating your semester GPAs based on credit hours. Simply enter your GPA and credits for each term, click "Add Semester," and the tool will automatically generate your final cumulative score.
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
              <li><strong>Add Multiple Semesters:</strong> Click the "Add Semester" button to generate a new row for your next term.</li>
              <li><strong>Review Your Results:</strong> Your overall CGPA and total aggregated credits will automatically update in the blue summary box at the bottom of the tool.</li>
            </ol>
            
            <h3>Why is Tracking Your CGPA Important?</h3>
            <p>
              Your CGPA is the defining metric of your university career. It is the single number evaluated by scholarship committees, graduate admissions boards, and top-tier employers. 
            </p>
            <p>
              By tracking it semester-by-semester using this calculator, you can accurately forecast what grades you need in your final year to hit specific thresholds. If you need to convert an international percentage to a GPA before using this tool, try our <a href="/percentage-to-gpa">Percentage to GPA Converter</a>.
            </p>

            <h3>Frequently Asked Questions</h3>
            <h4>Does this tool support a 10-point scale?</h4>
            <p>Yes. The mathematics behind a weighted average are identical regardless of the scale. You can enter a 9.2 GPA on a 10-point scale, and the calculator will aggregate it flawlessly.</p>
            
            <h4>How does course weight affect my CGPA?</h4>
            <p>Heavier semesters (e.g., 18 credits) have a significantly larger impact on your final cumulative average than lighter semesters (e.g., 12 credits). The calculator automatically handles this mathematical weighting for you.</p>
          </div>
        </div>
      </section>
    </>
  );
}
