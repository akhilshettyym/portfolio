"use client"

import { useEffect, useState } from "../imports"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      checkMobile()

      window.addEventListener("resize", checkMobile)

      return () => window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return isMobile
}

export default useMobile;