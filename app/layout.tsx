import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
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
    metadataBase: new URL("http://localhost:3000"), // 🔥 এটা change করো

    title: "Robiul Islam | Full Stack Java & Flutter Developer",
    description:
        "Professional Full Stack Developer specializing in Spring Boot, Flutter, and scalable enterprise applications.",

    openGraph: {
        title: "Robiul Islam Portfolio",
        description:
            "Full Stack Developer | Spring Boot & Flutter Engineer",
        url: "https://yourdomain.com",
        siteName: "Robiul Portfolio",
        images: [
            {
                url: "/og-image.png", // public folder এ থাকবে
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
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
        </body>
        </html>
    );
}
