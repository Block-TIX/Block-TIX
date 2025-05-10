"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  Shield,
  Coins,
  Zap,
  BarChart,
  Wallet,
  Lock,
  Globe,
  Layers,
  QrCode,
  Scan,
  Bluetooth,
} from "lucide-react"
import { YouTubeBackground } from "@/components/youtube-background"

export default function TechnologyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {mounted && (
          <YouTubeBackground
            videoId="n04NCJ9jZS8"
            fallbackImageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20at%203.36.19%E2%80%AFPM-tg8wEGvYBpEevzIw2QOFpqYjH499zv.png"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500"
          >
            Our Blockchain Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Discover how BlockTix leverages Solana's high-performance blockchain to revolutionize the ticketing
            industry.
          </motion.p>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      <section className="py-12 md:py-24 relative overflow-visible">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Technology Overview */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                    Why Blockchain for Ticketing?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Traditional ticketing systems are plagued with issues like fraud, scalping, and lack of
                    transparency. Blockchain technology solves these problems by creating immutable, verifiable tickets
                    that can't be counterfeited.
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
                      {
                        title: "Programmable Tickets",
                        description:
                          "Add custom rules and features to tickets, like expiration dates or transfer restrictions.",
                        icon: <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />,
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        {item.icon}
                        <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/blockchain-holographic-ticket.png"
                    alt="Blockchain Technology"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold mb-2 text-white">Powered by Solana</h4>
                    <p className="text-white/80">
                      Ultra-fast transactions, low fees, and environmentally friendly blockchain technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* NEW SECTION: Non-Fungible Tokens (NFTs) */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/images/nft-token-3d.png" alt="NFT Digital Collectible" fill className="object-contain" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                    Non-Fungible Tokens (NFTs)
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    Provide digital ownership of assets. Created through the blockchain, they are similar to a
                    cryptocurrency.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    For collectors, an NFT is a digital representation of collectibles that entail uniqueness or digital
                    scarcity.
                  </p>
                  <p className="text-lg text-muted-foreground mb-4">
                    A football trading card is a great example to consider. The owner of the NFT would not possess the
                    physical card. Their token represents their ownership (or partial ownership) of the item and
                    entitles them to sell and profit from this card.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Solana Integration */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Why We Chose Solana
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Solana's high-performance blockchain provides the perfect foundation for our ticketing platform.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Zap className="h-10 w-10 text-orange-500" />,
                    title: "High Speed",
                    description:
                      "Process thousands of transactions per second for instant ticket purchases and transfers.",
                  },
                  {
                    icon: <Coins className="h-10 w-10 text-orange-500" />,
                    title: "Low Fees",
                    description: "Minimal transaction costs make microtransactions and small ticket purchases viable.",
                  },
                  {
                    icon: <Shield className="h-10 w-10 text-orange-500" />,
                    title: "Security",
                    description: "Enterprise-grade security protects all ticket transactions and user assets.",
                  },
                  {
                    icon: <BarChart className="h-10 w-10 text-orange-500" />,
                    title: "Scalability",
                    description: "Handle millions of users and tickets without performance degradation.",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-background/60 backdrop-blur-sm border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl"
                  >
                    <CardHeader>
                      <div className="mb-2">{item.icon}</div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* NEW SECTION: Creator Tools */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/blocktix-creator-dashboard.png"
                    alt="Creator Dashboard"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                    <p className="text-center font-medium">Creator's dashboard</p>
                    <p className="text-center text-sm text-muted-foreground">
                      (set NFT offerings, price, resale rules, check analytics)
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image src="/blocktix-scanner-app.png" alt="Scanner App" fill className="object-contain" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                    <p className="text-center font-medium">Scanner App</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  How Our Technology Works
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A deep dive into the technical architecture of BlockTix.
                </p>
              </div>

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
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%207%2C%202025%2C%2011_30_41%20AM-xMImOiW6ercHlklDu6HWwM2HRorEd0.png"
                        alt="NFT Tickets"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">NFT-Based Tickets</h3>
                      <p className="text-muted-foreground mb-6">
                        Each ticket is minted as a unique NFT on the Solana blockchain, containing all event details,
                        seat information, and ownership history.
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
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%207%2C%202025%2C%2011_26_20%20AM-HJrh2W5CDIHb4A5ayI8196nlM4bdiu.png"
                        alt="Smart Contract Architecture"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="wallet" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-[300px] rounded-lg overflow-hidden">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%207%2C%202025%2C%2011_41_54%20AM-Z73PgHOlTxHE1SjowM3EoHvmS5zLi7.png"
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

          {/* NEW SECTION: Tamperproof Ticket Delivery */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Tamperproof Ticket Delivery
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  BlockTix ensures NFT tickets are tamperproof and the business logic of the NFT cannot be circumvented
                  on the UX level, through the use of three technologies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl p-6">
                  <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QR-IZnHhcG8qnDN5Q8QAqkpFAPAELLAUx.png"
                      alt="Dynamic QR Codes"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dynamic QR Codes</h3>
                  <p className="text-muted-foreground mb-4">
                    The core technology for ensuring that tickets cannot be faked or duplicated. With a constantly
                    changing QR code there is no possibility to screenshot tickets or use the same ticket multiple
                    times.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <QrCode className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Time-based code rotation prevents screenshots</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Encrypted verification prevents forgery</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl p-6">
                  <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BCVerif-s1bC2JYPkKxJCUK0LNgQcPGIK9teMR.png"
                      alt="Blockchain Verification"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Blockchain Verification</h3>
                  <p className="text-muted-foreground mb-4">
                    Every ticket is verified against the blockchain record to ensure authenticity. This creates an
                    immutable record of ownership that cannot be tampered with.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Immutable ownership records</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Cryptographic proof of authenticity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl p-6">
                  <div className="relative h-[200px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mockpng-jdXsqn9HCz4OorTGwWJBrPebyWfL7R.png"
                      alt="Multi-Factor Authentication"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multi-Factor Authentication</h3>
                  <p className="text-muted-foreground mb-4">
                    Additional security layers ensure that only the rightful ticket owner can use the ticket for event
                    entry.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Identity verification options</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Device-linked authentication</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* NEW SECTION: Advanced Security Features */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                    Facial Recognition
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Another option to safeguard tickets is the use of facial recognition to ensure that the individual
                    who purchased the ticket is the same one who is using it to enter an event. This is supported by the
                    upload of a biometric picture of the ticket owner which is not stored and always ensures privacy of
                    the ticket holder.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Scan className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Privacy-preserving biometric verification</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>No permanent storage of facial data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Optional feature for high-security events</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/blocktix-facial-recognition.png"
                    alt="Facial Recognition"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/blocktix-ble-validation.png"
                    alt="Bluetooth Low Energy"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                    Bluetooth Low Energy (BLE)
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Bluetooth (BLE) is another technology that adds to the protection from ticket fraud. In addition,
                    this can speed up ticket validation for entry by using Bluetooth validation vs manual scanning.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Bluetooth className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Faster entry with proximity-based validation</span>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Reduced wait times at venue entrances</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                      <span>Additional layer of security verification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* NEW SECTION: Blockchain Approach */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Blockchain Approach
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our approach to blockchain integration focuses on user experience while leveraging the power of Web3
                  technology.
                </p>
              </div>

              {/* Image removed as requested
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
                <Image src="/blockchain-ticketing-web3.png" alt="Blockchain Approach" fill className="object-contain" />
              </div>
              */}

              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold mb-4">Familiar web2 experience - Addressing mainstream users</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Web3 functionality is revealed to the users only when necessary
                </p>
                <p className="text-md text-muted-foreground max-w-3xl mx-auto mt-2">
                  For example, to withdraw an NFT to their crypto wallet (e.g Metamask), to take advantage of the
                  interoperability with other NFT marketplaces, metaverses or social media (e.g. Discord, Twitter,
                  Instagram)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <Wallet className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Social and email login</h4>
                  <p className="text-muted-foreground">
                    BlockTix custody by default - crypto wallet login (self-custody) optional.
                  </p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <Coins className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">NFT transactions take place in fiat currencies</h4>
                  <p className="text-muted-foreground">
                    (Euro, GBP, AED etc) via card payments. No need for users to hold crypto.
                  </p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/40 transition-all rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 bg-orange-500/10 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-orange-500" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">No gas fees</h4>
                  <p className="text-muted-foreground">
                    For issuing (lazy minting), redeeming and exchanging NFTs within the app's marketplace. Gas fees are
                    applicable only when withdrawing an NFT to self-custody on a public blockchain.
                  </p>
                </div>
              </div>

              {/* Remove the Blockchain networks integration section */}
            </div>
          </section>

          {/* Security Section */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                    Security & Privacy
                  </h2>
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

                <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                  <Image
                    src="/blockchain-security-privacy.png"
                    alt="Security and Privacy"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Blockchain Interoperability */}
          <section className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Blockchain Interoperability
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Our technology is designed to work across multiple blockchain ecosystems, ensuring maximum flexibility
                  and future-proofing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/blockchain-interoperability.png"
                    alt="Blockchain Interoperability"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Cross-Chain Compatibility</h3>
                  <p className="text-muted-foreground mb-6">
                    While primarily built on Solana, our platform is designed with cross-chain compatibility in mind,
                    allowing for future expansion to other blockchain networks.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Globe className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Multi-Chain Support</h4>
                        <p className="text-muted-foreground">
                          Future-ready architecture that can integrate with Ethereum, Polygon, and other major
                          blockchains
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Layers className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Bridge Technology</h4>
                        <p className="text-muted-foreground">
                          Secure cross-chain bridges for transferring tickets between different blockchain networks
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-orange-500 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">Universal Verification</h4>
                        <p className="text-muted-foreground">
                          Tickets can be verified across multiple platforms regardless of the underlying blockchain
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-orange-900/20 to-pink-900/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Ready to Experience the Future of Ticketing?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join the blockchain ticketing revolution and discover how our technology can transform your events.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 hover:from-orange-600 hover:via-pink-600 hover:to-yellow-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full"
                  >
                    <Link href="/connect">Connect Wallet</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-orange-500/30 hover:border-orange-500/60 backdrop-blur-sm rounded-full"
                  >
                    <Link href="/contact">Request Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
