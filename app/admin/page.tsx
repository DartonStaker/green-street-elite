"use client"
import Link from "next/link"

export default function AdminHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      <div className="space-y-4">
        <Link href="/admin/blog" className="block p-4 bg-gray-100 rounded hover:bg-gray-200">Manage Blog Posts</Link>
        <Link href="/admin/comments" className="block p-4 bg-gray-100 rounded hover:bg-gray-200">Manage Comments</Link>
      </div>
    </div>
  )
} 