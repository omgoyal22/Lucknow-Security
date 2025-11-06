import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { FloatingContactButtons } from "@/components/floating-contact-buttons"
import { SplashWrapper } from "@/components/splash-wrapper"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lucknow Intelligence Security Private Limited - Professional Security Services",
  description:
    "Comprehensive security solutions across multiple industries with trained professionals and state-of-the-art equipment. Your security is our highest priority.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof document !== 'undefined') {
                  document.documentElement.style.visibility = 'hidden';
                  var style = document.createElement('style');
                  style.setAttribute('data-splash-block', 'true');
                  style.textContent = 'body > *:not(script):not(style) { opacity: 0 !important; visibility: hidden !important; }';
                  document.head.appendChild(style);
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <SplashWrapper>
          <Suspense fallback={null}>{children}</Suspense>
          <FloatingContactButtons />
        </SplashWrapper>
        <Analytics />
      </body>
    </html>
  )
}
