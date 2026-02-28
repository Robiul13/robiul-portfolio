import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://robiul-portfolio-nine.vercel.app"),

    title: {
        default: "Robiul Islam | Senior Java & Flutter Developer",
        template: "%s | Robiul Islam",
    },

    description:
        "Robiul Islam is a Senior Full Stack Developer specializing in Spring Boot, Java, Flutter, REST APIs, HRMS systems, and scalable enterprise application development.",

    keywords: [
        "Robiul Islam",
        "Java Developer Bangladesh",
        "Spring Boot Developer",
        "Flutter Developer",
        "Full Stack Developer",
        "HRMS Developer",
        "Enterprise Application Developer",
        "REST API Developer",
    ],

    authors: [{ name: "Robiul Islam" }],
    creator: "Robiul Islam",

    openGraph: {
        title: "Robiul Islam | Senior Java & Flutter Developer",
        description:
            "Professional Full Stack Developer with expertise in Spring Boot, Flutter, and enterprise systems.",
        url: "https://robiul-portfolio-nine.vercel.app",
        siteName: "Robiul Islam Portfolio",
        images: [
            {
                url: "/robiul-portfolio.png",
                width: 1200,
                height: 630,
                alt: "Robiul Islam Portfolio Preview",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Robiul Islam | Java & Flutter Developer",
        description:
            "Senior Full Stack Developer specializing in Spring Boot & Flutter.",
        images: ["/og-image.png"],
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}

        {/* 🔥 Schema Markup for SEO */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Robiul Islam",
                    url: "https://robiul-portfolio-nine.vercel.app",
                    jobTitle: "Senior Java & Flutter Developer",
                    sameAs: [
                        "https://github.com/Robiul13",
                        "https://linkedin.com/in/robiul-islam",
                    ],
                }),
            }}
        />
        </body>
        </html>
    );
}