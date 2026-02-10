import { Link } from 'react-router-dom'
import { FaClipboardList, FaCalendarCheck, FaBlog, FaPenFancy, FaVideo, FaArrowRight, FaQuoteLeft } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'

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

      {/* Magazine-style hero */}
      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)' }}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 py-28 md:py-40 relative z-10">
          <nav aria-label="Breadcrumb" className="text-orange-200/60 text-sm mb-8"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Content Strategy</span></nav>
          <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-none mb-6 max-w-3xl">Words That <span className="text-amber-300">Work Harder</span></h1>
          <p className="text-xl text-orange-100 max-w-xl mb-10">Strategic content that attracts, engages, and converts — powering your SEO and building authority across Berkshire.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-full font-bold hover:bg-amber-300 hover:text-orange-900 transition-all hover:gap-3">Free Content Audit <FaArrowRight /></Link>
        </div>
      </header>

      <main ref={scrollRef}>
        {/* Editorial 2-col with pull quote */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-start">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Content isn&apos;t just words on a page.</h2>
                <p className="text-slate-600 leading-relaxed mb-6">It&apos;s how your customers find you on Google. It&apos;s how you prove you know your stuff. It&apos;s the difference between a business that gets found and one that gets forgotten.</p>
                <p className="text-slate-600 leading-relaxed mb-6">We build content strategies grounded in keyword research and business goals — then our writers create every piece, so you don&apos;t have to.</p>
                <p className="text-slate-600 leading-relaxed">The result? More traffic, more authority, more leads. Businesses that blog consistently get <strong>55% more website visitors</strong> on average.</p>
              </div>
              <div className="bg-orange-50 rounded-2xl p-8 border-l-4 border-orange-400 animate-on-scroll">
                <FaQuoteLeft className="text-orange-300 text-2xl mb-4" />
                <p className="text-lg font-semibold text-slate-800 leading-snug mb-4">&ldquo;Businesses that blog consistently get 55% more visitors.&rdquo;</p>
                <p className="text-sm text-slate-500">— HubSpot State of Marketing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist-style features — not cards */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-on-scroll">What we deliver</h2>
            <div className="space-y-6">
              {[
                { icon: FaClipboardList, title: 'Content Audits', desc: 'We analyse your existing content — what works, what doesn\'t, and where the biggest opportunities hide.' },
                { icon: FaCalendarCheck, title: 'Editorial Calendars', desc: 'A structured content plan tied to your business goals, seasonal trends, and keyword targets.' },
                { icon: FaBlog, title: 'Blog & Article Writing', desc: 'SEO-optimised posts that establish authority, attract organic traffic, and answer customer questions.' },
                { icon: FaPenFancy, title: 'Website Copywriting', desc: 'Pages, email campaigns, and marketing materials that speak to your audience and drive action.' },
                { icon: FaVideo, title: 'Video & Visual Content', desc: 'Short-form video, infographics, and social assets that boost engagement.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-5 items-start bg-white p-6 rounded-xl animate-on-scroll" style={{ transitionDelay: `${i * 60}ms` }}>
                  <f.icon className="text-orange-500 text-xl mt-1 flex-shrink-0" />
                  <div><h3 className="font-bold mb-1">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ as inline blocks */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Questions</h2>
            <div className="divide-y divide-orange-100">
              {faqs.map((faq, i) => (
                <div key={i} className="py-6 animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warm CTA banner */}
        <section className="py-16" style={{ background: 'linear-gradient(135deg, #c2410c 0%, #ea580c 100%)' }}>
          <div className="container mx-auto px-4 text-center text-white animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s create content that converts</h2>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto">Free content audit. We&apos;ll show you exactly where strategic content can drive more traffic.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-full font-bold hover:bg-amber-300 hover:text-orange-900 transition-all hover:gap-3">Get Your Free Audit <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
