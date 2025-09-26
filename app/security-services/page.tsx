"use client"
import { Header } from "@/components/header";
import { SecurityServicesCategory } from "@/components/security-services-category";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";

export default function SecurityServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <SecurityServicesCategory />
      </motion.div>
      <Footer />
    </main>
  );
}
