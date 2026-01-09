import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Purushottam Shah | Senior Technical Project Manager | MBA & MPM",
    description: "Results-driven Senior Technical Project Manager with MBA & MPM, delivering £5M+ business transformations globally. Expert in ERP/CRM implementation, Enterprise Software, and Digital Transformation.",
    keywords: ["Senior Technical Project Manager", "Project Manager", "MBA", "MPM", "Business Transformation", "Microsoft Dynamics 365", "NetSuite", "ERP Implementation", "CRM", "Agile", "Scrum", "Australia", "Nepal", "Software Development"],
    authors: [{ name: "Purushottam Shah" }],
    openGraph: {
        title: "Purushottam Shah | Senior Technical Project Manager",
        description: "Transforming businesses through technology. Delivering £5M+ projects with MBA & MPM excellence.",
        type: "website",
        locale: "en_AU",
        siteName: "Purushottam Shah Portfolio"
    },
    robots: {
        index: true,
        follow: true,
    }
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
