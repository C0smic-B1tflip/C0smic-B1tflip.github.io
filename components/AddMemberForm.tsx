"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AddMemberForm() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [tag, setTag] = useState("")
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ name, description, tag, image })
    // Reset form
    setName("")
    setDescription("")
    setTag("")
    setImage(null)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-purple-800 rounded-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Team Member</h2>
      <div className="space-y-4">
        <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <Textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Select onValueChange={setTag} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rev">Rev</SelectItem>
            <SelectItem value="pwn">Pwn</SelectItem>
            <SelectItem value="crypto">Crypto</SelectItem>
            <SelectItem value="web">Web</SelectItem>
            <SelectItem value="forensics">Forensics</SelectItem>
            <SelectItem value="misc">Misc</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          required
        />
        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
          Add Member
        </Button>
      </div>
    </form>
  )
}
