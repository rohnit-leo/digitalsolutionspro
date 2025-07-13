export interface Product {
  id: number
  name: string
  description: string
  fullDescription: string
  price: string
  originalPrice: string
  image: string
  badge: string
  badgeColor: string
  category: string
  features: string[]
  specifications: Record<string, string>
  benefits: string[]
  faqs: Array<{ question: string; answer: string }>
  duration: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Adobe All Premium Softwares",
    description:
      "Complete Adobe Creative Suite with lifetime access to all premium software including Photoshop, Premiere Pro, After Effects, and more.",
    fullDescription: `
      <h3>Complete Adobe Creative Suite Bundle</h3>
      <p>Get lifetime access to the entire Adobe Creative Suite with this comprehensive package. Perfect for designers, video editors, content creators, and digital marketing professionals who need professional-grade tools.</p>
      
      <h3>What's Included:</h3>
      <ul>
        <li>Adobe Photoshop - Professional image editing</li>
        <li>Adobe Premiere Pro - Video editing and production</li>
        <li>Adobe After Effects - Motion graphics and visual effects</li>
        <li>Adobe Illustrator - Vector graphics and design</li>
        <li>Adobe InDesign - Desktop publishing and layout</li>
        <li>Adobe Lightroom - Photo editing and management</li>
        <li>Animate - 2D animation and interactive content</li>
        <li>Encoder - Media encoding and compression</li>
      </ul>
      
      <h3>Perfect For:</h3>
      <ul>
        <li>Graphic designers and artists</li>
        <li>Video editors and filmmakers</li>
        <li>Digital marketing agencies</li>
        <li>Content creators and influencers</li>
        <li>Web designers and developers</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/adobe-all-premium.png",
    badge: "Best Seller",
    badgeColor: "bg-red-500",
    category: "Software",
    duration: "Lifetime Access",
    features: [
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Lightroom",
      "Animate",
      "Encoder",
    ],
    specifications: {
      "Access Duration": "Lifetime",
      Platform: "Windows & Mac",
      Installation: "Digital Download",
      Support: "24/7 Customer Support",
      Updates: "Regular updates included",
      License: "Personal & Commercial Use",
    },
    benefits: [
      "Save thousands on Adobe subscription costs",
      "Professional-grade creative tools",
      "Lifetime access with no recurring fees",
      "Perfect for all creative projects",
      "Commercial license included",
    ],
    faqs: [
      {
        question: "Is this the official Adobe software?",
        answer: "Yes, these are genuine Adobe applications with full functionality and features.",
      },
      {
        question: "Do I get updates?",
        answer: "Yes, regular updates are included to keep your software current.",
      },
      {
        question: "Can I use this for commercial projects?",
        answer: "Commercial license is included for business use.",
      },
    ],
  },
  {
    id: 2,
    name: "Master in E-Commerce",
    description:
      "Comprehensive e-commerce mastery course with Adobe Creative Suite. Learn to 'SELL LIKE HELL' with professional tools and strategies.",
    fullDescription: `
      <h3>Complete E-Commerce Mastery Program</h3>
      <p>Master the art of e-commerce with this comprehensive course that includes both educational content and professional Adobe tools. Learn proven strategies to build, market, and scale your online business.</p>
      
      <h3>Course Highlights:</h3>
      <ul>
        <li>E-commerce fundamentals and advanced strategies</li>
        <li>Product photography and editing techniques</li>
        <li>Marketing automation and conversion optimization</li>
        <li>Brand building and visual identity creation</li>
        <li>Social media marketing for e-commerce</li>
        <li>Analytics and performance tracking</li>
      </ul>
      
      <h3>Bonus Adobe Suite Included:</h3>
      <ul>
        <li>Adobe Photoshop for product editing</li>
        <li>Adobe Premiere Pro for video marketing</li>
        <li>Adobe Illustrator for logo and graphics</li>
        <li>Adobe After Effects for promotional videos</li>
        <li>Complete creative toolkit for your business</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/master-ecommerce.png",
    badge: "Hot Course",
    badgeColor: "bg-red-600",
    category: "Education",
    duration: "Lifetime Access",
    features: [
      "Complete E-commerce Course",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Marketing Strategies",
      "Business Templates",
      "24/7 Support",
    ],
    specifications: {
      "Course Duration": "Self-paced learning",
      Access: "Lifetime access",
      Format: "Video tutorials + Tools",
      Language: "English/Hindi",
      "Skill Level": "Beginner to Advanced",
      Certificate: "Completion certificate",
    },
    benefits: [
      "Learn from industry experts",
      "Build profitable e-commerce business",
      "Professional design tools included",
      "Proven marketing strategies",
      "Lifetime access to updates",
    ],
    faqs: [
      {
        question: "Is this suitable for beginners?",
        answer: "Yes, the course covers everything from basics to advanced e-commerce strategies.",
      },
      {
        question: "Do I get the Adobe software too?",
        answer: "Yes, the complete Adobe Creative Suite is included as a bonus.",
      },
      {
        question: "How long do I have access?",
        answer: "You get lifetime access to both the course and software.",
      },
    ],
  },
  {
    id: 3,
    name: "Bulk Email Marketing Software",
    description:
      "Professional email marketing software 'Email Blast' with Adobe Creative Suite for creating stunning email campaigns and marketing materials.",
    fullDescription: `
      <h3>Professional Email Marketing Solution</h3>
      <p>Email Blast is a powerful email marketing software that helps you create, send, and track professional email campaigns. Perfect for businesses looking to scale their email marketing efforts.</p>
      
      <h3>Email Blast Features:</h3>
      <ul>
        <li>Bulk email sending capabilities</li>
        <li>Professional email templates</li>
        <li>Advanced analytics and tracking</li>
        <li>Automated email sequences</li>
        <li>Contact list management</li>
        <li>A/B testing functionality</li>
        <li>Responsive email designs</li>
        <li>Spam compliance tools</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for email graphics</li>
        <li>Adobe Illustrator for email designs</li>
        <li>Adobe InDesign for newsletters</li>
        <li>Complete design toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/bulk-email-marketing.png",
    badge: "Popular",
    badgeColor: "bg-red-500",
    category: "Marketing",
    duration: "Lifetime Access",
    features: [
      "Email Blast Software",
      "Bulk Email Sending",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe Illustrator",
      "Email Templates",
      "Analytics Dashboard",
      "Automation Tools",
    ],
    specifications: {
      "Software Type": "Desktop Application",
      "Email Capacity": "Unlimited sending",
      Platform: "Windows & Mac",
      Integration: "SMTP support",
      Templates: "100+ professional templates",
      Support: "24/7 technical support",
    },
    benefits: [
      "Scale your email marketing efforts",
      "Professional email designs",
      "Advanced tracking and analytics",
      "Cost-effective bulk sending",
      "Complete creative suite included",
    ],
    faqs: [
      {
        question: "How many emails can I send?",
        answer: "The software supports unlimited email sending with proper SMTP configuration.",
      },
      {
        question: "Are email templates included?",
        answer: "Yes, over 100 professional email templates are included.",
      },
      {
        question: "Is the Adobe suite full version?",
        answer: "Yes, you get the complete Adobe Creative Suite with full functionality.",
      },
    ],
  },
  {
    id: 4,
    name: "50 Cr+ Updated 2024 Pan India Data",
    description:
      "Massive database of 50+ crore updated Indian contacts for 2024. Perfect for marketing, lead generation, and business development with Adobe tools included.",
    fullDescription: `
      <h3>Comprehensive Pan India Database 2024</h3>
      <p>Access the most comprehensive and updated database of Indian contacts with over 50 crore entries. This database is perfect for businesses looking to expand their reach across India with targeted marketing campaigns.</p>
      
      <h3>Database Features:</h3>
      <ul>
        <li>50+ crore verified contacts</li>
        <li>Pan India coverage</li>
        <li>Updated for 2024</li>
        <li>Multiple contact formats</li>
        <li>Industry-wise categorization</li>
        <li>Location-based filtering</li>
        <li>Regular updates included</li>
        <li>Export in multiple formats</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for marketing materials</li>
        <li>Adobe Premiere Pro for video campaigns</li>
        <li>Adobe Illustrator for promotional graphics</li>
        <li>Complete design toolkit for campaigns</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/pan-india-data.png",
    badge: "Updated 2024",
    badgeColor: "bg-red-600",
    category: "Database",
    duration: "Lifetime Access",
    features: [
      "50+ Crore Contacts",
      "Pan India Coverage",
      "2024 Updated Data",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Multiple Formats",
      "Industry Categories",
      "Location Filters",
    ],
    specifications: {
      "Database Size": "50+ Crore contacts",
      Coverage: "Pan India",
      Update: "2024 Latest",
      Format: "Excel, CSV, TXT",
      Categories: "Industry-wise sorted",
      Access: "Lifetime download",
    },
    benefits: [
      "Massive reach across India",
      "Updated and verified data",
      "Perfect for lead generation",
      "Multiple export formats",
      "Professional design tools included",
    ],
    faqs: [
      {
        question: "How recent is this data?",
        answer: "The database is updated for 2024 with the latest contact information.",
      },
      {
        question: "Can I filter by location?",
        answer: "Yes, the data can be filtered by state, city, and industry.",
      },
      {
        question: "What formats are available?",
        answer: "Data is available in Excel, CSV, and TXT formats for easy import.",
      },
    ],
  },
  {
    id: 5,
    name: "Bulk WhatsApp Marketing Software",
    description:
      "Professional WhatsApp bulk messaging software with Adobe Creative Suite. Send bulk WhatsApp messages safely and effectively.",
    fullDescription: `
      <h3>Professional WhatsApp Marketing Solution</h3>
      <p>Advanced WhatsApp bulk messaging software that allows you to send promotional messages, updates, and marketing content to multiple contacts safely and efficiently. Perfect for businesses looking to leverage WhatsApp for marketing.</p>
      
      <h3>WhatsApp Marketing Features:</h3>
      <ul>
        <li>Bulk message sending</li>
        <li>Contact list management</li>
        <li>Message scheduling</li>
        <li>Media file support</li>
        <li>Auto-reply functionality</li>
        <li>Message templates</li>
        <li>Delivery reports</li>
        <li>Safe sending protocols</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for message graphics</li>
        <li>Adobe Premiere Pro for video content</li>
        <li>Adobe Illustrator for promotional designs</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/bulk-whatsapp-marketing.jpeg",
    badge: "Trending",
    badgeColor: "bg-red-500",
    category: "Marketing",
    duration: "Lifetime Access",
    features: [
      "Bulk WhatsApp Messaging",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Contact Management",
      "Message Scheduling",
      "Media Support",
      "Auto-Reply",
      "Delivery Reports",
    ],
    specifications: {
      Platform: "Windows PC",
      "Message Limit": "Unlimited",
      "Media Support": "Images, Videos, Documents",
      Scheduling: "Advanced scheduling",
      Safety: "Anti-ban protection",
      Support: "24/7 technical support",
    },
    benefits: [
      "Reach customers directly on WhatsApp",
      "Safe bulk messaging protocols",
      "Professional creative tools included",
      "Automated marketing campaigns",
      "Cost-effective customer outreach",
    ],
    faqs: [
      {
        question: "Is it safe to use for bulk messaging?",
        answer: "Yes, the software includes anti-ban protection and safe sending protocols.",
      },
      {
        question: "Can I send media files?",
        answer: "Yes, you can send images, videos, and documents through the software.",
      },
      {
        question: "Is there a message limit?",
        answer: "No, the software supports unlimited message sending with proper intervals.",
      },
    ],
  },
  {
    id: 6,
    name: "Netflix Premium Membership",
    description:
      "Netflix Premium subscription with 4K UHD quality, best video streaming experience, and access to 18+ web series content.",
    fullDescription: `
      <h3>Netflix Premium Streaming Experience</h3>
      <p>Enjoy the ultimate Netflix experience with Premium membership featuring 4K UHD quality streaming, access to exclusive content, and the best video quality available on the platform.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>4K UHD video quality</li>
        <li>Best streaming experience</li>
        <li>Single screen access</li>
        <li>Locked profile for privacy</li>
        <li>Access to 18+ web series</li>
        <li>All device compatibility</li>
        <li>Instant activation</li>
        <li>Warranty included</li>
      </ul>
      
      <h3>Content Access:</h3>
      <ul>
        <li>Latest movies and series</li>
        <li>Netflix originals</li>
        <li>International content</li>
        <li>Exclusive 18+ series</li>
        <li>Documentary collection</li>
      </ul>
    `,
    price: "₹149",
    originalPrice: "₹649",
    image: "/images/products/netflix-premium.png",
    badge: "Best Value",
    badgeColor: "bg-red-500",
    category: "Streaming",
    duration: "1 Month Access",
    features: [
      "4K UHD Quality",
      "Best Video Quality",
      "Single Screen",
      "Locked Profile",
      "All Device Support",
      "18+ Web Series",
      "Instant Activation",
      "24x7 Support",
    ],
    specifications: {
      "Video Quality": "4K UHD",
      "Screen Limit": "Single screen",
      "Device Support": "All devices",
      Content: "Full Netflix library",
      Activation: "Instant",
      Duration: "1 Month",
    },
    benefits: [
      "Premium 4K streaming quality",
      "Access to exclusive content",
      "Works on all devices",
      "Instant account activation",
      "24/7 customer support",
    ],
    faqs: [
      {
        question: "How quickly is the account activated?",
        answer: "Account activation is instant after purchase confirmation.",
      },
      {
        question: "Can I use it on multiple devices?",
        answer: "This is a single screen plan, but works on all device types.",
      },
      {
        question: "Is 18+ content included?",
        answer: "Yes, you get access to all Netflix content including 18+ series.",
      },
    ],
  },
  {
    id: 7,
    name: "Amazon Prime Premium Membership",
    description:
      "Amazon Prime Video premium membership with 6 months access, 4K UHD quality, and 5-screen support for the ultimate streaming experience.",
    fullDescription: `
      <h3>Amazon Prime Video Premium Experience</h3>
      <p>Get premium access to Amazon Prime Video with 6 months of unlimited streaming, 4K UHD quality, and support for up to 5 screens. Enjoy the vast library of movies, series, and Amazon originals.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Prime Video access</li>
        <li>Private account access</li>
        <li>5 screen support</li>
        <li>All device compatibility</li>
        <li>4K UHD quality</li>
        <li>Fresh email activation</li>
        <li>Warranty included</li>
        <li>6 months duration</li>
      </ul>
      
      <h3>Content Library:</h3>
      <ul>
        <li>Amazon Prime originals</li>
        <li>Latest movies and series</li>
        <li>International content</li>
        <li>Documentary collection</li>
        <li>Kids content</li>
      </ul>
    `,
    price: "₹399",
    originalPrice: "₹1199",
    image: "/images/products/amazon-prime.png",
    badge: "6 Months",
    badgeColor: "bg-red-600",
    category: "Streaming",
    duration: "6 Months Access",
    features: [
      "Prime Video Access",
      "Private Access",
      "5 Screen Support",
      "All Device Support",
      "4K UHD Quality",
      "Fresh Email Activation",
      "Warranty Included",
      "24x7 Support",
    ],
    specifications: {
      "Video Quality": "4K UHD",
      "Screen Limit": "5 screens",
      "Device Support": "All devices",
      Content: "Full Prime Video library",
      Activation: "Fresh email",
      Duration: "6 Months",
    },
    benefits: [
      "Extended 6-month access",
      "Multiple screen support",
      "Premium 4K streaming",
      "Fresh account activation",
      "Complete Prime Video library",
    ],
    faqs: [
      {
        question: "How many screens can I use?",
        answer: "You can use up to 5 screens simultaneously with this plan.",
      },
      {
        question: "Is this a fresh account?",
        answer: "Yes, activation is done on a fresh email for better security.",
      },
      {
        question: "What content is available?",
        answer: "You get access to the complete Amazon Prime Video library including originals.",
      },
    ],
  },
  {
    id: 8,
    name: "Zee5 Premium Membership",
    description:
      "Zee5 Premium subscription with 1-year access, 1080p HD quality, 5-screen support, and complete access to Zee5's content library.",
    fullDescription: `
      <h3>Zee5 Premium Annual Subscription</h3>
      <p>Get a full year of Zee5 Premium access with HD quality streaming, multi-screen support, and access to the complete Zee5 content library including regional content, movies, and web series.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Access on your number</li>
        <li>Private account access</li>
        <li>5 screen support</li>
        <li>All device compatibility</li>
        <li>1080p HD quality</li>
        <li>One year activation</li>
        <li>Warranty included</li>
        <li>Regional content access</li>
      </ul>
      
      <h3>Content Library:</h3>
      <ul>
        <li>Zee5 originals</li>
        <li>Regional movies and series</li>
        <li>Bollywood content</li>
        <li>Live TV channels</li>
        <li>Kids entertainment</li>
      </ul>
    `,
    price: "₹399",
    originalPrice: "₹1199",
    image: "/images/products/zee5-premium.png",
    badge: "1 Year Plan",
    badgeColor: "bg-red-600",
    category: "Streaming",
    duration: "1 Year Access",
    features: [
      "Access on Your Number",
      "Private Access",
      "5 Screen Support",
      "All Device Support",
      "1080p HD Quality",
      "One Year Activation",
      "Warranty Included",
      "24x7 Support",
    ],
    specifications: {
      "Video Quality": "1080p HD",
      "Screen Limit": "5 screens",
      "Device Support": "All devices",
      Content: "Full Zee5 library",
      Activation: "On your number",
      Duration: "1 Year",
    },
    benefits: [
      "Full year of premium access",
      "Multi-screen streaming",
      "Regional content library",
      "HD quality streaming",
      "Live TV access included",
    ],
    faqs: [
      {
        question: "Can I use my own number?",
        answer: "Yes, the subscription is activated on your own mobile number.",
      },
      {
        question: "Is regional content included?",
        answer: "Yes, you get access to content in multiple regional languages.",
      },
      {
        question: "How many devices can I use?",
        answer: "You can stream on up to 5 screens simultaneously.",
      },
    ],
  },
  {
    id: 9,
    name: "Sony Liv Premium Membership",
    description:
      "Sony Liv Premium subscription with 1-year access, 4K UHD quality, 5-screen support, and complete access to Sony's entertainment library.",
    fullDescription: `
      <h3>Sony Liv Premium Annual Access</h3>
      <p>Enjoy a full year of Sony Liv Premium with 4K UHD streaming quality, multi-screen support, and access to Sony's extensive entertainment library including sports, movies, and exclusive series.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Activation on your number</li>
        <li>Private account access</li>
        <li>5 screen support</li>
        <li>All device compatibility</li>
        <li>4K UHD quality</li>
        <li>One year activation</li>
        <li>Warranty included</li>
        <li>Sports content access</li>
      </ul>
      
      <h3>Content Library:</h3>
      <ul>
        <li>Sony Liv originals</li>
        <li>Live sports streaming</li>
        <li>Bollywood movies</li>
        <li>TV show reruns</li>
        <li>International content</li>
      </ul>
    `,
    price: "₹399",
    originalPrice: "₹1199",
    image: "/images/products/sony-liv.png",
    badge: "Sports Included",
    badgeColor: "bg-red-500",
    category: "Streaming",
    duration: "1 Year Access",
    features: [
      "Activation on Number",
      "Private Access",
      "5 Screen Support",
      "All Device Support",
      "4K UHD Quality",
      "One Year Activation",
      "Warranty Included",
      "24x7 Support",
    ],
    specifications: {
      "Video Quality": "4K UHD",
      "Screen Limit": "5 screens",
      "Device Support": "All devices",
      Content: "Full Sony Liv library",
      Sports: "Live sports included",
      Duration: "1 Year",
    },
    benefits: [
      "Premium 4K streaming quality",
      "Live sports streaming",
      "Multi-screen access",
      "Complete Sony content library",
      "Annual subscription value",
    ],
    faqs: [
      {
        question: "Does it include live sports?",
        answer: "Yes, you get access to live sports streaming and sports content.",
      },
      {
        question: "What video quality is available?",
        answer: "You can stream in up to 4K UHD quality on supported devices.",
      },
      {
        question: "How long is the subscription valid?",
        answer: "The subscription is valid for a full year from activation.",
      },
    ],
  },
  {
    id: 10,
    name: "Disney+ Hotstar Membership",
    description:
      "Disney+ Hotstar Premium membership with 1-month access, 1080p UHD quality, and complete access to Disney+ content library.",
    fullDescription: `
      <h3>Disney+ Hotstar Premium Experience</h3>
      <p>Get premium access to Disney+ Hotstar with high-quality streaming, instant activation, and access to the complete library of Disney, Marvel, Star Wars, and Hotstar original content.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Activation on your number</li>
        <li>Fully private access</li>
        <li>Activation super plan</li>
        <li>Instant access activation</li>
        <li>1080p UHD quality</li>
        <li>All device support</li>
        <li>Warranty included</li>
        <li>Sports content access</li>
      </ul>
      
      <h3>Content Library:</h3>
      <ul>
        <li>Disney+ originals</li>
        <li>Marvel movies and series</li>
        <li>Star Wars content</li>
        <li>Hotstar specials</li>
        <li>Live sports streaming</li>
      </ul>
    `,
    price: "₹79",
    originalPrice: "₹199",
    image: "/images/products/disney-hotstar.png",
    badge: "Super Plan",
    badgeColor: "bg-red-500",
    category: "Streaming",
    duration: "1 Month Access",
    features: [
      "Activation on Your Number",
      "Fully Private Access",
      "Activation Super Plan",
      "Instantly Access Given",
      "1080p UHD Quality",
      "Supports All Devices",
      "Warranty Included",
      "24x7 Support",
    ],
    specifications: {
      "Video Quality": "1080p UHD",
      "Device Support": "All devices",
      Content: "Full Disney+ Hotstar library",
      Sports: "Live sports included",
      Activation: "Instant",
      Duration: "1 Month",
    },
    benefits: [
      "Access to Disney+ premium content",
      "Marvel and Star Wars libraries",
      "Live sports streaming",
      "Instant account activation",
      "Works on all devices",
    ],
    faqs: [
      {
        question: "Is Marvel content included?",
        answer: "Yes, you get access to all Marvel movies and series on the platform.",
      },
      {
        question: "Can I watch live sports?",
        answer: "Yes, live sports streaming is included in this premium plan.",
      },
      {
        question: "How quickly is it activated?",
        answer: "Activation is instant after purchase confirmation.",
      },
    ],
  },
  {
    id: 11,
    name: "YouTube Premium Membership",
    description:
      "YouTube Premium subscription with ad-free videos, background play, offline downloads, and YouTube Music Premium access.",
    fullDescription: `
      <h3>YouTube Premium Experience</h3>
      <p>Enjoy YouTube without interruptions with Premium membership featuring ad-free videos, background play, offline downloads, and access to YouTube Music Premium.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Watch ads-free videos</li>
        <li>Activation on your email</li>
        <li>Background play videos</li>
        <li>Download all content</li>
        <li>Watch offline</li>
        <li>YouTube Music Premium</li>
        <li>Play even when screen is locked</li>
        <li>Warranty included</li>
      </ul>
      
      <h3>Content Access:</h3>
      <ul>
        <li>Ad-free YouTube experience</li>
        <li>YouTube Originals</li>
        <li>YouTube Music library</li>
        <li>Offline video downloads</li>
        <li>Background playback</li>
      </ul>
    `,
    price: "₹49",
    originalPrice: "₹189",
    image: "/images/products/youtube-premium.png",
    badge: "Best Deal",
    badgeColor: "bg-red-500",
    category: "Streaming",
    duration: "1 Month Access",
    features: [
      "Watch Ads-Free Videos",
      "Activation on Your Mail",
      "Background Play Videos",
      "Download All Content",
      "Watch Offline",
      "YouTube Music Premium",
      "Play Even Screen is Lock",
      "Warranty Included",
    ],
    specifications: {
      "Video Quality": "Up to 4K",
      "Download Limit": "Unlimited",
      "Device Support": "All devices",
      "Music Access": "YouTube Music Premium",
      "Background Play": "Yes",
      Duration: "1 Month",
    },
    benefits: [
      "Ad-free YouTube experience",
      "Offline video downloads",
      "Background playback",
      "YouTube Music Premium included",
      "Works on all devices",
    ],
    faqs: [
      {
        question: "Can I download videos for offline viewing?",
        answer: "Yes, you can download unlimited videos and watch them offline.",
      },
      {
        question: "Is YouTube Music included?",
        answer: "Yes, YouTube Music Premium is included with full access to the music library.",
      },
      {
        question: "Does it work on all devices?",
        answer: "Yes, it works on all devices including mobile, tablet, desktop, and smart TVs.",
      },
    ],
  },
  {
    id: 12,
    name: "LinkedIn Premium Membership",
    description:
      "LinkedIn Business Premium membership with advanced networking features, InMail credits, and professional insights with Adobe Creative Suite included.",
    fullDescription: `
      <h3>LinkedIn Business Premium Access</h3>
      <p>Unlock the full potential of LinkedIn with Business Premium membership featuring advanced networking tools, InMail credits, detailed insights, and professional features to grow your career and business.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>LinkedIn Business Premium access</li>
        <li>InMail credits for direct messaging</li>
        <li>Advanced search filters</li>
        <li>Who viewed your profile insights</li>
        <li>Salary insights and comparisons</li>
        <li>Learning courses access</li>
        <li>Premium badge on profile</li>
        <li>Applicant insights</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for professional graphics</li>
        <li>Adobe Premiere Pro for video content</li>
        <li>Adobe Illustrator for design work</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/linkedin-premium.png",
    badge: "Professional",
    badgeColor: "bg-red-500",
    category: "Professional",
    duration: "Lifetime Access",
    features: [
      "LinkedIn Business Premium",
      "InMail Credits",
      "Advanced Search",
      "Profile Insights",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe Illustrator",
      "Learning Courses",
    ],
    specifications: {
      "Account Type": "Business Premium",
      "InMail Credits": "Monthly allocation",
      "Search Filters": "Advanced filters",
      "Learning Access": "LinkedIn Learning",
      "Profile Badge": "Premium badge",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Enhanced networking capabilities",
      "Direct messaging with InMail",
      "Professional insights and analytics",
      "Career development resources",
    ],
    faqs: [
      {
        question: "How many InMail credits do I get?",
        answer: "You get monthly InMail credits to directly message professionals outside your network.",
      },
      {
        question: "Can I see who viewed my profile?",
        answer: "Yes, you get detailed insights about who viewed your profile and their information.",
      },
      {
        question: "Is LinkedIn Learning included?",
        answer: "Yes, you get access to LinkedIn Learning courses for professional development.",
      },
    ],
  },
  {
    id: 13,
    name: "Semrush Guru",
    description:
      "Semrush Guru plan with advanced SEO tools, keyword research, competitor analysis, and comprehensive digital marketing features with Adobe suite.",
    fullDescription: `
      <h3>Semrush Guru - Advanced SEO & Marketing</h3>
      <p>Access the powerful Semrush Guru plan with advanced SEO tools, comprehensive keyword research, competitor analysis, and digital marketing features to dominate search rankings and grow your online presence.</p>
      
      <h3>Guru Plan Features:</h3>
      <ul>
        <li>Advanced keyword research tools</li>
        <li>Competitor analysis and insights</li>
        <li>Backlink analysis and monitoring</li>
        <li>Site audit and technical SEO</li>
        <li>Position tracking and ranking</li>
        <li>Content gap analysis</li>
        <li>Social media management</li>
        <li>PPC advertising insights</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for marketing graphics</li>
        <li>Adobe Premiere Pro for video marketing</li>
        <li>Adobe Illustrator for design assets</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/semrush-guru.png",
    badge: "SEO Pro",
    badgeColor: "bg-red-600",
    category: "SEO",
    duration: "Lifetime Access",
    features: [
      "Semrush Guru Plan",
      "Keyword Research",
      "Competitor Analysis",
      "Backlink Monitoring",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Site Audit Tools",
      "Position Tracking",
    ],
    specifications: {
      "Plan Type": "Guru (Advanced)",
      "Keyword Limit": "Extended limits",
      Projects: "Multiple projects",
      Reports: "Advanced reporting",
      "API Access": "Available",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Advanced SEO capabilities",
      "Comprehensive competitor insights",
      "Professional marketing tools",
      "Detailed analytics and reporting",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "What's included in the Guru plan?",
        answer: "The Guru plan includes advanced SEO tools, extended limits, and comprehensive marketing features.",
      },
      {
        question: "Can I track multiple websites?",
        answer: "Yes, you can manage multiple projects and track various websites with the Guru plan.",
      },
      {
        question: "Is competitor analysis included?",
        answer: "Yes, you get detailed competitor analysis and insights to stay ahead of competition.",
      },
    ],
  },
  {
    id: 14,
    name: "Grammarly Premium Membership",
    description:
      "Grammarly Premium with advanced grammar checking, writing suggestions, plagiarism detection, and professional writing tools with Adobe suite.",
    fullDescription: `
      <h3>Grammarly Premium Writing Assistant</h3>
      <p>Enhance your writing with Grammarly Premium featuring advanced grammar checking, style suggestions, plagiarism detection, and professional writing tools to create perfect content every time.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Advanced grammar and spell checking</li>
        <li>Writing style and tone suggestions</li>
        <li>Plagiarism detection</li>
        <li>Vocabulary enhancement suggestions</li>
        <li>Genre-specific writing style checks</li>
        <li>Full-sentence rewrites</li>
        <li>Clarity and engagement improvements</li>
        <li>Professional writing insights</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for content graphics</li>
        <li>Adobe Premiere Pro for video content</li>
        <li>Adobe Illustrator for design work</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/grammarly-premium.png",
    badge: "Writing Pro",
    badgeColor: "bg-red-500",
    category: "Productivity",
    duration: "Lifetime Access",
    features: [
      "Advanced Grammar Check",
      "Style Suggestions",
      "Plagiarism Detection",
      "Vocabulary Enhancement",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Full-sentence Rewrites",
      "Professional Insights",
    ],
    specifications: {
      "Plan Type": "Premium",
      "Plagiarism Check": "Included",
      "Style Guide": "Multiple styles",
      "Platform Support": "All platforms",
      "Browser Extension": "Available",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Professional writing quality",
      "Advanced error detection",
      "Style and tone optimization",
      "Plagiarism protection",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "Does it check for plagiarism?",
        answer: "Yes, Grammarly Premium includes comprehensive plagiarism detection across billions of web pages.",
      },
      {
        question: "Can it improve my writing style?",
        answer: "Yes, it provides advanced style suggestions, tone adjustments, and clarity improvements.",
      },
      {
        question: "Does it work in all applications?",
        answer: "Yes, it works across all platforms including browsers, Microsoft Office, and mobile apps.",
      },
    ],
  },
  {
    id: 15,
    name: "Figma Premium Membership",
    description:
      "Figma Premium plan with advanced design collaboration, unlimited projects, version history, and professional design tools with Adobe suite.",
    fullDescription: `
      <h3>Figma Premium Design Platform</h3>
      <p>Access Figma Premium with advanced design collaboration features, unlimited projects, comprehensive version history, and professional design tools for teams and individuals.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Unlimited Figma projects</li>
        <li>Advanced collaboration tools</li>
        <li>Unlimited version history</li>
        <li>Team libraries and components</li>
        <li>Advanced prototyping features</li>
        <li>Design system management</li>
        <li>Plugin access and development</li>
        <li>Priority customer support</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for image editing</li>
        <li>Adobe Premiere Pro for video content</li>
        <li>Adobe Illustrator for vector graphics</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/figma-premium.png",
    badge: "Design Pro",
    badgeColor: "bg-red-600",
    category: "Design",
    duration: "Lifetime Access",
    features: [
      "Unlimited Projects",
      "Advanced Collaboration",
      "Version History",
      "Team Libraries",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Plugin Access",
      "Priority Support",
    ],
    specifications: {
      "Plan Type": "Premium",
      "Project Limit": "Unlimited",
      "Team Features": "Full access",
      "Version History": "Unlimited",
      "Plugin Support": "Full access",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Unlimited design projects",
      "Advanced team collaboration",
      "Professional design tools",
      "Comprehensive version control",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "How many projects can I create?",
        answer: "With Figma Premium, you get unlimited projects and files for all your design needs.",
      },
      {
        question: "Can I collaborate with my team?",
        answer: "Yes, you get advanced collaboration features including real-time editing and commenting.",
      },
      {
        question: "Is version history included?",
        answer: "Yes, you get unlimited version history to track and restore previous versions of your designs.",
      },
    ],
  },
  {
    id: 16,
    name: "Google Suite Premium Membership",
    description:
      "Google Workspace Premium with Gmail, Drive, Docs, Sheets, Meet, and advanced collaboration tools with Adobe Creative Suite included.",
    fullDescription: `
      <h3>Google Workspace Premium Suite</h3>
      <p>Access the complete Google Workspace Premium with Gmail, Google Drive, Docs, Sheets, Slides, Meet, and advanced collaboration tools for professional productivity and team collaboration.</p>
      
      <h3>Suite Features:</h3>
      <ul>
        <li>Gmail with custom domain support</li>
        <li>Google Drive with extended storage</li>
        <li>Google Docs, Sheets, and Slides</li>
        <li>Google Meet for video conferencing</li>
        <li>Google Calendar and scheduling</li>
        <li>Google Forms for data collection</li>
        <li>Advanced admin controls</li>
        <li>24/7 customer support</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for image editing</li>
        <li>Adobe Premiere Pro for video production</li>
        <li>Adobe Illustrator for graphic design</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/google-suite.png",
    badge: "Productivity",
    badgeColor: "bg-red-500",
    category: "Productivity",
    duration: "Lifetime Access",
    features: [
      "Gmail Professional",
      "Google Drive Storage",
      "Google Docs & Sheets",
      "Google Meet",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Google Calendar",
      "Admin Controls",
    ],
    specifications: {
      "Suite Type": "Google Workspace",
      Storage: "Extended storage",
      Email: "Professional Gmail",
      "Video Conferencing": "Google Meet",
      Collaboration: "Real-time editing",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Professional email and productivity",
      "Advanced collaboration tools",
      "Extended cloud storage",
      "Video conferencing capabilities",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "Can I use my own domain with Gmail?",
        answer: "Yes, Google Workspace Premium supports custom domain email addresses.",
      },
      {
        question: "How much storage do I get?",
        answer: "You get extended storage across Gmail, Drive, and other Google services.",
      },
      {
        question: "Is video conferencing included?",
        answer: "Yes, Google Meet is included with advanced video conferencing features.",
      },
    ],
  },
  {
    id: 17,
    name: "Microsoft 365 Premium Membership",
    description:
      "Microsoft 365 Premium with Office apps, OneDrive storage, Teams, and advanced productivity features with Adobe Creative Suite included.",
    fullDescription: `
      <h3>Microsoft 365 Premium Suite</h3>
      <p>Get complete Microsoft 365 Premium access with all Office applications, OneDrive cloud storage, Microsoft Teams, and advanced productivity features for professional and personal use.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Microsoft Word, Excel, PowerPoint</li>
        <li>Microsoft Outlook and Exchange</li>
        <li>OneDrive cloud storage</li>
        <li>Microsoft Teams collaboration</li>
        <li>Microsoft OneNote and Publisher</li>
        <li>Advanced security features</li>
        <li>Premium templates and fonts</li>
        <li>24/7 technical support</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for image editing</li>
        <li>Adobe Premiere Pro for video editing</li>
        <li>Adobe Illustrator for graphic design</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/microsoft-365.png",
    badge: "Office Suite",
    badgeColor: "bg-red-600",
    category: "Productivity",
    duration: "Lifetime Access",
    features: [
      "Microsoft Office Apps",
      "OneDrive Storage",
      "Microsoft Teams",
      "Exchange Email",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Premium Templates",
      "Advanced Security",
    ],
    specifications: {
      "Suite Type": "Microsoft 365 Premium",
      Applications: "Full Office suite",
      "Cloud Storage": "OneDrive included",
      Collaboration: "Microsoft Teams",
      Email: "Outlook & Exchange",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Complete Office productivity suite",
      "Cloud storage and collaboration",
      "Professional email solution",
      "Advanced security features",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "Which Office apps are included?",
        answer: "All major Office apps including Word, Excel, PowerPoint, Outlook, OneNote, and Publisher.",
      },
      {
        question: "How much OneDrive storage do I get?",
        answer: "You get substantial OneDrive cloud storage for all your files and documents.",
      },
      {
        question: "Can I use Teams for collaboration?",
        answer: "Yes, Microsoft Teams is included with full collaboration and video conferencing features.",
      },
    ],
  },
  {
    id: 18,
    name: "Zoom Premium Membership",
    description:
      "Zoom Premium plan with unlimited meeting duration, cloud recording, advanced features, and professional video conferencing with Adobe suite.",
    fullDescription: `
      <h3>Zoom Premium Video Conferencing</h3>
      <p>Access Zoom Premium with unlimited meeting duration, cloud recording, advanced meeting features, and professional video conferencing tools for business and personal use.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>Unlimited meeting duration</li>
        <li>Cloud recording and storage</li>
        <li>Advanced meeting controls</li>
        <li>Breakout rooms functionality</li>
        <li>Meeting scheduling and calendar integration</li>
        <li>Screen sharing and annotation</li>
        <li>Virtual backgrounds and filters</li>
        <li>Priority customer support</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for presentation graphics</li>
        <li>Adobe Premiere Pro for video editing</li>
        <li>Adobe Illustrator for meeting materials</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/zoom-premium.png",
    badge: "Video Pro",
    badgeColor: "bg-red-500",
    category: "Communication",
    duration: "Lifetime Access",
    features: [
      "Unlimited Meeting Duration",
      "Cloud Recording",
      "Advanced Controls",
      "Breakout Rooms",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Virtual Backgrounds",
      "Priority Support",
    ],
    specifications: {
      "Plan Type": "Zoom Premium",
      "Meeting Duration": "Unlimited",
      Recording: "Cloud recording",
      Participants: "Extended limits",
      Features: "Advanced features",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Unlimited video conferencing",
      "Professional meeting features",
      "Cloud recording and storage",
      "Advanced collaboration tools",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "Are there time limits on meetings?",
        answer: "No, Zoom Premium provides unlimited meeting duration for all your calls.",
      },
      {
        question: "Can I record meetings?",
        answer: "Yes, you get cloud recording capabilities to save and share your meetings.",
      },
      {
        question: "Are breakout rooms included?",
        answer: "Yes, you can create breakout rooms for smaller group discussions within meetings.",
      },
    ],
  },
  {
    id: 19,
    name: "Canva Pro",
    description:
      "Canva Pro with premium templates, brand kit, background remover, and advanced design features with Adobe Creative Suite included.",
    fullDescription: `
      <h3>Canva Pro Design Platform</h3>
      <p>Unlock Canva Pro with access to premium templates, brand kit features, background remover, advanced design tools, and professional graphics creation capabilities.</p>
      
      <h3>Pro Features:</h3>
      <ul>
        <li>Premium templates and elements</li>
        <li>Brand kit and logo maker</li>
        <li>Background remover tool</li>
        <li>Magic resize for multiple formats</li>
        <li>Team collaboration features</li>
        <li>Advanced photo editing</li>
        <li>Custom fonts and uploads</li>
        <li>Priority customer support</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for advanced editing</li>
        <li>Adobe Premiere Pro for video creation</li>
        <li>Adobe Illustrator for vector graphics</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/canva-pro.png",
    badge: "Design Pro",
    badgeColor: "bg-red-600",
    category: "Design",
    duration: "Lifetime Access",
    features: [
      "Premium Templates",
      "Brand Kit",
      "Background Remover",
      "Magic Resize",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Team Collaboration",
      "Custom Fonts",
    ],
    specifications: {
      "Plan Type": "Canva Pro",
      Templates: "Premium access",
      Storage: "Extended storage",
      "Brand Kit": "Full access",
      "Team Features": "Collaboration tools",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Professional design capabilities",
      "Premium templates and elements",
      "Advanced editing tools",
      "Brand consistency features",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "Can I remove backgrounds from images?",
        answer: "Yes, Canva Pro includes the background remover tool for professional image editing.",
      },
      {
        question: "Are premium templates included?",
        answer: "Yes, you get access to thousands of premium templates and design elements.",
      },
      {
        question: "Can I create a brand kit?",
        answer: "Yes, you can create and manage brand kits with logos, colors, and fonts for consistency.",
      },
    ],
  },
  {
    id: 20,
    name: "ChatGPT 4.0",
    description:
      "ChatGPT 4.0 Premium access with advanced AI capabilities, unlimited usage, priority access, and enhanced features with Adobe Creative Suite.",
    fullDescription: `
      <h3>ChatGPT 4.0 Premium AI Assistant</h3>
      <p>Get premium access to ChatGPT 4.0 with advanced AI capabilities, unlimited usage, priority access during peak times, and enhanced features for professional and creative work.</p>
      
      <h3>Premium Features:</h3>
      <ul>
        <li>ChatGPT 4.0 advanced model access</li>
        <li>Unlimited message usage</li>
        <li>Priority access during peak times</li>
        <li>Advanced reasoning capabilities</li>
        <li>Enhanced creative writing</li>
        <li>Code generation and debugging</li>
        <li>Image analysis and description</li>
        <li>Professional AI assistance</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for image editing</li>
        <li>Adobe Premiere Pro for video production</li>
        <li>Adobe Illustrator for graphic design</li>
        <li>Complete creative toolkit included</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/chatgpt-4.png",
    badge: "AI Pro",
    badgeColor: "bg-red-600",
    category: "AI Tools",
    duration: "Lifetime Access",
    features: [
      "ChatGPT 4.0 Access",
      "Unlimited Usage",
      "Priority Access",
      "Advanced Reasoning",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Code Generation",
      "Image Analysis",
    ],
    specifications: {
      "AI Model": "ChatGPT 4.0",
      "Usage Limit": "Unlimited",
      "Access Priority": "Premium priority",
      Features: "Advanced capabilities",
      "Code Support": "Full programming support",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "Advanced AI assistance",
      "Unlimited usage without restrictions",
      "Priority access during busy times",
      "Enhanced creative and technical capabilities",
      "Complete Adobe Creative Suite",
    ],
    faqs: [
      {
        question: "What's the difference from free ChatGPT?",
        answer: "You get access to the advanced GPT-4 model with unlimited usage and priority access.",
      },
      {
        question: "Can it help with coding?",
        answer: "Yes, ChatGPT 4.0 excels at code generation, debugging, and programming assistance.",
      },
      {
        question: "Is there a usage limit?",
        answer: "No, premium access provides unlimited messages and interactions.",
      },
    ],
  },
  {
    id: 21,
    name: "Adobe Creative Cloud Plan Membership",
    description:
      "Adobe Creative Cloud Premium membership with complete access to all Adobe applications, cloud storage, and professional creative tools.",
    fullDescription: `
      <h3>Adobe Creative Cloud Premium Plan</h3>
      <p>Get complete access to Adobe Creative Cloud with all premium applications, cloud storage, and professional creative tools. Perfect for designers, content creators, and creative professionals who need the full Adobe ecosystem.</p>
      
      <h3>Creative Cloud Features:</h3>
      <ul>
        <li>Complete Adobe Creative Cloud access</li>
        <li>All Adobe desktop applications</li>
        <li>Cloud storage and sync</li>
        <li>Adobe Fonts library</li>
        <li>Creative Cloud Libraries</li>
        <li>Portfolio websites</li>
        <li>Mobile apps included</li>
        <li>Regular updates and new features</li>
      </ul>
      
      <h3>Included Applications:</h3>
      <ul>
        <li>Adobe Photoshop - Professional image editing</li>
        <li>Adobe Premiere Pro - Video editing and production</li>
        <li>Adobe After Effects - Motion graphics and VFX</li>
        <li>Adobe Illustrator - Vector graphics and design</li>
        <li>Adobe InDesign - Desktop publishing</li>
        <li>Adobe Lightroom - Photo editing and management</li>
        <li>Adobe XD - UI/UX design and prototyping</li>
        <li>Adobe Animate - 2D animation and interactive content</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/adobe-creative-cloud.jpeg",
    badge: "Creative Suite",
    badgeColor: "bg-red-500",
    category: "Software",
    duration: "Lifetime Access",
    features: [
      "Complete Creative Cloud",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Lightroom",
      "Adobe XD",
    ],
    specifications: {
      "Plan Type": "Creative Cloud All Apps",
      "Cloud Storage": "100GB included",
      "Font Library": "Adobe Fonts access",
      "Mobile Apps": "All mobile apps",
      "Portfolio Sites": "Included",
      Updates: "Latest versions",
    },
    benefits: [
      "Complete Adobe ecosystem access",
      "Professional creative tools",
      "Cloud storage and sync",
      "Regular updates and new features",
      "Mobile and desktop integration",
    ],
    faqs: [
      {
        question: "Do I get all Adobe applications?",
        answer: "Yes, you get access to the complete Adobe Creative Cloud suite including all desktop and mobile apps.",
      },
      {
        question: "Is cloud storage included?",
        answer: "Yes, you get 100GB of cloud storage for your creative projects and assets.",
      },
      {
        question: "Can I use it on multiple devices?",
        answer: "Yes, you can install and use Adobe apps on multiple devices with your Creative Cloud membership.",
      },
    ],
  },
  {
    id: 22,
    name: "Filmora 14",
    description:
      "Wondershare Filmora 14 video editing software with AI-powered features, advanced editing tools, and Adobe Creative Suite included.",
    fullDescription: `
      <h3>Filmora 14 - AI-Powered Video Editing</h3>
      <p>Experience the latest Filmora 14 with revolutionary AI features that make video editing faster and more intuitive. Create professional videos with less effort using advanced AI tools and comprehensive editing capabilities.</p>
      
      <h3>Filmora 14 Features:</h3>
      <ul>
        <li>AI-powered video editing tools</li>
        <li>Advanced motion tracking</li>
        <li>Green screen and chroma key</li>
        <li>Audio ducking and noise removal</li>
        <li>Speed ramping and time effects</li>
        <li>Color grading and correction</li>
        <li>Keyframe animation</li>
        <li>Multi-track timeline editing</li>
      </ul>
      
      <h3>AI Features:</h3>
      <ul>
        <li>AI Smart Cutout for background removal</li>
        <li>AI Audio Stretch for perfect timing</li>
        <li>AI Portrait for automatic subject tracking</li>
        <li>AI Music generation</li>
        <li>Auto reframe for different aspect ratios</li>
        <li>Speech to text and auto subtitles</li>
      </ul>
      
      <h3>Bonus Adobe Creative Suite:</h3>
      <ul>
        <li>Adobe Photoshop for image editing</li>
        <li>Adobe Premiere Pro for professional editing</li>
        <li>Adobe After Effects for motion graphics</li>
        <li>Adobe Illustrator for graphic design</li>
      </ul>
    `,
    price: "₹499",
    originalPrice: "₹1999",
    image: "/images/products/filmora-14.jpeg",
    badge: "AI Powered",
    badgeColor: "bg-red-600",
    category: "Video Editing",
    duration: "Lifetime Access",
    features: [
      "Filmora 14 Latest Version",
      "AI-Powered Editing",
      "Advanced Motion Tracking",
      "Green Screen Effects",
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Audio Ducking",
      "Speed Ramping",
    ],
    specifications: {
      "Software Version": "Filmora 14",
      "AI Features": "Advanced AI tools",
      "Export Quality": "Up to 4K",
      "Audio Support": "Multi-track audio",
      "Effects Library": "1000+ effects",
      "Adobe Suite": "Complete package",
    },
    benefits: [
      "AI-powered video editing",
      "Professional editing capabilities",
      "Faster workflow with AI tools",
      "Complete Adobe Creative Suite",
      "Lifetime software access",
    ],
    faqs: [
      {
        question: "What's new in Filmora 14?",
        answer:
          "Filmora 14 introduces advanced AI features like Smart Cutout, AI Audio Stretch, and AI Portrait for more efficient editing.",
      },
      {
        question: "Can I export in 4K quality?",
        answer: "Yes, Filmora 14 supports export in up to 4K resolution for professional-quality videos.",
      },
      {
        question: "Is the Adobe suite included?",
        answer: "Yes, you get the complete Adobe Creative Suite as a bonus with Filmora 14.",
      },
    ],
  },
]

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

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === Number.parseInt(id))
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products
  return products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
}
