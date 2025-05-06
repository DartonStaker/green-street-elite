import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, MessageSquare, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "GSE Team Achieves Victory in Local Tournament",
    excerpt:
      "The Green Street Elite team demonstrated exceptional skill and teamwork in the recent local tournament, securing a well-deserved victory against strong competition...",
    date: "May 1, 2025",
    comments: 12,
    category: "Tournaments",
  },
  {
    id: 2,
    title: "New Training Program Launched for Youth Players",
    excerpt:
      "Green Street Elite is proud to announce the launch of a new comprehensive training program specifically designed for youth players, focusing on skill development and tactical awareness...",
    date: "April 22, 2025",
    comments: 8,
    category: "Training",
  },
  {
    id: 3,
    title: "Upcoming UK Tour: What to Expect",
    excerpt:
      "As we prepare for our exciting UK Tour, here's everything you need to know about the venues, teams we'll be facing, and how you can support us during this incredible journey...",
    date: "April 15, 2025",
    comments: 20,
    category: "Tours",
  },
  {
    id: 4,
    title: "Player Spotlight: Interview with Team Captain",
    excerpt:
      "In this exclusive interview, we sit down with our team captain to discuss leadership, team goals, and the journey that brought them to Green Street Elite...",
    date: "April 8, 2025",
    comments: 15,
    category: "Player Spotlight",
  },
  {
    id: 5,
    title: "Community Outreach: GSE Hosts Free Coaching Clinic",
    excerpt:
      "Green Street Elite recently hosted a free coaching clinic for underprivileged youth in Southern Johannesburg, providing quality football instruction and inspiration...",
    date: "March 30, 2025",
    comments: 6,
    category: "Community",
  },
  {
    id: 6,
    title: "Season Review: Highlights and Achievements",
    excerpt:
      "As we wrap up another successful season, we look back at the key moments, standout performances, and collective achievements that defined our year...",
    date: "March 22, 2025",
    comments: 10,
    category: "Season Review",
  },
]

export default function BlogPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Blog & News</h1>
        <p className="text-muted-foreground max-w-3xl">
          Stay updated with the latest news, match reports, and stories from Green Street Elite.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search articles..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All
          </Button>
          <Button variant="outline" size="sm">
            Tournaments
          </Button>
          <Button variant="outline" size="sm">
            Training
          </Button>
          <Button variant="outline" size="sm">
            Community
          </Button>
        </div>
      </div>

      {/* Featured Post */}
      <div className="mb-12">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Featured
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Upcoming UK Tour: What to Expect</h2>
              <p className="text-muted-foreground mb-4">
                As we prepare for our exciting UK Tour, here's everything you need to know about the venues, teams we'll
                be facing, and how you can support us during this incredible journey...
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>April 15, 2025</span>
                <span className="mx-2">•</span>
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>20 comments</span>
              </div>
              <Button asChild>
                <Link href="/blog/post-3">Read Full Article</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={`/placeholder.svg?height=300&width=500`} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>
              <CardTitle className="line-clamp-1">{post.title}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {post.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <MessageSquare className="h-4 w-4 mr-1" />
                {post.comments} comments
              </div>
              <Button asChild variant="ghost" size="sm">
                <Link href={`/blog/post-${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}
