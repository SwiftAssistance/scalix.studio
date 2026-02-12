import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar, FaMapLocationDot, FaHandshake, FaChartLine, FaUsers, FaHeart, FaBullseye, FaLightbulb, FaShieldHalved } from 'react-icons/fa6'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const values = [
  { icon: FaChartLine, title: 'Results First', desc: 'Every decision is driven by data and measured by outcomes. We don\'t chase vanity metrics — we chase revenue, leads, and growth that matters to your business.' },
  { icon: FaHandshake, title: 'Total Transparency', desc: 'No jargon, no hidden fees, no lock-in contracts. You\'ll always know exactly what we\'re doing, why we\'re doing it, and what results it\'s delivering.' },
  { icon: FaHeart, title: 'Genuine Partnership', desc: 'We treat your business like our own. Your success is our success, and we\'re invested in building long-term relationships, not quick wins.' },
  { icon: FaLightbulb, title: 'Continuous Innovation', desc: 'Digital marketing evolves fast. We stay ahead of algorithm changes, new platforms, and emerging trends so your strategy is always cutting-edge.' },
]

const stats = [
  { value: '50+', label: 'Projects delivered' },
  { value: '5.0', label: 'Google rating' },
  { value: '100%', label: 'Clients on page 1' },
  { value: '0', label: 'Lock-in contracts' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Scalix Studios",
  "description": "Learn about Scalix Studios — Berkshire's leading digital marketing agency. Based in Windsor, we deliver SEO, web design, PPC, and branding for local businesses.",
  "url": "https://www.scalixstudios.co.uk/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Scalix Studios",
    "url": "https://www.scalixstudios.co.uk",
    "foundingLocation": { "@type": "Place", "name": "Windsor, Berkshire" },
    "areaServed": ["Windsor", "Slough", "Reading", "Maidenhead", "Bracknell", "Berkshire", "Thames Valley"],
    "knowsAbout": ["SEO", "Web Design", "PPC Advertising", "Social Media Marketing", "Branding", "Content Strategy", "AI Automation"],
  }
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.scalixstudios.co.uk/about" },
  ]
}

export default function About() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="About Scalix Studios | Berkshire Digital Marketing Agency | Windsor"
        description="Scalix Studios is Berkshire's leading digital agency, based in Windsor. We help local businesses across Slough, Reading, Maidenhead & Bracknell grow with expert SEO, web design, PPC & branding."
        keywords="about scalix studios, digital agency berkshire, marketing agency windsor, who we are, berkshire web designers, local seo agency"
        canonical="https://www.scalixstudios.co.uk/about"
        structuredData={[structuredData, breadcrumbData]}
      />

      <ParticleHero className="min-h-[75vh] md:min-h-[85vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">About Us</span>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">We Build Brands That<br /><span className="gradient-text-teal">Dominate Online</span></h1>
        <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto px-2">A small agency with big results. Based in Windsor, serving businesses across Berkshire and beyond.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        {/* Stats bar */}
        <section className="bg-slate-900 border-t border-white/10 py-10 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {stats.map((s, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="block text-2xl md:text-3xl font-extrabold text-white">{s.value}</span>
                  <span className="block text-slate-400 text-xs mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 animate-on-scroll">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed animate-on-scroll">
              <p>Scalix Studios was founded with a simple belief: local businesses deserve the same quality digital marketing as the big brands — without the big agency price tag or the corporate runaround.</p>
              <p>Based in Windsor, we've grown from a one-person operation into a full-service digital team covering SEO, web design, PPC advertising, social media, branding, content strategy, and AI automation. Every service under one roof, with direct access to the people doing the work.</p>
              <p>We've now delivered over 50 projects for businesses across Berkshire and the Thames Valley — from accountants in Slough to furniture makers in Windsor, fencing companies in Hampshire to medical clinics right here in our community. Every single SEO client has achieved page 1 rankings.</p>
              <p>We're not the biggest agency. We're the one that actually picks up the phone, explains things in plain English, and cares whether your campaign is working as hard as it should be.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Our Values</span>
                <h2 className="text-3xl md:text-5xl font-bold animate-on-scroll">What drives <span className="gradient-text">everything</span> we do</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((v, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-indigo-200 hover:shadow-lg transition-all animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                    <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-5">
                      <v.icon className="text-xl" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">Full-Service Digital Marketing</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'SEO', desc: 'Page 1 rankings & organic growth', link: '/services/seo' },
                { title: 'Web Design', desc: 'Conversion-focused modern websites', link: '/services/web-design' },
                { title: 'PPC Advertising', desc: 'Google Ads & social campaigns', link: '/services/ppc-advertising' },
                { title: 'Social Media', desc: 'Content, ads & community', link: '/services/social-media-marketing' },
                { title: 'Branding', desc: 'Logo, identity & guidelines', link: '/services/branding' },
                { title: 'Content Strategy', desc: 'Blog posts & copywriting', link: '/services/content-strategy' },
              ].map((s, i) => (
                <Link key={i} to={s.link} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Areas we serve */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-on-scroll">Areas We Serve</h2>
            <p className="text-center text-slate-600 mb-12 animate-on-scroll">Based in Windsor, we help businesses across the whole of Berkshire and the Thames Valley.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: 'Windsor', slug: 'windsor' },
                { name: 'Slough', slug: 'slough' },
                { name: 'Reading', slug: 'reading' },
                { name: 'Maidenhead', slug: 'maidenhead' },
                { name: 'Bracknell', slug: 'bracknell' },
              ].map((a, i) => (
                <Link key={a.slug} to={`/areas/${a.slug}`} className="bg-white rounded-xl p-5 text-center border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <FaMapLocationDot className="text-indigo-500 text-lg mx-auto mb-2" />
                  <p className="font-bold text-sm">{a.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, #4c1d95 0%, transparent 50%), radial-gradient(circle at 70% 50%, #1e40af 0%, transparent 50%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Let's talk about<br />growing your business</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">Free strategy call — no pressure, no jargon. We'll audit your current setup and show you where the opportunities are.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Book Free Strategy Call <FaArrowRight /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
