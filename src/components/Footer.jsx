import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col items-center md:items-start">
                <span className="text-3xl font-extrabold text-white leading-none">Scalix</span>
                <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Studios</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">A creative agency dedicated to building impactful digital experiences that drive growth and inspire audiences.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center md:justify-start"><FaMapMarkerAlt className="mr-2" />Barry Avenue, Windsor, SL4 5JA</li>
              <li className="flex items-center justify-center md:justify-start"><FaEnvelope className="mr-2" /><a href="mailto:info@scalixstudios.co.uk" className="hover:text-white transition-colors">info@scalixstudios.co.uk</a></li>
              <li className="flex items-center justify-center md:justify-start"><FaPhone className="mr-2" /><a href="tel:01753257401" className="hover:text-white transition-colors">01753 257401</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/scalixstudios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transform transition-all duration-300 p-2" aria-label="Instagram"><FaInstagram className="text-2xl" /></a>
              <a href="https://www.facebook.com/scalixstudios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-125 transform transition-all duration-300 p-2" aria-label="Facebook"><FaFacebookF className="text-2xl" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Scalix Studios. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
