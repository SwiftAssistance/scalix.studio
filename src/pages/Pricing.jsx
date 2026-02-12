import { FaCheck, FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ParticleHero from '../components/ParticleHero'
import useScrollAnimation from '../hooks/useScrollAnimation'

const monthlyPlans = [
  { name: 'Local SEO', desc: 'Dominate local search', price: '£149', period: '/month', prefix: 'From ', features: ['Google Business Profile Optimisation','Local Keyword Tracking','Monthly Performance Report'] },
  { name: 'Social Media', desc: 'Engage your community', price: '£199', period: '/month', prefix: 'From ', features: ['Management of 2 Platforms','Custom Content Creation','Monthly Content Calendar'] },
  { name: 'Google Ads', desc: 'Get immediate leads', price: '£249', period: '/month + Ad Spend', prefix: 'From ', features: ['Full Campaign Setup','Ongoing Management & Optimisation','Detailed Monthly Reporting'] },
]

const websitePackages = [
  { name: 'Starter', desc: 'Perfect for new businesses', price: '£299', prefix: 'From ', features: ['4-6 Page Website','Full SEO Optimisation','Mobile Responsive'], popular: false },
  { name: 'Growth', desc: 'For businesses ready to scale', price: '£499', prefix: 'From ', features: ['Unlimited Page Website','Full SEO Optimisation','Branding Kit'], popular: true },
  { name: 'Enterprise', desc: 'Custom solutions', price: "Let's Talk", prefix: '', features: ['Unlimited Pages','Advanced Features','Dedicated Support'], popular: false },
]

const pricingFaqs = [
  { q: 'Are there any hidden fees or setup costs?', a: 'No. The price you see is the price you pay. We believe in complete transparency — no hidden fees, no surprise charges.' },
  { q: 'Do I need to sign a long-term contract?', a: 'No. All our monthly services are rolling contracts with no lock-in period. You stay because we deliver results, not because you\'re tied in.' },
  { q: 'Can I upgrade or change my plan later?', a: 'Absolutely. Many clients start with one service and add more as they grow. We\'ll always recommend what makes sense for your budget and goals.' },
  { q: 'What payment methods do you accept?', a: 'We accept bank transfer and card payments. Monthly services are billed at the start of each month. Website projects require a 50% deposit.' },
]

const pricingStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Pricing | Scalix Studios",
  "description": "Transparent pricing for web design and SEO services in Berkshire.",
  "url": "https://www.scalixstudios.co.uk/pricing",
  "mainEntity": {
    "@type": "OfferCatalog",
    "name": "Scalix Studios Service Packages",
    "itemListElement": [
      ...monthlyPlans.map(p => ({
        "@type": "Offer",
        "name": p.name,
        "description": `${p.desc}. Includes: ${p.features.join(', ')}`,
        "priceCurrency": "GBP",
        "price": p.price.replace('£', ''),
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "GBP", "price": p.price.replace('£', ''), "unitText": "per month" }
      })),
      ...websitePackages.filter(p => p.price !== "Let's Talk").map(p => ({
        "@type": "Offer",
        "name": `${p.name} Website`,
        "description": `${p.desc}. Includes: ${p.features.join(', ')}`,
        "priceCurrency": "GBP",
        "price": p.price.replace('£', ''),
        "priceSpecification": { "@type": "PriceSpecification", "priceCurrency": "GBP", "price": p.price.replace('£', ''), "unitText": "one-time" }
      }))
    ]
  }
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": pricingFaqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.scalixstudios.co.uk/pricing" }
  ]
}

export default function Pricing() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Pricing | Scalix Studios | Affordable Web Design & SEO in Berkshire"
        description="Transparent pricing for web design, SEO, PPC and social media marketing in Berkshire. Websites from £299, SEO from £149/month. No hidden fees, no lock-in contracts."
        keywords="web design pricing, seo packages berkshire, affordable websites windsor, scalix studios pricing, digital marketing costs, seo cost uk"
        canonical="https://www.scalixstudios.co.uk/pricing"
        structuredData={[pricingStructuredData, faqStructuredData, breadcrumbData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-blue-200 mb-6">Pricing</span>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Simple, Transparent Pricing</h1>
        <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">Affordable plans designed to help your local business grow. No hidden fees, no lock-in contracts.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        {/* Monthly Plans */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Monthly Services</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Affordable Monthly Marketing</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">Grow your business consistently with our ongoing support packages.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {monthlyPlans.map((plan, i) => (
                <div key={i} className="pricing-card bg-white rounded-2xl shadow-lg p-8 flex flex-col border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-slate-500 text-base font-medium">{plan.prefix}</span>
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-slate-500">{plan.period}</span>
                  </div>
                  <ul className="space-y-4 text-slate-600 mb-8 flex-grow">
                    {plan.features.map((f, j) => <li key={j}><FaCheck className="inline text-green-500 mr-2" />{f}</li>)}
                  </ul>
                  <Link to="/contact" className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-full hover:bg-indigo-700 transition-colors w-full block text-center mt-auto">Choose Plan</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Packages */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold mb-4">Website Projects</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">One-Time Website Projects</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4">Need a new website? We&apos;ve got you covered.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {websitePackages.map((plan, i) => (
                <div key={i} className={`pricing-card border-t-8 rounded-2xl p-8 flex flex-col relative hover:shadow-xl transition-all animate-on-scroll ${plan.popular ? 'border-indigo-600 bg-white shadow-lg' : 'border-slate-300 bg-slate-50'}`} style={{ transitionDelay: `${i * 100}ms` }}>
                  {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-slate-500 mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    {plan.prefix && <span className="text-slate-500 text-base font-medium">{plan.prefix}</span>}
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                  </div>
                  <ul className="space-y-4 text-slate-600 mb-8 flex-grow">
                    {plan.features.map((f, j) => <li key={j}><FaCheck className="inline text-green-500 mr-2" />{f}</li>)}
                  </ul>
                  <Link to="/contact" className={`font-bold py-3 px-6 rounded-full transition-colors w-full block text-center mt-auto ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-200 text-slate-800 hover:bg-slate-300'}`}>
                    {plan.popular ? 'Choose Plan' : plan.price === "Let's Talk" ? 'Contact Us' : 'Get Started'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-on-scroll">Pricing Questions</h2>
            <div className="space-y-4">
              {pricingFaqs.map((f, i) => (
                <details key={i} className="bg-white rounded-xl border border-slate-200 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <summary className="px-6 py-5 font-bold cursor-pointer hover:text-indigo-600 transition-colors">{f.q}</summary>
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, #4c1d95 0%, transparent 50%), radial-gradient(circle at 70% 50%, #1e40af 0%, transparent 50%)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Not sure which plan<br />is right for you?</h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">Book a free strategy call. We&apos;ll recommend the best package for your budget and goals — no pressure.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-indigo-50 transition-all hover:gap-3">Book Free Strategy Call <FaArrowRight /></Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
