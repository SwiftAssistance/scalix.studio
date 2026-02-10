import { Link } from 'react-router-dom'
import { FaMagnifyingGlass, FaLocationDot, FaGears, FaChartLine, FaFileLines, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'How long does SEO take to show results?', a: 'Most businesses see meaningful improvements in 3-6 months. Local SEO for less competitive terms can show results sooner.' },
  { q: 'What is Local SEO?', a: 'Local SEO optimises your presence for nearby searches — so when someone searches "accountant near me" in Windsor, you show up.' },
  { q: 'Do you guarantee first page rankings?', a: 'No ethical agency can guarantee rankings. We guarantee a data-driven approach that has consistently delivered first-page results.' },
  { q: 'What is included?', a: 'Comprehensive audit, keyword research, on-page optimisation, Google Business Profile, content strategy, link building, and monthly reporting.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "SEO Services in Berkshire", "description": "Expert SEO services for businesses in Berkshire, Windsor, Slough & Reading. First-page Google rankings and more qualified leads.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }, { "@type": "Place", "name": "Reading" }], "url": "https://www.scalixstudios.co.uk/services/seo", "serviceType": "Search Engine Optimisation" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "SEO", "item": "https://www.scalixstudios.co.uk/services/seo" }] }

export default function SEOService() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="SEO Services Berkshire | Local SEO Agency Windsor & Slough | Scalix Studios" description="Expert SEO services for businesses in Berkshire, Windsor, Slough & Reading. First-page Google rankings and more qualified leads." keywords="seo services berkshire, local seo windsor, seo agency slough, google ranking berkshire" canonical="https://www.scalixstudios.co.uk/services/seo" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="SEO" badge="SEO Services" title="Get Found on" highlight="Google" description="We help Berkshire businesses climb the rankings and drive real, measurable growth through search." cta="Free SEO Audit" image="/seo-strategy-berkshire.webp" imageAlt="SEO strategy analysis dashboard" />

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">What Happens When SEO Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-200 animate-on-scroll">
              <div className="bg-slate-100 p-10">
                <p className="text-sm font-bold text-red-500 uppercase tracking-wide mb-4">Before</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center gap-3"><span className="text-red-400">&#x2717;</span> Buried on page 5 of Google</li>
                  <li className="flex items-center gap-3"><span className="text-red-400">&#x2717;</span> Competitors taking your leads</li>
                  <li className="flex items-center gap-3"><span className="text-red-400">&#x2717;</span> No idea what keywords matter</li>
                  <li className="flex items-center gap-3"><span className="text-red-400">&#x2717;</span> Paying for ads you shouldn&apos;t need</li>
                </ul>
              </div>
              <div className="bg-indigo-600 text-white p-10">
                <p className="text-sm font-bold text-indigo-200 uppercase tracking-wide mb-4">After</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><span className="text-emerald-300">&#x2713;</span> Page 1 for your target keywords</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-300">&#x2713;</span> 45% more organic traffic</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-300">&#x2713;</span> 3x more qualified leads</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-300">&#x2713;</span> Long-term growth, not rented traffic</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl space-y-20">
            {[
              { icon: FaMagnifyingGlass, title: 'Keyword Research', text: 'We find the exact terms your customers search for in Berkshire — not vanity keywords, but the ones that bring paying customers to your door.', align: 'left' },
              { icon: FaLocationDot, title: 'Local SEO', text: 'Dominate Google Maps and local results for Windsor, Slough, Reading, and beyond. When someone searches "near me", you show up first.', align: 'right' },
              { icon: FaGears, title: 'Technical Audits', text: 'Crawl errors, slow pages, broken links, mobile issues — we find and fix every technical problem holding your rankings back.', align: 'left' },
              { icon: FaChartLine, title: 'On & Off-Page SEO', text: 'From title tags to backlinks, we cover every ranking factor that matters. Nothing is left to chance.', align: 'right' },
              { icon: FaFileLines, title: 'Content That Ranks', text: 'We create keyword-rich pages and blog posts that attract traffic, build authority, and convert visitors into enquiries.', align: 'left' },
            ].map((item, i) => (
              <div key={i} className={`flex flex-col ${item.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 animate-on-scroll`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-20 h-20 bg-indigo-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg"><item.icon className="text-3xl" /></div>
                <div><h3 className="text-2xl font-bold mb-3">{item.title}</h3><p className="text-slate-600 leading-relaxed">{item.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 animate-on-scroll">Common Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to dominate Google?</h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">Free SEO audit. No obligation, no jargon — just a clear picture of where you stand and how to improve.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all hover:gap-3">Get Your Free Audit <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
