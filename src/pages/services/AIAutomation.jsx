import { Link } from 'react-router-dom'
import { FaCircleCheck, FaRobot, FaWandMagicSparkles, FaBrain, FaEnvelopeOpenText, FaChartPie, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaRobot, title: 'AI Chatbots', desc: 'Handle enquiries 24/7, qualify leads, and book appointments.', color: 'from-cyan-400 to-blue-500' },
  { icon: FaEnvelopeOpenText, title: 'Email Automation', desc: 'Automated sequences that nurture leads on autopilot.', color: 'from-blue-400 to-indigo-500' },
  { icon: FaBrain, title: 'AI Content Tools', desc: 'Speed up creation and maintain consistent publishing.', color: 'from-violet-400 to-purple-500' },
  { icon: FaChartPie, title: 'Smart Analytics', desc: 'AI-powered insights for smarter marketing decisions.', color: 'from-indigo-400 to-violet-500' },
  { icon: FaWandMagicSparkles, title: 'Workflow Automation', desc: 'From lead capture to invoicing — automate the busywork.', color: 'from-purple-400 to-cyan-400' },
]

const faqs = [
  { q: 'How can AI help my small business?', a: 'Save hours weekly by automating enquiries, follow-ups, and scheduling. Deliver premium service without extra staff.' },
  { q: 'Is AI automation expensive?', a: 'Not at all. We focus on cost-effective solutions with clear ROI. Many tools have free or low-cost tiers.' },
  { q: 'Will AI replace the personal touch?', a: 'AI handles routine tasks, freeing you for the high-value personal interactions that build relationships.' },
  { q: 'What kind of chatbot can you build?', a: 'Custom AI chatbots that answer FAQs, capture leads, book appointments, and route complex queries to your team — 24/7.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "AI & Automation Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/ai-automation" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function AIAutomation() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="AI & Automation Berkshire | Chatbots & Marketing Automation | Scalix Studios" description="AI and marketing automation for Berkshire businesses. Custom chatbots, email automation, and workflow optimisation. Free consultation." keywords="ai automation berkshire, chatbot development windsor, marketing automation slough, ai solutions berkshire, business automation" canonical="https://www.scalixstudios.co.uk/services/ai-automation" structuredData={[structuredData, faqStructuredData]} />

      {/* Futuristic dark hero with neural network aesthetic */}
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 30%), radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 35%), radial-gradient(circle at 20% 80%, #8b5cf6 0%, transparent 35%)' , opacity: 0.2 }} />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-slate-400 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">AI &amp; Automation</span></nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-cyan-500/15 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium mb-6">AI &amp; Automation</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">The Future Is <span className="gradient-text-teal">Automated</span></h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-lg">Work smarter, not harder. AI chatbots, automation workflows, and smart tools for Berkshire businesses.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-violet-400 transition-all hover:gap-3">Free Consultation <FaArrowRight /></Link>
            </div>
            {/* AI/Chat mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 float">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-500 rounded-full flex items-center justify-center"><FaRobot className="text-sm" /></div>
                  <span className="text-sm font-medium">AI Assistant</span>
                  <span className="ml-auto text-xs text-emerald-400 flex items-center gap-1"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full soft-pulse" />Online</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg rounded-tl-none p-3 max-w-[85%]"><p className="text-sm text-slate-300">Hi! I can help you book an appointment, answer questions, or get a quote. What would you like?</p></div>
                  <div className="bg-cyan-500/20 rounded-lg rounded-tr-none p-3 max-w-[70%] ml-auto"><p className="text-sm text-cyan-200">I need a quote for a new website</p></div>
                  <div className="bg-white/5 rounded-lg rounded-tl-none p-3 max-w-[85%]">
                    <p className="text-sm text-slate-300">Great! I&apos;ll gather a few details and connect you with our team.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2.5 py-1 rounded-full">5-page site</span>
                      <span className="text-xs bg-violet-500/20 text-violet-300 px-2.5 py-1 rounded-full">E-commerce</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 bg-white/5 rounded-lg p-2.5"><div className="h-3 w-3/4 bg-white/10 rounded" /><div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0"><FaArrowRight className="text-xs" /></div></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-10 bg-gradient-to-r from-violet-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 text-center">
            {[{ n: '24/7', l: 'Chatbot uptime' }, { n: '80%', l: 'Tasks automated' }, { n: '10x', l: 'Response speed' }].map((s, i) => (<div key={i}><span className="text-3xl font-extrabold">{s.n}</span><span className="block text-violet-100 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">What We Build</h2>
            <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto animate-on-scroll">Practical AI that delivers real results for real businesses.</p>
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
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">How We Automate Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[{ s: '01', t: 'Discover', d: 'We map your workflows and find automation opportunities.' }, { s: '02', t: 'Design', d: 'Custom AI solutions tailored to your business.' }, { s: '03', t: 'Deploy', d: 'Chatbots, automations, and integrations go live.' }, { s: '04', t: 'Evolve', d: 'Continuous improvement based on real data.' }].map((s, i) => (
                <div key={i} className="text-center animate-on-scroll" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 shadow-lg">{s.s}</div>
                  <h3 className="font-bold mb-1">{s.t}</h3><p className="text-slate-600 text-sm">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">AI Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-slate-50 p-5 rounded-xl border border-slate-200 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}><summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-cyan-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary><p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p></details>))}</div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Ready to Automate &amp; Scale?</h2><p className="text-slate-600 mb-6">Free consultation — discover how AI can transform your operations.</p>
                <ul className="space-y-3 text-slate-600">{['Free automation audit', 'Custom solutions for your business', 'Ongoing support included'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Book a Free Consultation</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
