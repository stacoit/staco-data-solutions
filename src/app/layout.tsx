import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import dynamic from 'next/dynamic';

const RouteLoader = dynamic(() => import('./components/layout/RouteLoader'), {
  ssr: false
});

const PageTransition = dynamic(() => import('./components/layout/PageTransition'), {
  ssr: false
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Staco Data Solutions",
  description: "Transform your data into actionable insights with cutting-edge analytics and machine learning solutions.",
  icons: {
    icon: '/images/sds_logo.png',
    apple: '/images/sds_logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/sds_logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <Navbar />
        <RouteLoader />
        <PageTransition>
          <main className="pt-16">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
