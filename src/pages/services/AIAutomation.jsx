import { Link } from 'react-router-dom'
import { FaRobot, FaWandMagicSparkles, FaBrain, FaEnvelopeOpenText, FaChartPie, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'How can AI help my small business?', a: 'Save hours weekly by automating enquiries, follow-ups, and scheduling. Premium service without extra staff.' },
  { q: 'Is AI automation expensive?', a: 'Not at all. We focus on cost-effective solutions with clear ROI. Many tools have free or low-cost tiers.' },
  { q: 'Will AI replace the personal touch?', a: 'AI handles routine tasks, freeing you for the high-value personal interactions that build relationships.' },
  { q: 'What kind of chatbot can you build?', a: 'Custom chatbots that answer FAQs, capture leads, book appointments, and route complex queries to your team — 24/7.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "AI & Automation Services in Berkshire", "description": "AI and marketing automation for Berkshire businesses. Custom chatbots, email automation, and workflow optimisation.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }], "url": "https://www.scalixstudios.co.uk/services/ai-automation", "serviceType": "AI & Automation" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "AI & Automation", "item": "https://www.scalixstudios.co.uk/services/ai-automation" }] }

export default function AIAutomation() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="AI & Automation Berkshire | Chatbots & Marketing Automation | Scalix Studios" description="AI and marketing automation for Berkshire businesses. Custom chatbots, email automation, and workflow optimisation. Free consultation." keywords="ai automation berkshire, chatbot development windsor, marketing automation slough, ai solutions berkshire, business automation" canonical="https://www.scalixstudios.co.uk/services/ai-automation" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="AI & Automation" badge="AI & Automation" badgeColor="bg-cyan-500/15 border-cyan-500/30 text-cyan-300" title="The Future Is" highlight="Automated" highlightClass="gradient-text-teal" description="AI chatbots, smart workflows, and automation that save you hours every week." cta="Free Consultation" ctaClass="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-400 hover:to-violet-400 text-white" image="/ai-automation-solutions.webp" imageAlt="AI automation dashboard" />

      <main ref={scrollRef}>
        {/* Before / After comparison */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">Manual vs Automated</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-100 rounded-2xl p-8 animate-on-scroll">
                <p className="text-sm font-bold text-red-500 uppercase tracking-wide mb-6">Without Automation</p>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3"><span className="text-red-400 flex-shrink-0">&#x2717;</span> Answering the same questions all day</li>
                  <li className="flex gap-3"><span className="text-red-400 flex-shrink-0">&#x2717;</span> Leads going cold overnight</li>
                  <li className="flex gap-3"><span className="text-red-400 flex-shrink-0">&#x2717;</span> Copy-pasting follow-up emails</li>
                  <li className="flex gap-3"><span className="text-red-400 flex-shrink-0">&#x2717;</span> Manual data entry everywhere</li>
                  <li className="flex gap-3"><span className="text-red-400 flex-shrink-0">&#x2717;</span> Missing enquiries after hours</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-600 to-violet-600 text-white rounded-2xl p-8 animate-on-scroll">
                <p className="text-sm font-bold text-cyan-200 uppercase tracking-wide mb-6">With Scalix AI</p>
                <ul className="space-y-4">
                  <li className="flex gap-3"><span className="text-emerald-300 flex-shrink-0">&#x2713;</span> Chatbot handles FAQs 24/7</li>
                  <li className="flex gap-3"><span className="text-emerald-300 flex-shrink-0">&#x2713;</span> Instant lead response, even at 3am</li>
                  <li className="flex gap-3"><span className="text-emerald-300 flex-shrink-0">&#x2713;</span> Automated nurture sequences</li>
                  <li className="flex gap-3"><span className="text-emerald-300 flex-shrink-0">&#x2713;</span> Systems connected, data flows</li>
                  <li className="flex gap-3"><span className="text-emerald-300 flex-shrink-0">&#x2713;</span> Never miss a lead again</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Feature rows */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 animate-on-scroll">What we build</h2>
            <div className="space-y-6">
              {[
                { icon: FaRobot, title: 'AI Chatbots', desc: 'Custom chatbots trained on your business that handle enquiries, qualify leads, book appointments, and provide instant quotes — running 24 hours a day, 7 days a week.', color: 'bg-cyan-100 text-cyan-600' },
                { icon: FaEnvelopeOpenText, title: 'Email Automation', desc: 'Smart sequences that nurture leads from first enquiry to paying customer. Welcome series, follow-ups, re-engagement campaigns — all running on autopilot.', color: 'bg-violet-100 text-violet-600' },
                { icon: FaBrain, title: 'AI Content Tools', desc: 'We set up AI-powered tools to help you create social posts, blog ideas, and marketing copy faster — maintaining quality and your brand voice at scale.', color: 'bg-indigo-100 text-indigo-600' },
                { icon: FaChartPie, title: 'Smart Analytics', desc: 'AI-powered dashboards that surface the insights that matter — no more drowning in data. Know what is working and what to do next.', color: 'bg-blue-100 text-blue-600' },
                { icon: FaWandMagicSparkles, title: 'Workflow Automation', desc: 'Connect your tools and eliminate repetitive tasks. Lead capture → CRM → invoice → follow-up, all automated with zero manual effort.', color: 'bg-purple-100 text-purple-600' },
              ].map((f, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 items-start bg-white rounded-xl p-8 border border-slate-200 animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className={`w-14 h-14 ${f.color} rounded-xl flex items-center justify-center flex-shrink-0`}><f.icon className="text-2xl" /></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Questions</h2>
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

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-violet-600 text-white">
          <div className="container mx-auto px-4 text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to automate &amp; scale?</h2>
            <p className="text-cyan-100 mb-8 max-w-xl mx-auto">Free consultation. We&apos;ll map your workflows and show you exactly what can be automated.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-violet-700 px-8 py-4 rounded-full font-bold hover:bg-violet-50 transition-all hover:gap-3">Book a Free Call <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
