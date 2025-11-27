"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Zap, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    setIsMounted(true)
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-block"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden cursor-pointer md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden cursor-pointer md:inline-flex">
            Get Started
          </Button>
          
          {/* Mobile Toggle Button - Moved to the right */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMounted && (
          <div 
            className={cn(
              'fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300 md:hidden',
              isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            )}
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Navigation */}
        <nav
          className={cn(
            'fixed left-0 right-0 top-0 z-40 flex h-screen w-full flex-col items-center justify-center gap-8 bg-background p-4 transition-transform duration-300 ease-in-out md:hidden',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex w-full max-w-xs flex-col items-center gap-6 text-center">
            <Link
              href="#features"
              className="w-full py-3 text-lg font-medium text-foreground transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="w-full py-3 text-lg font-medium text-foreground transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="w-full py-3 text-lg font-medium text-foreground transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="w-full py-3 text-lg font-medium text-foreground transition-colors hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <div className="mt-4 flex w-full flex-col gap-3">
              <Button variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                Sign In
              </Button>
              <Button className="w-full" onClick={() => setIsOpen(false)}>
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
