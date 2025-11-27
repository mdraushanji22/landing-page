import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            The complete platform to <span className="text-accent">streamline</span> your workflow
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Empower your team to work faster and smarter. Automate repetitive tasks, integrate with your favorite tools,
            and scale effortlessly.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="cursor-pointer gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer gap-2 bg-transparent">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 text-sm text-muted-foreground">Trusted by 10,000+ teams worldwide</div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    </section>
  )
}
