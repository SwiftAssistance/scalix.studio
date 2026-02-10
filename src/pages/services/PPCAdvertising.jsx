import { Link } from 'react-router-dom'
import { FaCircleCheck, FaBullseye, FaChartColumn, FaFileInvoiceDollar, FaRectangleAd, FaArrowTrendUp, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaRectangleAd, title: 'Google Ads', desc: 'Search & Display campaigns that put you at the top.', color: 'from-emerald-400 to-cyan-500' },
  { icon: FaBullseye, title: 'Social Ads', desc: 'Precision-targeted Facebook, Instagram & LinkedIn ads.', color: 'from-cyan-400 to-blue-500' },
  { icon: FaFileInvoiceDollar, title: 'Landing Pages', desc: 'Conversion-optimised pages for every campaign.', color: 'from-green-400 to-emerald-500' },
  { icon: FaChartColumn, title: 'Reporting', desc: 'Transparent monthly reports — no jargon, just results.', color: 'from-teal-400 to-cyan-500' },
  { icon: FaArrowTrendUp, title: 'Optimisation', desc: 'Continuous A/B testing and bid refinement.', color: 'from-lime-400 to-green-500' },
]

const faqs = [
  { q: 'How much should I spend on Google Ads?', a: 'We recommend £300-500/month minimum ad spend for local Berkshire businesses. Management fee is separate from ad spend.' },
  { q: 'How quickly will I see results?', a: 'Most clients see first leads within 7 days. Full optimisation takes 2-4 weeks of data.' },
  { q: 'What is the difference between SEO and PPC?', a: 'SEO builds long-term organic traffic. PPC gives immediate visibility. Best results come from combining both.' },
  { q: 'Can I set a maximum budget?', a: 'Absolutely. Daily limits and close monitoring ensure we never exceed your agreed budget.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "PPC Advertising Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/ppc-advertising" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function PPCAdvertising() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="PPC Advertising Berkshire | Google Ads Agency Windsor | Scalix Studios" description="Expert PPC and Google Ads management for Berkshire businesses. Immediate leads with targeted pay-per-click. Average 3x ROAS." keywords="ppc advertising berkshire, google ads agency windsor, ppc management slough, pay per click reading, facebook ads berkshire" canonical="https://www.scalixstudios.co.uk/services/ppc-advertising" structuredData={[structuredData, faqStructuredData]} />

      {/* Dark dashboard hero with neon accents */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 60% 30%, #10b981 0%, transparent 40%), radial-gradient(circle at 30% 70%, #06b6d4 0%, transparent 40%)' }} />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-slate-400 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">PPC Advertising</span></nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-emerald-500/15 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium mb-6">Pay-Per-Click Advertising</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">Ads That <span className="gradient-text-green">Print Money</span></h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">Targeted Google & social ads that deliver immediate leads with measurable ROI for Berkshire businesses.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all hover:gap-3">Free PPC Audit <FaArrowRight /></Link>
            </div>
            {/* Dashboard mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 float">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">Campaign Dashboard</span>
                  <span className="text-xs text-emerald-400 bg-emerald-500/15 px-2 py-1 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg p-3"><p className="text-xs text-slate-400">Conversions</p><p className="text-xl font-bold text-emerald-400">127</p><p className="text-xs text-emerald-400">+34%</p></div>
                  <div className="bg-white/5 rounded-lg p-3"><p className="text-xs text-slate-400">ROAS</p><p className="text-xl font-bold text-cyan-400">3.2x</p><p className="text-xs text-cyan-400">+18%</p></div>
                </div>
                {/* Mini chart bars */}
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 55, 35, 65, 50, 75, 60, 80, 70, 90, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-emerald-500/40 to-emerald-400/80 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-10 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 text-center">
            {[{ n: '3x', l: 'Average ROAS' }, { n: '7 days', l: 'To first lead' }, { n: '-40%', l: 'Cost per lead' }].map((s, i) => (<div key={i}><span className="text-3xl font-extrabold">{s.n}</span><span className="block text-emerald-100 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">What We Manage</h2>
            <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto animate-on-scroll">Every pound tracked, every campaign optimised.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-slate-100 glow-card animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}><f.icon className="text-xl" /></div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">How We Deliver Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[{ s: '01', t: 'Audit', d: 'We analyse your current ads and competitors.' }, { s: '02', t: 'Build', d: 'Campaigns, ad copy, and targeting set up.' }, { s: '03', t: 'Launch', d: 'Ads go live — first leads within days.' }, { s: '04', t: 'Optimise', d: 'Continuous testing, monthly reporting.' }].map((s, i) => (
                <div key={i} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">{s.s}</div>
                  <h3 className="font-bold mb-1">{s.t}</h3><p className="text-slate-600 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">PPC Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}><summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-emerald-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary><p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p></details>))}</div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Ready for Immediate Leads?</h2><p className="text-slate-600 mb-6">Free PPC audit — we&apos;ll show you exactly where you&apos;re wasting budget.</p>
                <ul className="space-y-3 text-slate-600">{['Free campaign audit', 'No long-term contracts', 'Full budget transparency'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Get a Free PPC Audit</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
