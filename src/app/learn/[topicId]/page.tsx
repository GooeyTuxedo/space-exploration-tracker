import { notFound } from "next/navigation"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ContentSection {
  title: string,
  content: string
}

interface Topic {
  id: string
  title: string
  description: string
  tags: string[]
  content: { sections: ContentSection[] }
}

const topics: Topic[] = [
  {
    id: "solar-system",
    title: "Our Solar System",
    description: "Explore the planets, moons, asteroids, and comets that orbit our Sun.",
    tags: ["Planets", "Astronomy", "Solar System"],
    content: {
      sections: [
        {
          title: 'Overview',
          content: 'Our Solar System consists of the Sun and everything bound to it by gravity. It formed about 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud.'
        },
        {
          title: 'Inner Planets',
          content: 'The four inner planets (Mercury, Venus, Earth, and Mars) are terrestrial planets primarily composed of rock and metal. They are smaller and denser than the outer planets.'
        },
        {
          title: 'Outer Planets',
          content: 'The outer planets include two gas giants (Jupiter and Saturn) composed mainly of hydrogen and helium, and two ice giants (Uranus and Neptune) composed mostly of volatiles like water, ammonia, and methane.'
        },
        {
          title: 'Other Objects',
          content: 'The Solar System includes dwarf planets like Pluto, dozens of moons, and millions of asteroids, comets, and meteoroids. Most of the system&apos;s mass is in the Sun, with Jupiter containing the majority of the remaining mass.'
        }
      ]
    }
  },
  {
    id: "space-exploration",
    title: "History of Space Exploration",
    description: "Learn about the major milestones in humanity's journey to the stars.",
    tags: ["History", "Missions", "Technology"],
    content: {
      sections: [
        {
          title: 'Early Foundations (1940s-1950s)',
          content: 'The foundations of space exploration were laid in the aftermath of World War II, when German V-2 rocket technology sparked a new era of possibilities. Both the United States and Soviet Union recognized the potential of space exploration, leading to the development of more sophisticated rockets and the establishment of their space programs.'
        },
        {
          title: 'The Space Race (1957-1969)',
          content: 'The launch of Sputnik 1 by the Soviet Union in 1957 marked the beginning of the Space Race. Key milestones included Yuri Gagarin becoming the first human in space (1961), John Glenn completing the first American orbital flight (1962), the first spacewalk by Alexei Leonov (1965), and the Apollo 11 Moon landing (1969).'
        },
        {
          title: 'The Space Shuttle Era (1981-2011)',
          content: "NASA's Space Shuttle program revolutionized space travel by introducing the first reusable spacecraft. Over 30 years, the shuttle fleet conducted 135 missions, deploying satellites, conducting scientific research, and helping construct the International Space Station."
        },
        {
          title: 'The Commercial Space Age',
          content: 'Private companies like SpaceX, Blue Origin, and Virgin Galactic have transformed space exploration in the 21st century with innovations such as reusable rockets, reduced launch costs, and space tourism possibilities.'
        }
      ]

    }
  },
  {
    id: "astronaut-life",
    title: "Life as an Astronaut",
    description: "Discover what it's like to live and work in space.",
    tags: ["ISS", "Microgravity", "Human Spaceflight"],
    content: {
      sections: [
        {
          title: 'Training and Preparation',
          content: 'Becoming an astronaut requires years of intensive preparation including underwater spacewalk practice, high-G force exposure, zero-gravity flight experience, language training, and emergency procedure rehearsals.'
        },
        {
          title: 'Daily Life on the ISS',
          content: 'Astronauts follow a structured routine including scientific research, station maintenance, two hours of mandatory exercise, and adapting to microgravity challenges in eating, sleeping, and personal hygiene.'
        },
        {
          title: 'Physical Effects',
          content: 'Extended spaceflight impacts the body through bone density loss, muscle atrophy, fluid shifts, vision changes, weakened immune system, and increased radiation exposure.'
        },
        {
          title: 'Psychological Challenges',
          content: 'Astronauts face unique psychological demands including limited personal space, separation from family, confined quarters, disrupted sleep cycles, and constant awareness of danger.'
        }
      ]
    }
  },
  {
    id: "black-holes",
    title: "Black Holes",
    description: "Unravel the mysteries of these cosmic phenomena.",
    tags: ["Astrophysics", "Gravity", "Space-Time"],
    content: {
      sections: [
        {
          title: 'Structure',
          content: 'Black holes consist of an event horizon (point of no return), singularity (infinite density center), accretion disk (swirling material), and jets (powerful radiation beams).'
        },
        {
          title: 'Types',
          content: 'Types include stellar black holes (3-65 solar masses), supermassive black holes (millions to billions of solar masses), intermediate, and theoretical primordial black holes.'
        },
        {
          title: 'Recent Discoveries',
          content: 'Major achievements include the first black hole image (M87*) in 2019, gravitational wave detection from mergers, and confirmation of Sagittarius A* at our galaxy&apos;s center.'
        },
        {
          title: 'Space-Time Effects',
          content: 'Black holes create time dilation near the event horizon, frame dragging from rotation, gravitational lensing, and theoretical Hawking radiation.'
        }
      ]
    }
  },
  {
    id: "exoplanets",
    title: "Exoplanets",
    description: "Explore planets beyond our solar system and the search for habitable worlds.",
    tags: ["Astronomy", "Planetary Science", "Astrobiology"],
    content: {
      sections: [
        {
          title: 'Detection Methods',
          content: 'Scientists discover exoplanets through transit method (starlight dips), radial velocity (star wobble), direct imaging, and microlensing (gravitational effects).'
        },
        {
          title: 'Types',
          content: 'Common types include hot Jupiters, super-Earths, mini-Neptunes, and Earth-like planets in habitable zones.'
        },
        {
          title: 'Notable Discoveries',
          content: 'Key findings include the TRAPPIST-1 system (seven Earth-sized planets), Proxima Centauri b (closest potentially habitable), and K2-18b (water vapor detected).'
        },
        {
          title: 'Search for Life',
          content: 'Research focuses on biosignature detection, habitable zone planets, liquid water potential, and atmospheric composition analysis.'
        }
      ]
    }
  },
  {
    id: "space-telescopes",
    title: "Space Telescopes",
    description: "Learn about the powerful instruments we use to observe the universe.",
    tags: ["Technology", "Astronomy", "Hubble", "James Webb"],
    content: {
      sections: [
        {
          title: 'Major Space Telescopes',
          content: 'Key telescopes include Hubble (1990, visible light), Chandra (1999, X-ray), Spitzer (2003-2020, infrared), and James Webb (2021, largest infrared telescope).'
        },
        {
          title: 'Key Capabilities',
          content: 'Space telescopes enable multi-wavelength observations, superior image quality, deep field observations, and spectroscopic analysis.'
        },
        {
          title: 'Scientific Achievements',
          content: 'Discoveries include dark energy, exoplanet atmospheres, galaxy formation insights, universe age measurement, and black hole observations.'
        },
        {
          title: 'Future Telescopes',
          content: 'Upcoming missions include the Nancy Grace Roman Space Telescope, LISA for gravitational wave detection, and the European PLATO mission.'
        }
      ]
    }
  },
]

export default function TopicPage({ params }: { params: { topicId: string } }) {
  const topic = topics.find((t) => t.id === params.topicId)

  if (!topic) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{topic.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
        <div className="space-y-6">
          {topic.content.sections.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
        </CardContent>
      </Card>
    </div>
  )
}
