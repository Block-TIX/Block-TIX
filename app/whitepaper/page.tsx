"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, FileText, Layers, Coins, BarChart3, Calendar, Rocket, ArrowRight } from "lucide-react"

export default function WhitepaperPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [scrollY, setScrollY] = useState(0)

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const checkVisibility = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const id = section.getAttribute("id") || ""

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(id)
        }
      })
    }

    window.addEventListener("scroll", checkVisibility)
    checkVisibility() // Check on initial load

    return () => window.removeEventListener("scroll", checkVisibility)
  }, [scrollY])

  const sections = [
    { id: "introduction", label: "Introduction", icon: <FileText className="h-4 w-4" /> },
    { id: "vision", label: "Vision & Mission", icon: <Rocket className="h-4 w-4" /> },
    { id: "technology", label: "Technology", icon: <Layers className="h-4 w-4" /> },
    { id: "tokenomics", label: "$ATTEND Tokenomics", icon: <Coins className="h-4 w-4" /> },
    { id: "distribution", label: "Token Distribution", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "roadmap", label: "Roadmap", icon: <Calendar className="h-4 w-4" /> },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-32 pb-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-grid-white/10" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                BlockTix Whitepaper
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                Next-generation event ticketing powered by Solana blockchain
              </p>
              {/* Download PDF button has been hidden */}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 pb-24 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className={`lg:sticky ${scrollY > 300 ? "lg:top-24" : "lg:top-32"} transition-all duration-300`}>
              <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                <CardContent className="p-4">
                  <h3 className="mb-4 text-lg font-semibold">Contents</h3>
                  <nav className="flex flex-col space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center rounded-md px-3 py-2 text-sm transition-colors ${
                          activeSection === section.id
                            ? "bg-purple-500/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <span className="mr-2">{section.icon}</span>
                        {section.label}
                        {activeSection === section.id && <ChevronRight className="ml-auto h-4 w-4" />}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="mt-8 lg:mt-0 lg:w-3/4">
            <div className="prose prose-invert max-w-none">
              <section id="introduction" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Introduction</h2>
                <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                    BlockTix is revolutionizing the event ticketing industry by leveraging the power of blockchain
                    technology. Our platform addresses the critical challenges faced by the traditional ticketing
                    industry, including fraud, scalping, lack of transparency, and high fees.
                  </p>
                  <p>
                    By utilizing Solana's high-performance blockchain, BlockTix provides a secure, transparent, and
                    efficient ticketing solution that benefits both event organizers and attendees. Our platform enables
                    the creation, distribution, and verification of digital tickets as non-fungible tokens (NFTs),
                    ensuring authenticity and eliminating counterfeiting.
                  </p>
                  <p>
                    This whitepaper outlines our vision, technology, tokenomics, and roadmap for transforming the global
                    ticketing market, which is projected to reach $68 billion by 2025.
                  </p>
                </div>
              </section>

              <section id="vision" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Vision & Mission</h2>
                <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                    <strong>Vision:</strong> To create a global, decentralized ticketing ecosystem that eliminates
                    fraud, reduces costs, and enhances the experience for all stakeholders in the event industry.
                  </p>
                  <p>
                    <strong>Mission:</strong> To leverage blockchain technology to provide a secure, transparent, and
                    user-friendly ticketing platform that empowers event organizers and attendees while fostering a
                    vibrant secondary market with fair revenue sharing.
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-semibold">For Event Organizers</h3>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Eliminate ticket fraud and counterfeiting</li>
                          <li>Gain control over secondary market sales</li>
                          <li>Receive royalties from resales</li>
                          <li>Access real-time data and analytics</li>
                          <li>Reduce operational costs</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg font-semibold">For Attendees</h3>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Guaranteed authentic tickets</li>
                          <li>Seamless buying and selling experience</li>
                          <li>Lower fees compared to traditional platforms</li>
                          <li>Collectible NFT tickets with potential value</li>
                          <li>Enhanced event experiences through tokenization</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="technology" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Technology</h2>
                <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                    BlockTix is built on the Solana blockchain, chosen for its high throughput, low transaction costs,
                    and energy efficiency. Solana's capacity to process over 65,000 transactions per second with
                    sub-second finality makes it ideal for handling high-volume ticket sales for popular events.
                  </p>
                  <h3 className="mt-8 text-xl font-semibold">Key Technical Features</h3>
                  <div className="mt-4 grid gap-6 sm:grid-cols-2">
                    <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-6">
                        <h4 className="mb-2 text-lg font-medium">NFT Ticketing</h4>
                        <p>
                          Each ticket is minted as a unique NFT on the Solana blockchain, containing event details, seat
                          information, and ownership history. This ensures authenticity and prevents duplication.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-6">
                        <h4 className="mb-2 text-lg font-medium">Smart Contracts</h4>
                        <p>
                          Automated smart contracts handle ticket issuance, transfers, and royalty distributions,
                          eliminating intermediaries and reducing costs while ensuring transparency.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-6">
                        <h4 className="mb-2 text-lg font-medium">Decentralized Marketplace</h4>
                        <p>
                          A secure secondary market allows users to buy and sell tickets with automatic royalty payments
                          to event organizers and the BlockTix ecosystem.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-6">
                        <h4 className="mb-2 text-lg font-medium">Mobile Verification</h4>
                        <p>
                          Our mobile app provides secure ticket storage and verification through QR codes and NFC
                          technology, ensuring smooth entry at events.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="tokenomics" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight">$ATTEND Tokenomics</h2>
                <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                    The $ATTEND token is the native utility token of the BlockTix ecosystem, designed to incentivize
                    participation, governance, and growth of the platform. $ATTEND will be launched on Raydium, Solana's
                    leading decentralized exchange and liquidity provider.
                  </p>

                  <div className="mt-8">
                    <Card className="overflow-hidden border-purple-500/20 bg-background/50 backdrop-blur">
                      <CardContent className="p-0">
                        <Tabs defaultValue="utility" className="w-full">
                          <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="utility">Token Utility</TabsTrigger>
                            <TabsTrigger value="economics">Economics</TabsTrigger>
                          </TabsList>
                          <TabsContent value="utility" className="p-6">
                            <h4 className="mb-4 text-lg font-medium">Token Utility</h4>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>
                                <strong>Platform Fees:</strong> Pay for transaction fees with discounts
                              </li>
                              <li>
                                <strong>Early Access:</strong> Priority access to high-demand events
                              </li>
                              <li>
                                <strong>Rewards:</strong> Earn tokens for platform participation
                              </li>
                              <li>
                                <strong>VIP Benefits:</strong> Exclusive experiences and merchandise
                              </li>
                              <li>
                                <strong>Loyalty Program:</strong> Accumulate points for future discounts
                              </li>
                              <li>
                                <strong>Premium Features:</strong> Access to advanced platform features
                              </li>
                            </ul>
                          </TabsContent>
                          <TabsContent value="economics" className="p-6">
                            <h4 className="mb-4 text-lg font-medium">Token Economics</h4>
                            <div>
                              <p className="mb-4">
                                <strong>Total Supply:</strong> 1,000,000,000 $ATTEND
                              </p>
                              <p className="mb-4">
                                <strong>Initial Circulating Supply:</strong> 150,000,000 $ATTEND (15%)
                              </p>
                              <p className="mb-4">
                                <strong>Initial Market Cap:</strong> $3,000,000 (at $0.02 per token)
                              </p>
                              <p>
                                <strong>Token Type:</strong> SPL Token (Solana)
                              </p>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="distribution" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Token Distribution</h2>
                <div className="mt-6 space-y-6">
                  <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg border border-purple-500/20 bg-background/50 p-4 backdrop-blur">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-full">
                        {/* Placeholder for token distribution chart */}
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="relative h-64 w-64">
                            <div className="absolute inset-0 rounded-full border-8 border-purple-500/30"></div>
                            <div
                              className="absolute inset-0 rounded-full border-8 border-transparent border-t-pink-500"
                              style={{ transform: "rotate(45deg)" }}
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-8 border-transparent border-r-blue-500"
                              style={{ transform: "rotate(135deg)" }}
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-8 border-transparent border-b-orange-500"
                              style={{ transform: "rotate(225deg)" }}
                            ></div>
                            <div
                              className="absolute inset-0 rounded-full border-8 border-transparent border-l-yellow-500"
                              style={{ transform: "rotate(315deg)" }}
                            ></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full bg-background p-4">
                                <Image
                                  src="/logo.png"
                                  alt="BlockTix Logo"
                                  width={50}
                                  height={50}
                                  className="h-12 w-12"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full bg-purple-500"></div>
                        <span>
                          <strong>10% - Dev Wallet Supply</strong> (100M tokens, 100% locked)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full bg-pink-500"></div>
                        <span>
                          <strong>10% - Marketing / DEX Listings</strong> (100M tokens)
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                        <span>
                          <strong>5% - Development Wallet</strong> (50M tokens)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                        <span>
                          <strong>75% - Public Distribution</strong> (750M tokens)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold">Vesting Schedule</h3>
                    <div className="mt-4 overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Allocation
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Tokens
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Initial Unlock
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Cliff
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              Vesting Period
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          <tr>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">Dev Wallet Supply</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">100M</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">0%</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">12 months</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">36 months</td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">Marketing / DEX Listings</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">100M</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">20%</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">1 month</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">24 months</td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">Development Wallet</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">50M</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">10%</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">3 months</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">36 months</td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">Public Distribution</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">750M</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">100%</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">None</td>
                            <td className="whitespace-nowrap px-4 py-3 text-sm">None</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              <section id="roadmap" className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Roadmap</h2>
                <div className="mt-6 space-y-6 text-muted-foreground">
                  <p>
                    Our strategic roadmap outlines the key milestones and development phases for BlockTix, from concept
                    to global adoption.
                  </p>

                  <div className="mt-8 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
                      <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full bg-purple-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold">Q2 2025 - Platform Launch</h3>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                          <li>Launch of BlockTix MVP on Solana mainnet</li>
                          <li>Initial partnerships with event organizers</li>
                          <li>$ATTEND token launch on Raydium</li>
                          <li>Mobile app beta release</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
                      <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full bg-pink-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold">Q3 2025 - Expansion Phase</h3>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                          <li>Secondary marketplace implementation</li>
                          <li>Staking program launch</li>
                          <li>Integration with major event platforms</li>
                          <li>Enhanced analytics dashboard for organizers</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
                      <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full bg-blue-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold">Q4 2025 - Feature Enhancement</h3>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                          <li>Advanced NFT ticket features (animations, AR experiences)</li>
                          <li>Governance system implementation</li>
                          <li>Cross-chain bridge development</li>
                          <li>VIP membership tiers</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500"></div>
                      <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full bg-orange-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold">Q1-Q2 2026 - Global Expansion</h3>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                          <li>Expansion to international markets</li>
                          <li>Strategic partnerships with major venues and promoters</li>
                          <li>Enhanced mobile app with social features</li>
                          <li>Integration with metaverse platforms for virtual events</li>
                        </ul>
                      </div>
                    </div>

                    <div className="relative pl-8">
                      <div className="absolute -left-1.5 top-1 h-4 w-4 rounded-full bg-yellow-500"></div>
                      <div>
                        <h3 className="text-xl font-semibold">Q3-Q4 2026 - Ecosystem Maturity</h3>
                        <ul className="mt-2 list-disc pl-5 text-muted-foreground">
                          <li>Full-scale DAO governance implementation</li>
                          <li>Developer API for third-party integrations</li>
                          <li>Advanced fraud prevention system</li>
                          <li>Comprehensive loyalty and rewards program</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="mt-16 flex justify-center">
                <Link href="/connect">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700"
                  >
                    Join the BlockTix Revolution <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
