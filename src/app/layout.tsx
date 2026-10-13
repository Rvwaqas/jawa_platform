import type { Metadata } from "next";
import { Inter, Heebo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JAWA – IT Solutions & Services Company",
  description:
    "JAWA is a premier IT Solutions & Technology Services Company providing custom software, cloud architecture, cyber security, and enterprise IT consulting.",
  keywords: [
    "JAWA",
    "IT Solutions",
    "Technology Services",
    "Cyber Security",
    "Cloud Computing",
    "Software Development",
    "IT Management",
  ],
  icons: {
    icon: [
      { url: "/images/jawa-rounded.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/images/jawa-rounded.png",
    apple: "/images/jawa-rounded.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${heebo.variable} scroll-smooth`}>
      <body className="font-heebo text-[#7A7A7A] bg-white antialiased selection:bg-[#FF4255]/20 selection:text-[#FF4255]">
        {children}
      </body>
    </html>
  );
}

