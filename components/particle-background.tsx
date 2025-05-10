"use client"

import { useCallback, useEffect, useState } from "react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import type { Engine, ISourceOptions } from "tsparticles-engine"

interface ParticleBackgroundProps {
  friendly?: boolean
}

export function ParticleBackground({ friendly = false }: ParticleBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const friendlyOptions: ISourceOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#f97316", "#ec4899", "#eab308"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#f97316",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.8,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
    background: {
      color: "transparent",
    },
  }

  const defaultOptions: ISourceOptions = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: ["#9333ea", "#3b82f6", "#ec4899"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#9333ea",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.8,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
    background: {
      color: "transparent",
    },
  }

  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      options={friendly ? friendlyOptions : defaultOptions}
      init={particlesInit}
      className="absolute inset-0"
    />
  )
}
