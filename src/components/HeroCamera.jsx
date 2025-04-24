"use client"

import { useRef, useEffect, useFrame, useThree, easing } from "../imports"

const HeroCamera = ({ children, syncWithMouse = false }) => {
  const groupRef = useRef()
  const { pointer, viewport } = useThree()
  const mouseRef = useRef({ x: 0, y: 0 })


  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useFrame((state, delta) => {

    const mouseX = mouseRef.current.x
    const mouseY = mouseRef.current.y

    if (syncWithMouse) {

      easing.dampE(
        groupRef.current.rotation,
        [
          -mouseY * 0.3,
          mouseX * 0.5,
          0,
        ],
        0.25,
        delta,
      )
    } else {
      easing.dampE(groupRef.current.rotation, [-mouseY * 0.3, -mouseX * 0.5, 0], 0.25, delta)
    }
  })

  return <group ref={groupRef}>{children}</group>
}

export default HeroCamera;