import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, ChevronLeft, MessageSquare, Share2 } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "Upcoming UK Tour: What to Expect",
    date: "April 15, 2025",
    author: {
      name: "Coach Williams",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    content: `
      <p>We are thrilled to announce that Green Street Elite will be embarking on an exciting UK Tour this summer! This tour represents a significant milestone for our team and offers an incredible opportunity for our players to experience football at an international level.</p>
      
      <p>During this two-week tour, we will be visiting some of the most iconic football venues in England, including Wembley Stadium, and playing friendly matches against youth teams from West Ham United, Crystal Palace F.C., Nigel James Academy, Fulham F.C., and Chelsea F.C.</p>
      
      <h2>Tour Schedule</h2>
      
      <p>Our tour will begin on July 10th and conclude on July 24th. Here's a breakdown of our itinerary:</p>
      
      <ul>
        <li><strong>July 10-12:</strong> London - Training sessions and friendly match with West Ham United youth team</li>
        <li><strong>July 13-15:</strong> London - Visit to Wembley Stadium and match against Crystal Palace F.C. academy</li>
        <li><strong>July 16-18:</strong> Surrey - Training at Nigel James Academy and friendly matches</li>
        <li><strong>July 19-21:</strong> London - Matches against Fulham F.C. youth team</li>
        <li><strong>July 22-24:</strong> London - Final matches against Chelsea F.C. academy and return home</li>
      </ul>
      
      <h2>Player Development Focus</h2>
      
      <p>This tour isn't just about playing matches; it's about providing our players with a comprehensive football development experience. Players will benefit from:</p>
      
      <ul>
        <li>Training sessions led by professional coaches from Premier League clubs</li>
        <li>Tactical analysis and feedback from experienced scouts</li>
        <li>Cultural exchange with UK-based players</li>
        <li>Exposure to different playing styles and philosophies</li>
      </ul>
      
      <p>We believe this experience will significantly enhance our players' technical abilities, tactical understanding, and mental approach to the game.</p>
      
      <h2>How You Can Support</h2>
      
      <p>A tour of this magnitude requires significant support from our community. Here's how you can help make this dream a reality for our players:</p>
      
      <ul>
        <li><strong>Sponsorship:</strong> Local businesses can sponsor individual players or contribute to team expenses</li>
        <li><strong>Fundraising Events:</strong> Attend our upcoming fundraising events (details to be announced soon)</li>
        <li><strong>Donations:</strong> Direct donations of any amount are greatly appreciated</li>
        <li><strong>Spread the Word:</strong> Share our journey on social media and help us reach potential supporters</li>
      </ul>
      
      <p>We'll be documenting every step of our journey through regular blog updates, social media posts, and video content. Stay tuned for more information about our preparation and progress!</p>
      
      <p>This tour represents not just an athletic opportunity but a life-changing experience for many of our players. Your support can truly help turn dreams into reality.</p>
    `,
    comments: 20,
    category: "Tours",
  }

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" size="sm" className="gap-1">
            <Link href="/blog">
              <ChevronLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Post header */}
        <div className="mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>{post.comments} comments</span>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src="/images/uk-tour-banner.png" alt={post.title} fill className="object-cover" />
        </div>

        {/* Author info */}
        <div className="flex items-center gap-4 mb-8 p-4 border rounded-lg">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">Head Coach, Green Street Elite</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>

        {/* Post content */}
        <div
          className="prose prose-green dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Comments section placeholder */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Comments ({post.comments})</h2>
          <div className="space-y-6">
            {/* This would be replaced with actual comments in a real application */}
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="John Doe" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">April 16, 2025</p>
                </div>
              </div>
              <p>
                This is fantastic news! Can't wait to see our team play against these prestigious clubs. Will there be
                any livestreams of the matches for those who can't travel to the UK?
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-xs text-muted-foreground">April 16, 2025</p>
                </div>
              </div>
              <p>
                My son is so excited about this opportunity! We're already planning fundraising events in our
                neighborhood to help support the team. This is going to be an amazing experience for all the players.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
