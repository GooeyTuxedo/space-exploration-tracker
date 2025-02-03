import { LearnTopics } from "./LearnTopics"

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Learn About Space Exploration</h1>
      <p className="text-lg mb-8">
        Discover fascinating topics about space, celestial bodies, and human exploration of the cosmos.
      </p>
      <LearnTopics />
    </div>
  )
}

