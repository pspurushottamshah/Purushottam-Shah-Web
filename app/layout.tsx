import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Purushottam Shah | The Architect of Transformation",
    description: "Senior Technical Project Manager with MBA & MPM, delivering £5M+ business transformations across Australia, Asia, and Nepal. Expert in enterprise project management, CRM/ERP implementations, and team leadership.",
    keywords: ["Project Manager", "MBA", "MPM", "Business Transformation", "Dynamics CRM", "ERP", "Australia", "Technical PM"],
    authors: [{ name: "Purushottam Shah" }],
    openGraph: {
        title: "Purushottam Shah | The Architect of Transformation",
        description: "Delivering £5M+ Business Transformations with MBA & MPM Excellence",
        type: "website",
        locale: "en_AU",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
