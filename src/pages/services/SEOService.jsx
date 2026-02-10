import { Link } from 'react-router-dom'
import { FaCircleCheck, FaChartLine, FaMagnifyingGlass, FaLocationDot, FaGears, FaFileLines } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaMagnifyingGlass, title: 'Keyword Research & Strategy', desc: 'We identify the exact search terms your ideal customers use to find businesses like yours in Berkshire, then build a strategy to rank for them.' },
  { icon: FaLocationDot, title: 'Local SEO for Berkshire', desc: 'Dominate Google Maps and local search results. We optimise your Google Business Profile, build local citations, and target geo-specific keywords for Windsor, Slough, Reading, and surrounding areas.' },
  { icon: FaGears, title: 'Technical SEO Audits', desc: 'We audit your site for crawl errors, slow page speeds, broken links, and mobile usability issues that silently kill your rankings.' },
  { icon: FaChartLine, title: 'On-Page & Off-Page SEO', desc: 'From optimising title tags and meta descriptions to building high-quality backlinks, we cover every ranking factor that matters.' },
  { icon: FaFileLines, title: 'Content Optimisation', desc: 'We optimise your existing content and create new, keyword-rich pages that attract organic traffic and establish your authority in your industry.' },
]

const results = [
  { stat: 'Page 1', label: 'Google rankings for key local terms' },
  { stat: '45%', label: 'Average increase in organic traffic' },
  { stat: '3x', label: 'More qualified leads from search' },
]

const faqs = [
  { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. Most businesses start seeing meaningful improvements in rankings and traffic within 3-6 months. However, local SEO for less competitive terms can show results even sooner. We provide monthly reports so you can track progress from day one.' },
  { q: 'What is Local SEO and why does my Berkshire business need it?', a: 'Local SEO focuses on optimising your online presence to attract more business from relevant local searches. When someone in Windsor searches for "accountant near me" or "web designer in Slough," local SEO ensures your business appears prominently in those results. For any business serving a local area, it is essential.' },
  { q: 'Do you guarantee first page rankings on Google?', a: 'No ethical SEO agency can guarantee specific rankings, as Google\'s algorithm considers hundreds of factors. What we do guarantee is a data-driven, best-practice approach that has consistently delivered first-page results for our clients across Berkshire.' },
  { q: 'What is included in your SEO service?', a: 'Our SEO service includes a comprehensive audit, keyword research, on-page optimisation, Google Business Profile management, content strategy, link building, and detailed monthly performance reporting. Every strategy is tailored to your specific business goals.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "SEO Services in Berkshire",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Scalix Studios",
    "url": "https://www.scalixstudios.co.uk"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Berkshire, UK"
  },
  "description": "Expert SEO services for businesses in Berkshire. We specialise in local SEO, technical audits, and content optimisation to help you rank higher on Google.",
  "url": "https://www.scalixstudios.co.uk/services/seo"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
}

export default function SEOService() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="SEO Services Berkshire | Local SEO Agency Windsor & Slough | Scalix Studios"
        description="Expert SEO services for businesses in Berkshire, Windsor, Slough & Reading. We deliver first-page Google rankings, increased organic traffic, and more qualified leads. Free SEO audit available."
        keywords="seo services berkshire, local seo windsor, seo agency slough, seo company reading, google ranking berkshire, seo consultant windsor, local seo berkshire, search engine optimisation berkshire"
        canonical="https://www.scalixstudios.co.uk/services/seo"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">SEO</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">SEO Services in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Get found on Google by the customers who matter most. We help Berkshire businesses climb the rankings and drive real, measurable growth.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        {/* Results Bar */}
        <section className="py-12 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {results.map((r, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="text-5xl font-extrabold">{r.stat}</p>
                  <p className="text-indigo-100 mt-2">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Our SEO Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">A comprehensive, results-driven approach to search engine optimisation tailored for local businesses.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-8 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="bg-indigo-100 text-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                    <f.icon className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-slate-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">How We Get You to Page 1</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { step: '01', title: 'Discovery & Audit', desc: 'We analyse your current online presence, your competitors, and the search landscape in your local area to identify the biggest opportunities.' },
                { step: '02', title: 'Strategy & Keywords', desc: 'We build a custom SEO roadmap targeting the keywords that will drive the most valuable traffic to your business.' },
                { step: '03', title: 'Optimisation & Content', desc: 'We implement on-page changes, fix technical issues, and create or optimise content to align with your target keywords.' },
                { step: '04', title: 'Report & Refine', desc: 'Every month you receive a clear report showing your ranking improvements, traffic growth, and the work completed. We continually refine the strategy based on data.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-6 items-start animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="bg-indigo-600 text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">SEO Questions Answered</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-slate-50 p-6 rounded-lg animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <summary className="font-semibold text-lg flex justify-between items-center cursor-pointer list-none">
                    {faq.q}
                    <span className="text-indigo-500 transition-transform duration-300 group-open:rotate-45 text-xl">+</span>
                  </summary>
                  <p className="mt-4 text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-4xl font-bold mb-4">Ready to Dominate Google in Berkshire?</h2>
                <p className="text-slate-600 mb-6">Get a free, no-obligation SEO audit of your website. We'll show you exactly where you're losing traffic and how to fix it.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Free SEO audit and competitor analysis</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />No contracts, cancel anytime</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Monthly reporting you can actually understand</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Get Your Free SEO Audit</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
