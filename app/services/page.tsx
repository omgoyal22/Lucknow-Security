import { ServicesSection } from "@/components/services-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesSection />
      <Footer />
    </main>
  );
}
