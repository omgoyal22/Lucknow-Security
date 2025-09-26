import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Wrench } from "lucide-react"

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

const guardTasks = [
  "Work collaboratively with the community-based organization designated to provide program oversight and supportive services.",
  "Control public access to the facility and related premises.",
  "Respond to matters of public safety. Respond promptly and appropriately to all security related emergencies. Protect the safety of all persons on the site.",
  "Patrol the exterior perimeter of the facility and interior areas of the site every hour to provide a visible presence to prevent and minimize fire, theft, damage, and trespassing on site.",
  "Complete rounds of assigned locations inside and outside of the site every hour during their assigned shift.",
  "Document and maintain a log on each 8-hour shift of all notable activities including, but not limited to, security violations, incidents, and report such occurrences to the required Daily Activity Log. Prepare and submit written reports using the Daily Activity Log, listing all notable activities to the community-based organization designated to provide program oversight and supportive services.",
  "Immediately notify the onsite manager and/or the appropriate law enforcement agencies should any incidents including, but not limited to, fire, theft, damage, trespassing, arguments/altercations, or assaults occur.",
]

export function SecurityCategoriesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* ...existing code... (now only guard tasks section remains) */}

        {/* Guard Tasks Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Guard Responsibilities
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Security Guard Tasks & Responsibilities</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Below we have listed examples of tasks that a security guard can perform to ensure comprehensive
              protection and safety.
            </p>
          </div>

          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 lg:p-12">
              <div className="space-y-6">
                {guardTasks.map((task, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-primary-foreground/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={16} className="text-primary-foreground" />
                    </div>
                    <p className="text-primary-foreground/90 leading-relaxed">{task}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
