import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Users, Award, Target, Heart, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Shield,
    title: "Trust & Security",
    description:
      "We prioritize the security and privacy of our customers with enterprise-grade protection and transparent business practices.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We constantly seek cutting-edge solutions and emerging technologies to provide our customers with the most advanced digital tools.",
  },
  {
    icon: Users,
    title: "Customer Success",
    description:
      "Your success is our success. We provide comprehensive support and resources to ensure you achieve your business goals.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "Every product in our catalog is carefully vetted and tested to meet the highest standards of quality and performance.",
  },
]

const stats = [
  { number: "10,000+", label: "Happy Customers", icon: Users },
  { number: "500+", label: "Digital Products", icon: Target },
  { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
  { number: "24/7", label: "Customer Support", icon: Heart },
]

const team = [
  {
    name: "Digital Solutions Team",
    role: "Product Curation & Support",
    description:
      "Our dedicated team works around the clock to source, test, and support the best digital products for your business needs.",
    image: "/images/logo.png",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/logo.png"
                  alt="Digital Solutions Pro"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-6">
              About Digital Solutions Pro
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Businesses with
              <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-red-400 bg-clip-text text-transparent">
                Premium Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We are passionate about helping businesses transform and grow through carefully curated digital products
              and software solutions. Our mission is to bridge the gap between innovative technology and practical
              business applications.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-400">
                To democratize access to premium digital solutions and empower businesses of all sizes to achieve their
                full potential
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Digital Solutions Pro?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Curated Excellence</h4>
                      <p className="text-gray-400">
                        Every product is hand-picked and thoroughly tested by our experts to ensure it meets our high
                        standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Proven Results</h4>
                      <p className="text-gray-400">
                        Our solutions have helped thousands of businesses increase efficiency, reduce costs, and
                        accelerate growth.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Dedicated Support</h4>
                      <p className="text-gray-400">
                        Our team provides ongoing support to ensure you get the most value from your digital
                        investments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Digital Solutions Pro"
                    width={200}
                    height={200}
                    className="w-48 h-48 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 text-center">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-white text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-purple-400 text-lg">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-gray-900 to-cyan-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who have revolutionized their operations with our premium digital
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full"
                >
                  Explore Our Products
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-400 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg rounded-full bg-transparent"
                >
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
