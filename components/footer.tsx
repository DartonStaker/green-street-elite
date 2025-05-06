import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/GSE-logo.png"
              alt="Green Street Elite Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="font-bold">Green Street Elite</h3>
              <p className="text-xs text-gray-400">Linhill Celtic Football Club</p>
            </div>
          </div>
          <p className="text-sm text-gray-300">
            A community soccer team dedicated to developing football skills in a safe environment.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-primary transition-colors">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <address className="not-italic text-sm text-gray-300 space-y-2">
            <p>Linhill Celtic Football Club</p>
            <p>Southern Johannesburg</p>
            <p>South Africa</p>
            <p className="mt-2">
              <a href="mailto:info@gse-linhill.com" className="hover:text-primary transition-colors">
                info@gse-linhill.com
              </a>
            </p>
          </address>
        </div>

        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Green Street Elite. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
