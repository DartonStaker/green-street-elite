"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminDashboard() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="space-y-4">
        <Link href="/admin/blog" className="block p-4 bg-gray-100 rounded hover:bg-gray-200">Manage Blog Posts</Link>
        <Link href="/admin/comments" className="block p-4 bg-gray-100 rounded hover:bg-gray-200">Manage Comments</Link>
      </div>
    </div>
  )
} 