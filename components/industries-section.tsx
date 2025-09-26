import { Badge } from "@/components/ui/badge"
import {
  Building,
  Home,
  GraduationCap,
  Landmark,
  Hospital,
  Hotel,
  ShoppingCart,
  Car,
  Sun,
  Leaf,
  Target,
  Truck,
  Building2,
  Church,
} from "lucide-react"

const industries = [
  { icon: Building, name: "Construction Sites", description: "Secure construction zones and equipment" },
  { icon: Building2, name: "Commercial Buildings", description: "Office complexes and business centers" },
  { icon: Home, name: "Residential", description: "Apartment complexes and housing societies" },
  { icon: GraduationCap, name: "Campuses", description: "Educational institutions and universities" },
  { icon: Landmark, name: "Government Facilities", description: "Public buildings and government offices" },
  { icon: Hospital, name: "Medical Facilities", description: "Hospitals and healthcare centers" },
  { icon: Hotel, name: "Hospitality", description: "Hotels and resort properties" },
  { icon: Landmark, name: "Banks", description: "Financial institutions and ATM security" },
  { icon: ShoppingCart, name: "Retail", description: "Shopping centers and retail stores" },
  { icon: Car, name: "Car Dealership", description: "Automotive showrooms and lots" },
  { icon: Sun, name: "Solar Farms", description: "Renewable energy installations" },
  { icon: Leaf, name: "Cannabis Dispensary", description: "Licensed cannabis facilities" },
  { icon: Target, name: "Events Security", description: "Conferences and special events" },
  { icon: Truck, name: "Parking Lot", description: "Vehicle parking and transportation hubs" },
  { icon: Building, name: "Industrial", description: "Manufacturing and industrial complexes" },
  { icon: Church, name: "Religious Institutions", description: "Places of worship and community centers" },
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Industries We Serve
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-balance">Our Industries</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lucknow Intelligence Security Private Limited is uniquely positioned to provide the very best security
            services to our clients in many industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-2 border-transparent hover:border-primary/20 hover:bg-muted/30 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* Company Description */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            It has the size and the experience of a licensed security provider while continuing to be a private company
            that values partner relationships and exceptional customer service.
          </p>
        </div>
      </div>
    </section>
  )
}
