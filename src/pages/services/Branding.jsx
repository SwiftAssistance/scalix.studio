import { Link } from 'react-router-dom'
import { FaCircleCheck, FaPalette, FaBookOpen, FaPenNib, FaSwatchbook, FaPrint, FaArrowRight } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaPenNib, title: 'Logo & Visual Identity', desc: 'Distinctive, memorable logos designed from scratch for your brand.', color: 'from-amber-500 to-rose-500' },
  { icon: FaBookOpen, title: 'Brand Guidelines', desc: 'Comprehensive rules for consistent, trustworthy branding.', color: 'from-rose-500 to-pink-500' },
  { icon: FaPalette, title: 'Colour & Typography', desc: 'Strategic choices that evoke the right emotions instantly.', color: 'from-violet-500 to-rose-400' },
  { icon: FaSwatchbook, title: 'Brand Strategy', desc: 'Positioning, audience, and value proposition — defined.', color: 'from-fuchsia-500 to-amber-400' },
  { icon: FaPrint, title: 'Print & Collateral', desc: 'Cards, brochures, signage — your brand everywhere.', color: 'from-orange-500 to-rose-500' },
]

const faqs = [
  { q: 'What is included in a branding package?', a: 'Logo design with multiple concepts and revisions, colour palette, typography, brand guidelines document, and business card design. We can add social templates, letterheads, and more.' },
  { q: 'How long does branding take?', a: '3-4 weeks from discovery to final delivery — research, concepts, revisions, and guidelines.' },
  { q: 'Can you rebrand my existing business?', a: 'Absolutely. We evolve your brand to reflect where you are today while retaining existing equity.' },
  { q: 'Will I own the rights?', a: 'Yes, 100%. Full ownership and copyright of all assets upon completion and final payment.' },
]

const structuredData = { "@context": "https://schema.org", "@type": "Service", "name": "Branding & Creative Services in Berkshire", "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" }, "areaServed": { "@type": "Place", "name": "Berkshire, UK" }, "url": "https://www.scalixstudios.co.uk/services/branding" }
const faqStructuredData = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }

export default function Branding() {
  const scrollRef = useScrollAnimation()
  return (
    <>
      <SEO title="Branding Agency Berkshire | Logo Design Windsor & Slough | Scalix Studios" description="Professional branding and logo design for Berkshire businesses. Memorable brand identities, logos, and guidelines. Based in Windsor." keywords="branding agency berkshire, logo design windsor, brand identity slough, graphic design berkshire, rebranding services" canonical="https://www.scalixstudios.co.uk/services/branding" structuredData={[structuredData, faqStructuredData]} />

      {/* Warm editorial hero with colour swatch decoration */}
      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #44403c 40%, #78350f 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 80% 20%, #f59e0b 0%, transparent 40%), radial-gradient(circle at 20% 80%, #e11d48 0%, transparent 40%)' }} />
        <div className="container mx-auto px-4 py-24 md:py-36 relative z-10">
          <nav aria-label="Breadcrumb" className="text-amber-300/60 text-sm mb-6"><Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Branding</span></nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-300 text-sm font-medium mb-6">Branding & Creative</span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white leading-tight">Brands That <span className="gradient-text-warm">Feel Something</span></h1>
              <p className="text-xl text-stone-300 leading-relaxed mb-8 max-w-lg">We craft identities that tell your story and leave lasting impressions across Berkshire.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-amber-400 transition-all hover:gap-3">Start Your Brand <FaArrowRight /></Link>
            </div>
            {/* Colour swatch mockup */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="grid grid-cols-3 gap-3 max-w-xs ml-auto float-delay">
                  {['bg-amber-500', 'bg-rose-500', 'bg-stone-800', 'bg-violet-500', 'bg-orange-400', 'bg-pink-300'].map((c, i) => (
                    <div key={i} className={`${c} rounded-xl aspect-square shadow-lg`} style={{ animationDelay: `${i * 200}ms` }} />
                  ))}
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-2xl">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg" />
                    <div>
                      <p className="text-white text-sm font-bold">Primary</p>
                      <p className="text-stone-400 text-xs">#F59E0B</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main ref={scrollRef}>
        <section className="py-10 bg-gradient-to-r from-amber-600 to-rose-600 text-white">
          <div className="container mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-20 text-center">
            {[{ n: '150+', l: 'Brands created' }, { n: '3-4', l: 'Weeks turnaround' }, { n: '100%', l: 'Ownership yours' }].map((s, i) => (<div key={i}><span className="text-3xl font-extrabold">{s.n}</span><span className="block text-amber-100 text-sm mt-1">{s.l}</span></div>))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-on-scroll">What We Create</h2>
            <p className="text-slate-500 text-center mb-16 max-w-xl mx-auto animate-on-scroll">From logos to full brand systems — identities that last.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-stone-100 glow-amber animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${f.color} rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform`}><f.icon className="text-xl" /></div>
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3><p className="text-slate-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll">How We Build Your Brand</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {[{ n: '01', t: 'Discovery', d: 'Deep dive into your business, audience, and competitors.' }, { n: '02', t: 'Concepts', d: 'Multiple creative directions rooted in strategy.' }, { n: '03', t: 'Refinement', d: 'We iterate until it perfectly represents you.' }, { n: '04', t: 'Delivery', d: 'Final assets, source files, and brand guidelines.' }].map((s, i) => (
                <div key={i} className="flex gap-5 animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}><span className="text-5xl font-extrabold text-amber-200">{s.n}</span><div><h3 className="font-bold mb-1">{s.t}</h3><p className="text-slate-600 text-sm">{s.d}</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4"><h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">Branding Questions</h2>
            <div className="max-w-3xl mx-auto space-y-3">{faqs.map((faq, i) => (<details key={i} className="bg-stone-50 p-5 rounded-xl border border-stone-200 animate-on-scroll group" style={{ transitionDelay: `${i * 80}ms` }}><summary className="font-semibold flex justify-between items-center cursor-pointer list-none">{faq.q}<span className="text-amber-500 transition-transform duration-300 group-open:rotate-45 text-xl flex-shrink-0 ml-4">+</span></summary><p className="mt-3 text-slate-600 text-sm leading-relaxed">{faq.a}</p></details>))}</div>
          </div>
        </section>

        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="animate-on-scroll"><h2 className="text-4xl font-bold mb-4">Ready for a Brand That Stands Out?</h2><p className="text-slate-600 mb-6">Free consultation. No templates, no shortcuts — just real design.</p>
                <ul className="space-y-3 text-slate-600">{['Multiple logo concepts included', 'Full brand guidelines delivered', 'You own all the rights'].map((t, i) => (<li key={i} className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />{t}</li>))}</ul>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-lg animate-on-scroll"><h3 className="text-2xl font-bold mb-6">Start Your Branding Project</h3><ContactForm variant="standalone" /></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
