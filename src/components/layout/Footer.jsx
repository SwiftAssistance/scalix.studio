import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <h3 className="font-display text-3xl font-bold text-gradient">
                Scalix
              </h3>
            </Link>
            <p className="text-gray-soft mb-6">
              Award-winning creative marketing agency based in Berkshire. We help ambitious brands scale through strategy, design, and marketing.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal hover:bg-coral transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal hover:bg-coral transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-charcoal hover:bg-coral transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-soft hover:text-coral transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-soft">
              <li className="hover:text-coral transition-colors duration-300 cursor-pointer">
                SEO & Search Marketing
              </li>
              <li className="hover:text-coral transition-colors duration-300 cursor-pointer">
                Social Media Management
              </li>
              <li className="hover:text-coral transition-colors duration-300 cursor-pointer">
                Brand Identity
              </li>
              <li className="hover:text-coral transition-colors duration-300 cursor-pointer">
                Web Design & Development
              </li>
              <li className="hover:text-coral transition-colors duration-300 cursor-pointer">
                Marketing Strategy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-soft">
                <Mail size={18} className="mt-1 flex-shrink-0 text-coral" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-coral transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-soft">
                <Phone size={18} className="mt-1 flex-shrink-0 text-coral" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                  className="hover:text-coral transition-colors duration-300"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-soft">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-coral" />
                <span>{CONTACT_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-soft text-sm">
            <p>© {currentYear} Scalix Studios. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="hover:text-coral transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-coral transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
