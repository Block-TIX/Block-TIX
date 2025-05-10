"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface YouTubeBackgroundProps {
  videoId: string
  fallbackImageUrl?: string
}

export function YouTubeBackground({ videoId, fallbackImageUrl }: YouTubeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasError, setHasError] = useState(false)
  const [playerId] = useState(`youtube-player-${Math.random().toString(36).substring(2, 9)}`)
  const playerInstanceRef = useRef<any>(null)

  useEffect(() => {
    let isMounted = true
    let timeoutId: NodeJS.Timeout

    const initializePlayer = () => {
      if (!isMounted) return

      if (window.YT && window.YT.Player) {
        try {
          if (playerInstanceRef.current) {
            playerInstanceRef.current.destroy()
          }

          playerInstanceRef.current = new window.YT.Player(playerId, {
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              mute: 1,
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              loop: 1,
              playlist: videoId,
              fs: 0,
              cc_load_policy: 0,
              iv_load_policy: 3,
              autohide: 0,
              rel: 0,
              playsinline: 1,
              origin: window.location.origin,
            },
            events: {
              onReady: (event) => {
                if (!isMounted) return
                event.target.mute()
                event.target.playVideo()
                event.target.setPlaybackQuality("hd1080")

                // Force play again after a short delay to handle mobile restrictions
                setTimeout(() => {
                  if (isMounted && event.target && event.target.getPlayerState() !== 1) {
                    event.target.playVideo()
                  }
                }, 100)
              },
              onError: () => {
                if (!isMounted) return
                setHasError(true)
              },
              onStateChange: (event) => {
                // If video ends (state 0), replay it
                if (event.data === 0) {
                  event.target.playVideo()
                }
              },
            },
          })
        } catch (error) {
          console.error("Error initializing YouTube player:", error)
          if (isMounted) setHasError(true)
        }
      } else {
        // If YT is not available yet, try again in 100ms
        timeoutId = setTimeout(initializePlayer, 100)
      }
    }

    const loadYouTubeAPI = () => {
      // Only load the API if it's not already loaded
      if (!window.YT) {
        const tag = document.createElement("script")
        tag.src = "https://www.youtube.com/iframe_api"
        tag.onload = initializePlayer
        tag.onerror = () => {
          if (isMounted) setHasError(true)
        }

        const firstScriptTag = document.getElementsByTagName("script")[0]
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)

        // Set a timeout to show fallback if YouTube API doesn't load in 5 seconds
        timeoutId = setTimeout(() => {
          if (!window.YT && isMounted) setHasError(true)
        }, 5000)
      } else {
        initializePlayer()
      }
    }

    // Handle YouTube API callback
    if (!window.onYouTubeIframeAPIReady) {
      window.onYouTubeIframeAPIReady = initializePlayer
    }

    loadYouTubeAPI()

    // Clean up function
    return () => {
      isMounted = false
      clearTimeout(timeoutId)

      // Don't destroy the player on unmount, as it causes issues with Next.js page transitions
      // Instead, we'll create a new player instance when the component remounts
    }
  }, [videoId, playerId])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {hasError && fallbackImageUrl ? (
        <div className="absolute inset-0">
          <Image
            src={fallbackImageUrl || "/placeholder.svg"}
            alt="Video fallback"
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : (
        <div
          ref={containerRef}
          className="absolute inset-0"
          style={{
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <div
            id={playerId}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "150vw" /* Increased width to ensure full coverage */,
              height: "150vh" /* Increased height to ensure full coverage */,
              transform: "translate(-50%, -50%)",
              border: "none",
            }}
          ></div>
        </div>
      )}
    </div>
  )
}
