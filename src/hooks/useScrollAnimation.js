import { useEffect, useRef } from 'react'

export default function useScrollAnimation(threshold = 0.05) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px 50px 0px' }
    )

    const observe = () => {
      const elements = node.querySelectorAll('.animate-on-scroll:not(.is-visible)')
      elements.forEach((el) => observer.observe(el))
    }

    // Small delay to ensure DOM is settled after lazy load
    requestAnimationFrame(observe)

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
