import Script from "next/script";

interface JsonLdProps {
    data: Record<string, unknown> | Record<string, unknown>[];
}

export default function JsonLd({ data }: JsonLdProps) {
    return (
        <Script
            id={`jsonld-${Math.random().toString(36).slice(2, 9)}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
