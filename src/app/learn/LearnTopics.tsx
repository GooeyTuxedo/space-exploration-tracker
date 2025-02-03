import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface Topic {
  id: string
  title: string
  description: string
  tags: string[]
}

const topics: Topic[] = [
  {
    id: "solar-system",
    title: "Our Solar System",
    description: "Explore the planets, moons, asteroids, and comets that orbit our Sun.",
    tags: ["Planets", "Astronomy", "Solar System"],
  },
  {
    id: "space-exploration",
    title: "History of Space Exploration",
    description: "Learn about the major milestones in humanity's journey to the stars.",
    tags: ["History", "Missions", "Technology"],
  },
  {
    id: "astronaut-life",
    title: "Life as an Astronaut",
    description: "Discover what it's like to live and work in space.",
    tags: ["ISS", "Microgravity", "Human Spaceflight"],
  },
  {
    id: "black-holes",
    title: "Black Holes",
    description: "Unravel the mysteries of these cosmic phenomena.",
    tags: ["Astrophysics", "Gravity", "Space-Time"],
  },
  {
    id: "exoplanets",
    title: "Exoplanets",
    description: "Explore planets beyond our solar system and the search for habitable worlds.",
    tags: ["Astronomy", "Planetary Science", "Astrobiology"],
  },
  {
    id: "space-telescopes",
    title: "Space Telescopes",
    description: "Learn about the powerful instruments we use to observe the universe.",
    tags: ["Technology", "Astronomy", "Hubble", "James Webb"],
  },
]

export function LearnTopics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <Card key={topic.id}>
          <CardHeader>
            <CardTitle>{topic.title}</CardTitle>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {topic.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href={`/learn/${topic.id}`} className="text-blue-500 hover:underline">
              Learn more →
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
