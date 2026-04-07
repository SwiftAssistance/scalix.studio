import { Link } from 'react-router-dom'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import areas from '../../data/areas'

const areaList = Object.values(areas)

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://scalixstudios.co.uk/areas" },
  ]
}

const itemListData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Areas Served by Scalix Studios",
  "description": "Scalix Studios provides SEO, web design, and digital marketing to businesses in Windsor, Slough, Reading, Maidenhead, Bracknell, Wokingham, Ascot, Staines-upon-Thames, Egham, Henley-on-Thames, Marlow, and High Wycombe.",
  "itemListElement": areaList.map((area, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": `Digital Marketing ${area.name}`,
    "url": `https://scalixstudios.co.uk/areas/${area.slug}`
  }))
}

export default function Areas() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Areas We Serve | Digital Marketing Across Berkshire & Thames Valley | Scalix Studios"
        description="Scalix Studios delivers expert SEO, web design, PPC advertising, and branding to businesses across Berkshire, Surrey, and the Thames Valley — including Windsor, Slough, Reading, Maidenhead, Bracknell, Wokingham, Ascot, Staines-upon-Thames, Egham, Henley-on-Thames, Marlow, and High Wycombe."
        canonical="https://scalixstudios.co.uk/areas"
        structuredData={[breadcrumbData, itemListData]}
      />

      <ParticleHero className="min-h-[65vh]">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">
          Berkshire, Surrey &amp; Thames Valley
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold mb-6 text-white leading-tight">
          Areas We <span className="gradient-text-teal">Serve</span>
        </h1>
        <p className="text-base md:text-xl text-blue-100/90 leading-relaxed max-w-2xl mx-auto px-2">
          Scalix Studios provides SEO, web design, PPC advertising, and branding to businesses across
          Berkshire, Surrey, and the Thames Valley. Based in Windsor, we serve clients within
          a 30-mile radius including Slough, Reading, Maidenhead, Bracknell, and beyond.
        </p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-slate-600 leading-relaxed">
              Scalix Studios is a digital marketing agency based at Barry Avenue, Windsor, Berkshire (SL4 5JA).
              The agency specialises in local SEO, website design, Google Ads management, social media marketing,
              and brand identity design for tradespeople and small businesses across Berkshire, Surrey,
              Buckinghamshire, and Oxfordshire. Services are available both remotely and with in-person
              meetings across the Thames Valley.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">
              Digital Marketing by Location
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {areaList.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all animate-on-scroll"
                >
                  <p className="text-xs text-slate-500 mb-1 uppercase tracking-wide">{area.county}</p>
                  <h2 className="text-xl font-bold mb-2">Digital Marketing {area.name}</h2>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    SEO, web design, PPC advertising, and branding for {area.name} businesses.
                  </p>
                  <span className="text-indigo-600 font-semibold text-sm">
                    View {area.name} digital marketing services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, #4c1d95 0%, transparent 50%)' }} />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-4 animate-on-scroll">
              Not sure if we cover your area?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto animate-on-scroll">
              We work with businesses within a 30-mile radius of Windsor and accept remote
              clients from anywhere in the UK.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
