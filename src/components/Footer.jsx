import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center md:text-left">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-extrabold text-white leading-none">Scalix</span>
                <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Studios</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">A creative agency dedicated to building impactful digital experiences that drive growth and inspire audiences.</p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a href="https://www.instagram.com/scalixstudios/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-400 hover:text-white hover:bg-indigo-600 rounded-lg p-2.5 transition-all duration-300" aria-label="Instagram"><FaInstagram className="text-lg" /></a>
              <a href="https://www.facebook.com/scalixstudios" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-gray-400 hover:text-white hover:bg-indigo-600 rounded-lg p-2.5 transition-all duration-300" aria-label="Facebook"><FaFacebookF className="text-lg" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Pages</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">Case Studies</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services/seo" className="text-gray-400 hover:text-white transition-colors text-sm">SEO</Link></li>
              <li><Link to="/services/web-design" className="text-gray-400 hover:text-white transition-colors text-sm">Web Design</Link></li>
              <li><Link to="/services/social-media-marketing" className="text-gray-400 hover:text-white transition-colors text-sm">Social Media</Link></li>
              <li><Link to="/services/branding" className="text-gray-400 hover:text-white transition-colors text-sm">Branding</Link></li>
              <li><Link to="/services/ppc-advertising" className="text-gray-400 hover:text-white transition-colors text-sm">PPC Advertising</Link></li>
              <li><Link to="/services/content-strategy" className="text-gray-400 hover:text-white transition-colors text-sm">Content Strategy</Link></li>
              <li><Link to="/services/ai-automation" className="text-gray-400 hover:text-white transition-colors text-sm">AI &amp; Automation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start justify-center md:justify-start gap-2"><FaMapMarkerAlt className="mt-0.5 flex-shrink-0" /><span>Barry Avenue, Windsor, SL4 5JA</span></li>
              <li className="flex items-center justify-center md:justify-start gap-2"><FaEnvelope className="flex-shrink-0" /><a href="mailto:info@scalixstudios.co.uk" className="hover:text-white transition-colors">info@scalixstudios.co.uk</a></li>
              <li className="flex items-center justify-center md:justify-start gap-2"><FaPhone className="flex-shrink-0" /><a href="tel:01753257401" className="hover:text-white transition-colors">01753 257401</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Scalix Studios. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
