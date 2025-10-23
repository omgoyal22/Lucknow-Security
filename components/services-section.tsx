import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Flame, Car, Monitor, Globe, Sun as Gun } from "lucide-react"

const services = [
  {
    icon: Gun,
    title: "Armed Guard",
    description: "Professional armed security personnel for high-risk environments",
    features: ["Protect High-Value Assets", "Safety Concerns", "Serve as Deterrent", "High Risk Business"],
  },
  {
    icon: ShieldCheck,
    title: "Unarmed Guard",
    description: "Trained security professionals for general protection services",
    features: ["Identify Fire Hazards", "Record Daily Incidents", "Patrol Area", "Contact Fire Dept."],
  },
  {
    icon: Flame,
    title: "Fire Watch",
    description: "Specialized fire safety monitoring and prevention services",
    features: ["Cover Larger Lots", "Quick Response to Scene", "Cost Effective", "Escort Guests"],
  },
  {
    icon: Car,
    title: "Vehicle Patrol",
    description: "Mobile security patrols for large areas and properties",
    features: ["Prevent Burglary & Theft", "Patrol Area", "Deter Criminal Activities", "Low-Risk Business"],
  },
  {
    icon: Monitor,
    title: "Virtual Guard",
    description: "Remote monitoring and surveillance solutions",
    features: ["Backup for Business", "Protection for Homes", "Live Monitoring", "Latest Technology"],
  },
  {
    icon: Globe,
    title: "Cyber Security",
    description: "Digital security solutions and threat protection",
    features: ["Server Monitoring", "Prevent Cyber Threats", "Enhanced Protection", "Security Audit"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Comprehensive Security Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We offer a broad range of security guard services designed to protect you, your assets, and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 max-w-xs mx-auto"
            >
              <CardContent className="p-3">
                <div className="mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-1 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                </div>

                <div className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Need a Custom Security Solution?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experienced team can design a tailored security plan that meets your specific requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/917309669000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block text-center"
              >
                Get Free Consultation
              </a>
              <a 
                href="/services" 
                className="border border-border px-8 py-3 rounded-lg font-semibold hover:bg-muted transition-colors inline-block text-center"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
