import TeamMember from "@/components/TeamMember"

// This data would typically come from a database or API
const teamMembers = [
  {
    name: "Cosmic Coder",
    description: "Master of the digital universe",
    tags: ["web", "crypto"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Binary Bender",
    description: "Twisting bits and bytes",
    tags: ["pwn", "rev"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Crypto Crusader",
    description: "Unraveling the secrets of the galaxy",
    tags: ["crypto"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Forensic Finder",
    description: "Uncovering digital evidence across the stars",
    tags: ["forensics", "misc"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Misc Maestro",
    description: "Jack of all trades in the security universe",
    tags: ["misc", "web", "pwn"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  // Add more team members as needed
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Our Galactic Team</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
