export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Space Exploration Tracker. All rights reserved.</p>
      </div>
    </footer>
  )
}
