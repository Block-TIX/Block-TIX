"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { ParticleBackground } from "@/components/particle-background"
import { Check, Clock, ArrowRight, Rocket, Code, Users, Globe, Coins } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function RoadmapPage() {
  const [activePhase, setActivePhase] = useState("current")

  const phases = {
    completed: [
      {
        title: "Platform Foundation",
        quarter: "Q1 2024",
        status: "completed",
        items: [
          "Initial concept development",
          "Team formation",
          "Market research and analysis",
          "Technical architecture planning",
          "Smart contract development initiation",
        ],
        icon: <Code className="h-8 w-8 text-green-500" />,
      },
      {
        title: "MVP Development",
        quarter: "Q2 2024",
        status: "completed",
        items: [
          "Core platform development",
          "Smart contract auditing",
          "Basic UI/UX implementation",
          "Internal testing phase",
          "Early partnerships establishment",
        ],
        icon: <Code className="h-8 w-8 text-green-500" />,
      },
    ],
    current: [
      {
        title: "Platform Launch",
        quarter: "Q3 2024",
        status: "current",
        items: [
          "Public beta release",
          "Initial event onboarding",
          "Community building initiatives",
          "Bug fixes and optimizations",
          "Marketing campaign kickoff",
        ],
        icon: <Rocket className="h-8 w-8 text-orange-500" />,
      },
      {
        title: "Token Launch",
        quarter: "Q4 2024",
        status: "current",
        items: [
          "$ATTEND token development",
          "Tokenomics finalization",
          "Smart contract audits",
          "Raydium Launchpad IDO",
          "DEX listings and liquidity provision",
        ],
        icon: <Coins className="h-8 w-8 text-orange-500" />,
      },
    ],
    upcoming: [
      {
        title: "Ecosystem Expansion",
        quarter: "Q1 2025",
        status: "upcoming",
        items: [
          "Major partnerships with crypto events",
          "Enhanced NFT ticket features",
          "Mobile app development",
          "Governance mechanism implementation",
          "Cross-chain compatibility research",
        ],
        icon: <Users className="h-8 w-8 text-blue-500" />,
      },
      {
        title: "Global Scaling",
        quarter: "Q2 2025",
        status: "upcoming",
        items: [
          "International event partnerships",
          "Multi-language support",
          "Advanced analytics for event organizers",
          "Enhanced security features",
          "Expanded payment options",
        ],
        icon: <Globe className="h-8 w-8 text-blue-500" />,
      },
      {
        title: "Advanced Features",
        quarter: "Q3-Q4 2025",
        status: "upcoming",
        items: [
          "AI-powered event recommendations",
          "Virtual event integration",
          "Secondary marketplace enhancements",
          "DAO governance implementation",
          "Staking and yield opportunities",
        ],
        icon: <Rocket className="h-8 w-8 text-blue-500" />,
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <ParticleBackground />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
              BlockTix Roadmap
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our journey to revolutionize blockchain event ticketing
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Roadmap Navigation */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full p-1 bg-muted/50 backdrop-blur-sm">
              <button
                onClick={() => setActivePhase("completed")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activePhase === "completed"
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="flex items-center">
                  <Check className="mr-1 h-4 w-4" /> Completed
                </span>
              </button>
              <button
                onClick={() => setActivePhase("current")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activePhase === "current"
                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" /> Current
                </span>
              </button>
              <button
                onClick={() => setActivePhase("upcoming")}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activePhase === "upcoming"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <span className="flex items-center">
                  <Rocket className="mr-1 h-4 w-4" /> Upcoming
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-8 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {phases[activePhase].map((phase, phaseIndex) => (
              <ScrollReveal key={phase.title} delay={phaseIndex * 0.1}>
                <div className="mb-16 relative">
                  {/* Timeline connector */}
                  {phaseIndex < phases[activePhase].length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent"></div>
                  )}

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm border border-orange-500/20 flex items-center justify-center shadow-lg">
                      {phase.icon}
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold">{phase.title}</h2>
                        <div className="mt-2 md:mt-0 px-4 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-orange-500/20 text-sm font-medium">
                          {phase.quarter}
                        </div>
                      </div>

                      <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <ul className="space-y-3">
                            {phase.items.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <Check
                                  className={cn(
                                    "h-5 w-5 mr-3 mt-0.5 flex-shrink-0",
                                    phase.status === "completed"
                                      ? "text-green-500"
                                      : phase.status === "current"
                                        ? "text-orange-500"
                                        : "text-blue-500",
                                  )}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                Our Vision
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                BlockTix aims to become the leading blockchain-based ticketing platform for crypto events worldwide,
                creating a seamless bridge between event organizers and attendees while leveraging the power of
                blockchain technology to ensure security, transparency, and new revenue opportunities.
              </p>
              <p className="text-xl text-muted-foreground mb-12">
                With the $ATTEND token at its core, our platform will not only transform how crypto events are ticketed
                but also create a vibrant ecosystem where all participants benefit from the growth and success of the
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 hover:from-orange-600 hover:via-pink-600 hover:to-yellow-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full"
                >
                  <Link href="/tokenomics">Explore Tokenomics</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500/30 hover:border-orange-500/60 backdrop-blur-sm rounded-full"
                >
                  <Link href="/events" className="flex items-center">
                    See Our Events <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                Join Us On This Journey
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of the revolution in blockchain event ticketing
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Users className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-muted-foreground">
                      Join our growing community of crypto enthusiasts and event-goers
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Coins className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Token</h3>
                    <p className="text-muted-foreground">Participate in our upcoming token launch on Raydium</p>
                  </CardContent>
                </Card>
                <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Globe className="h-12 w-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ecosystem</h3>
                    <p className="text-muted-foreground">Become part of the growing BlockTix ecosystem</p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Link href="/twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/discord" className="text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link href="/telegram" className="text-muted-foreground hover:text-foreground transition-colors">
                  Telegram
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
