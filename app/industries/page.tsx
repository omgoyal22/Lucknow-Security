"use client"
import { Header } from "@/components/header";
import { IndustriesSection } from "@/components/industries-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <IndustriesSection />
      </motion.div>
      <Footer />
    </main>
  );
}
