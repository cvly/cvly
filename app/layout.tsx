import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://cvly.me'),
  title: "Cyly - Free Portfolio Website Builder",
  description:
    "Build your professional portfolio free with Cvly.me. Simple easy-to-use editor, SEO-friendly templates, and instant publishing. Showcase your work effortlessly.",
  keywords: [
    "free portfolio website",
    "create online portfolio",
    "portfolio builder",
    "SEO-friendly portfolio templates",
    "drag-and-drop portfolio creator",
    "professional portfolio websites",
    "Cvly.me portfolio tool",
    "better than WordPress portfolios",
    "free alternative to Adobe Portfolio",
  ],
  icons: {
    icon: "/Cvly.svg", // Path to your favicon in the public directory
  },
  openGraph: {
    title: "Cyly - Free Portfolio Website Builder",
    description:
      "Build your professional portfolio free with Cvly.me. Simple easy-to-use editor, SEO-friendly templates, and instant publishing. Showcase your work effortlessly.",
    images: [
      {
        url: "/og-image.png", // Path to your OG image in the public directory
        width: 1200,
        height: 630,
        alt: "Cyly - Free Portfolio Website Builder",
      },
    ],
    siteName: "Cyly",
    type: "website",
    url: "https://cvly.me", // Replace with your actual website URL
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyly - Free Portfolio Website Builder",
    description:
      "Build your professional portfolio free with Cvly.me. Simple easy-to-use editor, SEO-friendly templates, and instant publishing. Showcase your work effortlessly.",
    images: ["/og-image.png"], // Path to your OG image in the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
