import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    content:
      "StreamLine has transformed how our team works. We've reduced manual tasks by 80% and can focus on what really matters.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager",
    company: "InnovateLabs",
    content:
      "The integration capabilities are incredible. We connected all our tools in under an hour. Game changer for our workflow.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "As a growing startup, StreamLine scales with us perfectly. The pricing is fair and the support team is responsive.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/40 bg-muted/30 py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Loved by teams everywhere
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-card-foreground">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
