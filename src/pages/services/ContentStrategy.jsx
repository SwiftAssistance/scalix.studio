import { Link } from 'react-router-dom'
import { FaCircleCheck, FaPenFancy, FaVideo, FaCalendarCheck, FaClipboardList, FaBlog, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaClipboardList, title: 'Content Audits', desc: 'Find what works, what doesn\'t, and where opportunity lives.', color: 'from-orange-500 to-amber-400' },
  { icon: FaCalendarCheck, title: 'Editorial Calendars', desc: 'Structured plans aligned with goals and seasons.', color: 'from-amber-500 to-yellow-400' },
  { icon: FaBlog, title: 'Blog Writing', desc: 'SEO-optimised articles that attract real traffic.', color: 'from-rose-500 to-orange-400' },
  { icon: FaPenFancy, title: 'Copywriting', desc: 'Website copy, emails, and marketing that converts.', color: 'from-red-500 to-rose-400' },
  { icon: FaVideo, title: 'Video & Visual', desc: 'Short-form video, infographics, and engaging visuals.', color: 'from-pink-500 to-rose-400' },
]

const faqs = [
  { q: 'Why does my business need a content strategy?', a: 'Content drives SEO, fuels social media, builds trust, and establishes authority. Without strategy, efforts are scattered and ineffective.' },
  { q: 'How often should I publish?', a: '2-4 blog posts per month is a strong foundation. Consistency and quality beat quantity every time.' },
  { q: 'Do you write the content?', a: 'Yes. Our copywriters handle everything — research, interviews, and polished SEO-optimised content that sounds like you.' },
  { q: 'How does content help SEO?', a: 'Every quality piece is a new chance to rank on Google. Businesses that blog consistently get 55% more visitors on average.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Content Strategy Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/content-strategy" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function ContentStrategy() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Content Strategy Berkshire | Copywriting & Blog Writing | Scalix Studios" description="Professional content strategy and copywriting for Berkshire businesses. SEO blog writing, content audits, and editorial planning that drives traffic." keywords="content strategy berkshire, copywriting windsor, blog writing berkshire, content marketing slough, seo copywriting" canonical="https://www.scalixstudios.co.uk/services/content-strategy" structuredData={[structuredData, faqStructuredData]} />

      {/* Warm editorial hero with magazine layout feel */}
      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-orange-200/60 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Content Strategy</span></nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-orange-100 text-sm font-medium mb-6">Content Strategy & Copywriting</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight">Words That <span className="text-amber-300">Work Harder</span></h1>
              <p className="text-xl text-orange-100 leading-relaxed mb-8 max-w-lg">Strategic content that attracts, engages, and converts — powering your SEO and building authority.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-full font-bold hover:bg-amber-300 hover:text-orange-900 transition-all hover:gap-3">Free Content Audit <FaArrowRight /></Link>
            </div>
            {/* Magazine/article mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden shadow-2xl float-delay">
                <div className="p-6 space-y-4">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs bg-amber-400/30 text-amber-200 px-2 py-1 rounded-full">SEO</span>
                    <span className="text-xs bg-white/10 text-orange-200 px-2 py-1 rounded-full">Strategy</span>
                  </div>
                  <div className="h-5 w-4/5 bg-white/20 rounded" />
                  <div className="h-3 w-full bg-white/10 rounded" />
                  <div className="h-3 w-full bg-white/10 rounded" />
                  <div className="h-3 w-3/4 bg-white/10 rounded" />
                  <div className="border-t border-white/10 pt-4 mt-4 flex gap-4">
                    <div className="flex-1"><div className="h-16 bg-white/10 rounded-lg" /></div>
                    <div className="flex-1"><div className="h-16 bg-white/10 rounded-lg" /></div>
                  </div>
                  <div className="h-3 w-full bg-white/10 rounded" />
                  <div className="h-3 w-5/6 bg-white/10 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-10 bg-slate-900 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 text-center">
            {[{ n: '55%', l: 'More visitors' }, { n: '2-4', l: 'Posts per month' }, { n: '3x', l: 'Lead generation' }].map((s, i) => (<div key={i}><span className="text-3xl font-extrabold">{s.n}</span><span className="block text-slate-400 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">What We Deliver</h2>
            <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto animate-on-scroll">Content that works as hard as you do.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-orange-50 glow-amber animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}><f.icon className="text-xl" /></div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">From Audit to Authority</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {[{ n: '01', t: 'Audit', d: 'We analyse your existing content and competitors.' }, { n: '02', t: 'Plan', d: 'Keyword-driven editorial calendar created.' }, { n: '03', t: 'Create', d: 'Our writers produce polished, SEO-optimised content.' }, { n: '04', t: 'Measure', d: 'Track rankings, traffic, and leads monthly.' }].map((s, i) => (
                <div key={i} className="flex gap-5 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}><span className="text-5xl font-extrabold text-orange-200">{s.n}</span><div><h3 className="font-bold mb-1">{s.t}</h3><p className="text-slate-600 text-sm">{s.d}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">Content Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-orange-50 p-5 rounded-xl border border-orange-100 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}><summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-orange-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary><p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p></details>))}</div>
          </div>
        </section>

        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Let&apos;s Create Content That Converts</h2><p className="text-slate-600 mb-6">Free content audit — discover where strategic content can drive more traffic.</p>
                <ul className="space-y-3 text-slate-600">{['Free content audit', 'SEO-optimised writing', 'Monthly content reporting'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-orange-100 shadow-lg animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Get Your Free Content Audit</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
