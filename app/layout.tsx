import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { FloatingContactButtons } from "@/components/floating-contact-buttons"
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <FloatingContactButtons />
        <Analytics />
      </body>
    </html>
  )
}
