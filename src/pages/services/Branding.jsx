import { Link } from 'react-router-dom'
import { FaCircleCheck, FaPalette, FaBookOpen, FaPenNib, FaSwatchbook, FaPrint } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaPenNib, title: 'Logo & Visual Identity', desc: 'A logo is the face of your brand. We design distinctive, memorable logos and visual identities that communicate your values and make a lasting impression.' },
  { icon: FaBookOpen, title: 'Brand Guidelines', desc: 'Consistency builds trust. We create comprehensive brand guidelines covering logo usage, colour palettes, typography, tone of voice, and imagery style.' },
  { icon: FaPalette, title: 'Colour & Typography', desc: 'Strategic colour and font choices that evoke the right emotions and ensure your brand is instantly recognisable across every touchpoint.' },
  { icon: FaSwatchbook, title: 'Brand Strategy', desc: 'We define your brand positioning, target audience, and unique value proposition to ensure every design decision is rooted in strategy, not guesswork.' },
  { icon: FaPrint, title: 'Print & Collateral', desc: 'Business cards, brochures, vehicle livery, signage — we extend your brand across all physical materials with consistent, professional design.' },
]

const faqs = [
  { q: 'What is included in a branding package?', a: 'Our branding packages typically include logo design (with multiple concepts and revisions), a colour palette, typography selection, brand guidelines document, and business card design. We can also include social media templates, letterheads, and other collateral as needed.' },
  { q: 'How long does the branding process take?', a: 'A full branding project typically takes 3-4 weeks from the initial discovery session to final delivery. This includes research, concept development, revisions, and the creation of your brand guidelines document.' },
  { q: 'Can you rebrand my existing business?', a: 'Absolutely. We specialise in rebranding businesses that have outgrown their original identity. We carefully evolve your brand to reflect where your business is today while retaining any existing brand equity.' },
  { q: 'Will I own the rights to my logo and brand assets?', a: 'Yes, 100%. Upon completion and final payment, you receive full ownership and copyright of all brand assets we create for you, including original design files.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Branding & Creative Services in Berkshire",
  "provider": { "@type": "ProfessionalService", "name": "Scalix Studios", "url": "https://www.scalixstudios.co.uk" },
  "areaServed": { "@type": "Place", "name": "Berkshire, UK" },
  "description": "Professional branding and creative design services for businesses in Berkshire. Logo design, brand guidelines, and visual identity that makes your business unforgettable.",
  "url": "https://www.scalixstudios.co.uk/services/branding"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
}

export default function Branding() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Branding Agency Berkshire | Logo Design Windsor & Slough | Scalix Studios"
        description="Professional branding and logo design for businesses in Berkshire. We create memorable brand identities, logos, and guidelines that help you stand out. Based in Windsor."
        keywords="branding agency berkshire, logo design windsor, brand identity slough, graphic design berkshire, rebranding services, brand guidelines, creative agency windsor"
        canonical="https://www.scalixstudios.co.uk/services/branding"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Branding</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Branding & Creative in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Forge a brand identity that captivates your audience and sets you apart from the competition in the Thames Valley.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Create</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Our Branding Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">From logo design to complete brand overhauls, we build identities that last.</p>
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

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">How We Build Your Brand</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { step: '01', title: 'Discovery & Research', desc: 'We learn everything about your business, your audience, and your competitors to inform every creative decision.' },
                { step: '02', title: 'Concept Development', desc: 'We present multiple creative directions for your review, each rooted in strategy and designed to resonate with your market.' },
                { step: '03', title: 'Refinement', desc: 'Based on your feedback, we refine the chosen direction until it perfectly represents your business.' },
                { step: '04', title: 'Delivery & Guidelines', desc: 'You receive all final assets, source files, and a comprehensive brand guidelines document for consistent use across all channels.' },
              ].map((s, i) => (
                <div key={i} className="flex gap-6 items-start animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="bg-indigo-600 text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">{s.step}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                    <p className="text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Branding Questions Answered</h2>
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
                <h2 className="text-4xl font-bold mb-4">Ready for a Brand That Stands Out?</h2>
                <p className="text-slate-600 mb-6">Let&apos;s create a brand identity that truly represents your business and connects with your audience.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Multiple logo concepts included</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Full brand guidelines delivered</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />You own all the rights</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Start Your Branding Project</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
