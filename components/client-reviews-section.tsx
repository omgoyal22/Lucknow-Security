"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, MapPin, Building } from "lucide-react"

const clientReviews = [
  {
    id: 1,
    clientName: "Ram Mandir, Ayodhya",
    location: "Ayodhya, Uttar Pradesh",
    industry: "Religious Institution",
    rating: 5,
    review: "Lucknow Intelligence Security has provided exceptional security services for our sacred premises. Their professional approach and dedication to maintaining a safe environment for devotees has been outstanding. The team's respect for the religious sanctity while ensuring security is commendable.",
    services: ["24/7 Security", "Crowd Management", "VIP Protection"],
    image: "/placeholder.jpg"
  },
  {
    id: 2,
    clientName: "Goldee Masala, Kanpur",
    location: "Kanpur, Uttar Pradesh",
    industry: "Food Processing",
    rating: 5,
    review: "We have been working with Lucknow Intelligence Security for over 2 years. Their security personnel are well-trained and understand the specific needs of our food processing facility. They ensure the safety of our employees and protect our valuable equipment and inventory.",
    services: ["Industrial Security", "Access Control", "Surveillance"],
    image: "/placeholder.jpg"
  },
  {
    id: 3,
    clientName: "Maruti Suzuki, Near Varanasi",
    location: "Varanasi, Uttar Pradesh",
    industry: "Automotive",
    rating: 5,
    review: "The security services provided by Lucknow Intelligence Security have been exemplary. Their team ensures the safety of our showroom, service center, and customer vehicles. Their professional conduct and reliability have made them an integral part of our operations.",
    services: ["Showroom Security", "Vehicle Protection", "Customer Safety"],
    image: "/placeholder.jpg"
  },
  {
    id: 4,
    clientName: "Hyundai Showroom, Lucknow",
    location: "Lucknow, Uttar Pradesh",
    industry: "Automotive",
    rating: 5,
    review: "Outstanding security services! The team understands the automotive industry's unique security challenges. They provide round-the-clock protection for our showroom and ensure a safe environment for our customers and staff. Highly professional and reliable.",
    services: ["24/7 Security", "Customer Safety", "Asset Protection"],
    image: "/placeholder.jpg"
  },
  {
    id: 5,
    clientName: "Grandford Hospital, Lucknow",
    location: "Lucknow, Uttar Pradesh",
    industry: "Healthcare",
    rating: 5,
    review: "Healthcare security requires special expertise, and Lucknow Intelligence Security delivers exactly that. Their team ensures patient safety, protects medical equipment, and maintains a secure environment for our healthcare professionals. Their understanding of hospital protocols is impressive.",
    services: ["Patient Safety", "Medical Equipment Security", "Emergency Response"],
    image: "/placeholder.jpg"
  },
  {
    id: 6,
    clientName: "The Max Hotel, Lucknow Gomti Nagar",
    location: "Gomti Nagar, Lucknow",
    industry: "Hospitality",
    rating: 5,
    review: "Exceptional security services for our hotel! The team ensures guest safety while maintaining the welcoming atmosphere of our establishment. Their professional approach and attention to detail have earned the trust of our guests and staff. Highly recommended for hospitality security.",
    services: ["Guest Safety", "Hotel Security", "VIP Protection"],
    image: "/placeholder.jpg"
  }
]

export function ClientReviewsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Reviews
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our valued clients across various industries about their experience with our security services
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">5.0</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Security Support</div>
          </div>
        </div>

        {/* Client Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReviews.map((review) => (
            <Card key={review.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Client Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">{review.clientName}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {review.location}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {review.industry}
                    </Badge>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review */}
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-gray-700 text-sm leading-relaxed pl-6">
                    {review.review}
                  </p>
                </div>

                {/* Services */}
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900 text-sm">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {review.services.map((service, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Satisfied Clients?
            </h2>
            <p className="text-gray-600 mb-6">
              Experience the same level of professional security services that our clients trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/917309669000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
              </a>
              <a
                href="/services"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
