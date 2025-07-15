"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Mail, Instagram } from "lucide-react"

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  products: [
    { name: "AI Tools", href: "/shop?category=ai-tools" },
    { name: "Analytics", href: "/shop?category=analytics" },
    { name: "Marketing", href: "/shop?category=marketing" },
    { name: "Productivity", href: "/shop?category=productivity" },
  ],
  support: [
    { name: "Help Center", href: "/contact" },
    { name: "WhatsApp Support", href: "#" },
    { name: "Email Support", href: "mailto:ronitrathore6666@gmail.com" },
    { name: "Refund Policy", href: "/terms#refund" },
  ],
}

export default function Footer() {
  const handleWhatsAppContact = () => {
    const message = "Hello, I would like to know more about Digital Solutions Pro and your products."
    const whatsappUrl = `https://wa.me/919828056386?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/digital_tower.pro?igsh=eWVpMnBhZHMxMW1n", "_blank")
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-purple-900/50 via-gray-900 to-cyan-900/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Stay Updated with Latest Products</h3>
            <p className="text-gray-400 mb-8">
              Get notified about new digital solutions, exclusive offers, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 flex-1"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative w-12 h-12">
                  <Image
                    src="/images/logo.png"
                    alt="Digital Solutions Pro"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-bold text-white">Digital Solutions Pro</span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for premium digital products and software solutions. We help businesses transform
                and grow through innovative technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">+91 9828056386</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">ronitrathore6666@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <button
                    onClick={handleInstagramClick}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                  >
                    @digital_tower.pro
                  </button>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="flex gap-3 mt-6">
                <Button
                  size="sm"
                  onClick={handleWhatsAppContact}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => (window.location.href = "mailto:ronitrathore6666@gmail.com")}
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleInstagramClick}
                  className="border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white bg-transparent"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow
                </Button>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      onClick={
                        link.name === "WhatsApp Support"
                          ? (e) => {
                              e.preventDefault()
                              handleWhatsAppContact()
                            }
                          : undefined
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2024 Digital Solutions Pro. All rights reserved.</div>

            {/* Instagram Link */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Follow us on Instagram:</span>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleInstagramClick}
                className="w-10 h-10 p-0 text-pink-400 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
