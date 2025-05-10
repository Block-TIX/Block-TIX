"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, CreditCard, Wallet, Check, ArrowRight, Shield, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  ticket: {
    name: string
    price: string
    eventName: string
    eventDate: string
    eventLocation: string
  }
}

export function CheckoutModal({ isOpen, onClose, ticket }: CheckoutModalProps) {
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)

      // Auto close after completion
      setTimeout(() => {
        onClose()
        setStep(1)
        setIsComplete(false)
      }, 3000)
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <Card
        className="w-full max-w-md bg-background border border-orange-500/20 rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader className="relative border-b border-orange-500/20">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
          <CardTitle className="text-xl font-bold">{isComplete ? "Purchase Complete!" : "Checkout"}</CardTitle>
          <CardDescription>
            {isComplete ? "Your ticket has been minted as an NFT" : `${ticket.eventName} - ${ticket.name}`}
          </CardDescription>
        </CardHeader>

        {isComplete ? (
          <CardContent className="pt-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Thank you for your purchase!</h3>
            <p className="text-muted-foreground mb-4">
              Your ticket has been added to your wallet and is available in your tickets section.
            </p>
            <div className="flex items-center gap-2 text-xs text-green-500 mb-4">
              <Shield size={14} />
              <span>Verified on Solana blockchain</span>
            </div>
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
            >
              View My Tickets
            </Button>
          </CardContent>
        ) : (
          <>
            <CardContent className="pt-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div>
                      <h3 className="font-medium">{ticket.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ticket.eventDate} • {ticket.eventLocation}
                      </p>
                    </div>
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                      {ticket.price}
                    </span>
                  </div>

                  <Tabs defaultValue="crypto" className="w-full">
                    <TabsList className="grid grid-cols-2 rounded-full bg-muted/50">
                      <TabsTrigger
                        value="crypto"
                        className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                      >
                        <Wallet className="h-4 w-4 mr-2" />
                        Crypto
                      </TabsTrigger>
                      <TabsTrigger
                        value="card"
                        className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Card
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="crypto" className="mt-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden">
                          <Image src="/solana-logo.png" alt="Solana" width={40} height={40} />
                        </div>
                        <div>
                          <h3 className="font-medium">Pay with Solana</h3>
                          <p className="text-sm text-muted-foreground">Connect your wallet to continue</p>
                        </div>
                      </div>

                      <Button
                        onClick={() => setStep(2)}
                        className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
                      >
                        Connect Wallet
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </TabsContent>

                    <TabsContent value="card" className="mt-4 space-y-4">
                      <form
                        onSubmit={(e) => {
                          e.preventDefault()
                          setStep(2)
                        }}
                      >
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Name on card</Label>
                            <Input id="name" placeholder="John Smith" required />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="number">Card number</Label>
                            <Input id="number" placeholder="4242 4242 4242 4242" required />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="expiry">Expiry date</Label>
                              <Input id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="cvc">CVC</Label>
                              <Input id="cvc" placeholder="123" required />
                            </div>
                          </div>

                          <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
                          >
                            Continue to Checkout
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                    <div>
                      <h3 className="font-medium">{ticket.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {ticket.eventDate} • {ticket.eventLocation}
                      </p>
                    </div>
                    <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
                      {ticket.price}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="As shown on your ID" required />
                    </div>

                    <div className="flex items-start mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <Info className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-yellow-500">Important Information</p>
                        <p className="text-muted-foreground">
                          Your ticket will be minted as an NFT and delivered to your connected wallet. The name provided
                          must match your ID for venue entry.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-orange-500/20">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 rounded-full"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Complete Purchase
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>

            <CardFooter className="flex justify-between border-t border-orange-500/20 pt-4">
              {step === 2 && (
                <Button
                  variant="ghost"
                  onClick={() => setStep(1)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Back
                </Button>
              )}
              <div className="flex items-center gap-2 text-xs text-muted-foreground ml-auto">
                <Shield size={14} />
                <span>Secure checkout</span>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}
