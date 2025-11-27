import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Lock, Workflow, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed. Process thousands of tasks per second with our optimized infrastructure.",
  },
  {
    icon: Workflow,
    title: "Seamless Integration",
    description: "Connect with 100+ tools and services. Set up integrations in minutes, not hours.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and SOC 2 compliance. Your data is safe with us.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and comprehensive reporting to track team performance.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 bg-background py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Powerful features designed to help your team work smarter and achieve more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card transition-colors hover:border-accent/50">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
