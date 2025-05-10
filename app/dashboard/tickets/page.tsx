"use client"

import { useState } from "react"
import Image from "next/image"
import { TicketModal } from "@/components/ticket-modal"

export default function TicketsPage() {
  const [selectedTicket, setSelectedTicket] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Real events from our platform
  const tickets = [
    {
      id: "ticket-1",
      eventName: "Solana Breakpoint",
      date: "May 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Marina Bay Sands",
      ticketType: "VIP Access",
      ticketId: "SOL-BP-25-VIP-1337",
      imageSrc: "/images/events/solana-breakpoint.png",
    },
    {
      id: "ticket-2",
      eventName: "TOKEN2049 Singapore",
      date: "September 18, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Marina Bay Sands",
      ticketType: "VIP Access",
      ticketId: "T2049-SG-25-VIP-2468",
      imageSrc: "/images/events/token2049-singapore-2025.png",
    },
    {
      id: "ticket-3",
      eventName: "ETH Dublin",
      date: "March 12, 2025",
      time: "9:30 AM - 7:00 PM",
      location: "Convention Centre Dublin",
      ticketType: "VIP Access",
      ticketId: "ETH-DUB-25-VIP-9876",
      imageSrc: "/images/events/eth-dublin-2025.jpeg",
    },
  ]

  const openModal = (ticket: any) => {
    setSelectedTicket(ticket)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">My Tickets</h1>

      <div className="bg-black/50 backdrop-blur-md border border-gray-800 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-orange-500 transition-colors"
            >
              <div className="h-40 relative">
                <Image
                  src={ticket.imageSrc || "/placeholder.svg"}
                  alt={ticket.eventName}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-xl font-bold bg-black/40 px-4 py-1 rounded-full">
                    TICKET #{index + 1}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white">{ticket.eventName}</h3>
                <p className="text-sm text-gray-400">
                  {ticket.date} • {ticket.location}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs bg-orange-500/20 text-orange-500 px-2 py-1 rounded-full">
                    {ticket.ticketType}
                  </span>
                  <button
                    className="text-sm text-white bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-1 rounded-md"
                    onClick={() => openModal(ticket)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTicket && <TicketModal isOpen={isModalOpen} onClose={closeModal} ticket={selectedTicket} />}
    </div>
  )
}
