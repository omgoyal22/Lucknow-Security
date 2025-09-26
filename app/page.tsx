"use client"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
// import { ServicesSection } from "@/components/services-section"
import { SecurityCategoriesSection } from "@/components/security-categories"
// import { IndustriesSection } from "@/components/industries-section"
// import { AboutSection } from "@/components/about-section"
//import { TrainingSection } from "@/components/training-section"
import { WhyChooseUsSection } from "@/components/why-choose-us"
import { HowWeWorkSection } from "@/components/how-we-work"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Header />
      <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <HeroSection />
      </motion.div>
      {/* ServicesSection removed for separate page */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 justify-center items-stretch">
        <motion.a
          href="/security-services"
          className="bg-primary text-primary-foreground rounded-xl shadow-lg px-8 py-12 text-center w-full md:w-[400px] md:h-[220px] flex flex-col items-center justify-center hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-3xl font-bold mb-4">Category of Security Services</h2>
          <p className="text-lg">See all our security service categories</p>
        </motion.a>
        <motion.a
          href="/professional-equipments"
          className="bg-primary text-primary-foreground rounded-xl shadow-lg px-8 py-12 text-center w-full md:w-[400px] md:h-[220px] flex flex-col items-center justify-center hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-3xl font-bold mb-4">Equipments With Us</h2>
          <p className="text-lg">View our professional security equipment</p>
        </motion.a>
      </div>
      {/* IndustriesSection removed for separate page */}
      {/* AboutSection removed for separate page */}
      {/* <TrainingSection /> */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}>
        <WhyChooseUsSection />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}>
        <HowWeWorkSection />
      </motion.div>
      <Footer />
    </main>
  )
}
