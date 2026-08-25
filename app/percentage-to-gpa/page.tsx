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
            <h2>Understanding the Conversion</h2>
            <p>
              Different education systems across the world use different grading scales. While universities in the US commonly use a <strong>4.0 GPA scale</strong>, institutions in India and other regions often use percentages or a <strong>10.0 CGPA scale</strong>.
            </p>
            
            <h3>How to convert Percentage to a 10.0 CGPA</h3>
            <p>
              The most commonly accepted formula for converting a percentage to a 10-point CGPA is dividing the percentage by 9.5. For example, if you scored 85%, your estimated CGPA would be 85 / 9.5 = 8.94.
            </p>

            <h3>How to convert Percentage to a 4.0 GPA</h3>
            <p>
              Converting to a 4.0 scale is usually done using grade brackets rather than a direct mathematical formula. Our calculator maps standard percentage brackets to their equivalent 4.0 scale value based on widely accepted international guidelines (like those provided by WES - World Education Services).
            </p>

            <blockquote>
              <strong>Disclaimer:</strong> This tool provides an estimate. If you are applying for universities abroad, you may be required to get an official credential evaluation from an organization like WES or ECE, as specific university conversion formulas can vary.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
