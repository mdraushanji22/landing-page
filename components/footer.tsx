import Link from "next/link"
import { Zap, Github, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-accent" />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <p className="mb-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              The complete platform to streamline your workflow. Automate tasks, integrate tools, and empower your team
              to do their best work.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-accent hover:bg-accent/10"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-accent hover:bg-accent/10"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-accent hover:bg-accent/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-accent hover:bg-accent/10"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© 2025 StreamLine. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="transition-colors hover:text-foreground">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
