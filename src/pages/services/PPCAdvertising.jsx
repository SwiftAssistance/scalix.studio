import { Link } from 'react-router-dom'
import { FaRectangleAd, FaBullseye, FaFileInvoiceDollar, FaChartColumn, FaArrowTrendUp, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'How much should I spend on Google Ads?', a: 'We recommend £300-500/month minimum ad spend for local Berkshire businesses. Management fee is separate.' },
  { q: 'How quickly will I see results?', a: 'Most clients see first leads within 7 days. Full optimisation takes 2-4 weeks of data.' },
  { q: 'What is the difference between SEO and PPC?', a: 'SEO builds long-term organic traffic. PPC gives immediate visibility. Best results come from both.' },
  { q: 'Can I set a maximum budget?', a: 'Absolutely. Daily limits and close monitoring ensure we never exceed your agreed budget.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "PPC Advertising Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/ppc-advertising" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function PPCAdvertising() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="PPC Advertising Berkshire | Google Ads Agency Windsor | Scalix Studios" description="Expert PPC and Google Ads management for Berkshire businesses. Immediate leads with targeted pay-per-click. Average 3x ROAS." keywords="ppc advertising berkshire, google ads agency windsor, ppc management slough, pay per click reading, facebook ads berkshire" canonical="https://www.scalixstudios.co.uk/services/ppc-advertising" structuredData={[structuredData, faqStructuredData]} />

      {/* Dashboard-style hero with metrics built in */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 60% 30%, #10b981 0%, transparent 40%)' }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-slate-400 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">PPC</span></nav>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-none">Ads That <span className="gradient-text-green">Print Money</span></h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-10">Targeted Google & social ads with measurable ROI. Pay for results, not promises.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-all hover:gap-3">Free PPC Audit <FaArrowRight /></Link>
        </div>
      </header>

      <main ref={scrollRef}>
        {/* Full-width dashboard metrics strip */}
        <section className="bg-slate-900 border-t border-emerald-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              {[{ n: '3x', l: 'Average ROAS', c: 'text-emerald-400' }, { n: '7', l: 'Days to first lead', c: 'text-cyan-400' }, { n: '-40%', l: 'Cost per lead', c: 'text-emerald-400' }, { n: '£0', l: 'Wasted spend', c: 'text-cyan-400' }].map((m, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className={`text-4xl md:text-5xl font-extrabold ${m.c}`}>{m.n}</p>
                  <p className="text-slate-400 text-sm mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two-column deep-dive features — not a card grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 animate-on-scroll">What we manage</h2>
            <div className="space-y-16">
              {[
                { icon: FaRectangleAd, title: 'Google Ads', desc: 'Search & Display campaigns that put your business at the top of results when customers are actively looking. We handle keyword selection, ad copy, bid management, and conversion tracking.' },
                { icon: FaBullseye, title: 'Social Ads', desc: 'Precision-targeted campaigns on Facebook, Instagram, and LinkedIn. We reach your ideal customer by demographics, interests, behaviour, and location — maximising every pound.' },
                { icon: FaFileInvoiceDollar, title: 'Landing Page Optimisation', desc: 'Driving traffic is half the battle. We optimise your landing pages to maximise conversions — ensuring every click has the best chance of becoming a lead or sale.' },
                { icon: FaChartColumn, title: 'Transparent Reporting', desc: 'Jargon-free monthly reports showing exactly where your budget goes, what results it generates, and how we are improving performance over time.' },
                { icon: FaArrowTrendUp, title: 'Continuous Optimisation', desc: 'We test ad copy, adjust bids, refine targeting, and eliminate wasted spend. Your campaigns get better every single month.' },
              ].map((f, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0"><f.icon className="text-2xl" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ as side-by-side columns */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Common questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark CTA strip */}
        <section className="bg-emerald-600 text-white py-16">
          <div className="container mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop wasting ad spend</h2>
            <p className="text-emerald-100 mb-8 max-w-xl mx-auto">Free PPC audit — we&apos;ll show you exactly where your budget is leaking and how to fix it.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold hover:bg-emerald-50 transition-all hover:gap-3">Get Your Free Audit <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
