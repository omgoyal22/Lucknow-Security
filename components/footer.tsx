import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-primary-foreground rounded-sm flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">LIS</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold leading-tight">LUCKNOW INTELLIGENCE</h3>
                <p className="text-sm opacity-90">SECURITY PRIVATE LIMITED</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Your trusted partner in comprehensive security solutions. We provide professional security services across
              multiple industries with trained personnel and advanced equipment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary-foreground/60" />
                <span className="text-sm">+91 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-foreground/60" />
                <span className="text-sm">info@lucknowsecurity.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary-foreground/60" />
                <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Armed Guard Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Unarmed Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Fire Watch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Vehicle Patrol
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Virtual Guard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Cyber Security
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Commercial Buildings
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Healthcare
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Educational
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Government
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Industrial
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Lucknow Intelligence Security Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
