import { Link } from 'react-router-dom'
import { FaPaintbrush, FaMobileScreen, FaCartShopping, FaRocket, FaCode, FaArrowRight, FaCheck } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import AreasServed from '../../components/AreasServed'

const faqs = [
  { q: 'How long does a website take?', a: '4-6 weeks typically. Complex e-commerce projects may take 8-12 weeks.' },
  { q: 'How much does a website cost?', a: 'From £299 for a professional 4-6 page site. Contact us for a bespoke quote.' },
  { q: 'Will it be optimised for Google?', a: 'Yes. Every site includes full on-page SEO — titles, meta descriptions, schema markup, and fast load speeds.' },
  { q: 'Do you offer maintenance?', a: 'Yes. Security updates, content changes, performance monitoring, and technical support.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Web Design Services in Berkshire", "description": "Professional web design in Berkshire. Stunning, mobile-responsive websites from £299 for businesses in Windsor, Slough & Reading.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }, { "@type": "Place", "name": "Reading" }], "url": "https://www.scalixstudios.co.uk/services/web-design", "serviceType": "Web Design & Development", "offers": { "@type": "Offer", "priceCurrency": "GBP", "price": "299", "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "GBP", "price": "299", "unitText": "starting from" } } }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://www.scalixstudios.co.uk/services/web-design" }] }

export default function WebDesign() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Web Design Berkshire | Website Design Windsor & Slough | Scalix Studios" description="Professional web design in Berkshire. Stunning, mobile-responsive websites from £299 for businesses in Windsor, Slough & Reading." keywords="web design berkshire, website design windsor, web developer slough, affordable web design berkshire" canonical="https://www.scalixstudios.co.uk/services/web-design" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="Web Design" badge="Web Design & Development" title="Websites That" highlight="Convert" description="Beautiful, fast, mobile-first sites from £299. No templates — every pixel is yours." cta="Free Quote" ctaClass="bg-white hover:bg-indigo-50 text-indigo-700" image="/web-development-scalix.webp" imageAlt="Professional responsive website design" />

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-on-scroll">Every website includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { icon: FaPaintbrush, title: 'Custom Design', desc: 'Designed from scratch. No templates, no shortcuts.' },
                { icon: FaMobileScreen, title: 'Mobile-First', desc: '60%+ of traffic is mobile. We design phones-first.' },
                { icon: FaCartShopping, title: 'E-Commerce Ready', desc: 'Secure shops with smooth checkout flows.' },
                { icon: FaRocket, title: 'Lightning Fast', desc: 'Sub-2-second loads. Speed sells.' },
                { icon: FaCode, title: 'CMS Included', desc: 'Edit content yourself. No developer needed.' },
                { icon: FaCheck, title: 'SEO Baked In', desc: 'Schema, meta tags, sitemaps — all done.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <f.icon className="text-indigo-600 text-xl mt-1 flex-shrink-0" />
                  <div><h3 className="font-bold">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">From Brief to Launch</h2>
            <div className="relative">
              <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-indigo-200 -translate-x-1/2" />
              {[
                { t: 'Discovery Call', d: 'We learn your business, goals, and audience over a relaxed chat.' },
                { t: 'Design & Prototype', d: 'See your site before we write a single line of code. Iterate until it is perfect.' },
                { t: 'Build & Optimise', d: 'Clean, fast code with SEO, accessibility, and performance baked in from day one.' },
                { t: 'Test & Launch', d: 'Cross-device testing, staging preview, then a smooth go-live.' },
              ].map((step, i) => (
                <div key={i} className={`relative flex items-start gap-6 mb-12 last:mb-0 animate-on-scroll ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`} style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 z-10 relative md:mx-auto">{i + 1}</div>
                  <div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm"><h3 className="font-bold mb-1">{step.t}</h3><p className="text-slate-600 text-sm">{step.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Quick answers</h2>
            <div className="divide-y divide-slate-200">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">Works even better with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'SEO', desc: 'Get your new site ranking on page 1.', link: '/services/seo' },
                { title: 'Branding', desc: 'A cohesive brand identity for your website.', link: '/services/branding' },
                { title: 'Content Strategy', desc: 'Compelling copy that converts visitors.', link: '/services/content-strategy' },
              ].map((s, i) => (
                <Link key={i} to={s.link} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AreasServed service="Web Design" />

        <section className="bg-slate-900 text-white py-16">
          <div className="container mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s build your dream website</h2>
            <p className="text-slate-400 mb-8">Free consultation. No jargon, no pressure — just ideas.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all hover:gap-3">Get a Free Quote <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
