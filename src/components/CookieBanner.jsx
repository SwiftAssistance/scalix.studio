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
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-800 text-white p-5 transform transition-transform duration-500 ease-in-out shadow-lg ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">We use cookies to enhance your experience. <Link to="/privacy-policy" className="underline hover:text-blue-400">Learn More</Link>.</p>
        <div className="flex gap-3">
          <button onClick={() => handleConsent('accepted')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition-colors text-sm">Accept</button>
          <button onClick={() => handleConsent('declined')} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-5 rounded-full transition-colors text-sm">Decline</button>
        </div>
      </div>
    </div>
  )
}
