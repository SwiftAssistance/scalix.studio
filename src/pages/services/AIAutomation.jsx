import { Link } from 'react-router-dom'
import { FaCircleCheck, FaRobot, FaWandMagicSparkles, FaBrain, FaEnvelopeOpenText, FaChartPie } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaRobot, title: 'Chatbot Integration', desc: 'AI-powered chatbots that handle customer enquiries 24/7, qualify leads automatically, and book appointments — even while you sleep.' },
  { icon: FaEnvelopeOpenText, title: 'Marketing Automation', desc: 'Automated email sequences, follow-ups, and lead nurturing workflows that keep your prospects engaged without manual effort.' },
  { icon: FaBrain, title: 'AI Content Tools', desc: 'Leverage AI to speed up content creation, generate ideas, and maintain a consistent publishing schedule across all your channels.' },
  { icon: FaChartPie, title: 'Analytics & Insights', desc: 'AI-powered analytics that surface actionable insights from your data, helping you make smarter marketing decisions faster.' },
  { icon: FaWandMagicSparkles, title: 'Workflow Automation', desc: 'Streamline repetitive business tasks with custom automations — from lead capture to invoicing, we automate the busywork.' },
]

const faqs = [
  { q: 'How can AI help my small business?', a: 'AI can save you hours every week by automating repetitive tasks like responding to common enquiries, sending follow-up emails, and scheduling social media posts. It allows you to deliver a premium customer experience without hiring additional staff.' },
  { q: 'Is AI automation expensive to set up?', a: 'Not at all. We focus on practical, cost-effective solutions that deliver clear ROI. Many AI tools have free or low-cost tiers, and our setup fees are structured to be accessible for small and medium businesses.' },
  { q: 'Will AI replace the personal touch in my business?', a: 'AI should enhance, not replace, human interaction. We set up automations that handle routine tasks and frequently asked questions, freeing you up to focus on the high-value personal interactions that build lasting customer relationships.' },
  { q: 'What kind of chatbot can you build for my website?', a: 'We build custom AI chatbots that can answer FAQs, capture lead information, book appointments, provide quotes, and route complex enquiries to your team. They work 24/7 and can be trained on your specific business knowledge.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI & Automation Services in Berkshire",
  "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
  "areaServed": { "@type": "Place", "name": "Berkshire, UK" },
  "description": "AI and marketing automation solutions for businesses in Berkshire. Chatbots, email automation, and workflow optimisation that save time and increase revenue.",
  "url": "https://www.scalixstudios.co.uk/services/ai-automation"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
}

export default function AIAutomation() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="AI & Automation Berkshire | Chatbots & Marketing Automation | Scalix Studios"
        description="AI and marketing automation for Berkshire businesses. Custom chatbots, email automation, and workflow optimisation that save time and grow your business. Free consultation."
        keywords="ai automation berkshire, chatbot development windsor, marketing automation slough, ai solutions berkshire, business automation, chatbot for small business, email automation"
        canonical="https://www.scalixstudios.co.uk/services/ai-automation"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">AI &amp; Automation</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">AI &amp; Automation in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Work smarter, not harder. We help Berkshire businesses leverage AI and automation to save time, reduce costs, and scale faster.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Build</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Our AI &amp; Automation Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">Practical AI solutions that deliver real results for real businesses.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">AI Questions Answered</h2>
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
                <h2 className="text-4xl font-bold mb-4">Ready to Automate &amp; Scale?</h2>
                <p className="text-slate-600 mb-6">Book a free consultation and discover how AI can transform your business operations.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Free automation audit</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Custom solutions for your business</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Ongoing support included</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
