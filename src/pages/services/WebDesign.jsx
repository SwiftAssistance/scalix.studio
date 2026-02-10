import { Link } from 'react-router-dom'
import { FaCircleCheck, FaMobileScreen, FaCartShopping, FaPaintbrush, FaRocket, FaCode } from 'react-icons/fa6'
import SEO from '../../components/SEO'
import ParticleHero from '../../components/ParticleHero'
import useScrollAnimation from '../../hooks/useScrollAnimation'
import ContactForm from '../../components/ContactForm'

const features = [
  { icon: FaPaintbrush, title: 'Custom Website Design', desc: 'Every website we build is designed from scratch to match your brand identity. No templates, no cookie-cutter solutions — just a unique site that sets you apart from competitors.' },
  { icon: FaMobileScreen, title: 'Mobile-First & Responsive', desc: 'Over 60% of web traffic is mobile. We design mobile-first, ensuring your site looks stunning and works flawlessly on every device, from smartphones to desktops.' },
  { icon: FaCartShopping, title: 'E-Commerce Solutions', desc: 'Sell online with confidence. We build fast, secure e-commerce websites with intuitive product management, payment integration, and conversion-optimised checkout flows.' },
  { icon: FaRocket, title: 'Performance Optimised', desc: 'A slow website loses customers. We build for speed with optimised images, clean code, and modern hosting to ensure your site loads in under 2 seconds.' },
  { icon: FaCode, title: 'Content Management Systems', desc: 'Take control of your content with an easy-to-use CMS. Update text, images, and blog posts yourself without needing a developer.' },
]

const results = [
  { stat: '2s', label: 'Average page load time' },
  { stat: '100%', label: 'Mobile responsive designs' },
  { stat: '60%', label: 'Average increase in conversions' },
]

const faqs = [
  { q: 'How long does it take to build a website?', a: 'A typical website project takes 4-6 weeks from initial consultation to launch. More complex projects with e-commerce or custom functionality may take 8-12 weeks. We provide a detailed timeline during our discovery call.' },
  { q: 'How much does a website cost in Berkshire?', a: 'Our website packages start from £299 for a professional 4-6 page site. Pricing depends on the number of pages, features required, and complexity. Visit our pricing page or contact us for a bespoke quote tailored to your needs.' },
  { q: 'Will my website be optimised for Google?', a: 'Absolutely. Every website we build includes full on-page SEO as standard — optimised title tags, meta descriptions, heading structure, image alt text, schema markup, and fast load speeds. This gives you the best possible foundation for ranking on Google.' },
  { q: 'Do you offer website maintenance and support?', a: 'Yes, we offer ongoing maintenance packages that include security updates, content changes, performance monitoring, and technical support. Your website is an investment, and we help you protect it.' },
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design Services in Berkshire",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Scalix Studios",
    "url": "https://www.scalixstudios.co.uk"
  },
  "areaServed": { "@type": "Place", "name": "Berkshire, UK" },
  "description": "Professional web design and development for businesses in Berkshire. Custom, mobile-responsive websites built to convert visitors into customers.",
  "url": "https://www.scalixstudios.co.uk/services/web-design"
}

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
}

export default function WebDesign() {
  const scrollRef = useScrollAnimation()

  return (
    <>
      <SEO
        title="Web Design Berkshire | Website Design Windsor & Slough | Scalix Studios"
        description="Professional web design services in Berkshire. We build stunning, mobile-responsive websites for businesses in Windsor, Slough & Reading. Custom designs from £299. Get a free quote today."
        keywords="web design berkshire, website design windsor, web developer slough, website design reading, affordable web design berkshire, responsive web design, ecommerce website berkshire"
        canonical="https://www.scalixstudios.co.uk/services/web-design"
        structuredData={[structuredData, faqStructuredData]}
      />

      <ParticleHero className="py-20 md:py-32">
        <nav aria-label="Breadcrumb" className="text-blue-200 text-sm mb-4">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/services" className="hover:text-white">Services</Link> / <span className="text-white">Web Design</span>
        </nav>
        <h1 className="text-4xl md:text-7xl font-extrabold mb-4 text-white leading-tight">Web Design in Berkshire</h1>
        <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-3xl mx-auto">Beautiful, fast, conversion-focused websites built for Berkshire businesses. Your website is your digital shopfront — make it count.</p>
      </ParticleHero>

      <main ref={scrollRef}>
        <section className="py-12 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {results.map((r, i) => (
                <div key={i} className="animate-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
                  <p className="text-5xl font-extrabold">{r.stat}</p>
                  <p className="text-indigo-100 mt-2">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-semibold">What We Build</span>
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Web Design Services</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-4 animate-on-scroll">Websites that look incredible and actually grow your business.</p>
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
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">From Brief to Launch</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              {[
                { step: '01', title: 'Discovery Call', desc: 'We learn about your business, goals, and target audience. This forms the foundation of your website strategy.' },
                { step: '02', title: 'Design & Prototype', desc: 'We create mockups of your website for your review. You see exactly how it will look before we write a single line of code.' },
                { step: '03', title: 'Development & SEO', desc: 'We build your site with clean, fast code and full on-page SEO built in from the start.' },
                { step: '04', title: 'Testing & Launch', desc: 'Rigorous testing across devices and browsers, then a smooth launch with ongoing support.' },
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
              <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll">Web Design Questions Answered</h2>
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
                <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Your Dream Website</h2>
                <p className="text-slate-600 mb-6">Get a free consultation and quote for your new website. No pressure, no jargon — just straight-talking advice.</p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Websites from £299</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />SEO included as standard</li>
                  <li className="flex items-start"><FaCircleCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />Ongoing support available</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl animate-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Get a Free Quote</h3>
                <ContactForm variant="standalone" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
