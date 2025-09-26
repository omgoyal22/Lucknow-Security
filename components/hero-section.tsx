import { Button } from "@/components/ui/button"
import { Shield, Phone } from "lucide-react"

export function HeroSection() {
  return (
  <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground pt-2 pb-10 lg:pt-4 lg:pb-16 min-h-[70vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          {/* Content */}
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Shield size={20} />
                <span className="text-sm font-medium tracking-wide uppercase">Professional Security Services</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-balance">
                YOUR SECURITY IS OUR{" "}
                <span className="text-accent-foreground bg-accent px-2 py-1 rounded-lg">HIGHEST PRIORITY</span>
              </h1>

              <p className="text-base lg:text-lg text-primary-foreground/90 leading-relaxed max-w-xl">
                Lucknow Intelligence Security Private Limited provides comprehensive security solutions across multiple
                industries with trained professionals and state-of-the-art equipment.
              </p>
            </div>

            <div className="flex flex-row gap-4 flex-wrap">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Phone size={20} className="mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Specialties */}
            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-sm font-medium text-primary-foreground/80 mb-2">OUR SPECIALITY</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  "Total Facility Management",
                  "Security Services",
                  "Fire Fighting & Maintenance",
                  "Electro Mechanical Services",
                  "House Keeping Service",
                  "Parking Management",
                ].map((specialty, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-primary-foreground/10 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex flex-col items-center justify-center relative min-w-[300px]">
            <div className="w-[400px] h-[400px] bg-primary-foreground/10 rounded-3xl overflow-hidden flex items-center justify-center shadow-xl border-2 border-primary/30">
                <img
                  src="image.png"
                  alt="Security Professional"
                  className="object-cover -translate-y-2"
                />
            </div>
            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 bg-card text-card-foreground p-4 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">24/7 Protection</p>
                  <p className="text-xs text-muted-foreground">Professional Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
