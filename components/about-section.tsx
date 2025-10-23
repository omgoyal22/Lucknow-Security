import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Handshake, GraduationCap, BarChart3 } from "lucide-react"

const objectives = [
  {
    title: "COLLABORATION",
    description: "Regular meetings with clients for their feedback on services and security personnel.",
    icon: Handshake,
  },
  {
    title: "TRAINING",
    description: "Vigorously screened and highly trained Uttar Pradesh licensed security guards.",
    icon: GraduationCap,
  },
  {
    title: "REPORTING",
    description: "Guard efficiency with daily activity reporting and monitoring software.",
    icon: BarChart3,
  },
]

const teamBreakdown = [
  "Security Coordinators",
  "Field Supervisors",
  "Security Guards",
  "Operations Manager",
  "Client Relations Director",
  "Dedicated Account Managers",
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 md:py-20 min-h-[80vh] flex items-center justify-center bg-muted/30"
      style={{
        backgroundImage: 'url(/istockphoto-1618446911-612x612.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
          {/* About Us text block */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">About Us</h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              Our experienced management and security officers go to great means to ensure the safety and satisfaction of our clients. Your safety and satisfaction is our business.
            </p>
          </div>

          {/* Objectives Cards */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center lg:flex-row">
            {objectives.map((objective, index) => (
              <Card key={index} className="w-full sm:w-80 md:w-64 bg-white/90 border-none shadow-lg"> {/* Adjusted card width for better responsiveness */}
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <objective.icon className="text-primary mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-base mb-1">{objective.title}</h4>
                      <p className="text-sm text-muted-foreground">{objective.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Info Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-primary">EXPERIENCE</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our company management has vast experience in security guard services. This gives us a unique advantage to provide traditional customer service while applying technology whenever it serves our clients needs best. Our company experience surpasses 6 years security guard services.
            </p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-primary">INSURED AND BONDED</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our clients will receive the best-in-class security services that will allow businesses and individuals to live and thrive.
            </p>
          </div>
          <div className="bg-white/90 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-primary">Team Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              {teamBreakdown.map((role, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}