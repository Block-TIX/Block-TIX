import { Loader2 } from "lucide-react"

export default function CareersLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <Loader2 className="h-12 w-12 animate-spin text-orange-500" />
        <h2 className="mt-4 text-xl font-semibold text-white">Loading careers...</h2>
      </div>
    </div>
  )
}
