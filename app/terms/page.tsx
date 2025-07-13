import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, FileText, AlertCircle, CheckCircle } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6">Legal Information</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms and Conditions</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using our services or purchasing our products.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
            <FileText className="w-4 h-4" />
            <span>Last updated: December 2024</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Agreement to Terms</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                By accessing and using Digital Solutions Pro's website and services, you accept and agree to be bound by
                the terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                this service.
              </p>
              <p>
                These Terms and Conditions ("Terms") govern your use of our website located at Digital Solutions Pro and
                our services, operated by Digital Solutions Pro.
              </p>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Products and Services</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>We offer digital products and software solutions for business and personal use.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>All products are delivered digitally via email and/or download links.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>Product descriptions, features, and pricing are subject to change without notice.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Purchase Terms */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Purchase Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <h4 className="text-white font-semibold">Payment and Pricing</h4>
              <ul className="space-y-2 ml-4">
                <li>• All prices are listed in USD unless otherwise specified</li>
                <li>• Payment is processed through secure third-party payment processors</li>
                <li>• All sales are final unless otherwise stated in our refund policy</li>
                <li>• We reserve the right to change prices at any time</li>
              </ul>

              <h4 className="text-white font-semibold mt-6">Delivery</h4>
              <ul className="space-y-2 ml-4">
                <li>• Digital products are delivered immediately after payment confirmation</li>
                <li>• Delivery is made via email to the address provided during purchase</li>
                <li>• It is your responsibility to provide a valid email address</li>
                <li>• We are not responsible for delivery failures due to incorrect contact information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Refund Policy */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Refund Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">30-Day Money-Back Guarantee</h4>
                <p>We offer a 30-day money-back guarantee on all our digital products.</p>
              </div>

              <h4 className="text-white font-semibold">Refund Conditions</h4>
              <ul className="space-y-2 ml-4">
                <li>• Refund requests must be made within 30 days of purchase</li>
                <li>• You must provide a valid reason for the refund request</li>
                <li>• Refunds are processed within 5-10 business days</li>
                <li>• Refunds are issued to the original payment method</li>
                <li>• Custom or personalized products may not be eligible for refunds</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive
                property of Digital Solutions Pro and its licensors. The Service is protected by copyright, trademark,
                and other laws.
              </p>

              <h4 className="text-white font-semibold">License to Use</h4>
              <ul className="space-y-2 ml-4">
                <li>• Products are licensed, not sold, to you</li>
                <li>• You may use products for personal or commercial purposes as specified</li>
                <li>• You may not redistribute, resell, or share products without permission</li>
                <li>• Reverse engineering or attempting to extract source code is prohibited</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>By using our services, you agree to:</p>
              <ul className="space-y-2 ml-4">
                <li>• Provide accurate and complete information during purchase</li>
                <li>• Use products in accordance with their intended purpose</li>
                <li>• Not engage in any illegal or unauthorized use of our products</li>
                <li>• Respect intellectual property rights</li>
                <li>• Not attempt to hack, reverse engineer, or compromise our systems</li>
                <li>• Contact us immediately if you discover any security vulnerabilities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-400">
                  <strong>Important:</strong> Please read this section carefully as it limits our liability.
                </p>
              </div>

              <p>
                In no event shall Digital Solutions Pro, nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the Service.
              </p>

              <p>
                Our total liability to you for any damages arising from or related to this agreement shall not exceed
                the amount you paid for the specific product or service that gave rise to the claim.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                information when you use our Service.
              </p>

              <h4 className="text-white font-semibold">Data Collection</h4>
              <ul className="space-y-2 ml-4">
                <li>• We collect information necessary to process your orders</li>
                <li>• We may use cookies to improve your browsing experience</li>
                <li>• We do not sell or share your personal information with third parties</li>
                <li>• You have the right to request deletion of your personal data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Contact Us</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>

              <div className="space-y-2">
                <p>
                  <strong className="text-white">Email:</strong> ronitrathore6666@gmail.com
                </p>
                <p>
                  <strong className="text-white">WhatsApp:</strong> +91 9828056386
                </p>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mt-6">
                <p className="text-blue-400">
                  <strong>Note:</strong> These terms and conditions are effective as of December 2024 and may be updated
                  from time to time. Continued use of our services constitutes acceptance of any changes.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
