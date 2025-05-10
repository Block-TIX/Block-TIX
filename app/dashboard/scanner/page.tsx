"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Camera, Check, Clock, QrCode, RefreshCw, Ticket, User, X } from "lucide-react"

export default function ScannerApp() {
  const [activeTab, setActiveTab] = useState("scanner")
  const [scanning, setScanning] = useState(false)
  const [cameraPermission, setCameraPermission] = useState(false)
  const [scanResult, setScanResult] = useState(null)
  const [showScanResult, setShowScanResult] = useState(false)
  const [scanHistory, setScanHistory] = useState([
    {
      id: "TIX-SOL-1234",
      event: "Solana Breakpoint",
      ticketType: "VIP Access",
      holder: "0x7a23...3d4f",
      timestamp: "2025-05-09T14:30:22Z",
      status: "valid",
    },
    {
      id: "TIX-SOL-5678",
      event: "Solana Breakpoint",
      ticketType: "General Admission",
      holder: "0x3f9e...2a1b",
      timestamp: "2025-05-09T14:15:45Z",
      status: "valid",
    },
    {
      id: "TIX-SOL-9012",
      event: "Solana Breakpoint",
      ticketType: "Early Bird",
      holder: "0x5d2c...8f7e",
      timestamp: "2025-05-09T13:55:10Z",
      status: "invalid",
      reason: "Already used",
    },
  ])

  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  // Mock function to simulate scanning a QR code
  const simulateScan = () => {
    setScanning(true)

    // Simulate processing time
    setTimeout(() => {
      setScanning(false)

      // Generate random result (valid or invalid)
      const isValid = Math.random() > 0.3

      const result = {
        id: `TIX-SOL-${Math.floor(1000 + Math.random() * 9000)}`,
        event: "Solana Breakpoint",
        ticketType: ["VIP Access", "General Admission", "Early Bird"][Math.floor(Math.random() * 3)],
        holder: `0x${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`,
        timestamp: new Date().toISOString(),
        status: isValid ? "valid" : "invalid",
        reason: isValid ? null : ["Already used", "Invalid signature", "Expired"][Math.floor(Math.random() * 3)],
      }

      setScanResult(result)
      setShowScanResult(true)

      // Add to scan history
      setScanHistory((prev) => [result, ...prev])
    }, 1500)
  }

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: "environment",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      }

      // Special handling for iOS
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
      if (isIOS) {
        constraints.video.facingMode = { exact: "environment" }
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play().catch((err) => console.error("Error playing video:", err))
        setCameraPermission(true)
        setScanning(true)
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      setCameraPermission(false)
    }
  }

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setScanning(false)
    }
  }

  useEffect(() => {
    // Check if we're on a mobile device and auto-request camera
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    if (isMobile && activeTab === "scanner") {
      startCamera()
    }

    return () => {
      stopCamera()
    }
  }, [activeTab])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ticket Scanner</h1>
        <p className="text-muted-foreground">Scan and validate event tickets</p>
      </div>

      <Tabs defaultValue="scanner" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-[400px] rounded-full bg-muted/50 backdrop-blur-sm">
          <TabsTrigger
            value="scanner"
            className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            Scanner
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            Scan History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="scanner" className="space-y-4">
          <Card className="overflow-hidden w-full">
            <CardHeader>
              <CardTitle>Scan Ticket QR Code</CardTitle>
              <CardDescription>Point your camera at a ticket QR code to validate</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] sm:aspect-video bg-black">
                {cameraPermission ? (
                  <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover"></video>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                    <div className="text-center space-y-4">
                      <Camera className="h-16 w-16 mx-auto text-muted-foreground" />
                      <div>
                        <h3 className="text-lg font-medium">Camera Access Required</h3>
                        <p className="text-sm text-muted-foreground">Please allow camera access to scan tickets</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scanning overlay */}
                {scanning && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                      {/* Scanning corners */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500"></div>
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500"></div>
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500"></div>

                      {/* Scanning line animation */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 animate-scan"></div>
                    </div>
                  </div>
                )}

                <canvas ref={canvasRef} className="hidden"></canvas>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-6">
              {!cameraPermission ? (
                <Button className="w-full text-base py-6" onClick={startCamera}>
                  <Camera className="mr-2 h-5 w-5" /> Enable Camera
                </Button>
              ) : (
                <>
                  {scanning ? (
                    <Button variant="outline" className="w-full" onClick={() => setScanning(false)}>
                      <X className="mr-2 h-4 w-4" /> Stop Scanning
                    </Button>
                  ) : (
                    <Button className="w-full" onClick={() => setScanning(true)}>
                      <QrCode className="mr-2 h-4 w-4" /> Start Scanning
                    </Button>
                  )}
                </>
              )}
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Test Scanner</CardTitle>
              <CardDescription>Simulate scanning a ticket for testing purposes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={simulateScan} disabled={scanning}>
                {scanning ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Scanning...
                  </>
                ) : (
                  <>
                    <QrCode className="mr-2 h-4 w-4" /> Simulate Scan
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scan History</CardTitle>
              <CardDescription>Recent ticket scans and their results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {scanHistory.length > 0 ? (
                scanHistory.map((scan, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div
                      className={`mt-0.5 p-2 rounded-full ${scan.status === "valid" ? "bg-green-100" : "bg-red-100"}`}
                    >
                      {scan.status === "valid" ? (
                        <Check className={`h-4 w-4 text-green-600`} />
                      ) : (
                        <X className={`h-4 w-4 text-red-600`} />
                      )}
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{scan.id}</p>
                        <Badge variant={scan.status === "valid" ? "default" : "destructive"}>
                          {scan.status === "valid" ? "Valid" : "Invalid"}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Ticket className="mr-1 h-3 w-3" />
                          {scan.event} - {scan.ticketType}
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-3 w-3" />
                          {scan.holder}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {new Date(scan.timestamp).toLocaleString()}
                        </div>
                        {scan.reason && <div className="text-red-500 mt-1">Reason: {scan.reason}</div>}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">No scan history available</div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Scan Result Dialog */}
      <Dialog open={showScanResult} onOpenChange={setShowScanResult}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Scan Result</DialogTitle>
            <DialogDescription>Ticket validation result</DialogDescription>
          </DialogHeader>

          {scanResult && (
            <div className="py-4">
              <Alert variant={scanResult.status === "valid" ? "default" : "destructive"} className="mb-4">
                <div className="flex items-center">
                  {scanResult.status === "valid" ? <Check className="h-4 w-4 mr-2" /> : <X className="h-4 w-4 mr-2" />}
                  <AlertTitle>{scanResult.status === "valid" ? "Valid Ticket" : "Invalid Ticket"}</AlertTitle>
                </div>
                <AlertDescription>
                  {scanResult.status === "valid"
                    ? "This ticket is valid and can be accepted."
                    : `This ticket cannot be accepted. Reason: ${scanResult.reason}`}
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Ticket ID</h4>
                  <p>{scanResult.id}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Event</h4>
                  <p>{scanResult.event}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Ticket Type</h4>
                  <p>{scanResult.ticketType}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Ticket Holder</h4>
                  <p>{scanResult.holder}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Scan Time</h4>
                  <p>{new Date(scanResult.timestamp).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button onClick={() => setShowScanResult(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        @keyframes scan {
          0% {
            top: 0;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0;
          }
        }
        
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </div>
  )
}
