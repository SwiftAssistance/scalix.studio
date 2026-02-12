import { Link, useParams, Navigate } from 'react-router-dom'
import { FaArrowRight, FaCheck, FaStar, FaPhone } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import areas from '../../data/areas'

export default function AreaPage() {
  const { slug } = useParams()
  const area = areas[slug]
  const scrollRef = useScrollAnimation()

  if (!area) return <Navigate to="/" replace />

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Scalix Studios — Digital Marketing ${area.name}`,
    "description": area.metaDesc,
    "url": `https://www.scalixstudios.co.uk/areas/${area.slug}`,
    "provider": { "@type": "Organization", "name": "Scalix Studios", "@id": "https://www.scalixstudios.co.uk/#localbusiness" },
    "areaServed": { "@type": "Place", "name": `${area.name}, ${area.county}` },
    "serviceType": ["SEO", "Web Design", "PPC Advertising", "Social Media Marketing", "Branding"],
  }
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": area.faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
  }
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
      { "@type": "ListItem", "position": 2, "name": `Digital Marketing ${area.name}`, "item": `https://www.scalixstudios.co.uk/areas/${area.slug}` },
    ]
  }

  return (
    <>
      <SEO
        title={area.metaTitle}
        description={area.metaDesc}
        keywords={area.metaKeywords}
        canonical={`https://www.scalixstudios.co.uk/areas/${area.slug}`}
        structuredData={[structuredData, faqData, breadcrumbData]}
      />

      <ParticleHero className="min-h-[75vh] md:min-h-[85vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">{area.county} Digital Agency</span>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">{area.heroTitle} <span className="gradient-text-teal">{area.heroHighlight}</span></h1>
        <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto px-2 mb-8">{area.heroDesc}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Free Strategy Call <FaArrowRight /></Link>
          <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all">Our Services</Link>
        </div>
      </ParticleHero>

      <main ref={scrollRef}>
        {/* Stats */}
        <section className="bg-slate-900 border-t border-white/10 py-10 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {area.stats.map((s, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="block text-2xl md:text-3xl font-extrabold text-white">{s.value}</span>
                  <span className="block text-slate-400 text-xs mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">Digital Marketing in {area.name}</h2>
            <p className="text-lg text-slate-600 leading-relaxed animate-on-scroll">{area.intro}</p>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Our Services</span>
                <h2 className="text-3xl md:text-5xl font-bold animate-on-scroll">What we do for<br /><span className="gradient-text">{area.name} businesses</span></h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {area.services.map((s, i) => (
                  <Link key={i} to={s.link} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                    <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
                    <span className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm">Learn more <FaArrowRight className="text-xs" /></span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center animate-on-scroll">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-amber-400 text-xl" />)}
            </div>
            <blockquote className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-6">{area.testimonial.text}</blockquote>
            <p className="font-bold text-slate-900">{area.testimonial.name}</p>
            <p className="text-sm text-slate-500">{area.testimonial.role}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {area.faqs.map((f, i) => (
                <details key={i} className="bg-white rounded-xl border border-slate-200 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <summary className="px-6 py-5 font-bold cursor-pointer hover:text-indigo-600 transition-colors">{f.q}</summary>
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">We also serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {area.nearby.map((slug, i) => {
                const nearby = areas[slug]
                if (!nearby) return null
                return (
                  <Link key={slug} to={`/areas/${slug}`} className="bg-slate-50 rounded-xl p-5 text-center border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                    <p className="font-bold">{nearby.name}</p>
                    <p className="text-xs text-slate-500 mt-1">Digital Marketing</p>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, #4c1d95 0%, transparent 50%), radial-gradient(circle at 70% 50%, #1e40af 0%, transparent 50%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Ready to grow your<br />{area.name} business?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">Free strategy call — we'll audit your current digital presence and show you exactly how to get more customers in {area.name}.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Book Free Strategy Call <FaArrowRight /></Link>
                <a href="tel:01753257401" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"><FaPhone /> 01753 257401</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
