"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export default function WhatsAppChat() {
  const [showTooltip, setShowTooltip] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the component after a brief delay to ensure smooth animation
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    // Hide tooltip after 8 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false)
    }, 8000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const handleWhatsAppContact = () => {
    const message =
      "Hello, I'm interested in Digital Solutions Pro products. Please share more details and help me choose the right product for my needs."
    const whatsappUrl = `https://wa.me/919828056386?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setShowTooltip(false)
  }

  const handleCloseTooltip = () => {
    setShowTooltip(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Chat Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-24 right-6 z-40 animate-slide-in-right">
          <div className="bg-white text-gray-800 px-4 py-3 rounded-xl shadow-2xl text-sm font-medium max-w-xs relative border border-gray-200">
            <button
              onClick={handleCloseTooltip}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-1">Need Help?</div>
                <div className="text-gray-600 text-xs">Chat with us on WhatsApp!</div>
              </div>
            </div>
            <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      )}

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Pulsing ring effect */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30"></div>

          {/* Main button */}
          <Button
            onClick={handleWhatsAppContact}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 border-2 border-green-400/30"
            size="lg"
          >
            <MessageCircle className="w-7 h-7" />
          </Button>

          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  )
}
