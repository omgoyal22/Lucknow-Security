"use client"
import { Header } from "@/components/header";
//import { CareerForm } from "@/components/CareerForm";
import { IndustriesSection } from "@/components/industries-section";
import { Footer } from "@/components/footer";
import { motion } from "framer-motion";
import CareerForm from "@/components/CareerForm";
import ContactForm from "@/components/ContactForm";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
        <ContactForm />
      </motion.div>
      <Footer />
    </main>
  );
}
