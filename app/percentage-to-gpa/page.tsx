import { buildMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import PercentageToGPA from "@/components/PercentageToGPA";

export const metadata = buildMetadata({
  title: "Percentage to GPA Converter",
  description: "Convert your percentage to a 4.0 GPA, 10.0 CGPA, or letter grade with our free and accurate online converter.",
  path: "/percentage-to-gpa",
});

export default function PercentageToGPAPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Percentage to GPA Converter",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description: "A free tool to convert percentage scores to GPA on a 4.0 and 10.0 scale.",
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
            Percentage to GPA Converter
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Quickly translate your percentage marks into a standard 4.0 GPA or 10.0 scale CGPA for international applications and resume building.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PercentageToGPA />

          <div className="max-w-3xl mx-auto mt-16 prose prose-slate">
            <h2>Understanding Percentage to GPA Conversions</h2>
            <p>
              <strong>Quick Answer:</strong> This tool instantly converts your raw academic percentage into universally recognized grading formats. Simply input your percentage, and it will automatically generate your equivalent score on the US 4.0 GPA scale, the international 10.0 CGPA scale, and the corresponding academic letter grade.
            </p>
            
            <h3>Key Takeaways</h3>
            <ul>
              <li>Converting a percentage to a 10.0 scale uses a mathematical ratio (dividing by 9.5).</li>
              <li>Converting a percentage to a 4.0 scale relies on regional grade brackets, as direct math is inaccurate.</li>
              <li>Universities in North America primarily evaluate candidates based on the 4.0 GPA scale.</li>
              <li>This calculator provides a highly accurate estimate based on standard global conversion logic, but official admissions require certified credential evaluators.</li>
            </ul>

            <h3>How the 10.0 CGPA Conversion Works</h3>
            <p>
              In countries like India, many educational boards (such as CBSE) utilize a 10-point scale. The universally accepted mathematical formula for converting a raw percentage to this 10-point CGPA is straightforward: 
            </p>
            <p>
              <strong>CGPA = Percentage ÷ 9.5</strong>
            </p>
            <p>
              For example, if your final transcript shows an 85%, your estimated CGPA would be calculated as 85 / 9.5, which equals 8.94. Our calculator handles this instantly for you.
            </p>

            <h3>How the 4.0 GPA Conversion Works</h3>
            <p>
              The biggest mistake students make is trying to divide their percentage to find their US 4.0 GPA. The US grading system is not perfectly linear. A 60% is a failing grade in the US, but it is often a passing grade internationally. 
            </p>
            <p>
              Therefore, converting to a 4.0 scale requires mapping your percentage to a specific "bracket." Our calculator maps standard international percentage brackets to their equivalent 4.0 scale value based on widely accepted guidelines used by organizations like WES (World Education Services).
            </p>
            
            <h3>Frequently Asked Questions</h3>
            <h4>Can I put this converted GPA on my resume?</h4>
            <p>Yes, if you are applying for international roles, listing your converted 4.0 GPA provides valuable context for employers. However, it is best practice to include your original percentage in parentheses next to it.</p>
            
            <h4>Is this conversion accepted by universities?</h4>
            <p>This tool is excellent for personal tracking and initial university screening. However, for formal applications to competitive Master's programs, universities will require an official, paid credential evaluation to certify your transcript.</p>
            
            <blockquote>
              <strong>Disclaimer:</strong> This tool provides a highly accurate estimate based on standard international conversion metrics. Specific university conversion formulas can vary.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
