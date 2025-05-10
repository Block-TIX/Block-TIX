import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export const metadata: Metadata = {
  title: "Ticketing Solutions | BlockTix",
  description:
    "Discover how BlockTix's blockchain ticketing solutions revolutionize event management with secure, transparent, and efficient ticketing systems.",
}

export default function TicketingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
                  Blockchain Ticketing Solutions
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl max-w-[600px]">
                  Revolutionize your event ticketing with blockchain technology. Secure, transparent, and efficient
                  ticketing solutions for events of all sizes.
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
                    <Link href="/events">Explore Events</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Image
                src="/images/blockchain-ticketing-3d.jpeg"
                alt="Blockchain Ticketing"
                width={600}
                height={600}
                className="object-contain rounded-lg shadow-lg"
                priority
              />
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
                <h2 className="text-3xl font-bold tracking-tighter">Blockchain Ticketing</h2>
                <p className="text-muted-foreground">
                  Blockchain ticketing is a revolutionary approach to event ticketing that leverages blockchain
                  technology to create secure, transparent, and efficient ticketing systems. By using blockchain, event
                  organizers can issue tickets as digital assets on a blockchain, providing a tamper-proof record of
                  ownership and transaction history.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Fraud Prevention:</strong> Blockchain ticketing eliminates counterfeit tickets and
                      unauthorized resales by creating a transparent and immutable record of ticket ownership.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Secure Transactions:</strong> Smart contracts ensure that ticket transactions are secure,
                      automated, and executed only when predefined conditions are met.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Transparent Resale Market:</strong> Blockchain enables a transparent secondary market
                      where tickets can be resold within parameters set by event organizers, preventing scalping and
                      ensuring fair prices.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Enhanced Fan Experience:</strong> Digital tickets can be easily transferred, stored, and
                      accessed via mobile devices, eliminating the need for physical tickets and reducing entry
                      bottlenecks.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-green-500/10 text-green-500">✓</div>
                    <div>
                      <strong>Data Insights:</strong> Blockchain ticketing provides valuable data on ticket sales,
                      transfers, and usage, helping organizers better understand their audience and improve future
                      events.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">How It Works</h3>
                <p className="text-muted-foreground">
                  Blockchain ticketing works by issuing tickets as digital assets (tokens) on a blockchain. Each ticket
                  has a unique identifier and is linked to the buyer's digital wallet. When a ticket is purchased,
                  transferred, or used, the transaction is recorded on the blockchain, creating a transparent and
                  immutable record of the ticket's history.
                </p>
                <p className="text-muted-foreground">
                  Smart contracts govern the rules for ticket sales, transfers, and usage, ensuring that transactions
                  comply with the event organizer's policies. For example, a smart contract can limit the resale price
                  of a ticket to prevent scalping or ensure that a percentage of resale profits goes back to the event
                  organizer.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">Use Cases</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Concerts and Music Festivals:</strong> Prevent counterfeit tickets and control resale
                      prices to ensure fair access for fans.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Sports Events:</strong> Create verifiable tickets that can't be duplicated, ensuring
                      stadium security and preventing revenue loss.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Conferences and Exhibitions:</strong> Streamline check-in processes and gather accurate
                      attendance data.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full p-1 bg-blue-500/10 text-blue-500">•</div>
                    <div>
                      <strong>Theater and Performing Arts:</strong> Protect against fraud and create new revenue streams
                      through programmable royalties on resales.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tighter">The Future of Ticketing</h3>
                <p className="text-muted-foreground">
                  Blockchain ticketing is poised to transform the event industry by addressing long-standing issues like
                  fraud, scalping, and lack of transparency. As blockchain technology continues to evolve and gain
                  mainstream adoption, we can expect to see more innovative features and use cases for blockchain
                  ticketing.
                </p>
                <p className="text-muted-foreground">
                  The integration of blockchain ticketing with other technologies like NFTs (Non-Fungible Tokens),
                  augmented reality, and artificial intelligence will create even more immersive and secure event
                  experiences for attendees.
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
              Ready to Transform Your Event Ticketing?
            </h2>
            <p className="text-muted-foreground text-lg max-w-[600px]">
              Join the blockchain revolution and provide your attendees with secure, transparent, and efficient
              ticketing experiences.
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
                <Link href="/technology">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
