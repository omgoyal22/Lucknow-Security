import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Users, FolderOpen, Cpu, Headphones } from "lucide-react"

const reasons = [
  {
    icon: MessageCircle,
    title: "Communication",
    description:
      "We will always communicate amongst ourselves and clients. We always attend to clients' concerns and feedback.",
  },
  {
    icon: Users,
    title: "Coordination",
    description:
      "We will always properly coordinate with our internal staff and client team to resolve and eliminate problems.",
  },
  {
    icon: FolderOpen,
    title: "Organization",
    description:
      "We will always organize and keep clients requests, instructions, concerns, and other pertaining documents handy and accessible to refer to.",
  },
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Technology is one of our key strengths which allows us to deliver security services more efficiently and effectively.",
  },
  {
    icon: Headphones,
    title: "Traditional Customer Service",
    description:
      "We will answer our phones and make sure that our team listens to your concerns and questions without taking the client through a dark path such as voicemail menus or robots. The bottom line is, we are accessible and you will talk to a live person.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Once clients start working with us, clients will notice how much we care about our quality of work. The
            following are the five pillars of our company success:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">OUR GUARANTEE</h3>
              <p className="text-primary-foreground/90 leading-relaxed max-w-4xl mx-auto">
                If the client finds our security guards or field supervisors' work performance unsatisfactory, Ranger
                Global Security guarantees to replace their assigned security guards. We guarantee a response within
                hours when a client reports an issue or concern. Clients will be provided with multiple points of
                emergency contacts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
