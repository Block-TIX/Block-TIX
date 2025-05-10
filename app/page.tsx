"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Calendar,
  Ticket,
  BarChart,
  Wallet,
  PartyPopper,
  Shield,
  Zap,
  Coins,
  CheckCircle,
  Lock,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { ParticleBackground } from "@/components/particle-background"
import { CountUp } from "@/components/count-up"
import { ScrollReveal } from "@/components/scroll-reveal"
import { FriendlyHero } from "@/components/friendly-hero"
import { FeatureShowcase } from "@/components/feature-showcase"

// Dynamically import the 3D hero to avoid SSR issues
const Hero3D = dynamic(() => import("@/components/hero-3d"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center">
      <div className="animate-pulse bg-orange-500/10 rounded-lg w-full h-full"></div>
    </div>
  ),
})

const FeatureAnimation = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Updated events from the Events page
  const featuredEvents = [
    {
      title: "SuperAI Conference",
      image: "/images/events/superai-event.jpeg",
      date: "June 5-6, 2024",
      location: "Singapore",
      price: "1.2 SOL",
      category: "AI",
    },
    {
      title: "TOKEN2049 Singapore",
      image: "/images/events/token2049-singapore.jpeg",
      date: "September 18-19, 2024",
      location: "Singapore",
      price: "1.5 SOL",
      category: "Crypto",
    },
    {
      title: "Solana Breakpoint",
      image: "/images/events/solana-breakpoint.png",
      date: "December 11-13, 2025",
      location: "Abu Dhabi, UAE",
      price: "1.4 SOL",
      category: "Crypto",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-8 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ParticleBackground friendly={true} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">{mounted && <FriendlyHero />}</div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section - Hidden */}
      <section className="py-4 md:py-12 relative z-10 hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "Active Users", value: 375000, suffix: "+" },
              { label: "Events Hosted", value: 2800, suffix: "+" },
              { label: "Partner Venues", value: 185, suffix: "+" },
              { label: "Countries", value: 42, suffix: "+" },
            ].map((stat, index) => (
              <FeatureAnimation key={index} delay={index * 0.1}>
                <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 rounded-xl">
                  <CardContent className="p-6 text-center">
                    <p className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-muted-foreground mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              </FeatureAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Completely Redesigned */}
      <FeatureShowcase />

      {/* Technology Section */}
      <section className="py-16 md:py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              Our Blockchain Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how BlockTix leverages Solana's high-performance blockchain to revolutionize the ticketing
              industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Blockchain for Ticketing?</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Traditional ticketing systems are plagued with issues like fraud, scalping, and lack of transparency.
                  Blockchain technology solves these problems by creating immutable, verifiable tickets that can't be
                  counterfeited.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      title: "Immutable Verification",
                      description:
                        "Each ticket is a unique token on the blockchain that can't be duplicated or forged.",
                      icon: <Shield className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />,
                    },
                    {
                      title: "Smart Contract Royalties",
                      description:
                        "Automatically distribute royalties to artists and organizers for secondary market sales.",
                      icon: <Coins className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />,
                    },
                    {
                      title: "Transparent Transactions",
                      description:
                        "All ticket transfers and sales are recorded on the public ledger for complete transparency.",
                      icon: <Zap className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      {item.icon}
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
                  >
                    <Link href="/technology" className="flex items-center">
                      Learn More About Our Technology <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/images/nft-ticket.jpeg" alt="Blockchain Technology" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-xl font-bold mb-2 text-white">Powered by Solana</h4>
                  <p className="text-white/80">
                    Ultra-fast transactions, low fees, and environmentally friendly blockchain technology
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How Our Technology Works Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              How Our Technology Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the technical architecture of BlockTix
            </p>
          </motion.div>

          <Tabs defaultValue="nft" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 rounded-full bg-muted/50 backdrop-blur-sm">
              <TabsTrigger
                value="nft"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                NFT Tickets
              </TabsTrigger>
              <TabsTrigger
                value="smart"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Smart Contracts
              </TabsTrigger>
              <TabsTrigger
                value="wallet"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
              >
                Wallet Integration
              </TabsTrigger>
            </TabsList>

            <TabsContent value="nft" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%207%2C%202025%2C%2011_30_41%20AM-DzwgRrA9zXjJ0DzNoQWhHYG8cZxCJ6.png"
                    alt="NFT Tickets"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">NFT-Based Tickets</h3>
                  <p className="text-muted-foreground mb-6">
                    Each ticket is minted as a unique NFT on the Solana blockchain, containing all event details, seat
                    information, and ownership history.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Unique digital collectibles with event memorabilia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Verifiable authenticity and ownership</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Customizable metadata for special perks and access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Permanent record of attendance for future benefits</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="smart" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Smart Contract Architecture</h3>
                  <p className="text-muted-foreground mb-6">
                    Our platform uses advanced smart contracts to automate ticket sales, transfers, and royalty
                    distributions without intermediaries.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Automated royalty payments for secondary sales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Programmable ticket rules and restrictions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Transparent fee structure visible on-chain</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Escrow functionality for secure transactions</span>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%207%2C%202025%2C%2011_26_20%20AM-AUVoqDoZbk4ZWOi83YuJF83YuJF83PO81LPP.png"
                    alt="Smart Contract Architecture"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="wallet" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%207%2C%202025%2C%2011_41_54%20AM-RfenjoeWV2aInSpnTIJEWoYdnyRRLN.png"
                    alt="Wallet Integration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Seamless Wallet Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    Connect popular Solana wallets for easy ticket purchases, transfers, and event check-ins.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Support for Phantom, Solflare, and other Solana wallets</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>QR code ticket verification for event entry</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>One-click ticket transfers to friends</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Secure key management and transaction signing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="hidden py-16 md:py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Security & Privacy</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We prioritize the security of your tickets and personal information with industry-leading protection
                  measures.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Lock className="h-8 w-8 text-orange-500" />,
                      title: "End-to-End Encryption",
                      description: "All sensitive data is encrypted using advanced cryptographic techniques.",
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-orange-500" />,
                      title: "Regular Security Audits",
                      description: "Our smart contracts undergo rigorous third-party security audits.",
                    },
                    {
                      icon: <Wallet className="h-8 w-8 text-orange-500" />,
                      title: "Non-Custodial Design",
                      description: "We never hold your private keys or have access to your funds.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-4 mt-1">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2" delay={0.2}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blockchain-ensure-automotive-security-and-privacy.jpg-94eBS4FdXd3NzY0Df0XhElithvucIR.jpeg"
                alt="Security and Privacy"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
              How BlockTix Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              It's super easy to get started - no technical knowledge needed!
            </p>
          </motion.div>

          <Tabs defaultValue="fans" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 p-1 bg-muted/50 backdrop-blur-sm rounded-full">
              <TabsTrigger
                value="fans"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                For Event-Goers
              </TabsTrigger>
              <TabsTrigger
                value="organizers"
                className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                For Event Creators
              </TabsTrigger>
            </TabsList>
            <TabsContent value="fans" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Wallet className="h-8 w-8 text-orange-500" />,
                    title: "Connect Your Wallet",
                    description: "Set up in seconds with popular wallets like Phantom or Solflare.",
                  },
                  {
                    icon: <Ticket className="h-8 w-8 text-orange-500" />,
                    title: "Buy Your Tickets",
                    description: "Browse events and purchase tickets with crypto or credit card.",
                  },
                  {
                    icon: <PartyPopper className="h-8 w-8 text-orange-500" />,
                    title: "Enjoy The Event!",
                    description: "Show your digital ticket at the door and collect your memory NFT.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 relative">
                      {step.icon}
                      <div className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="organizers" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Calendar className="h-8 w-8 text-pink-500" />,
                    title: "Create Your Event",
                    description: "Set up your event details, ticket types, and pricing in minutes.",
                  },
                  {
                    icon: <Ticket className="h-8 w-8 text-pink-500" />,
                    title: "Customize Tickets",
                    description: "Design beautiful digital tickets with special perks for attendees.",
                  },
                  {
                    icon: <BarChart className="h-8 w-8 text-pink-500" />,
                    title: "Watch Sales Grow",
                    description: "Track sales in real-time and earn from primary and secondary markets.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4 relative">
                      {step.icon}
                      <div className="absolute inset-0 rounded-full bg-pink-500/10 animate-ping"></div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Icons Section */}
      <section className="py-8 relative hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-2 flex justify-center">
                <Ticket className="h-6 w-6 sm:h-6 sm:w-6 text-orange-500 feature-icon" />
              </div>
              <p className="text-sm sm:text-base font-medium">NFT Ticketing</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex justify-center h-6 w-6 sm:h-6 sm:w-6 relative feature-icon">
                <Image
                  src="/solana-logo-gradient.png"
                  alt="Solana Logo"
                  width={24}
                  height={24}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-sm sm:text-base font-medium">Solana Powered</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 flex justify-center">
                <Zap className="h-6 w-6 sm:h-6 sm:w-6 text-orange-500 feature-icon" />
              </div>
              <p className="text-sm sm:text-base font-medium">Instant Transfers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Buttons Section */}
      <section className="py-4 relative hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col gap-4 items-center">
            <Button
              asChild
              size="lg"
              className="w-full max-w-xs bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full"
            >
              <Link href="/events">Find Your Next Event</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full max-w-xs border-orange-500/50 hover:border-orange-500 text-white rounded-full"
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                Common Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know to get started with BlockTix!
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do I need to understand blockchain to use BlockTix?",
                answer:
                  "Not at all! We've designed BlockTix to be super user-friendly. You don't need any technical knowledge - just buy tickets like you normally would, and enjoy the benefits of blockchain security behind the scenes.",
              },
              {
                question: "Can I use a credit card to buy tickets?",
                answer:
                  "While you can use cryptocurrency if you prefer, we accept all major credit cards too. The blockchain technology works behind the scenes regardless of how you pay.",
              },
              {
                question: "How do I send a ticket to a colleague?",
                answer:
                  "It's easy! Just select the ticket you want to share, enter your colleague's wallet address, and they'll receive it instantly. No printing needed, and the transfer is recorded on the blockchain for security.",
              },
              {
                question: "What are ticket collectibles?",
                answer:
                  "After attending a crypto event, your ticket transforms into a digital collectible NFT that you can keep forever. Some collectibles even come with special perks like discounts on future blockchain conferences, access to exclusive content, or governance rights in certain DAOs!",
              },
              {
                question: "Is BlockTix available in my country?",
                answer:
                  "We're rapidly expanding globally! BlockTix is currently available in 25+ countries, and we're adding more every month. Check our Events page to see what's happening in your area.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="mb-6">
                  <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 rounded-xl p-6 transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-orange-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=qdgf3')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                Ready to Experience Better Events?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of happy event-goers and start collecting memories today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 hover:from-orange-600 hover:via-pink-600 hover:to-yellow-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full"
                >
                  <Link href="/events">Explore Events</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500/30 hover:border-orange-500/60 backdrop-blur-sm rounded-full"
                >
                  <Link href="/how-it-works">Learn More</Link>
                </Button>
              </div>
              <div className="mt-12 flex items-center justify-center space-x-4">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
