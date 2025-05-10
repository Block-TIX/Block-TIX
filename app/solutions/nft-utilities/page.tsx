import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "NFT Utilities | BlockTix",
  description:
    "Explore how BlockTix's NFT utilities go beyond digital collectibles to provide real-world benefits and enhanced experiences for event attendees.",
}

export default function NFTUtilitiesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  NFT Utilities
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                  Unlock the full potential of NFTs with practical utilities that enhance event experiences, create
                  exclusive opportunities, and build stronger communities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700"
                  >
                    <Link href="/contact">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/technology">Learn More</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image src="/blockchain-holographic-ticket.png" alt="NFT Utilities" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">NFT Utilities</h2>
                <p className="text-muted-foreground">
                  NFT utilities refer to the practical benefits, functions, and real-world applications that NFTs
                  (Non-Fungible Tokens) provide beyond their collectible nature. While many people associate NFTs
                  primarily with digital art and collectibles, utility NFTs offer tangible value and functionality to
                  their holders.
                </p>
                <p className="text-muted-foreground">
                  In the context of events and ticketing, NFT utilities transform digital tokens into powerful tools
                  that enhance attendee experiences, create new engagement opportunities, and solve real-world problems
                  in the event industry.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Enhanced Value Proposition:</strong> Add practical benefits to NFTs, making them more
                      valuable and desirable to holders.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Increased Engagement:</strong> Create ongoing engagement with NFT holders through
                      utility-based interactions and benefits.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Community Building:</strong> Foster stronger communities around shared utilities and
                      exclusive experiences.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>New Revenue Models:</strong> Create sustainable revenue streams through utility-based NFT
                      offerings and upgrades.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Solving Real Problems:</strong> Address challenges in ticketing, access control, and event
                      management through NFT utilities.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Types of NFT Utilities</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Access and Membership:</strong> NFTs that grant holders access to exclusive events,
                      venues, communities, or content.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Loyalty and Rewards:</strong> NFTs that provide ongoing benefits, discounts, or special
                      offers to holders.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Governance and Voting:</strong> NFTs that give holders a say in decisions related to
                      events, venues, or communities.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Upgradable Experiences:</strong> NFTs that can be enhanced or upgraded over time,
                      providing evolving benefits to holders.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Redeemable Benefits:</strong> NFTs that can be redeemed for physical goods, services, or
                      experiences.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Use Cases</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>VIP Access:</strong> NFTs that grant holders VIP access to events, including special
                      areas, early entry, or meet-and-greets.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Season Passes:</strong> NFT-based season passes that provide access to multiple events or
                      an entire season of performances.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Fan Clubs:</strong> NFTs that serve as membership cards for fan clubs, providing exclusive
                      content, merchandise discounts, and special experiences.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Event Upgrades:</strong> NFTs that allow holders to upgrade their event experience, such
                      as better seating, backstage access, or exclusive merchandise.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-purple-500/10 text-purple-500">•</div>
                    <div>
                      <strong>Community Governance:</strong> NFTs that give holders voting rights on aspects of events,
                      such as lineup selections, venue choices, or community initiatives.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Implementation Strategies</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-orange-500/10 text-orange-500">1</div>
                    <div>
                      <strong>Start with Clear Value:</strong> Define the specific utilities and benefits that your NFTs
                      will provide to holders.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-orange-500/10 text-orange-500">2</div>
                    <div>
                      <strong>Build for Longevity:</strong> Design utilities that provide ongoing value, not just
                      one-time benefits.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-orange-500/10 text-orange-500">3</div>
                    <div>
                      <strong>Leverage Smart Contracts:</strong> Use smart contracts to automate the delivery of
                      utilities and ensure transparency.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-orange-500/10 text-orange-500">4</div>
                    <div>
                      <strong>Create Tiers:</strong> Offer different levels of utilities based on rarity or price point
                      to cater to different segments of your audience.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-orange-500/10 text-orange-500">5</div>
                    <div>
                      <strong>Integrate with Physical World:</strong> Connect digital NFT utilities with real-world
                      experiences and benefits.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">The Future of NFT Utilities</h3>
                <p className="text-muted-foreground">
                  As the NFT space matures, we're seeing a shift from purely speculative collectibles to utility-focused
                  NFTs that provide tangible value. This trend is likely to continue as more industries recognize the
                  potential of NFTs to solve real-world problems and create new opportunities.
                </p>
                <p className="text-muted-foreground">
                  The integration of NFT utilities with emerging technologies like augmented reality, virtual reality,
                  and the metaverse will create even more innovative applications and use cases. We can expect to see
                  NFTs become an integral part of how we experience events, join communities, and access exclusive
                  content and experiences.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Unlock the Power of NFT Utilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Transform your events and build stronger communities with NFTs that provide real value and utility to your
              audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/technology">Explore Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
