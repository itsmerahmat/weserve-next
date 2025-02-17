import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const clashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.woff2",
  style: "normal",
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Weserve - A platform for server providers and clients",
  description:
    "We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.",
  keywords: ["server", "provider", "client", "service", "platform"],
  metadataBase: new URL("https://weserve-next.vercel.app/"),
  creator: "Build With Angga",
  publisher: "Rahmat Budianoor",
  openGraph: {
    title: "Weserve - A platform for server providers and clients",
    description:
      "We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.",
    url: "https://weserve-next.vercel.app/",
    type: "website",
    siteName: "Weserve",
    images: [
      {
        url: "/og-image.png",
        width: 513,
        height: 123,
        alt: "Weserve - A platform for server providers and clients",
      },
    ],
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
        className={`${poppins.variable} ${clashDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
