import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jguni.in"),
  title: {
    default: "JG University — A New-Age, Tech-Driven University in Ahmedabad",
    template: "%s · JG University",
  },
  description:
    "JG University is a UGC-approved, tech-driven university in Ahmedabad offering interdisciplinary undergraduate, postgraduate and doctoral programmes built around real-world, future-ready learning.",
  keywords: [
    "JG University",
    "Ahmedabad university",
    "UGC approved",
    "tech-driven university",
    "BBA",
    "MBA",
    "B.Tech",
    "BCA",
  ],
  openGraph: {
    title: "JG University — A New-Age, Tech-Driven University",
    description:
      "Interdisciplinary, experiential education in Ahmedabad. UGC-approved. Admissions open for 2026–27.",
    url: "https://jguni.in",
    siteName: "JG University",
    type: "website",
  },
};

// Set the theme before paint to avoid a flash of the wrong palette.
const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('jg-theme');
    var d = s ? s === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', d);
    document.documentElement.style.colorScheme = d ? 'dark' : 'light';
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${hanken.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
