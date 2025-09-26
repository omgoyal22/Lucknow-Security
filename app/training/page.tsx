import { TrainingSection } from "@/components/training-section";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TrainingSection />
      <Footer />
    </main>
  );
}
