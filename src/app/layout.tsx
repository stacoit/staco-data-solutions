import type { Metadata } from "next";
import "./globals.css";

import dynamic from 'next/dynamic';

const RouteLoader = dynamic(() => import('../components/layout/RouteLoader'), {
  ssr: false
});

const PageTransition = dynamic(() => import('../components/layout/PageTransition'), {
  ssr: false
});

export const metadata: Metadata = {
  title: "Staco Data Solutions",
  description: "Transform your data into actionable insights with cutting-edge analytics and machine learning solutions.",
  icons: {
    icon: '/images/sds_logo.svg',
    apple: '/images/sds_logo.svg',
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
        <link rel="icon" href="/images/sds_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <RouteLoader />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}
