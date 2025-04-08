import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Galactic CTF Challenge</h1>
          <p className="text-xl text-center mb-12">Explore the cosmos of cybersecurity!</p>
          <div className="flex justify-center">
            <Link href="/team">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                opacity: Math.random(),
                animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
