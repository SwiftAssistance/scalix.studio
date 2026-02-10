import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ServiceHero from '../../components/ServiceHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const faqs = [
  { q: 'What is included in a branding package?', a: 'Logo design with multiple concepts, colour palette, typography, brand guidelines document, and business card design. Social templates and more available.' },
  { q: 'How long does branding take?', a: '3-4 weeks from discovery to final delivery — research, concepts, revisions, and guidelines.' },
  { q: 'Can you rebrand my existing business?', a: 'Absolutely. We evolve your brand to reflect where you are today while retaining existing equity.' },
  { q: 'Will I own the rights?', a: 'Yes, 100%. Full ownership and copyright of all assets upon completion and final payment.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Branding & Creative Services in Berkshire", "description": "Professional branding and logo design for Berkshire businesses. Memorable brand identities, logos, and guidelines.", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk", "@id": "https://www.scalixstudios.co.uk/#localbusiness" }, "areaServed": [{ "@type": "Place", "name": "Berkshire, UK" }, { "@type": "Place", "name": "Windsor" }, { "@type": "Place", "name": "Slough" }], "url": "https://www.scalixstudios.co.uk/services/branding", "serviceType": "Branding & Creative Design" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }
const breadcrumbData = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.scalixstudios.co.uk" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.scalixstudios.co.uk/services" }, { "@type": "ListItem", "position": 3, "name": "Branding", "item": "https://www.scalixstudios.co.uk/services/branding" }] }

export default function Branding() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Branding Agency Berkshire | Logo Design Windsor & Slough | Scalix Studios" description="Professional branding and logo design for Berkshire businesses. Memorable brand identities, logos, and guidelines. Based in Windsor." keywords="branding agency berkshire, logo design windsor, brand identity slough, graphic design berkshire, rebranding services" canonical="https://www.scalixstudios.co.uk/services/branding" structuredData={[structuredData, faqStructuredData, breadcrumbData]} />

      <ServiceHero breadcrumb="Branding" badge="Branding & Creative" badgeColor="bg-amber-500/15 border-amber-500/30 text-amber-300" title="Your Brand" highlight="Is a Feeling" highlightClass="gradient-text-warm" description="We don't just design logos. We craft the emotional connection between you and your audience." cta="Start Your Brand" ctaClass="bg-amber-500 hover:bg-amber-400 text-stone-900" image="/creative-branding-services.webp" imageAlt="Creative branding and logo design" />

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl space-y-0">
            {[
              { title: 'Logo & Visual Identity', desc: 'Your logo is the face of your brand. We design distinctive, memorable marks from scratch — multiple concepts, unlimited revisions, until it feels right.', bg: 'bg-amber-50', accent: 'border-amber-400' },
              { title: 'Brand Strategy', desc: 'Before any design starts, we define your positioning, audience, and value proposition. Every creative decision is rooted in strategy, not guesswork.', bg: 'bg-stone-50', accent: 'border-rose-400' },
              { title: 'Colour, Type & Tone', desc: 'Strategic colour palettes and typography that evoke the right emotions. Plus tone of voice guidelines so your brand sounds as good as it looks.', bg: 'bg-amber-50', accent: 'border-violet-400' },
              { title: 'Brand Guidelines', desc: 'A comprehensive document covering logo usage, colours, fonts, imagery style, and dos/don\'ts. Your brand stays consistent across every touchpoint, forever.', bg: 'bg-stone-50', accent: 'border-amber-400' },
              { title: 'Print & Collateral', desc: 'Business cards, brochures, vehicle livery, signage, packaging — we extend your brand into the physical world with consistent, professional design.', bg: 'bg-amber-50', accent: 'border-pink-400' },
            ].map((item, i) => (
              <div key={i} className={`${item.bg} border-l-4 ${item.accent} p-10 md:p-14 animate-on-scroll`} style={{ transitionDelay: `${i * 60}ms` }}>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-stone-900 text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll">The Process</h2>
            <div className="flex flex-col md:flex-row items-stretch max-w-5xl mx-auto">
              {['Discovery', 'Concepts', 'Refinement', 'Delivery'].map((step, i) => (
                <div key={i} className="flex-1 relative text-center p-8 animate-on-scroll" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-stone-900 font-bold mx-auto mb-4 text-lg">{i + 1}</div>
                  <h3 className="font-bold text-lg">{step}</h3>
                  {i < 3 && <div className="hidden md:block absolute right-0 top-1/2 w-8 h-px bg-amber-500/40 translate-x-4" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-12 animate-on-scroll">Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 80}ms` }}>
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 text-center max-w-2xl animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a brand that<br />stands out?</h2>
            <p className="text-slate-500 mb-8">Free consultation. No templates, no shortcuts — just real design for real businesses.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all hover:gap-3">Let&apos;s Talk <FaArrowRight /></Link>
          </div>
        </section>
      </main>
    </>
  )
}
