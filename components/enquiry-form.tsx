"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, Send } from "lucide-react"

interface EnquiryFormProps {
  isOpen: boolean
  onClose: () => void
}

const securityServices = [
  "Gun Man Security",
  "Gate Keeper",
  "Armed Guard Services",
  "Unarmed Security",
  "Fire Watch",
  "Vehicle Patrol",
  "Virtual Guard",
  "Cyber Security",
  "VIP Protection",
  "Event Security",
  "Industrial Security",
  "Residential Security",
  "Commercial Security",
  "Other Security Services"
]

export function EnquiryForm({ isOpen, onClose }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    purpose: "",
    service: "",
    phone: "",
    email: "",
    location: "",
    additionalInfo: "",
    duration: "",
    budget: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("Submitting...")

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("Enquiry submitted successfully! We'll contact you soon.")
      
      // Reset form
      setFormData({
        name: "",
        purpose: "",
        service: "",
        phone: "",
        email: "",
        location: "",
        additionalInfo: "",
        duration: "",
        budget: ""
      })
      
      // Close form after 2 seconds
      setTimeout(() => {
        onClose()
        setSubmitStatus("")
      }, 2000)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-2xl font-bold">Security Service Enquiry</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  placeholder="City, State"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose of Security *</Label>
              <Textarea
                id="purpose"
                value={formData.purpose}
                onChange={(e) => handleChange("purpose", e.target.value)}
                placeholder="Describe what you need security for (e.g., office building, residential complex, event, etc.)"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Security Service Required *</Label>
              <Select onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select security service" />
                </SelectTrigger>
                <SelectContent>
                  {securityServices.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="duration">Duration Required</Label>
                <Select onValueChange={(value) => handleChange("duration", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-day">1 Day</SelectItem>
                    <SelectItem value="1-week">1 Week</SelectItem>
                    <SelectItem value="1-month">1 Month</SelectItem>
                    <SelectItem value="3-months">3 Months</SelectItem>
                    <SelectItem value="6-months">6 Months</SelectItem>
                    <SelectItem value="1-year">1 Year</SelectItem>
                    <SelectItem value="long-term">Long Term</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select onValueChange={(value) => handleChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-10k">Under ₹10,000</SelectItem>
                    <SelectItem value="10k-25k">₹10,000 - ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k-1lakh">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="above-1lakh">Above ₹1,00,000</SelectItem>
                    <SelectItem value="discuss">Let's Discuss</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                placeholder="Any specific requirements, special instructions, or additional details..."
                rows={4}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                <Send size={16} className="mr-2" />
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </Button>
              
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>

            {submitStatus && (
              <div className="text-center text-green-600 font-medium">
                {submitStatus}
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
