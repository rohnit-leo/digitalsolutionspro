"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star, Shield, Zap, Users, Award, Sparkles, Target, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getFeaturedProducts } from "@/lib/products"

const trustFeatures = [
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your digital products delivered immediately after purchase",
    color: "from-red-600 to-red-700",
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Round-the-clock customer support via WhatsApp and email",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-picked, tested solutions from verified developers",
    color: "from-red-600 to-red-700",
  },
]

const stats = [
  { number: "10,000+", label: "Happy Customers", icon: Users },
  { number: "24", label: "Digital Products", icon: Target },
  { number: "99.9%", label: "Uptime", icon: Shield },
  { number: "24/7", label: "Support", icon: Heart },
]

export default function HomePage() {
  const featuredProducts = getFeaturedProducts()

  const handleWhatsAppContact = () => {
    const message = "Hello, I'm interested in Digital Solutions Pro products. Please share more details."
    const whatsappUrl = `https://wa.me/919828056386?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-red-600/10 to-red-700/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-8 animate-glow">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300">Premium Digital Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent animate-gradient">
              Digital Solutions
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-float">
                Pro
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed animate-fade-in-up delay-300">
              Discover premium digital products and software solutions that transform your business. From streaming
              memberships to professional software, we've got everything you need to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up delay-500">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 btn-glow-red animate-pulse-red"
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsAppContact}
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 text-lg rounded-full bg-transparent btn-scale"
              >
                Contact Us
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 stagger-animation">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group interactive-element">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 text-gradient-red">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover our most popular digital solutions trusted by thousands of customers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="bg-slate-800 border-slate-700 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 group card-hover overflow-hidden"
              >
                <CardHeader className="relative p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-contain bg-white p-4 group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                    <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white animate-pulse shadow-lg`}>
                      {product.badge}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2 text-xl group-hover:text-red-400 transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-slate-400 mb-4 line-clamp-2">{product.description}</CardDescription>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-red-400 text-red-400" />
                      ))}
                    </div>
                    <span className="text-sm text-slate-400">4.9 (500+ reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-lg text-slate-500 line-through">{product.originalPrice}</span>
                    <Badge variant="secondary" className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">
                      Save{" "}
                      {Math.round(
                        ((Number.parseInt(product.originalPrice.slice(1)) - Number.parseInt(product.price.slice(1))) /
                          Number.parseInt(product.originalPrice.slice(1))) *
                          100,
                      )}
                      %
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href={`/product/${product.id}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white btn-glow-red">
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in-up">
            <Link href="/shop">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 bg-transparent btn-scale"
              >
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Features */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Digital Solutions Pro?</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We're committed to providing the highest quality digital products with exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-animation">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="text-center group interactive-element">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-slate-900 to-red-900 animate-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of satisfied customers who have revolutionized their operations with our premium digital
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full btn-glow-red animate-pulse-red"
                >
                  Start Shopping Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppContact}
                className="border-red-400 text-red-300 hover:bg-red-500 hover:text-white px-8 py-4 text-lg rounded-full bg-transparent btn-scale"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
