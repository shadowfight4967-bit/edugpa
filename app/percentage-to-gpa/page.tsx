import { buildMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import PercentageToGPA from "@/components/PercentageToGPA";
import Image from "next/image";

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
              <li>Converting a percentage to a 10.0 scale uses a mathematical ratio (dividing by 9.5 in the CBSE system).</li>
              <li>Converting a percentage to a 4.0 scale relies on regional grade brackets, as direct math (like dividing by 25) is structurally inaccurate.</li>
              <li>Universities in North America primarily evaluate candidates based on the 4.0 GPA scale.</li>
              <li>This calculator provides a highly accurate estimate based on standard global conversion logic, but official admissions require certified credential evaluators like WES.</li>
            </ul>

            <h3>Why Convert Percentage to GPA?</h3>
            <p>
              Different educational systems across the globe utilize vastly different grading scales. In India and the UK, academic performance is typically expressed as a percentage out of 100 or as a classification. In the United States and Canada, the standard metric is the 4.0 Grade Point Average (GPA). 
            </p>
            <p>
              When applying to universities abroad or submitting resumes to multinational corporations, presenting your grades in the format the recipient understands is critical. A US admissions officer may not immediately grasp the rigor of a 72% from an Indian university (which is often a First Class degree), but they immediately understand a 3.3 GPA. Converting your grades provides necessary context and prevents your application from being unfairly dismissed due to grading scale misunderstandings.
            </p>

            <h3>How the 10.0 CGPA Conversion Works</h3>
            <p>
              In countries like India, many educational boards (such as CBSE) and engineering universities utilize a 10-point Cumulative Grade Point Average (CGPA) scale. The universally accepted mathematical formula for converting a raw percentage to this 10-point CGPA is straightforward and widely standardized.
            </p>
            <p>
              <strong>CGPA = Percentage ÷ 9.5</strong>
            </p>
            <p>
              For example, if your final transcript shows an 85%, your estimated CGPA would be calculated as 85 / 9.5, which equals 8.94. Conversely, if you have a CGPA and need the percentage, you multiply by 9.5 (e.g., 8.0 CGPA × 9.5 = 76%). Our calculator handles this instantly for you, ensuring accurate mathematical translation.
            </p>

            <h3>The Challenge of Converting Percentage to a 4.0 GPA</h3>
            <p>
              The biggest mistake international students make is trying to use simple division to find their US 4.0 GPA. Common (and incorrect) advice suggests dividing your percentage by 25 or multiplying it by 0.04. 
            </p>
            <p>
              <strong>Why direct math fails:</strong> The US grading system is not perfectly linear, and passing thresholds are much higher. In the US, a 60% is generally a failing grade (F, worth 0.0 points). In many international systems, a 60% is a solid passing grade (often a First Division). If a student from India divides a 60% by 25, they get 2.4 — representing a C+ passing grade in the US, when mathematically it maps to a failing score.
            </p>
            <p>
              Therefore, converting to a 4.0 scale requires mapping your percentage to specific "brackets" based on the grading rigor of your home country. Our calculator uses these widely accepted bracket methodologies to provide a realistic estimate of your standing on the 4.0 scale.
            </p>
            
            <h3>Standard Conversion Brackets (Percentage to 4.0 Scale)</h3>
            <p>
              While individual universities and evaluators may vary slightly, the following bracket system is the standard method used to convert international percentages (specifically from systems like India's) to the US 4.0 scale:
            </p>
            <ul>
              <li><strong>60% - 100%:</strong> Equivalent to an 'A' grade (4.0 GPA). In many international systems, achieving above 60% represents First Class/Division performance.</li>
              <li><strong>55% - 59.9%:</strong> Equivalent to a 'B' grade (3.0 GPA). Represents Second Class/Division performance.</li>
              <li><strong>50% - 54.9%:</strong> Equivalent to a 'C' grade (2.0 GPA). Represents Third Class/Pass performance.</li>
              <li><strong>40% - 49.9%:</strong> Equivalent to a 'D' grade (1.0 GPA). Bare minimum passing grade.</li>
              <li><strong>Below 40%:</strong> Equivalent to an 'F' grade (0.0 GPA). Fail.</li>
            </ul>
            <p>
              <em>Note:</em> The UK degree classification system uses a similar philosophical bracket (e.g., 70%+ is a First Class Honours, roughly equivalent to a 4.0). For a detailed breakdown of different national systems, see our <a href="/guides/understanding-gpa-conversion-charts">GPA conversion charts guide</a>.
            </p>

            <h3>Official Credential Evaluation (WES, ECE)</h3>
            <p>
              While this calculator is excellent for personal tracking, resume building, and initial university shortlisting, it is an <em>unofficial</em> estimate. When you formally apply to Master's or PhD programs in the United States or Canada, universities will rarely accept your self-reported converted GPA.
            </p>
            <p>
              You will almost always be required to submit your transcripts to a credential evaluation agency that is a member of NACES (National Association of Credential Evaluation Services). The most popular of these is <a href="https://www.wes.org/" target="_blank" rel="noopener noreferrer"><strong>WES (World Education Services)</strong></a>.
            </p>
            <p>
              These agencies analyze your specific university's historical grading trends. For example, if your university is known for extremely strict grading where nobody ever scores above 75%, WES might evaluate your 70% as a 4.0 GPA. Our calculator provides the closest possible approximation to a standard WES evaluation without paying the official evaluation fee.
            </p>

            <h3>How to Use Your Converted GPA</h3>
            <h4>On Resumes and LinkedIn</h4>
            <p>
              If you are applying for jobs at multinational companies that use US-centric applicant tracking systems, listing a converted GPA can help you clear automated filters. However, transparency is key. 
            </p>
            <p>
              <strong>Best Practice:</strong> List your original score, followed by the converted score in parentheses, specifying it is an estimate. <br/>
              <em>Example: B.Tech Computer Science – 78% (Estimated 3.8/4.0 US GPA)</em>
            </p>
            
            <h4>For Graduate School Planning</h4>
            <p>
              Use this tool early in your academic career to set goals. If your target graduate program in the US requires a minimum 3.0 GPA, you know you must maintain at least a Second Division (55%+) average in your home country. For competitive programs requiring a 3.5+, you should aim for consistent First Class (60%+) marks. Read our guide on <a href="/guides/what-is-a-good-cgpa-for-masters-abroad">what is a good CGPA for a Master's abroad</a> for more specific program targets.
            </p>

            <figure className="not-prose my-10">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <Image
                  src="/how-to-use-Percentage to GPA Converter.webp"
                  alt="How to use the Percentage to GPA Converter — step by step visual guide"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
              </div>
              <figcaption className="mt-3 text-center text-sm text-slate-500 italic font-medium">
                Visual guide: Converting your percentage to GPA using the converter tool
              </figcaption>
            </figure>

            <h3>Frequently Asked Questions</h3>
            <h4>Does a 100% equal a 5.0 GPA?</h4>
            <p>No, not on a standard unweighted scale. In the US, the maximum unweighted GPA is 4.0, which corresponds to an 'A' grade. A 5.0 GPA only exists on "weighted" scales used by American high schools to reward students taking advanced classes (like AP or IB). Graduate programs always evaluate on the unweighted 4.0 scale.</p>

            <h4>Why is my converted GPA higher than I expected?</h4>
            <p>International students are often surprised when a 65% converts to a 4.0. This is because standard international grading is significantly more rigorous at the top end than US grading. In the US, 90% of students in a class might score above 90% on a test. In India or the UK, scoring above 80% on a university exam is exceptionally rare. The conversion brackets reflect this difference in difficulty.</p>
            
            <h4>Can I submit this converted GPA to universities?</h4>
            <p>You can use this estimate on initial inquiry forms or during informal discussions with admissions counselors. However, the formal application portal will require you to either enter your original percentage exactly as it appears on your transcript or submit an official WES evaluation.</p>

            <h4>What if my university uses a 7-point or 9-point scale?</h4>
            <p>If you are not on a 100-point percentage scale, you will first need to find your university's official conversion formula to percentage (which is usually printed on the back of your transcript). Once you have your percentage, you can use this calculator to find the 4.0 or 10.0 equivalent.</p>

            <blockquote>
              <strong>Disclaimer:</strong> This tool provides a highly accurate estimate based on standard international conversion metrics. Specific university conversion formulas and formal credential evaluations can vary. Always defer to official university policies for admissions.
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
