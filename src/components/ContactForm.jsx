import { useState } from 'react'

const WEB3FORMS_ACCESS_KEY = 'bc6fb5fc-82e9-4564-91f9-960547acb045'

export default function ContactForm({ variant = 'default' }) {
  const [result, setResult] = useState({ message: '', type: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setResult({ message: 'Sending...', type: 'info' })

    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await response.json()
      if (json.success) {
        setResult({ message: 'Message sent successfully!', type: 'success' })
        e.target.reset()
      } else {
        throw new Error(json.message || 'Something went wrong.')
      }
    } catch {
      setResult({ message: 'An error occurred. Please try again.', type: 'error' })
    } finally {
      setSubmitting(false)
      setTimeout(() => setResult({ message: '', type: '' }), 6000)
    }
  }

  const inputClass = variant === 'standalone'
    ? 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow'
    : 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {result.message && (
        <div className={`text-center font-medium ${
          result.type === 'success' ? 'text-green-500' :
          result.type === 'error' ? 'text-red-500' : 'text-gray-700'
        }`}>{result.message}</div>
      )}
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" className={inputClass} required />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
        <input type="email" id="email" name="email" className={inputClass} required />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
        <textarea id="message" name="message" rows={variant === 'standalone' ? 5 : 4} className={inputClass} required />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className={`w-full font-bold py-3 px-6 rounded-full transition-colors transform hover:scale-105 disabled:opacity-50 ${
          variant === 'standalone'
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
