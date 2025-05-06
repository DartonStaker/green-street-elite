import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Mock gallery data
const galleryItems = {
  matches: [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Match against local rivals",
      caption: "Victory against local rivals - March 2025",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Tournament final",
      caption: "Tournament final celebration - February 2025",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Away game",
      caption: "Away game in Cape Town - January 2025",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team huddle",
      caption: "Team huddle before the big match - December 2024",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Victory celebration",
      caption: "Victory celebration after championship win - November 2024",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Penalty kick",
      caption: "Decisive penalty kick - October 2024",
    },
  ],
  training: [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Youth training session",
      caption: "Youth training session - April 2025",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Fitness drills",
      caption: "Fitness drills at morning practice - March 2025",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Skills workshop",
      caption: "Skills workshop with guest coach - February 2025",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Goalkeeper training",
      caption: "Specialized goalkeeper training - January 2025",
    },
  ],
  events: [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Community outreach",
      caption: "Community outreach program - April 2025",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Annual awards ceremony",
      caption: "Annual awards ceremony - December 2024",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Fundraising event",
      caption: "Fundraising event for UK Tour - March 2025",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Team building retreat",
      caption: "Team building retreat - February 2025",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      alt: "Youth camp",
      caption: "Summer youth camp - January 2025",
    },
  ],
  videos: [
    {
      id: 1,
      type: "video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Match Highlights: GSE vs. Rivals",
      duration: "5:24",
    },
    {
      id: 2,
      type: "video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Training Session Breakdown",
      duration: "8:15",
    },
    {
      id: 3,
      type: "video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Coach Interview: Season Preview",
      duration: "12:07",
    },
    {
      id: 4,
      type: "video",
      thumbnail: "/placeholder.svg?height=400&width=600",
      title: "Player Spotlight: Team Captain",
      duration: "7:32",
    },
  ],
}

export default function GalleryPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <p className="text-muted-foreground max-w-3xl">
          Browse photos and videos from Green Street Elite matches, training sessions, and community events.
        </p>
      </div>

      <Tabs defaultValue="matches" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="matches">Matches</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="matches">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.matches.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm">{item.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="training">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.training.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm">{item.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.events.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm">{item.caption}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.videos.map((video) => (
              <Card key={video.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video group">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium">{video.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
