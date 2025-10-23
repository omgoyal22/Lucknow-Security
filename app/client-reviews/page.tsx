import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientReviewsSection } from "@/components/client-reviews-section"

export default function ClientReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ClientReviewsSection />
      </main>
      <Footer />
    </div>
  )
}
