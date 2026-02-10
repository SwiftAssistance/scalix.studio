import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 z-40 ${visible ? 'scale-100' : 'scale-0'}`}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  )
}
