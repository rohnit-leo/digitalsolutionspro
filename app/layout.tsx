import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppChat from "@/components/ui/whatsapp-chat"

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
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Digital Solutions Pro Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Solutions Pro - Premium Digital Products & Software Solutions",
    description: "Discover premium digital products and software solutions for your business.",
    creator: "@digitalsolutionspro",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  )
}
