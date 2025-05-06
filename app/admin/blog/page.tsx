"use client"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"

export default function AdminBlog() {
  const router = useRouter()
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [open, setOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editSha, setEditSha] = useState<string | undefined>(undefined)
  const [editFilename, setEditFilename] = useState<string>("")
  const [form, setForm] = useState({ title: "", date: "", cover: "", content: "" })
  const [submitting, setSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login")
    }
  }, [router])

  async function fetchPosts() {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/admin/blog")
      const data = await res.json()
      setPosts(data)
    } catch (err) {
      setError("Failed to load blog posts.")
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleOpen = () => {
    setForm({ title: "", date: new Date().toISOString().slice(0, 10), cover: "", content: "" })
    setEditMode(false)
    setEditSha(undefined)
    setEditFilename("")
    setOpen(true)
  }

  const handleEdit = async (post: any) => {
    setEditMode(true)
    setEditFilename(post.name)
    setEditSha(post.sha)
    setOpen(true)
    try {
      const res = await fetch(`/api/admin/blog?filename=${encodeURIComponent(post.name)}`)
      const data = await res.json()
      const content = Buffer.from(data.content, "base64").toString()
      const match = content.match(/---([\s\S]*?)---([\s\S]*)/)
      if (match) {
        const frontmatter = match[1]
        const body = match[2].trim()
        const title = frontmatter.match(/title:\s*"([^"]*)"/)?.[1] || ""
        const date = frontmatter.match(/date:\s*"([^"]*)"/)?.[1] || ""
        const cover = frontmatter.match(/cover:\s*"([^"]*)"/)?.[1] || ""
        setForm({ title, date, cover, content: body })
      }
    } catch (err) {
      alert("Failed to load post for editing.")
      setOpen(false)
    }
  }

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleImageUpload = async (e: any) => {
    const file = e.target.files[0]
    if (!file) return
    const formData = new FormData()
    formData.append("file", file)
    // Use a local API route to handle the upload
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
    const data = await res.json()
    if (data.url) {
      setForm(f => ({ ...f, content: f.content + `\n![${file.name}](${data.url})\n` }))
    }
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setSubmitting(true)
    const filename = editMode ? editFilename : `${form.title.toLowerCase().replace(/\s+/g, "-")}.md`
    const md = `---\ntitle: "${form.title}"\ndate: "${form.date}"\ncover: "${form.cover}"\n---\n\n${form.content}\n`
    try {
      if (editMode) {
        await fetch("/api/admin/blog", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename, content: md, sha: editSha }),
        })
      } else {
        await fetch("/api/admin/blog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename, content: md }),
        })
      }
      setOpen(false)
      fetchPosts()
    } catch (err) {
      alert("Failed to save post.")
    }
    setSubmitting(false)
  }

  const handleDelete = async (post: any) => {
    if (!window.confirm(`Delete post '${post.name}'?`)) return
    try {
      await fetch("/api/admin/blog", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: post.name, sha: post.sha }),
      })
      fetchPosts()
    } catch (err) {
      alert("Failed to delete post.")
    }
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Blog Post Management</h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4 bg-green-600 text-white" onClick={handleOpen}>+ New Post</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editMode ? "Edit Blog Post" : "New Blog Post"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={form.title} onChange={handleChange} required disabled={editMode} />
            </div>
            <div>
              <FormLabel>Date</FormLabel>
              <Input name="date" type="date" value={form.date} onChange={handleChange} required />
            </div>
            <div>
              <FormLabel>Cover Image Path</FormLabel>
              <Input name="cover" value={form.cover} onChange={handleChange} placeholder="/uploads/your-image.jpg" />
            </div>
            <div>
              <FormLabel>Content</FormLabel>
              <Textarea name="content" value={form.content} onChange={handleChange} rows={8} required />
            </div>
            <div>
              <FormLabel>Upload Image</FormLabel>
              <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageUpload} />
            </div>
            <div>
              <FormLabel>Markdown Preview</FormLabel>
              <div className="border rounded p-2 bg-gray-50 min-h-[100px]">
                <ReactMarkdown>{form.content}</ReactMarkdown>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" disabled={submitting}>{submitting ? "Saving..." : editMode ? "Save Changes" : "Save Post"}</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Filename</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.name}>
                <td className="border px-2 py-1">{post.name}</td>
                <td className="border px-2 py-1">
                  <button className="mr-2 text-blue-600" onClick={() => handleEdit(post)}>Edit</button>
                  <button className="text-red-600" onClick={() => handleDelete(post)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
