import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

const areaLinks = [
  { label: 'Windsor', to: '/areas/windsor' },
  { label: 'Slough', to: '/areas/slough' },
  { label: 'Reading', to: '/areas/reading' },
  { label: 'Maidenhead', to: '/areas/maidenhead' },
  { label: 'Bracknell', to: '/areas/bracknell' },
  { label: 'Wokingham', to: '/areas/wokingham' },
  { label: 'Ascot', to: '/areas/ascot' },
  { label: 'Staines', to: '/areas/staines-upon-thames' },
  { label: 'Egham', to: '/areas/egham' },
  { label: 'Henley', to: '/areas/henley-on-thames' },
  { label: 'Marlow', to: '/areas/marlow' },
  { label: 'High Wycombe', to: '/areas/high-wycombe' },
]

const serviceLinks = [
  { label: 'SEO Services', to: '/services/seo' },
  { label: 'Web Design', to: '/services/web-design' },
  { label: 'Social Media Marketing', to: '/services/social-media-marketing' },
  { label: 'Branding & Creative', to: '/services/branding' },
  { label: 'PPC Advertising', to: '/services/ppc-advertising' },
  { label: 'Content Strategy', to: '/services/content-strategy' },
  { label: 'AI & Automation', to: '/services/ai-automation' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-8">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-1 text-center md:text-left">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.webp" alt="Scalix Studios - Digital Agency in Windsor, Berkshire" width="160" height="40" className="h-10 w-auto mx-auto md:mx-0 footer-logo" loading="lazy" decoding="async" />
            </Link>
            <p className="text-gray-300 text-sm mb-5 max-w-xs mx-auto md:mx-0">Berkshire digital agency specialising in SEO, web design, and marketing that drives real growth for local businesses.</p>
            <div className="flex justify-center md:justify-start gap-3">
              <a href="https://www.instagram.com/scalixstudios/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-300 hover:text-white hover:bg-indigo-600 rounded-lg p-3 transition-all" aria-label="Follow us on Instagram"><FaInstagram className="text-lg" /></a>
              <a href="https://www.facebook.com/scalixstudios" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-300 hover:text-white hover:bg-indigo-600 rounded-lg p-3 transition-all" aria-label="Follow us on Facebook"><FaFacebookF className="text-lg" /></a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Pages</p>
            <ul className="space-y-2.5">
              {pageLinks.map((link) => (
                <li key={link.to}><Link to={link.to} className="text-gray-300 hover:text-white transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Services</p>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.to}><Link to={link.to} className="text-gray-300 hover:text-white transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Areas</p>
            <ul className="space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.to}><Link to={link.to} className="text-gray-300 hover:text-white transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Get in Touch</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-0.5 flex-shrink-0" /><span>Barry Avenue, Windsor, SL4 5JA</span></li>
              <li className="flex items-center gap-2"><FaEnvelope className="flex-shrink-0" /><a href="mailto:info@scalixstudios.co.uk" className="hover:text-white transition-colors">info@scalixstudios.co.uk</a></li>
              <li className="flex items-center gap-2"><FaPhone className="flex-shrink-0" /><a href="tel:01753257401" className="hover:text-white transition-colors">01753 257401</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-5 text-center text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Scalix Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
