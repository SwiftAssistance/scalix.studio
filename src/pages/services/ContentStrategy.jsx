import { Link } from 'react-router-dom'
import { FaClipboardList, FaCalendarCheck, FaBlog, FaPenFancy, FaVideo, FaArrowRight, FaQuoteLeft } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import AreasServed from '../../components/AreasServed'

const faqs = [
  { q: 'Why does my business need a content strategy?', a: 'Content drives SEO, fuels social media, builds trust, and establishes authority. Without strategy, efforts are scattered and ineffective.' },
  { q: 'How often should I publish?', a: '2-4 blog posts per month is a strong foundation. Consistency and quality beat quantity every time.' },
  { q: 'Do you write the content?', a: 'Yes. Our copywriters handle everything — research, interviews, and polished SEO-optimised content that sounds like you.' },
  { q: 'How does content help SEO?', a: 'Every quality piece is a new chance to rank on Google. Businesses that blog consistently get 55% more visitors on average.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Content Strategy Services in Berkshire", "description": "Professional content strategy and copywriting for Berkshire businesses. SEO blog writing, content audits, and editorial planning.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }, { "@type": "Place", "name": "Reading" }, { "@type": "Place", "name": "Maidenhead" }, { "@type": "Place", "name": "Bracknell" }, { "@type": "Place", "name": "Wokingham" }, { "@type": "Place", "name": "Ascot" }, { "@type": "Place", "name": "Staines-upon-Thames" }, { "@type": "Place", "name": "Egham" }, { "@type": "Place", "name": "Henley-on-Thames" }, { "@type": "Place", "name": "Marlow" }, { "@type": "Place", "name": "High Wycombe" }], "url": "https://www.scalixstudios.co.uk/services/content-strategy", "serviceType": "Content Strategy & Copywriting" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "Content Strategy", "item": "https://www.scalixstudios.co.uk/services/content-strategy" }] }

export default function ContentStrategy() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Content Strategy Berkshire | Copywriting & Blog Writing | Scalix Studios" description="Professional content strategy and copywriting for Berkshire businesses. SEO blog writing, content audits, and editorial planning that drives traffic." keywords="content strategy berkshire, copywriting windsor, blog writing berkshire, content marketing slough, seo copywriting" canonical="https://www.scalixstudios.co.uk/services/content-strategy" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="Content Strategy" badge="Content Strategy & Copywriting" badgeColor="bg-orange-500/15 border-orange-500/30 text-orange-300" title="Words That" highlight="Work Harder" highlightClass="gradient-text-warm" description="Strategic content that attracts, engages, and converts — powering your SEO and building authority across Berkshire." cta="Free Content Audit" ctaClass="bg-orange-500 hover:bg-orange-400 text-white" image="/content-strategy-agency.webp" imageAlt="Content strategy planning dashboard" />

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

        {/* Checklist-style features */}
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

        {/* FAQ */}
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

        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center animate-on-scroll">Works even better with</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'SEO', desc: 'Content that ranks and drives organic traffic.', link: '/services/seo' },
                { title: 'Social Media', desc: 'Repurpose content across all your channels.', link: '/services/social-media-marketing' },
                { title: 'Web Design', desc: 'A fast site to showcase your content.', link: '/services/web-design' },
              ].map((s, i) => (
                <Link key={i} to={s.link} className="bg-white rounded-xl p-6 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AreasServed service="Content Strategy" />

        {/* CTA */}
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
