"use client"
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  function handleLogout() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("isAdmin")
      router.push("/admin/login")
    }
  }
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
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