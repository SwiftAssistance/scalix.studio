import { Link } from 'react-router-dom'
import { FaCircleCheck, FaInstagram, FaFacebook, FaLinkedin, FaCalendarDays, FaCamera, FaUsers, FaBullhorn, FaHashtag, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaCalendarDays, title: 'Content Strategy', desc: 'Plans aligned with your goals and audience.', color: 'from-pink-500 to-orange-400' },
  { icon: FaCamera, title: 'Content Creation', desc: 'Scroll-stopping graphics that build your brand.', color: 'from-purple-500 to-pink-400' },
  { icon: FaUsers, title: 'Community Management', desc: 'Daily engagement and community building.', color: 'from-blue-500 to-cyan-400' },
  { icon: FaBullhorn, title: 'Paid Social Ads', desc: 'Targeted campaigns on every platform.', color: 'from-indigo-500 to-purple-400' },
  { icon: FaHashtag, title: 'Multi-Platform', desc: 'Facebook, Instagram, LinkedIn, TikTok — all managed.', color: 'from-teal-500 to-blue-400' },
]

const faqs = [
  { q: 'Which platforms should I be on?', a: 'For most Berkshire businesses, Facebook and Instagram are essential. LinkedIn for B2B. We help you pick the right ones.' },
  { q: 'How often will you post?', a: '3-5 posts per week per platform. Consistency is key to growing your audience.' },
  { q: 'Can you run paid ads?', a: 'Yes! We create, manage, and optimise campaigns on Facebook, Instagram, and LinkedIn within your budget.' },
  { q: 'How do you measure success?', a: 'Reach, engagement, follower growth, website clicks, and conversions. Clear monthly reports.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Social Media Marketing in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/social-media-marketing" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function SocialMediaMarketing() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Social Media Marketing Berkshire | Social Media Agency Windsor | Scalix Studios" description="Social media marketing for Berkshire businesses. We manage Facebook, Instagram & LinkedIn. From £199/month." keywords="social media marketing berkshire, social media agency windsor, facebook marketing slough" canonical="https://www.scalixstudios.co.uk/services/social-media-marketing" structuredData={[structuredData, faqStructuredData]} />

      {/* Vibrant warm gradient hero */}
      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 50%, #f97316 100%)' }}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-white/60 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Social Media</span></nav>
          <div className="flex gap-3 mb-6">{[FaInstagram, FaFacebook, FaLinkedin].map((Icon, i) => (<div key={i} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white"><Icon /></div>))}</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight max-w-3xl">Social Media That <span className="text-yellow-300">Actually Works</span></h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">Turn followers into customers with strategic content and paid ads that deliver.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-purple-900 transition-all hover:gap-3">Get Started <FaArrowRight /></Link>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-10 bg-slate-900 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 text-center">
            {[{ n: '200%', l: 'Engagement increase' }, { n: '2+', l: 'Platforms managed' }, { n: '30', l: 'Posts per month' }].map((s, i) => (<div key={i}><span className="text-3xl font-extrabold">{s.n}</span><span className="block text-slate-400 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">What We Do</h2>
            <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto animate-on-scroll">Everything to build a thriving social presence.</p>
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
          <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">Social Media Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-white p-5 rounded-xl border border-slate-200 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}><summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-pink-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary><p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p></details>))}</div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Ready to Blow Up Your Socials?</h2><p className="text-slate-600 mb-6">Let us handle it so you can run your business.</p>
                <ul className="space-y-3 text-slate-600">{['From £199/month', 'Content creation included', 'Monthly performance reports'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Get Started Today</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
