import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield } from "lucide-react"

const securityServices = [
  "Industrial Security Safety & firefighting",
  "Security of multistore buildings Security of Properties",
  "VIP Protection",
  "Dual role of proving driver cum guard",
  "Armed Guards Bank Security",
  "Security Survey & Consultation",
  "Security & Mobile patrolling to cluster sites",
  "Security of Bus Queue Shelters & kiosks",
  "Housekeeping Pipe line Security Electronic Security",
]

export function SecurityServicesCategory() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4">
            <Shield size={16} className="mr-2" />
            Security Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Category of Security Services</h2>
          <p className="text-muted-foreground">
            Comprehensive security solutions tailored to meet diverse protection needs across various sectors.
          </p>
        </div>
        <div className="space-y-3 max-w-xl mx-auto">
          {securityServices.map((service, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-background/50 transition-colors"
            >
              <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={18} />
              <span className="text-sm font-medium leading-relaxed">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
