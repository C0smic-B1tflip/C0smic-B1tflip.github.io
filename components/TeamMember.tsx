import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface TeamMemberProps {
  name: string
  description: string
  tags: string[] // Changed from tag to tags (array)
  imageUrl: string
}

export default function TeamMember({ name, description, tags, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-purple-800 bg-opacity-70 rounded-lg p-4 flex flex-col items-center w-[200px]">
      <Image src={imageUrl || "/placeholder.svg"} alt={name} width={100} height={100} className="rounded-full mb-2" />
      <h2 className="text-lg font-bold mb-1">{name}</h2>
      <div className="flex flex-wrap justify-center gap-1 mb-2">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary" className="bg-purple-600 bg-opacity-80 text-white text-xs">
            {tag}
          </Badge>
        ))}
      </div>
      <p className="text-sm text-center">{description}</p>
    </div>
  )
}
