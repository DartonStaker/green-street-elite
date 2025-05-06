import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ImageIcon, MessageSquare, Trophy, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero py-20 md:py-32 text-white">
        <div className="container text-center space-y-6">
          <div className="mx-auto mb-8">
            <Image
              src="/images/GSE-logo.png"
              alt="Green Street Elite Logo"
              width={150}
              height={150}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Green Street Elite</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-200">
            A community soccer team under Linhill Celtic Football Club
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/blog">Latest News</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Green Street Elite</h2>
              <p className="mb-4">
                Green Street Elite (GSE) is a community soccer team under Linhill Celtic Football Club, established to
                provide opportunities for players in Southern Johannesburg to develop their football skills in a safe
                and supportive environment.
              </p>
              <p className="mb-6">
                As part of Linhill Celtic, which was founded in 1973, GSE continues the tradition of football
                development and assistance to children from financially disadvantaged backgrounds, made possible by the
                generous help from parents and sponsors.
              </p>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/uk-tour-banner.png" alt="UK Tour Banner" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Green Street Elite</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Trophy className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  Committed to developing skilled players and achieving competitive results
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Community</CardTitle>
                <CardDescription>A supportive environment that welcomes players from all backgrounds</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CalendarDays className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Regular Training</CardTitle>
                <CardDescription>Structured training sessions under qualified coaches</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ImageIcon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Modern Facilities</CardTitle>
                <CardDescription>
                  Access to four football fields under lights and excellent club facilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Link href="/blog" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((post) => (
              <Card key={post} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500`}
                    alt="Blog post thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1">GSE Team Achieves Victory in Local Tournament</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    May 1, 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-3">
                    The Green Street Elite team demonstrated exceptional skill and teamwork in the recent local
                    tournament, securing a well-deserved victory against strong competition...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    12 comments
                  </div>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/blog/post-${post}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Join Green Street Elite Today</h2>
          <p className="max-w-2xl mx-auto">
            Whether you're looking to play competitively or just for fun, Green Street Elite welcomes players of all
            skill levels. Join our community and be part of something special.
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
