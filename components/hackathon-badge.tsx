import Image from "next/image"
import { Star } from "lucide-react"

export function HackathonBadge() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-background">
          <Image
            src="/professional-woman-headshot.png"
            alt="Team member"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-background">
          <Image src="/casual-man-headshot.png" alt="Team member" width={32} height={32} className="object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-background">
          <Image src="/tech-ceo-headshot.png" alt="Team member" width={32} height={32} className="object-cover" />
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-background">
          <Image
            src="/professional-woman-tech-leader.png"
            alt="Team member"
            width={32}
            height={32}
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex items-center gap-1 text-yellow-500">
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
      </div>
      <span className="text-sm md:text-base">Participating in Solana BreakOut Hackathon by Colosseum</span>
    </div>
  )
}
