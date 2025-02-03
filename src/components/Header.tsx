import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Space Explorer
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/missions">Missions</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/learn">Learn</Link>
            </li>
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  )
}
