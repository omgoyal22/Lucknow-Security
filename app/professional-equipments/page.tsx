"use client"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

import { ProfessionalEquipmentsSection } from "@/components/professional-equipments-section";

export default function ProfessionalEquipmentsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <ProfessionalEquipmentsSection />
      </motion.div>
      <Footer />
    </main>
  );
}
