import { Link } from 'react-router-dom'
import { FaCircleCheck, FaMobileScreen, FaCartShopping, FaPaintbrush, FaRocket, FaCode, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaPaintbrush, title: 'Custom Design', desc: 'Designed from scratch for your brand. No templates.' },
  { icon: FaMobileScreen, title: 'Mobile-First', desc: '60%+ of traffic is mobile. We design phones-first.' },
  { icon: FaCartShopping, title: 'E-Commerce', desc: 'Secure shops with smooth checkout flows.' },
  { icon: FaRocket, title: 'Lightning Fast', desc: 'Sub-2-second load times. Speed sells.' },
  { icon: FaCode, title: 'CMS Included', desc: 'Edit your own content, no developer needed.' },
]

const faqs = [
  { q: 'How long does a website take?', a: '4-6 weeks typically. Complex projects with e-commerce may take 8-12 weeks.' },
  { q: 'How much does a website cost?', a: 'From £299 for a professional 4-6 page site. Contact us for a bespoke quote.' },
  { q: 'Will it be optimised for Google?', a: 'Yes. Every site includes full on-page SEO — title tags, meta descriptions, schema markup, and fast load speeds.' },
  { q: 'Do you offer maintenance?', a: 'Yes. Security updates, content changes, performance monitoring, and technical support.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Web Design Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/web-design" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function WebDesign() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Web Design Berkshire | Website Design Windsor & Slough | Scalix Studios" description="Professional web design in Berkshire. Stunning, mobile-responsive websites from £299 for businesses in Windsor, Slough & Reading." keywords="web design berkshire, website design windsor, web developer slough, affordable web design berkshire" canonical="https://www.scalixstudios.co.uk/services/web-design" structuredData={[structuredData, faqStructuredData]} />

      {/* Deep indigo hero with browser mockup */}
      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)' }}>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <nav aria-label="Breadcrumb" className="text-indigo-300 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Web Design</span></nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-indigo-200 text-sm font-medium mb-6">Web Design & Development</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight">Websites That <span className="text-indigo-300">Convert</span></h1>
              <p className="text-xl text-indigo-200 leading-relaxed mb-8">Beautiful, fast, mobile-first websites built for Berkshire businesses.</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all hover:gap-3">Free Quote <FaArrowRight /></Link>
                <Link to="/portfolio" className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">Our Work</Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-2xl float-delay">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400/70" /><div className="w-3 h-3 rounded-full bg-yellow-400/70" /><div className="w-3 h-3 rounded-full bg-green-400/70" /></div>
                  <div className="flex-1 mx-4"><div className="bg-white/10 rounded-md px-3 py-1.5 text-xs text-indigo-300">yourbusiness.co.uk</div></div>
                </div>
                <div className="p-6 space-y-4"><div className="h-4 w-3/4 bg-white/15 rounded" /><div className="h-3 w-full bg-white/10 rounded" /><div className="h-3 w-5/6 bg-white/10 rounded" /><div className="grid grid-cols-3 gap-3 mt-6"><div className="h-20 bg-white/10 rounded-lg" /><div className="h-20 bg-white/10 rounded-lg" /><div className="h-20 bg-white/10 rounded-lg" /></div><div className="h-10 w-40 bg-indigo-500/30 rounded-full mx-auto mt-4" /></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-10 bg-gradient-to-r from-indigo-600 to-violet-600 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 text-center">
            {[{ n: '< 2s', l: 'Load time' }, { n: '100%', l: 'Mobile responsive' }, { n: '60%', l: 'More conversions' }].map((s, i) => (<div key={i}><span className="text-3xl font-extrabold">{s.n}</span><span className="block text-indigo-200 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">What You Get</h2>
            <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto animate-on-scroll">Every website is custom-built with these essentials baked in.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100 glow-card animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform"><f.icon className="text-xl" /></div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">From Brief to Launch</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {[{ n: '01', t: 'Discovery Call', d: 'We learn your business, goals, and audience.' }, { n: '02', t: 'Design & Prototype', d: 'See your site before we write a line of code.' }, { n: '03', t: 'Build & SEO', d: 'Clean, fast code with SEO from the start.' }, { n: '04', t: 'Test & Launch', d: 'Cross-device testing, then a smooth launch.' }].map((s, i) => (
                <div key={i} className="flex gap-5 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}><span className="text-5xl font-extrabold text-indigo-100">{s.n}</span><div><h3 className="font-bold mb-1">{s.t}</h3><p className="text-slate-600 text-sm">{s.d}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">Web Design Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}><summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-indigo-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary><p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p></details>))}</div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Let&apos;s Build Your Dream Website</h2><p className="text-slate-600 mb-6">Free consultation. No pressure, no jargon.</p>
                <ul className="space-y-3 text-slate-600">{['Websites from £299', 'SEO included as standard', 'Ongoing support available'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
