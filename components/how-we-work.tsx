import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: "1",
    title: "Site Survey & Consultation",
    description: "We meet with clients and survey the site where security and protection services are needed.",
  },
  {
    number: "2",
    title: "Security Plan",
    description:
      "A security plan, including post orders will be created to identify responsibilities and duties of the security guards.",
  },
  {
    number: "3",
    title: "Guard Selection",
    description:
      "A security guard will be screened and selected through our rigorous screening process to ensure high quality of security services.",
  },
  {
    number: "4",
    title: "Implementation & Training",
    description:
      "Security Guard/s will be provided with proper training, briefing of post orders and client requirements.",
  },
  {
    number: "5",
    title: "Supervision",
    description:
      "A Supervisor will regularly perform inspections, train new employees and ensure post orders are followed.",
  },
]

export function HowWeWorkSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Process
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">How We Work</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures comprehensive security solutions tailored to your specific needs.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 mb-12 last:mb-0">
              {/* Step Number */}
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && <div className="absolute left-8 mt-16 w-0.5 h-12 bg-border ml-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
