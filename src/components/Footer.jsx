import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const quickLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-3">
              <span className="text-2xl font-extrabold text-white leading-none">Scalix</span>
              <span className="block text-xs font-semibold text-gray-400 tracking-widest uppercase">Studios</span>
            </Link>
            <p className="text-gray-400 text-sm mb-5 max-w-xs mx-auto md:mx-0">Creative digital agency building brands, websites, and marketing that drives real growth.</p>
            <div className="flex justify-center md:justify-start gap-2.5">
              <a href="https://www.instagram.com/scalixstudios/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-400 hover:text-white hover:bg-indigo-600 rounded-lg p-2.5 transition-all" aria-label="Instagram"><FaInstagram className="text-lg" /></a>
              <a href="https://www.facebook.com/scalixstudios" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-400 hover:text-white hover:bg-indigo-600 rounded-lg p-2.5 transition-all" aria-label="Facebook"><FaFacebookF className="text-lg" /></a>
            </div>
          </div>

          {/* Quick links — 2-col grid */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}><Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-2"><FaMapMarkerAlt className="mt-0.5 flex-shrink-0" /><span>Barry Avenue, Windsor, SL4 5JA</span></li>
              <li className="flex items-center justify-center md:justify-start gap-2"><FaEnvelope className="flex-shrink-0" /><a href="mailto:info@scalixstudios.co.uk" className="hover:text-white transition-colors">info@scalixstudios.co.uk</a></li>
              <li className="flex items-center justify-center md:justify-start gap-2"><FaPhone className="flex-shrink-0" /><a href="tel:01753257401" className="hover:text-white transition-colors">01753 257401</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Scalix Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
