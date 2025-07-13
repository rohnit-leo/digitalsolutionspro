import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digital Solutions Pro - Premium Digital Products & Software Solutions",
  description:
    "Discover premium digital products and software solutions for your business. From AI tools to automation software, transform your operations with Digital Solutions Pro.",
  keywords:
    "digital products, software solutions, AI tools, business automation, productivity software, digital marketing tools",
  authors: [{ name: "Digital Solutions Pro" }],
  creator: "Digital Solutions Pro",
  publisher: "Digital Solutions Pro",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digitalsolutionspro.com",
    title: "Digital Solutions Pro - Premium Digital Products & Software Solutions",
    description:
      "Discover premium digital products and software solutions for your business. Transform your operations with our curated collection of AI tools, automation software, and productivity solutions.",
    siteName: "Digital Solutions Pro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions Pro - Premium Digital Products & Software Solutions",
    description: "Discover premium digital products and software solutions for your business.",
    creator: "@digitalsolutionspro",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
