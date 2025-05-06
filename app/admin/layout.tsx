"use client"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAdmin, setIsAdmin] = useState(false)
  const [key, setKey] = useState(0) // force re-render key

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsAdmin(localStorage.getItem("isAdmin") === "true")
      // Listen for localStorage changes (e.g., login/logout in other tabs)
      const syncAuth = () => {
        setIsAdmin(localStorage.getItem("isAdmin") === "true")
        setKey(k => k + 1) // force re-render
      }
      window.addEventListener("storage", syncAuth)
      return () => window.removeEventListener("storage", syncAuth)
    }
  }, [])

  function handleLogout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isAdmin")
      setIsAdmin(false)
      setKey(k => k + 1) // force re-render
      router.push("/admin/login")
    }
  }

  // Always show only the centered login form on /admin/login
  if (pathname === "/admin/login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        {children}
      </div>
    )
  }

  if (!isAdmin) {
    // Center the login modal/page for any other admin route if not logged in
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        {children}
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen" key={key}>
        <Sidebar className="bg-gray-900 text-white w-64 flex-shrink-0 flex flex-col justify-between">
          <div>
            <div className="p-6 text-2xl font-bold border-b border-gray-800">Admin</div>
            <nav className="flex flex-col gap-2 p-4">
              <Link href="/admin/blog" className="py-2 px-4 rounded hover:bg-gray-800">Blog Posts</Link>
              <Link href="/admin/comments" className="py-2 px-4 rounded hover:bg-gray-800">Comments</Link>
            </nav>
          </div>
          <div className="p-4 border-t border-gray-800">
            <Button className="w-full bg-red-600 hover:bg-red-700" onClick={handleLogout}>Logout</Button>
          </div>
        </Sidebar>
        <main className="flex-1 bg-white dark:bg-gray-950 p-8 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  )
} 