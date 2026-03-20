import fs from "fs";
import path from "path";
import { BlogPost } from "@/types";

export const PLACEHOLDER_POSTS: BlogPost[] = [
    {
        slug: "percentage-to-cgpa-conversion",
        title: "How to Convert Percentage to CGPA Easily",
        excerpt:
            "Confused about converting your percentage score to CGPA? This step-by-step guide breaks down the most common formulas used by universities in India, Bangladesh, Pakistan, and beyond.",
        date: "2026-03-10",
        category: "Conversions",
        readTime: "7 min read",
    },
    {
        slug: "gpa-vs-sgpa-vs-cgpa-explained",
        title: "GPA vs SGPA vs CGPA Explained: What's the Difference?",
        excerpt:
            "GPA, SGPA, CGPA — these three acronyms define your entire academic record, yet most students mix them up. Here's a clear, once-and-for-all explanation with examples.",
        date: "2026-03-12",
        category: "GPA Basics",
        readTime: "6 min read",
    },
    {
        slug: "tips-to-improve-semester-gpa",
        title: "10 Proven Tips to Improve Your Semester GPA",
        excerpt:
            "Practical, research-backed strategies to raise your semester GPA — from smarter study scheduling to leveraging grade recovery options you probably didn't know existed.",
        date: "2026-03-12",
        category: "Study Tips",
        readTime: "8 min read",
    },
    {
        slug: "understanding-gpa-conversion-charts",
        title: "Understanding GPA Conversion Charts: A Global Guide",
        excerpt:
            "GPA scales differ wildly from country to country. This guide decodes the most important conversion charts so you can accurately compare grades across universities worldwide.",
        date: "2026-03-13",
        category: "Global Education",
        readTime: "9 min read",
    },
    {
        slug: "how-to-track-sgpa-each-semester",
        title: "How to Track Your SGPA Each Semester (The Smart Way)",
        excerpt:
            "Tracking your SGPA semester by semester is one of the most underrated habits of high-achieving students. Learn how to set it up, maintain it, and use it to forecast your CGPA.",
        date: "2026-03-14",
        category: "Calculations",
        readTime: "7 min read",
    },
    {
        slug: "best-free-academic-tools-for-students",
        title: "Best Free Academic Tools for Students in 2025",
        excerpt:
            "From GPA calculators to productivity apps and citation generators — here are the best free academic tools every student should bookmark right now.",
        date: "2026-03-14",
        category: "Study Tips",
        readTime: "8 min read",
    },
    {
        slug: "common-tech-problems-students-face",
        title: "Common Tech Problems Students Face While Studying & Gaming (And How to Fix Them)",
        excerpt:
            "From Wi-Fi lag during Zoom calls to controller connectivity issues while gaming — learn how to troubleshoot and fix the most common tech problems students face.",
        date: "2026-03-20",
        category: "Tech Tips",
        readTime: "12 min read",
    },
];

export function getAllSlugs(): string[] {
    return PLACEHOLDER_POSTS.map((post) => post.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return PLACEHOLDER_POSTS.find((post) => post.slug === slug);
}

export async function getPostContent(slug: string): Promise<string> {
    const filePath = path.join(process.cwd(), "content", "guides", `${slug}.mdx`);
    if (!fs.existsSync(filePath)) {
        return "";
    }
    const content = fs.readFileSync(filePath, "utf8");
    // Remove frontmatter
    const parts = content.split("---");
    if (parts.length >= 3) {
        return parts.slice(2).join("---").trim();
    }
    return content.trim();
}
