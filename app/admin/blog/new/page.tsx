"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ImageIcon, Save } from "lucide-react"

export default function NewBlogPostPage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    featuredImage: null as File | null,
    status: "draft",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, featuredImage: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your API
    console.log("Form submitted:", formData)
    alert("Post saved successfully!")
    // Redirect or clear form
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" size="sm" className="gap-1">
          <Link href="/admin/blog">
            <ChevronLeft className="h-4 w-4" />
            Back to Blog Management
          </Link>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader>
              <CardTitle>Create New Blog Post</CardTitle>
              <CardDescription>Create and publish a new blog post for Green Street Elite</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter post title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tournaments">Tournaments</SelectItem>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="tours">Tours</SelectItem>
                      <SelectItem value="player-spotlight">Player Spotlight</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="season-review">Season Review</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleSelectChange("status", value)}>
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="featuredImage">Featured Image</Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("featuredImage")?.click()}
                    className="gap-2"
                  >
                    <ImageIcon className="h-4 w-4" />
                    {formData.featuredImage ? "Change Image" : "Upload Image"}
                  </Button>
                  {formData.featuredImage && (
                    <span className="text-sm text-muted-foreground">{formData.featuredImage.name}</span>
                  )}
                  <input
                    id="featuredImage"
                    name="featuredImage"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Write your blog post content here..."
                  value={formData.content}
                  onChange={handleInputChange}
                  className="min-h-[300px]"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  You can use HTML tags for formatting. For example, &lt;h2&gt; for headings, &lt;p&gt; for paragraphs,
                  &lt;ul&gt; and &lt;li&gt; for lists.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/admin/blog">Cancel</Link>
              </Button>
              <div className="flex gap-2">
                <Button type="submit" variant="outline">
                  Save as Draft
                </Button>
                <Button type="submit" className="gap-2">
                  <Save className="h-4 w-4" />
                  Publish
                </Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  )
}
