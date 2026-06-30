import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Placeholder
const CONVERSION_LABEL = "AW-XXXXXXXXXX/XXXXXXXXXX"; // Placeholder

export const metadata: Metadata = {
  title: "Platform Compass | UK's Elite Platform Authority 2026",
  description: "Navigate to success with the UK's premier platform review hub. Expert analysis, exclusive bonuses, and verified ratings.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/logo.png", type: "image/png" },
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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.open(url, '_blank');
                }
              };
              gtag('event', 'conversion', {
                  'send_to': '${CONVERSION_LABEL}',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className="antialiased bg-background text-white min-h-screen flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
