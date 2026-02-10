import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

export default function ServiceHero({ breadcrumb, badge, badgeColor = 'bg-indigo-500/15 border-indigo-500/30 text-indigo-300', title, highlight, highlightClass = 'gradient-text', description, cta, ctaLink = '/contact', ctaClass = 'bg-indigo-600 hover:bg-indigo-500 text-white', image, imageAlt }) {
  return (
    <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #1a202c 100%)' }}>
      <div className="absolute inset-0 opacity-15" style={{ background: 'radial-gradient(circle at 30% 50%, #6d28d9 0%, transparent 50%), radial-gradient(circle at 80% 80%, #3b82f6 0%, transparent 40%)' }} />
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <nav aria-label="Breadcrumb" className="text-slate-300 text-sm mb-6">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">{breadcrumb}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className={`inline-block px-4 py-1.5 border rounded-full text-sm font-medium mb-6 ${badgeColor}`}>{badge}</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white leading-tight">{title} <span className={highlightClass}>{highlight}</span></h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">{description}</p>
            <Link to={ctaLink} className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:gap-3 ${ctaClass}`}>{cta} <FaArrowRight /></Link>
          </div>
          <div className="hidden lg:block">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-3 shadow-2xl float">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-3 py-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <div className="flex-1 bg-white/5 rounded-md h-5 ml-3" />
              </div>
              <img src={image} alt={imageAlt} width="600" height="400" className="rounded-lg w-full object-cover" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
