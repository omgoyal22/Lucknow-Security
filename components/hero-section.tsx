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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
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

            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8">
                Our Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Phone size={18} className="mr-2" />
                Contact Us
              </Button>
            </div>

            {/* Specialties */}
            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-sm font-medium text-primary-foreground/80 mb-2">OUR SPECIALITY</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                {[
                  "Total Facility Management",
                  "Security Services",
                  "Fire Fighting & Maintenance",
                  "Electro Mechanical Services",
                  "House Keeping Service",
                  "Parking Management",
                ].map((specialty, idx) => (
                  <div key={idx} className="flex items-center space-x-2 bg-primary-foreground/10 px-2 sm:px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="whitespace-nowrap">{specialty}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Unified Card */}
          <div className="flex-1 flex flex-col items-center justify-center relative w-full max-w-[400px] mx-auto">
            <div className="w-full max-w-[400px] bg-card text-card-foreground rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden">
              {/* Image Section */}
              <div className="h-[250px] sm:h-[300px] bg-primary-foreground/10 flex items-center justify-center">
                <img
                  src="image.png"
                  alt="Security Professional"
                  className="object-cover h-full w-full"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary-foreground" size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-base sm:text-lg">24/7 Protection</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Professional Security</p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white text-sm sm:text-base"
                >
                  <Phone size={18} className="mr-2" />
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
