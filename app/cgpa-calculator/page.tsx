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
            <h2>How to Use the CGPA Calculator</h2>
            <p>
              Your Cumulative Grade Point Average (CGPA) is a measure of your overall academic performance across all semesters.
            </p>
            <ol>
              <li>Enter the <strong>GPA</strong> you achieved for a given semester.</li>
              <li>Enter the total <strong>Credits</strong> for that semester.</li>
              <li>Click <strong>Add Semester</strong> to include more semesters in your calculation.</li>
              <li>Your overall CGPA and total credits will automatically update at the bottom.</li>
            </ol>
            
            <h3>Why is Tracking CGPA Important?</h3>
            <p>
              Many scholarships, graduate programs, and employers use your CGPA as a benchmark for academic success. Tracking it semester-by-semester helps you identify where you stand and what grades you need to reach your academic goals.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
