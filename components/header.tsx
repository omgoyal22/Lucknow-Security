"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img
              src="/logo.png"
              alt="Lucknow Intelligence Security Logo"
              className="w h-16 object-contain bg-white rounded-lg shadow"
            />
            <div>
              <h1 className="text-xl font-bold leading-tight">LUCKNOW INTELLIGENCE</h1>
              <p className="text-sm opacity-90">SECURITY PRIVATE LIMITED</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/services" className="hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="/about" className="hover:opacity-80 transition-opacity">
              About
            </a>
            <a href="/industries" className="hover:opacity-80 transition-opacity">
              Industries
            </a>
            <a href="/training" className="hover:opacity-80 transition-opacity">
              Training
            </a>
            <Button variant="secondary" size="sm">
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-3">
              <a href="/services" className="hover:opacity-80 transition-opacity">
                Services
              </a>
              <a href="/about" className="hover:opacity-80 transition-opacity">
                About
              </a>
              <a href="/industries" className="hover:opacity-80 transition-opacity">
                Industries
              </a>
              <a href="/training" className="hover:opacity-80 transition-opacity">
                Training
              </a>
              <Button variant="secondary" size="sm" className="w-fit">
                Contact Us
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
