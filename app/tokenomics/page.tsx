"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { ParticleBackground } from "@/components/particle-background"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts"
import { ArrowRight, Check, Coins, BarChart3, Wallet, Shield, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TokenomicsPage() {
  const tokenDistribution = [
    { name: "Public Sale", value: 80, color: "#f97316" },
    { name: "Dev Supply (100% Locked)", value: 10, color: "#ec4899" },
    { name: "Project Wallet", value: 10, color: "#8b5cf6" },
  ]

  const projectWalletBreakdown = [
    { name: "Promotion/DEXs", value: 7, color: "#8b5cf6" },
    { name: "Development/Maintenance", value: 3, color: "#6366f1" },
  ]

  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
        {`${name}: ${(percent * 100).toFixed(0)}%`}
      </text>
    )
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
              $ATTEND Tokenomics
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Powering the future of blockchain event ticketing with our utility token
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Token Overview Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About $ATTEND Token</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  $ATTEND is the native utility token that powers the BlockTix ecosystem, designed to create a seamless,
                  decentralized ticketing experience for crypto events worldwide.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Coins className="h-8 w-8 text-orange-500" />,
                      title: "Fair Launch",
                      description:
                        "Launching on Raydium Launchpad with a commitment to fair distribution and no insider trading.",
                    },
                    {
                      icon: <Shield className="h-8 w-8 text-orange-500" />,
                      title: "100% Locked Dev Supply",
                      description:
                        "10% of tokens allocated to the development team are 100% locked to ensure long-term alignment.",
                    },
                    {
                      icon: <Zap className="h-8 w-8 text-orange-500" />,
                      title: "Solana-Powered",
                      description: "Built on Solana for lightning-fast transactions and minimal fees.",
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

            <ScrollReveal delay={0.2}>
              <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Token Distribution</h3>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={tokenDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {tokenDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-16 md:py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                Token Utility
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                $ATTEND is designed with multiple utilities to drive platform adoption and provide value to holders
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transaction Fees",
                description: "Pay for ticket purchases and transfers with reduced fees when using $ATTEND tokens.",
                icon: <Wallet className="h-12 w-12 text-orange-500 mb-4" />,
              },
              {
                title: "Platform Development",
                description: "Token sales fuel the ongoing development and improvement of the BlockTix platform.",
                icon: <BarChart3 className="h-12 w-12 text-orange-500 mb-4" />,
              },
              {
                title: "Governance Rights",
                description: "Token holders can vote on platform upgrades and new feature implementations.",
                icon: <Check className="h-12 w-12 text-orange-500 mb-4" />,
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Wallet Breakdown */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <div className="bg-muted/30 backdrop-blur-sm rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Project Wallet Allocation (10%)</h3>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={projectWalletBreakdown}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {projectWalletBreakdown.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Project Wallet Breakdown</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  10% of the total token supply is allocated to the project wallet, which is further divided to ensure
                  sustainable growth and development of the BlockTix platform.
                </p>

                <div className="space-y-4">
                  <div className="bg-background/40 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                    <h3 className="text-xl font-semibold mb-2">7% - Promotion & DEX Liquidity</h3>
                    <p className="text-muted-foreground">
                      Allocated for marketing initiatives, partnerships, and providing liquidity on decentralized
                      exchanges to ensure healthy trading volumes.
                    </p>
                  </div>

                  <div className="bg-background/40 backdrop-blur-sm rounded-lg p-4 border border-indigo-500/20">
                    <h3 className="text-xl font-semibold mb-2">3% - Development & Maintenance</h3>
                    <p className="text-muted-foreground">
                      Reserved for ongoing platform development, technical improvements, security audits, and
                      infrastructure maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Token Launch Details */}
      <section className="py-16 md:py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                Token Launch Details
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                $ATTEND will launch on Raydium with a commitment to fairness and transparency
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-background/40 backdrop-blur-md border-orange-500/10 hover:border-orange-500/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Launch Platform</h3>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image src="/raydium-logo.png" alt="Raydium" fill className="object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold">Raydium Launchpad</p>
                        <p className="text-sm text-muted-foreground">Solana's Premier IDO Platform</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Launch Principles</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Fair distribution with no pre-sales or private allocations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>No insider trading or team token dumping</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>100% locked developer tokens with transparent vesting</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Audited smart contracts for maximum security</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">Token Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b border-muted pb-2">
                        <span className="text-muted-foreground">Token Name</span>
                        <span className="font-medium">ATTEND</span>
                      </div>
                      <div className="flex justify-between border-b border-muted pb-2">
                        <span className="text-muted-foreground">Token Symbol</span>
                        <span className="font-medium">$ATTEND</span>
                      </div>
                      <div className="flex justify-between border-b border-muted pb-2">
                        <span className="text-muted-foreground">Blockchain</span>
                        <span className="font-medium">Solana</span>
                      </div>
                      <div className="flex justify-between border-b border-muted pb-2">
                        <span className="text-muted-foreground">Total Supply</span>
                        <span className="font-medium">100,000,000 ATTEND</span>
                      </div>
                      <div className="flex justify-between border-b border-muted pb-2">
                        <span className="text-muted-foreground">Initial Circulating Supply</span>
                        <span className="font-medium">80,000,000 ATTEND (80%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Initial Market Cap</span>
                        <span className="font-medium">TBA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                Ready to Join the BlockTix Ecosystem?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated on our token launch and be the first to participate in our IDO
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 hover:from-orange-600 hover:via-pink-600 hover:to-yellow-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 rounded-full"
                >
                  <Link href="/roadmap">View Our Roadmap</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-orange-500/30 hover:border-orange-500/60 backdrop-blur-sm rounded-full"
                >
                  <Link
                    href="https://twitter.com/blocktix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Follow for Updates <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
