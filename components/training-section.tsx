import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Smartphone, Shirt, FileText, Clock } from "lucide-react"

const trainingAspects = [
  {
    icon: GraduationCap,
    title: "TRAINED",
    description:
      "Each of our guards has completed 40 hours of training. Additionally, we provide our guards with ongoing training for our officers and Supervisors.",
  },
  {
    icon: Smartphone,
    title: "FULLY EQUIPPED",
    description:
      "Mobile phones and mobile radios to expedite our communication. Some guards will possess firearms, tear gas, and batons with corresponding State permits.",
  },
  {
    icon: Shirt,
    title: "PRESENTABLE",
    description:
      "Our guards report to duty in presentable company uniforms with a neat appearance. Our policy requires guards to press and clean their uniforms and polish their shoes for a clean, presentable look.",
  },
  {
    icon: FileText,
    title: "FOLLOWING THE PROTOCOL",
    description:
      "Protocols and responsibilities are explained to guards assigned to your location so that they are aware of their responsibilities.",
  },
  {
    icon: Clock,
    title: "PUNCTUAL",
    description:
      "The timely arrival of our punctual and reliable guards ensures the health, safety, and security of the client's site.",
  },
]

export function TrainingSection() {
  return (
    <section id="training" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4">
              Professional Training
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Training</h2>

            <div className="space-y-8">
              {trainingAspects.map((aspect, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <aspect.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{aspect.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{aspect.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Guard Illustration */}
          <div className="relative">
            <div className="aspect-[3/4] bg-muted/50 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src="/hellotraining.png"
                alt="Professional Security Guard Training"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Training Stats Card */}
            <Card className="absolute -bottom-6 -left-6 bg-card shadow-2xl max-w-xs">
              {/* <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40+</div>
                  <p className="text-sm text-muted-foreground">Hours of Professional Training</p>
                </div>
              </CardContent> */}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
