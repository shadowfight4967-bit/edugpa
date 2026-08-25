export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    readTime: string;
    coverImage?: string;
    featuredImage?: string;
    contentImage?: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface Tool {
    name: string;
    description: string;
    href: string;
    external: boolean;
    nofollow?: boolean;
}
