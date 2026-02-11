import { Link } from 'react-router-dom'
import { FaRectangleAd, FaBullseye, FaFileInvoiceDollar, FaChartColumn, FaArrowTrendUp, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'How much should I spend on Google Ads?', a: 'We recommend £300-500/month minimum ad spend for local Berkshire businesses. Management fee is separate.' },
  { q: 'How quickly will I see results?', a: 'Most clients see first leads within 7 days. Full optimisation takes 2-4 weeks of data.' },
  { q: 'What is the difference between SEO and PPC?', a: 'SEO builds long-term organic traffic. PPC gives immediate visibility. Best results come from both.' },
  { q: 'Can I set a maximum budget?', a: 'Absolutely. Daily limits and close monitoring ensure we never exceed your agreed budget.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "PPC Advertising Services in Berkshire", "description": "Expert PPC and Google Ads management for Berkshire businesses. Immediate leads with targeted pay-per-click campaigns.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }, { "@type": "Place", "name": "Reading" }], "url": "https://www.scalixstudios.co.uk/services/ppc-advertising", "serviceType": "PPC Advertising" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "PPC Advertising", "item": "https://www.scalixstudios.co.uk/services/ppc-advertising" }] }

export default function PPCAdvertising() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="PPC Advertising Berkshire | Google Ads Agency Windsor | Scalix Studios" description="Expert PPC and Google Ads management for Berkshire businesses. Precision-targeted campaigns delivering immediate leads and an average 3x return on ad spend. Free PPC audit available." keywords="ppc advertising berkshire, google ads agency windsor, ppc management slough, pay per click reading, facebook ads berkshire" canonical="https://www.scalixstudios.co.uk/services/ppc-advertising" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="PPC" badge="Pay-Per-Click Advertising" badgeColor="bg-emerald-500/15 border-emerald-500/30 text-emerald-300" title="Ads That" highlight="Print Money" highlightClass="gradient-text-green" description="Targeted Google & social ads with measurable ROI. Pay for results, not promises." cta="Free PPC Audit" ctaClass="bg-emerald-500 hover:bg-emerald-400 text-white" image="/ppc-advertising-berkshire.webp" imageAlt="PPC advertising campaign dashboard" />

      <main ref={scrollRef}>
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

        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">Works even better with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'SEO', desc: 'Long-term organic growth alongside instant PPC results.', link: '/services/seo' },
                { title: 'Web Design', desc: 'Conversion-optimised landing pages for your ads.', link: '/services/web-design' },
                { title: 'Social Media', desc: 'Retarget ad clickers across social platforms.', link: '/services/social-media-marketing' },
              ].map((s, i) => (
                <Link key={i} to={s.link} className="bg-white rounded-xl p-6 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
