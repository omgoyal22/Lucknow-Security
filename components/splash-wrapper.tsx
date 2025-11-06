"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/splash-screen"

interface SplashWrapperProps {
  children: React.ReactNode
}

export function SplashWrapper({ children }: SplashWrapperProps) {
  const [showSplash, setShowSplash] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Check if splash has been seen before (using localStorage for persistence)
    // This will only be empty on the very first website load
    const hasSeenSplash = typeof window !== 'undefined' && localStorage.getItem("hasSeenSplash")
    
    if (hasSeenSplash) {
      // Already seen splash (this is a page navigation or return visit), show content immediately
      setShowSplash(false)
      setIsReady(true)
      document.documentElement.style.visibility = ""
      document.body.style.overflow = ""
      document.body.classList.remove("splash-active")
      
      // Remove blocking style
      const blockingStyle = document.querySelector('style[data-splash-block]')
      if (blockingStyle) {
        blockingStyle.remove()
      }
      
      // Show all content immediately
      const allElements = document.body.querySelectorAll('*:not(script):not(style)')
      allElements.forEach(el => {
        (el as HTMLElement).style.opacity = ''
        ;(el as HTMLElement).style.visibility = ''
      })
    } else {
      // First time ever loading the website, show splash
      document.documentElement.style.visibility = ""
      document.body.style.overflow = "hidden"
      document.body.classList.add("splash-active")
      
      // Remove blocking style
      const blockingStyle = document.querySelector('style[data-splash-block]')
      if (blockingStyle) {
        blockingStyle.remove()
      }
      
      setShowSplash(true)
    }
  }, [])

  const handleComplete = () => {
    // Use localStorage so it persists across sessions
    localStorage.setItem("hasSeenSplash", "true")
    setShowSplash(false)
    setIsReady(true)
    // Restore body overflow and remove splash class
    document.body.style.overflow = ""
    document.body.classList.remove("splash-active")
    // Show all content
    const allElements = document.body.querySelectorAll('*:not(script):not(style)')
    allElements.forEach(el => {
      (el as HTMLElement).style.opacity = ''
      ;(el as HTMLElement).style.visibility = ''
    })
  }

  // Don't show static splash on server-side if we can't check localStorage
  // Only show content after client-side check
  if (!isClient) {
    return null
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleComplete} />}
      {!showSplash && (
        <div className={isReady ? "animate-fade-in" : ""}>
          {children}
        </div>
      )}
    </>
  )
}

