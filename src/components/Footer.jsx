import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const serviceLinks = [
  { label: 'SEO', to: '/services/seo' },
  { label: 'Web Design', to: '/services/web-design' },
  { label: 'Social Media', to: '/services/social-media-marketing' },
  { label: 'Branding', to: '/services/branding' },
  { label: 'PPC Advertising', to: '/services/ppc-advertising' },
  { label: 'Content Strategy', to: '/services/content-strategy' },
  { label: 'AI & Automation', to: '/services/ai-automation' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img src="/LOGO.png" alt="Scalix Studios" className="h-10 w-auto mx-auto md:mx-0 footer-logo" />
            </Link>
            <p className="text-gray-400 text-sm mb-5 max-w-xs mx-auto md:mx-0">Creative digital agency building brands, websites, and marketing that drives real growth.</p>
            <div className="flex justify-center md:justify-start gap-2.5">
              <a href="https://www.instagram.com/scalixstudios/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-400 hover:text-white hover:bg-indigo-600 rounded-lg p-2.5 transition-all" aria-label="Instagram"><FaInstagram className="text-lg" /></a>
              <a href="https://www.facebook.com/scalixstudios" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-400 hover:text-white hover:bg-indigo-600 rounded-lg p-2.5 transition-all" aria-label="Facebook"><FaFacebookF className="text-lg" /></a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Pages</h4>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.to}><Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.to}><Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-0.5 flex-shrink-0" /><span>Barry Avenue, Windsor, SL4 5JA</span></li>
              <li className="flex items-center gap-2"><FaEnvelope className="flex-shrink-0" /><a href="mailto:info@scalixstudios.co.uk" className="hover:text-white transition-colors">info@scalixstudios.co.uk</a></li>
              <li className="flex items-center gap-2"><FaPhone className="flex-shrink-0" /><a href="tel:01753257401" className="hover:text-white transition-colors">01753 257401</a></li>
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
