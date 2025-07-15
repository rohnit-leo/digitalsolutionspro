"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, Grid, List, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { products } from "@/lib/products"

const categories = [
  "All",
  "Software",
  "Streaming",
  "Marketing",
  "Education",
  "Database",
  "Professional",
  "SEO",
  "Design",
  "Productivity",
  "Communication",
  "AI Tools",
  "Video Editing",
]

export default function ShopPage() {
  const handleBuyNow = (productName: string, productPrice: string) => {
    const message = `Hi, I want to buy ${productName} (${productPrice}) from Digital Solutions Pro. Please share payment details and delivery information.`
    const whatsappUrl = `https://wa.me/919828056386?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Digital Products</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover premium software solutions, streaming memberships, and digital tools to accelerate your business
            growth
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-red-500/20 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-red-500"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48 bg-slate-700 border-slate-600 text-white focus:border-red-500">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()} className="text-white hover:bg-slate-600">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48 bg-slate-700 border-slate-600 text-white focus:border-red-500">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="popular" className="text-white hover:bg-slate-600">
                    Most Popular
                  </SelectItem>
                  <SelectItem value="price-low" className="text-white hover:bg-slate-600">
                    Price: Low to High
                  </SelectItem>
                  <SelectItem value="price-high" className="text-white hover:bg-slate-600">
                    Price: High to Low
                  </SelectItem>
                  <SelectItem value="rating" className="text-white hover:bg-slate-600">
                    Highest Rated
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {products.map((product) => (
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
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <span className="text-xs text-slate-300">{product.category}</span>
                  </div>
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
                <div className="text-sm text-slate-400 mb-4">
                  <span className="font-semibold text-red-400">{product.duration}</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex gap-2">
                <Link href={`/product/${product.id}`} className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white btn-glow-red">
                    View Details
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white bg-transparent btn-scale"
                  onClick={() => handleBuyNow(product.name, product.price)}
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 animate-fade-in-up">
          <Button
            size="lg"
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-8 py-4 bg-transparent btn-scale"
          >
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
