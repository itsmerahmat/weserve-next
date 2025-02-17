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
  title: "Weserve - Server providers",
  description:
    "We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.",
  keywords: ["server", "provider", "client", "service", "platform"],
  metadataBase: new URL("https://weserve-next.vercel.app"),
  creator: "Build With Angga",
  publisher: "Rahmat Budianoor",
  openGraph: {
    type: "website",
    url: "https://weserve-next.vercel.app",
    title: "Weserve - Server providers",
    description:
      "We provide a variety of servers to grow your users acquisition much user-friendly and boosting up sales.",
    siteName: "Weserve",
    images: ["opengraph-image.png"],
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
