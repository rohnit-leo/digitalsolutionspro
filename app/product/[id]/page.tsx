"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Shield,
  Download,
  Users,
  CheckCircle,
  ArrowLeft,
  Share2,
  Heart,
  Clock,
  Award,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getProduct } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white">
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleBuyNow = () => {
    const message = `Hi, I want to buy ${product.name} (${product.price}) from Digital Solutions Pro. 

Product Details:
- Name: ${product.name}
- Price: ${product.price}
- Duration: ${product.duration}
- Category: ${product.category}

Please share payment details and delivery information. Thank you!`
    const whatsappUrl = `https://wa.me/919828056386?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = () => {
    const shareMessage = `Check out this amazing product: ${product.name} for just ${product.price}! 

${product.description}

Visit Digital Solutions Pro for more premium digital products.`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-32">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-slate-400 mb-8 animate-fade-in-up">
          <Link href="/" className="hover:text-green-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-green-400 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link href="/shop">
          <Button
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-800 mb-8 bg-transparent btn-scale"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 animate-fade-in-up">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-slate-800 border border-green-500/20 shadow-2xl">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-[500px] object-contain bg-white p-4 hover:scale-105 transition-transform duration-500"
                priority
              />
              <Badge className={`absolute top-4 left-4 ${product.badgeColor} text-white animate-pulse shadow-lg`}>
                {product.badge}
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent"></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  {product.category}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                {product.name}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9</span>
              <span className="text-slate-400">(500+ reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-white">{product.price}</span>
              <span className="text-2xl text-slate-500 line-through">{product.originalPrice}</span>
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30 animate-pulse shadow-lg">
                Save{" "}
                {Math.round(
                  ((Number.parseInt(product.originalPrice.slice(1)) - Number.parseInt(product.price.slice(1))) /
                    Number.parseInt(product.originalPrice.slice(1))) *
                    100,
                )}
                %
              </Badge>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-lg font-semibold text-green-400">{product.duration}</span>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-green-400">What's Included:</h3>
              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={handleBuyNow}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Buy Now via WhatsApp
              </Button>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent btn-scale"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Add to Wishlist
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent btn-scale"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-4 gap-4 pt-6 border-t border-green-500/20">
              <div className="text-center group">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xs text-slate-300">100% Digital Delivery</div>
              </div>
              <div className="text-center group">
                <Download className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xs text-slate-300">Secure Files</div>
              </div>
              <div className="text-center group">
                <Award className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xs text-slate-300">After-Sale Support</div>
              </div>
              <div className="text-center group">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-xs text-slate-300">24/7 WhatsApp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 animate-fade-in-up">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border-green-500/20">
              <TabsTrigger
                value="description"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Description
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                Benefits
              </TabsTrigger>
              <TabsTrigger value="faqs" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
                FAQs
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card className="bg-slate-800 border-green-500/20">
                <CardContent className="p-8">
                  <div
                    className="prose prose-green max-w-none text-slate-300"
                    dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card className="bg-slate-800 border-green-500/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-green-500/20 last:border-b-0"
                      >
                        <span className="font-semibold text-green-400">{key}:</span>
                        <span className="text-slate-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <Card className="bg-slate-800 border-green-500/20">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {product.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faqs" className="mt-8">
              <Card className="bg-slate-800 border-green-500/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {product.faqs.map((faq, index) => (
                      <div key={index} className="border-b border-green-500/20 last:border-b-0 pb-6 last:pb-0">
                        <h4 className="text-lg font-semibold text-green-400 mb-3">{faq.question}</h4>
                        <p className="text-slate-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
