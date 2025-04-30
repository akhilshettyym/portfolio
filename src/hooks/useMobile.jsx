"use client"

import { useEffect, useState } from "../imports"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkMobile()

      // Add event listener
      window.addEventListener("resize", checkMobile)

      // Clean up
      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}

export default useMobile
