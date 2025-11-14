"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Animation sequence:
    // - Logo appears: 0.2s delay + 0.6s duration = ~0.8s
    // - Text appears: 0.8s delay + 0.5s duration = ~1.3s
    // - Mark animations complete at 1.5s
    // - Keep visible: 6 seconds after animations complete (so user can see it clearly)
    // - Total: ~7.5 seconds before fade out starts
    
    // Mark animations as complete
    const animationCompleteTimer = setTimeout(() => {
      setIsAnimating(false)
    }, 1500)
    
    // Start fade out after total time
    const animationTime = 1500 // 1.5 seconds for all animations to complete
    const visibleTime = 1000 // 6 seconds to keep logo visible and sustained
    const totalTime = animationTime + visibleTime
    
    const fadeOutTimer = setTimeout(() => {
      setIsVisible(false)
      // Call onComplete after fade out animation completes
      setTimeout(() => {
        onComplete()
      }, 600) // Wait for fade out animation
    }, totalTime)

    return () => {
      clearTimeout(animationCompleteTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            opacity: isVisible ? 1 : undefined // Ensure it stays visible
          }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            style={{ 
              opacity: isVisible ? 1 : undefined // Ensure it stays visible
            }}
            className="flex flex-col items-center justify-center"
          >
            <motion.img
              src="/logo.png"
              alt="Lucknow Intelligence Security Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut",
              }}
              style={{
                opacity: isVisible ? 1 : undefined,
                visibility: isVisible ? "visible" : undefined
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="mt-4 text-center"
            >
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                LUCKNOW INTELLIGENCE
              </h2>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                SECURITY PRIVATE LIMITED
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

