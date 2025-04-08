import TeamMember from "@/components/TeamMember"

// This data would typically come from a database or API
const teamMembers = [
  {
    name: "Chara",
    description: "orz orz orz",
    tags: ["web", "rev", "forensics"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "nightxade",
    description: "orz ctfer",
    tags: ["crypto", "pwn"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "vy",
    description: "orz pwn",
    tags: ["pwn"],
    imageUrl: "/placeholder.svg?height=200&width=200",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white">
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">the team ⭐</h1>
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
