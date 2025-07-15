import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, UserCheck, Database, Globe } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-32">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30 mb-6">Privacy & Security</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
            <Shield className="w-4 h-4" />
            <span>Last updated: December 2024</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Our Commitment to Privacy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                At Digital Solutions Pro, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or purchase our products.
              </p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400">
                  <strong>Key Principle:</strong> We only collect information that is necessary to provide you with our
                  services and improve your experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Database className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Information We Collect</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Personal Information</h4>
                <p className="mb-3">We may collect the following personal information when you:</p>
                <ul className="space-y-2 ml-4">
                  <li>
                    • <strong>Name and Contact Information:</strong> First name, last name, email address, phone number
                  </li>
                  <li>
                    • <strong>Payment Information:</strong> Billing address and payment method details (processed
                    securely by third-party payment processors)
                  </li>
                  <li>
                    • <strong>Communication Data:</strong> Messages sent through our contact forms, WhatsApp, or email
                  </li>
                  <li>
                    • <strong>Account Information:</strong> Username, password, and preferences if you create an account
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Automatically Collected Information</h4>
                <ul className="space-y-2 ml-4">
                  <li>
                    • <strong>Device Information:</strong> IP address, browser type, operating system
                  </li>
                  <li>
                    • <strong>Usage Data:</strong> Pages visited, time spent on site, click patterns
                  </li>
                  <li>
                    • <strong>Cookies:</strong> Small files stored on your device to improve functionality
                  </li>
                  <li>
                    • <strong>Location Data:</strong> General geographic location based on IP address
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">How We Use Your Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>We use the information we collect for the following purposes:</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Service Delivery</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Process and fulfill your orders</li>
                    <li>• Deliver digital products</li>
                    <li>• Provide customer support</li>
                    <li>• Send order confirmations and updates</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Communication</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Respond to your inquiries</li>
                    <li>• Send important service notifications</li>
                    <li>• Provide technical support</li>
                    <li>• Share product updates (with consent)</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Improvement</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Analyze website usage patterns</li>
                    <li>• Improve our products and services</li>
                    <li>• Enhance user experience</li>
                    <li>• Develop new features</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Legal Compliance</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Comply with legal obligations</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Protect our rights and property</li>
                    <li>• Ensure platform security</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Information Sharing and Disclosure</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400">
                  <strong>Important:</strong> We do not sell, trade, or rent your personal information to third parties.
                </p>
              </div>

              <p>We may share your information only in the following limited circumstances:</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Service Providers</h4>
                  <p>
                    We may share information with trusted third-party service providers who help us operate our
                    business:
                  </p>
                  <ul className="space-y-1 ml-4 mt-2">
                    <li>• Payment processors (for secure payment handling)</li>
                    <li>• Email service providers (for communication)</li>
                    <li>• Cloud storage providers (for data backup)</li>
                    <li>• Analytics services (for website improvement)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Legal Requirements</h4>
                  <p>We may disclose information if required by law or to:</p>
                  <ul className="space-y-1 ml-4 mt-2">
                    <li>• Comply with legal processes or government requests</li>
                    <li>• Protect our rights, property, or safety</li>
                    <li>• Prevent fraud or illegal activities</li>
                    <li>• Enforce our terms and conditions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Data Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Technical Measures</h4>
                  <ul className="space-y-2">
                    <li>• SSL/TLS encryption for data transmission</li>
                    <li>• Secure servers and databases</li>
                    <li>• Regular security updates and patches</li>
                    <li>• Access controls and authentication</li>
                    <li>• Regular security audits</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Organizational Measures</h4>
                  <ul className="space-y-2">
                    <li>• Limited access to personal data</li>
                    <li>• Employee training on data protection</li>
                    <li>• Confidentiality agreements</li>
                    <li>• Incident response procedures</li>
                    <li>• Regular policy reviews</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-400">
                  <strong>Note:</strong> While we strive to protect your information, no method of transmission over the
                  internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Your Privacy Rights</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>You have the following rights regarding your personal information:</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold">Access</h4>
                    <p className="text-sm">Request a copy of the personal information we hold about you</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">Correction</h4>
                    <p className="text-sm">Request correction of inaccurate or incomplete information</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">Deletion</h4>
                    <p className="text-sm">
                      Request deletion of your personal information (subject to legal requirements)
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-white font-semibold">Portability</h4>
                    <p className="text-sm">Request transfer of your data to another service provider</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">Objection</h4>
                    <p className="text-sm">Object to certain types of processing of your information</p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">Restriction</h4>
                    <p className="text-sm">Request restriction of processing in certain circumstances</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400">
                  <strong>How to Exercise Your Rights:</strong> Contact us via email at ronitrathore6666@gmail.com or
                  WhatsApp at +91 9828056386 to make any requests regarding your personal information.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies Policy */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience and analyze website
                usage.
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Types of Cookies We Use</h4>
                  <ul className="space-y-2 ml-4">
                    <li>
                      • <strong>Essential Cookies:</strong> Required for basic website functionality
                    </li>
                    <li>
                      • <strong>Performance Cookies:</strong> Help us understand how visitors use our site
                    </li>
                    <li>
                      • <strong>Functional Cookies:</strong> Remember your preferences and settings
                    </li>
                    <li>
                      • <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Managing Cookies</h4>
                  <p>
                    You can control cookies through your browser settings. However, disabling certain cookies may affect
                    website functionality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <CardTitle className="text-white text-xl">Contact Us About Privacy</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-4">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>

              <div className="space-y-2">
                <p>
                  <strong className="text-white">Email:</strong> ronitrathore6666@gmail.com
                </p>
                <p>
                  <strong className="text-white">WhatsApp:</strong> +91 9828056386
                </p>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 mt-6">
                <p className="text-purple-400">
                  <strong>Policy Updates:</strong> We may update this Privacy Policy from time to time. We will notify
                  you of any significant changes by posting the new policy on this page and updating the "Last updated"
                  date.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
