import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleConsent = (choice) => {
    localStorage.setItem('cookieConsent', choice)
    setVisible(false)
  }

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-800 text-white p-5 transform transition-transform duration-500 ease-in-out shadow-lg ${visible ? 'translate-y-0' : 'translate-y-full'}`} role="dialog" aria-label="Cookie consent">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-200">We use cookies to enhance your experience. <Link to="/privacy-policy" className="underline text-blue-300 hover:text-blue-200">Learn More</Link>.</p>
        <div className="flex gap-3">
          <button onClick={() => handleConsent('accepted')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm min-h-[48px]">Accept</button>
          <button onClick={() => handleConsent('declined')} className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full transition-colors text-sm min-h-[48px]">Decline</button>
        </div>
      </div>
    </div>
  )
}
