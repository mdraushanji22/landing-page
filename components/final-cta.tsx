import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="border-b border-border/40 bg-accent py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-accent-foreground md:text-4xl lg:text-5xl">
            Ready to streamline your workflow?
          </h2>
          <p className="mb-10 text-pretty text-lg text-accent-foreground/90">
            Join thousands of teams already using StreamLine to work smarter. Get started with a free 14-day trial—no
            credit card required.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="cursor-pointer gap-2">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-accent-foreground/20 bg-transparent text-accent-foreground hover:bg-accent-foreground/10"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
