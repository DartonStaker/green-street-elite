"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminComments() {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("isAdmin") !== "true") {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">Comments Management</h1>
      <p>Comments management will be available here soon. We recommend using Giscus for free, GitHub-powered comments.</p>
    </div>
  )
} 