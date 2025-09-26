import { Badge } from "@/components/ui/badge"
import { Wrench } from "lucide-react"

const equipment = [
  "Policing Knife",
  "Binoculars",
  "Sirens and Lights",
  "Mics and Micro phones",
  "Tracking device",
  "RFID Based Vehicle Access Control System",
  "Monitors and CCTV and their Integrator and Installer",
  "Flashlight",
  "Under Vehicle Search Mirror",
  "Walkie Talkie",
  "Hand Held Metal Detector",
  "Door Frame Metal Detector and many more",
]

export function ProfessionalEquipmentsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <Badge variant="outline" className="mb-4">
            <Wrench size={16} className="mr-2" />
            Professional Equipment
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Equipments With Us</h2>
          <p className="text-muted-foreground">
            State-of-the-art security equipment and technology to ensure maximum protection and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 bg-background rounded-lg border hover:border-primary/20 transition-colors"
            >
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="aspect-square bg-background rounded-lg border p-4 flex items-center justify-center">
            <img src="/security-equipment-walkie-talkie.jpg" alt="Security Equipment" className="w-full h-full object-contain" />
          </div>
          <div className="aspect-square bg-background rounded-lg border p-4 flex items-center justify-center">
            <img src="/metal-detector-security.jpg" alt="Metal Detector" className="w-full h-full object-contain" />
          </div>
          <div className="aspect-square bg-background rounded-lg border p-4 flex items-center justify-center">
            <img src="/security-flashlight.jpg" alt="Flashlight" className="w-full h-full object-contain" />
          </div>
          <div className="aspect-square bg-background rounded-lg border p-4 flex items-center justify-center">
            <img src="/security-monitoring-tablet.jpg" alt="Monitoring Device" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
