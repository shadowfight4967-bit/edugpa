import type { Metadata } from "next";

export const SITE_URL = "https://edugpa.online";
export const SITE_NAME = "EduGPA.online";
export const SITE_DESCRIPTION =
    "Understand GPA, SGPA & CGPA easily. Free academic grade point calculators, conversion guides, and student resources for learners worldwide.";
export const SITE_TWITTER = "@edugpa";

export function buildMetadata({
    title,
    description,
    path = "",
    ogImage = "/og-image.png",
    keywords = [],
}: {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
    keywords?: string[];
}): Metadata {
    const url = `${SITE_URL}${path}`;
    return {
        title,
        description,
        metadataBase: new URL(SITE_URL),
        keywords: [
            "GPA calculator",
            "CGPA calculator",
            "SGPA calculator",
            "grade point average",
            "academic GPA guide",
            "CGPA to percentage",
            "university grades",
            ...keywords,
        ],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            site: SITE_TWITTER,
            images: [ogImage],
        },
    };
}

export function buildArticleMetadata({
    title,
    description,
    slug,
    ogImage = "/og-image.png",
    keywords = [],
}: {
    title: string;
    description: string;
    slug: string;
    ogImage?: string;
    keywords?: string[];
}): Metadata {
    const path = `/guides/${slug}`;
    const url = `${SITE_URL}${path}`;
    return {
        title,
        description,
        metadataBase: new URL(SITE_URL),
        keywords: [
            "GPA guide",
            "CGPA explained",
            "SGPA calculation",
            "student academic resources",
            ...keywords,
        ],
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: "en_US",
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            site: SITE_TWITTER,
            images: [ogImage],
        },
    };
}
