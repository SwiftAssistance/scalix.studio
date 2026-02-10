import { Link } from 'react-router-dom'
import { FaCircleCheck, FaChartLine, FaMagnifyingGlass, FaLocationDot, FaGears, FaFileLines, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaMagnifyingGlass, title: 'Keyword Research', desc: 'We find the exact terms your customers search for in Berkshire.' },
  { icon: FaLocationDot, title: 'Local SEO', desc: 'Dominate Google Maps and local results for Windsor, Slough, and Reading.' },
  { icon: FaGears, title: 'Technical Audits', desc: 'Fix crawl errors, speed issues, and mobile problems killing your rankings.' },
  { icon: FaChartLine, title: 'On & Off-Page', desc: 'Title tags to backlinks — we cover every ranking factor that matters.' },
  { icon: FaFileLines, title: 'Content Optimisation', desc: 'Keyword-rich pages that attract traffic and build authority.' },
]

const faqs = [
  { q: 'How long does SEO take to show results?', a: 'Most businesses see meaningful improvements in 3-6 months. Local SEO for less competitive terms can show results sooner.' },
  { q: 'What is Local SEO?', a: 'Local SEO optimises your presence for nearby searches. When someone searches "accountant near me" in Windsor, local SEO ensures you appear prominently.' },
  { q: 'Do you guarantee first page rankings?', a: 'No ethical agency can guarantee rankings. We guarantee a data-driven approach that has consistently delivered first-page results for our Berkshire clients.' },
  { q: 'What is included?', a: 'Comprehensive audit, keyword research, on-page optimisation, Google Business Profile management, content strategy, link building, and monthly reporting.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "SEO Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/seo" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function SEOService() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="SEO Services Berkshire | Local SEO Agency Windsor & Slough | Scalix Studios" description="Expert SEO services for businesses in Berkshire, Windsor, Slough & Reading. First-page Google rankings and more qualified leads." keywords="seo services berkshire, local seo windsor, seo agency slough, google ranking berkshire" canonical="https://www.scalixstudios.co.uk/services/seo" structuredData={[structuredData, faqStructuredData]} />

      {/* Dark hero with search ranking mockup */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, #6d28d9 0%, transparent 50%), radial-gradient(circle at 70% 80%, #3b82f6 0%, transparent 50%)' }} />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-slate-400 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">SEO</span></nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-indigo-500/15 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-medium mb-6">Search Engine Optimisation</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Get Found on <span className="gradient-text">Google</span></h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">We help Berkshire businesses climb the rankings and drive real, measurable growth.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-500 transition-all hover:gap-3">Free SEO Audit <FaArrowRight /></Link>
            </div>
            {/* Search results mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 float">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 mb-4"><FaMagnifyingGlass className="text-slate-400" /><span className="text-slate-300 text-sm">seo agency berkshire</span></div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-indigo-600/20 border border-indigo-500/30 rounded-lg"><div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-xs font-bold">1</div><div><p className="text-sm font-semibold">Scalix Studios — SEO Berkshire</p><p className="text-xs text-slate-400">scalixstudios.co.uk</p></div></div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg opacity-50"><div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center text-xs">2</div><div><div className="h-3 w-40 bg-slate-700 rounded" /><div className="h-2 w-24 bg-slate-700 rounded mt-1.5" /></div></div>
                  <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg opacity-30"><div className="w-5 h-5 bg-slate-600 rounded-full flex items-center justify-center text-xs">3</div><div><div className="h-3 w-36 bg-slate-700 rounded" /><div className="h-2 w-20 bg-slate-700 rounded mt-1.5" /></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl">
            {[{ s: 'Page 1', l: 'Google rankings', c: 'text-indigo-600' }, { s: '45%', l: 'Organic traffic increase', c: 'text-blue-600' }, { s: '3x', l: 'More qualified leads', c: 'text-violet-600' }].map((r, i) => (
              <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}><p className={`text-6xl font-extrabold ${r.c}`}>{r.s}</p><p className="text-slate-500 mt-2">{r.l}</p></div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll">What&apos;s Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border-l-4 border-indigo-600 glow-card animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <f.icon className="text-2xl text-indigo-600 mb-4" /><h3 className="text-lg font-bold mb-2">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">How We Get You to <span className="gradient-text">Page 1</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[{ s: '01', t: 'Audit', d: 'Deep-dive into your site and competitors.' }, { s: '02', t: 'Strategy', d: 'Custom keyword roadmap for your market.' }, { s: '03', t: 'Optimise', d: 'On-page, technical fixes, and content.' }, { s: '04', t: 'Report', d: 'Monthly ranking and traffic reports.' }].map((s, i) => (
                <div key={i} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">{s.s}</div>
                  <h3 className="font-bold mb-1">{s.t}</h3><p className="text-slate-600 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">SEO Questions Answered</h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white p-5 rounded-xl border border-slate-200 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-indigo-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Ready to Dominate Google?</h2><p className="text-slate-600 mb-6">Free, no-obligation SEO audit. We&apos;ll show you exactly where you&apos;re losing traffic.</p>
                <ul className="space-y-3 text-slate-600">{['Free audit & competitor analysis', 'No contracts, cancel anytime', 'Reports you actually understand'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Get Your Free SEO Audit</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
