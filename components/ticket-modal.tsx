"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, X, Clock, Ticket, Shield } from "lucide-react"

interface TicketModalProps {
  isOpen: boolean
  onClose: () => void
  ticket: {
    id: string
    eventName: string
    date: string
    time: string
    location: string
    ticketType: string
    ticketId: string
    imageSrc: string
  }
}

export function TicketModal({ isOpen, onClose, ticket }: TicketModalProps) {
  const [qrCode, setQrCode] = useState<string>("")

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Generate QR code data
  useEffect(() => {
    // In a real app, this would be a unique QR code from the backend
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${ticket.ticketId}`)
  }, [ticket.ticketId])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 relative">
          <button onClick={onClose} className="absolute right-4 top-4 text-white hover:opacity-80 transition-opacity">
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold text-white">{ticket.eventName}</h3>
        </div>

        {/* Event Details */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <Calendar className="text-orange-500" size={18} />
            <span className="text-gray-200">{ticket.date}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <Clock className="text-orange-500" size={18} />
            <span className="text-gray-200">{ticket.time}</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-orange-500" size={18} />
            <span className="text-gray-200">{ticket.location}</span>
          </div>
        </div>

        {/* Ticket Details */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Ticket className="text-orange-500" size={18} />
              <span className="text-gray-400">Ticket Type</span>
            </div>
            <span className="font-medium text-white">{ticket.ticketType}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="text-orange-500" size={18} />
              <span className="text-gray-400">Ticket ID</span>
            </div>
            <span className="font-medium text-white">{ticket.ticketId}</span>
          </div>
        </div>

        {/* QR Code */}
        <div className="p-6 flex flex-col items-center">
          <div className="bg-white p-3 rounded-lg mb-3">
            <img src={qrCode || "/placeholder.svg"} alt="Ticket QR Code" width={200} height={200} />
          </div>
          <p className="text-sm text-center text-gray-400">Present this QR code at the venue entrance</p>
          <div className="mt-4 flex items-center gap-2 text-xs text-green-400">
            <Shield size={14} />
            <span>Verified on Solana blockchain</span>
          </div>
        </div>
      </div>
    </div>
  )
}
