import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Space Exploration Tracker</h1>
      <p className="text-xl mb-8">
        Discover recent technical projects, track celestial events, and explore stunning images from space.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/projects">
          <Button className="w-full">Recent NASA Tech</Button>
        </Link>
        <Link href="/events">
          <Button className="w-full">Celestial Events</Button>
        </Link>
        <Link href="/gallery">
          <Button className="w-full">Space Gallery</Button>
        </Link>
        <Link href="/learn">
          <Button className="w-full">Learn About Space</Button>
        </Link>
      </div>
    </div>
  )
}
