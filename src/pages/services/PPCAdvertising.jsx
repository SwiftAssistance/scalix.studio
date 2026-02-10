import { Link } from 'react-router-dom'
import { FaCircleCheck, FaBullseye, FaChartColumn, FaFileInvoiceDollar, FaRectangleAd, FaArrowTrendUp } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaRectangleAd, title: 'Google Ads Management', desc: 'We set up, manage, and optimise Google Search and Display campaigns that put your business at the top of search results when potential customers are actively looking for your services.' },
  { icon: FaBullseye, title: 'Targeted Social Ads', desc: 'Precision-targeted campaigns on Facebook, Instagram, and LinkedIn that reach your ideal customer based on demographics, interests, behaviours, and location.' },
  { icon: FaFileInvoiceDollar, title: 'Landing Page Optimisation', desc: 'Driving traffic is only half the battle. We optimise your landing pages to maximise conversions, ensuring every click has the best chance of becoming a lead or sale.' },
  { icon: FaChartColumn, title: 'Performance Reporting', desc: 'Transparent, jargon-free monthly reports showing exactly where your budget is going, what results it is generating, and how we are improving performance.' },
  { icon: FaArrowTrendUp, title: 'Ongoing Optimisation', desc: 'We continuously test ad copy, adjust bids, refine targeting, and eliminate wasted spend to improve your return on investment every month.' },
]

const results = [
  { stat: '3x', label: 'Average return on ad spend' },
  { stat: '7 days', label: 'Average time to first lead' },
  { stat: '-40%', label: 'Cost per lead reduction' },
]

const faqs = [
  { q: 'How much should I spend on Google Ads?', a: 'For most local Berkshire businesses, we recommend starting with a minimum ad spend of £300-500 per month. This gives us enough data to optimise your campaigns effectively. We can scale up as we prove ROI. Our management fee is separate from your ad spend.' },
  { q: 'How quickly will I see results from PPC?', a: 'PPC delivers much faster results than SEO. Most clients see their first leads within 7 days of campaign launch. We typically need 2-4 weeks of data to fully optimise targeting and ad copy for best performance.' },
  { q: 'What is the difference between SEO and PPC?', a: 'SEO is a long-term strategy that builds organic traffic over months. PPC gives you immediate visibility by paying for ad placements. The best approach for most businesses is a combination of both — PPC for immediate leads while SEO builds long-term organic growth.' },
  { q: 'Can I set a maximum monthly budget?', a: 'Absolutely. You have full control over your monthly ad spend. We will never exceed your agreed budget. We set daily spending limits and monitor campaigns closely to ensure every pound is working as hard as possible.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "PPC Advertising Services in Berkshire",
  "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
  "areaServed": { "@type": "Place", "name": "Berkshire, UK" },
  "description": "Expert PPC and Google Ads management for Berkshire businesses. We deliver immediate leads and measurable ROI through targeted pay-per-click advertising.",
  "url": "https://www.scalixstudios.co.uk/services/ppc-advertising"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
}

export default function PPCAdvertising() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="PPC Advertising Berkshire | Google Ads Agency Windsor | Scalix Studios"
        description="Expert PPC and Google Ads management for Berkshire businesses. Get immediate leads with targeted pay-per-click advertising. Average 3x return on ad spend. Free consultation."
        keywords="ppc advertising berkshire, google ads agency windsor, ppc management slough, google ads berkshire, pay per click advertising reading, facebook ads berkshire, ppc agency windsor"
        canonical="https://www.scalixstudios.co.uk/services/ppc-advertising"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">PPC Advertising</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">PPC Advertising in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Get immediate leads with precision-targeted Google Ads and social media advertising. Pay only for results, not promises.</p>
      </ParticleHero>

      <main ref={scrollRef}>
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Our PPC Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">Targeted advertising that delivers measurable returns on every pound you invest.</p>
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

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">PPC Questions Answered</h2>
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

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll">
                <h2 className="text-4xl font-bold mb-4">Ready for Immediate Leads?</h2>
                <p className="text-slate-600 mb-6">Get a free PPC audit and discover how much more you could be getting from your advertising budget.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Free campaign audit</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />No long-term contracts</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Full budget transparency</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Get a Free PPC Audit</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
